import React from "react";
import "modern-css-reset";
import "./App.css";
import { Stage } from "./components/Stage";
import { NodeEditor } from "flume";
import { config } from "./flumeConfig";
import styled from "@emotion/styled";
import { CrookFile, useFiler } from "./hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { orderBy } from "lodash";
import { defaultShaders } from "./defaultShaders";

type ShaderFile = {
  name: string;
  nodes: any;
  numParticles: number;
};

function App() {
  const [isEditing, setIsEditing] = React.useState(true);
  const [files, { add: addFile, remove: removeFile, update: updateFile }] =
    useFiler("shaders", defaultShaders);
  const { shaderId } = useParams();
  const navigate = useNavigate();

  const currentShader = files[shaderId ?? ""] as CrookFile | undefined;

  React.useEffect(() => {
    if (!currentShader) {
      const defaultFile = orderBy(Object.values(files), "created")[0];

      if (defaultFile) {
        navigate(`/${defaultFile.id}`);
      } else {
        const id = addFile({
          name: "Untitled Shader",
          nodes: undefined,
          numSquares: 25,
          numFrames: 200,
        });

        setTimeout(() => {
          navigate(`/${id}`);
        })
      }
    }
  }, [currentShader, navigate, addFile, files]);

  if (!currentShader) {
    return <div>Loading...</div>;
  }

  const setNumSquares = (newNumSquares: number) => {
    updateFile(currentShader.id, {
      ...currentShader.data,
      numSquares: newNumSquares,
    });
  };

  const setNumFrames = (newNumFrames: number) => {
    updateFile(currentShader.id, {
      ...currentShader.data,
      numFrames: newNumFrames,
    });
  };

  const setNodes = (newNodes: any) => {
    updateFile(currentShader.id, {
      ...currentShader.data,
      nodes: newNodes,
    });
  };

  const setName = (newName: any) => {
    updateFile(currentShader.id, {
      ...currentShader.data,
      name: newName,
    });
  };

  const createShader = () => {
    const id = addFile({
      name: "Untitled Shader",
      numSquares: 25,
      numFrames: 200,
      nodes: undefined,
    });

    setTimeout(() => {
      navigate(`/${id}`);
    });
  };

  const orderedFiles = orderBy(Object.values(files), "created", "desc");

  return (
    <div className="App">
      <Stage
        nodes={currentShader.data.nodes}
        numSquares={currentShader.data.numSquares}
        numFrames={currentShader.data.numFrames}
      />
      {!isEditing ? (
        <CloseButton onClick={() => setIsEditing(true)}>
          Show Editor
        </CloseButton>
      ) : null}
      <EditorWrapper style={{ display: isEditing ? "" : "none" }}>
        <Toolbar>
          <Column>
            <ShaderList className="shader-list">
              <ColumnTitle>Shaders</ColumnTitle>
              <Divider />
              {orderedFiles.map((file) => (
                <li key={file.id}>
                  <Link
                    to={`/${file.id}`}
                    data-selected={currentShader.id === file.id}
                  >
                    {file.data.name === undefined || file.data.name === ""
                      ? "Untitled Shader"
                      : file.data.name}
                  </Link>
                </li>
              ))}
              <Divider />
            </ShaderList>
            <AddShaderButton className="add-shader" onClick={createShader}>
              + <span style={{ fontSize: 16, marginTop: 5 }}>New Shader</span>
            </AddShaderButton>
          </Column>
          <ControlsColumn>
            <ToolbarButton onClick={() => setIsEditing(false)}>
              Hide Editor
            </ToolbarButton>
            <Label>
              <span>Shader Name</span>
              <StyledInput
                style={{ width: 120 }}
                value={currentShader.data.name ?? "Untitled Shader"}
                onChange={(e) => setName(e.target.value)}
              />
            </Label>
            <Label>
              <span>Number of Frames</span>
              <StyledInput
                style={{ width: 60 }}
                type="number"
                value={currentShader.data.numFrames ?? 200}
                onChange={(e) => setNumFrames(Number(e.target.value))}
              />
            </Label>
            <Label>
              <span>Number of Particles</span>
              <StyledInput
                style={{ width: 60 }}
                type="number"
                value={currentShader.data.numSquares ?? 25}
                onChange={(e) => setNumSquares(Number(e.target.value))}
              />
            </Label>
          </ControlsColumn>
        </Toolbar>
        <NodeEditor
          key={currentShader.id}
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
          onChange={setNodes}
          nodes={currentShader.data.nodes}
          defaultNodes={[
            {
              type: "output",
              x: 400,
              y: -250,
            },
            {
              type: "particle",
              x: -500,
              y: -200,
            },
            {
              type: "frame",
              x: -500,
              y: -80,
            },
            {
              type: "stage",
              x: -500,
              y: 40,
            },
          ]}
        />
      </EditorWrapper>
      Î
    </div>
  );
}

export default App;

const EditorWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  [data-flume-stage] {
    background-color: rgba(26, 28, 29, 0.4);
  }
  [class*="Node_wrapper"] {
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 9;
`;

const Toolbar = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  z-index: 9;
  align-items: flex-end;
  gap: 20px;
`;

const ToolbarButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  & > span {
    font-size: 11px;
  }
`;

const AddShaderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  margin: 0px;
  font-weight: bold;
  font-size: 26px;
  background: none;
  height: none;
  line-height: 0.5;
  border: none;
  color: #ffffff;
  z-index: 10;
  gap: 5px;
  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 20px;
  top: 20px;
  align-items: flex-start;
  border: 1px solid #888;
  padding: 10px;
  border-radius: 8px;
  opacity: 0.5;
  transform: scale(0.7);
  transform-origin: top left;
  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
  max-height: calc(100vh - 40px);

  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;

const ControlsColumn = styled(Column)`
  left: auto;
  right: 20px;
  transform-origin: top right;
  gap: 10px;
`;

const ShaderList = styled.ul`
  color: #fff;
  list-style: none;
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
  font-size: 16px;
`;

const ColumnTitle = styled.h3`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 100%;
  flex: 1;
  height: 1px;
  background: #888;
  margin: 10px 0px;
`;
