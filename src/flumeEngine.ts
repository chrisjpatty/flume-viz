import { config } from "./flumeConfig";
import { RootEngine } from "flume";

const resolvePortTypes = (portType: string, data: any) => {
  switch (portType) {
    case "number":
      return data.number;
    case "any":
      return data.any;
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
      return { result: inputValues.num1 / inputValues.num2 };
    case "exponent":
      return { result: Math.pow(inputValues.input, inputValues.exponent) };
    case "sin":
      return { result: Math.sin(inputValues.input) };
    case "cos":
      return { result: Math.cos(inputValues.input) };
    case "tan":
      return { result: Math.tan(inputValues.input) };
    case "stage":
      return { width: context.stageWidth, height: context.stageHeight };
    case "frame":
      return {
        frameNumber: context.currentFrame,
        frameProgress: context.frameProgress,
      };
    case "tile":
      return { tileIndex: context.tileIndex };
    default:
      return {};
  }
};

export const engine = new RootEngine(
  config,
  resolvePortTypes,
  resolveNodeTypes
);
