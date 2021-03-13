import styled from "@emotion/styled";
import { engine } from "../flumeEngine";
import * as React from "react";

interface IStageProps {
  nodes: any;
  numSquares: number;
}

const DPR = window.devicePixelRatio;
const SIZE = 600;
const NUM_FRAMES = 200;

export const Stage = (props: IStageProps) => {
  const isInitialized = React.useRef(false);
  const stage = React.useRef<HTMLCanvasElement>(null);
  const propsRef = React.useRef<IStageProps>();
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>();
  const frame = React.useRef<number>(0);

  const draw = React.useCallback(() => {
    const ctx = canvasContext.current;
    if (ctx && propsRef.current?.nodes) {
      ctx.clearRect(0, 0, SIZE / DPR, SIZE / DPR);
      const { nodes, numSquares = 0 } = propsRef.current;
      for (let i = 0; i < numSquares; i++) {
        const {
          width = 0,
          height = 0,
          x = 0,
          y = 0,
          log,
        } = engine.resolveRootNode(nodes, {
          context: {
            currentFrame: frame.current,
            frameProgress: frame.current / NUM_FRAMES,
            tileIndex: i,
            stageWidth: SIZE / DPR,
            stageHeight: SIZE / DPR,
          },
        }) as EngineOutput;
        ctx.fillStyle = "#fff";
        if (log !== undefined) {
          ctx.font = `${12 / DPR}px sans-serif`;
          ctx.fillText(log.toString(), 3, (SIZE - (13 * i) - 12) / DPR);
        }
        ctx.fillRect(x, y, width, height);
      }
    }
    frame.current = frame.current >= NUM_FRAMES ? 0 : frame.current + 1;
    requestAnimationFrame(draw);
  }, []);

  React.useEffect(() => {
    canvasContext.current = stage.current?.getContext("2d");
    if (!isInitialized.current && canvasContext.current) {
      canvasContext.current.scale(DPR, DPR);
      isInitialized.current = true;
    }
    requestAnimationFrame(draw);
  }, [draw]);

  React.useEffect(() => {
    propsRef.current = props;
  });

  return (
    <Wrapper>
      <Canvas width={SIZE} height={SIZE} ref={stage}>
        Stage
      </Canvas>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Canvas = styled.canvas`
  background: #000000;
`;
