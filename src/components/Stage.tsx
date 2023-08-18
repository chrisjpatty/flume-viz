import styled from "@emotion/styled";
import { engine } from "../flumeEngine";
import * as React from "react";

interface IStageProps {
  nodes: any;
  numSquares: number;
  numFrames: number;
}

const DPR = window.devicePixelRatio;
const SIZE = 600;

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
      const { nodes, numSquares = 0, numFrames = 200 } = propsRef.current;
      for (let i = 0; i < numSquares; i++) {
        const {
          width = 0,
          height = 0,
          x = 0,
          y = 0,
          color = { h: 0, s: 100, l: 100, a: 1 },
          log,
        } = engine.resolveRootNode(nodes, {
          context: {
            currentFrame: frame.current,
            frameProgress: frame.current / numFrames,
            particleIndex: i,
            numParticles: numSquares,
            stageWidth: SIZE / DPR,
            stageHeight: SIZE / DPR,
          },
        }) as EngineOutput;

        if (log !== undefined) {
          ctx.fillStyle = "#fff";
          ctx.font = `${12 / DPR}px sans-serif`;
          ctx.fillText(JSON.stringify(log).toString(), 3, (SIZE - (13 * i) - 12) / DPR);
        }

        ctx.fillStyle = `HSLA(${color.h},${color.s}%,${color.l}%,${color.a})`;
        ctx.fillRect(x, y, width, height);
      }
    }
    frame.current = frame.current >= (propsRef.current?.numFrames ?? 200) ? 0 : frame.current + 1;
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
