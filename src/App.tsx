import React from "react";
import "modern-css-reset";
import "./App.css";
import { Stage } from "./components/Stage";
import { NodeEditor } from "flume";
import { config } from "./flumeConfig";
import styled from "@emotion/styled";

function App() {
  const [isEditing, setIsEditing] = React.useState(true);
  const [nodes, setNodes] = React.useState();
  const [numSquares, setNumSquares] = React.useState(15);

  return (
    <div className="App">
      <Stage nodes={nodes} numSquares={numSquares} />
      {!isEditing ? (
        <CloseButton onClick={() => setIsEditing(true)}>
          Show Editor
        </CloseButton>
      ) : null}
      <EditorWrapper style={{ display: isEditing ? "" : "none" }}>
        <Toolbar>
          <Label>
            <span>Number of tiles</span>
            <input
            style={{width: 60}}
              type="number"
              value={numSquares}
              onChange={(e) => setNumSquares(Number(e.target.value))}
            />
          </Label>
          <ToolbarButton onClick={() => setIsEditing(false)}>
            Hide Editor
          </ToolbarButton>
        </Toolbar>
        <NodeEditor
          portTypes={config.portTypes}
          nodeTypes={config.nodeTypes}
          onChange={setNodes}
          defaultNodes={[
            {
              type: "output",
              x: 400,
              y: -250,
            },
            {
              type: "tile",
              x: -500,
              y: -180,
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
  position: absolute;
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

const ToolbarButton = styled.button``;

const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  & > span{
    font-size: 11px;
  }
`;
