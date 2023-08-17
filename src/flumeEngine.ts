import { config } from "./flumeConfig";
import { RootEngine } from "flume";

const remapValue = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
) => {
  return (
    ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
    outputMin
  );
};

const resolvePortTypes = (portType: string, data: any) => {
  switch (portType) {
    case "number":
      return data.number;
    case "any":
      return data.any;
    case "hsla":
      return data.hsla;
    default:
      return data;
  }
};

const resolveNodeTypes = (
  node: any,
  inputValues: any,
  nodeType: any,
  context: any
) => {
  switch (node.type) {
    case "number":
      return { number: inputValues.number };
    case "addNumbers":
      return { result: inputValues.num1 + inputValues.num2 };
    case "subtractNumbers":
      return { result: inputValues.num1 - inputValues.num2 };
    case "multiplyNumbers":
      return { result: inputValues.num1 * inputValues.num2 };
    case "divideNumbers":
      return {
        result: inputValues.num1 / inputValues.num2,
        remainder: inputValues.num1 % inputValues.num2,
      };
    case "exponent":
      return { result: Math.pow(inputValues.input, inputValues.exponent) };
    case "sin":
      return { result: Math.sin(inputValues.input) };
    case "cos":
      return { result: Math.cos(inputValues.input) };
    case "tan":
      return { result: Math.tan(inputValues.input) };
    case "floor":
      return { result: Math.floor(inputValues.input) };
    case "ceil":
      return { result: Math.ceil(inputValues.input) };
    case "round":
      return { result: Math.round(inputValues.input) };
    case "stage":
      return { width: context.stageWidth, height: context.stageHeight };
    case "frame":
      return {
        frameNumber: context.currentFrame,
        frameProgress: context.frameProgress,
      };
    case "tile":
      return { tileIndex: context.tileIndex };
    case "hsla":
      return {
        color: {
          h: inputValues.h,
          s: inputValues.s,
          l: inputValues.l,
          a: inputValues.a,
        },
      };
    case "remap":
      return {
        result: remapValue(
          inputValues.input,
          inputValues.inputMin,
          inputValues.inputMax,
          inputValues.outputMin,
          inputValues.outputMax
        ),
      };
    case "pi":
      return { result: Math.PI };
    case "random":
      return { result: Math.random() };
    default:
      return {};
  }
};

export const engine = new RootEngine(
  config,
  resolvePortTypes,
  resolveNodeTypes
);
