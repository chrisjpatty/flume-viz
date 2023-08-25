import styled from "@emotion/styled";
import { engine } from "../flumeEngine";
import * as React from "react";

interface IStageProps {
  nodes: any;
  numSquares: number;
  numFrames: number;
  frameRate: number;
}

const DPR = window.devicePixelRatio;
const SIZE = 600;

type ImperativeDraw = (onFrame: (canvas: HTMLCanvasElement) => void, onDone: () => void) => void;
export interface IStageHandle {
  imperativelyDraw: ImperativeDraw;
}

export const Stage = React.forwardRef<IStageHandle, IStageProps>((props, handleRef) => {
  const isInitialized = React.useRef(false);
  const stage = React.useRef<HTMLCanvasElement>(null);
  const propsRef = React.useRef<IStageProps>();
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>();
  const frame = React.useRef<number>(0);
  const animationLoop = React.useRef<number | null>(null);
  const [isRendering, setIsRendering] = React.useState(false);
  const isRenderingRef = React.useRef(isRendering);
  const lastFrameTime = React.useRef<number>(performance.now());

  const draw = React.useCallback((currentTime: number) => {
    const ctx = canvasContext.current;

    const timePerFrame = 1000 / (propsRef.current?.frameRate ?? 60);
    const deltaTime = currentTime - lastFrameTime.current;

    if (!isRenderingRef.current && deltaTime < timePerFrame) {
      animationLoop.current = requestAnimationFrame(draw);
      return;
    }

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
    if (!isRenderingRef.current) {
      frame.current = frame.current >= (propsRef.current?.numFrames ?? 200) ? 0 : frame.current + 1;
      lastFrameTime.current = currentTime;
      animationLoop.current = requestAnimationFrame(draw);
    }
  }, []);

  const imperativelyDraw: ImperativeDraw = (onFrame, onDone) => {
    setIsRendering(true);
    isRenderingRef.current = true;

    const ctx = canvasContext.current;

    if (ctx) {
      frame.current = 0;
      for (props.numFrames; frame.current < props.numFrames; frame.current++) {
        draw(performance.now());
        onFrame(stage.current!);
      }
    }

    setIsRendering(false);
    isRenderingRef.current = false;
    onDone();
  }

  React.useImperativeHandle(handleRef, () => ({
    imperativelyDraw,
  }));

  React.useEffect(() => {
    canvasContext.current = stage.current?.getContext("2d");
    if (!isInitialized.current && canvasContext.current) {
      canvasContext.current.scale(DPR, DPR);
      isInitialized.current = true;
    }
    if (!isRendering) {
      animationLoop.current = requestAnimationFrame(draw);
    }

    return () => {
      if (animationLoop.current) {
        cancelAnimationFrame(animationLoop.current);
      }
    }
  }, [draw, isRendering]);

  React.useEffect(() => {
    propsRef.current = props;
  });

  React.useEffect(() => {
    // @ts-ignore next-line
    window.getStageImage = () => {
      return stage.current?.toDataURL();
    }
  }, [])

  return (
    <Wrapper>
      <Canvas width={SIZE} height={SIZE} ref={stage} id='stage'>
        Stage
      </Canvas>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Canvas = styled.canvas`
  background: #000000;
`;
