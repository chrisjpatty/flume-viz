import { FlumeConfig, Colors, Controls } from "flume";

export const config = new FlumeConfig();
config
  .addPortType({
    type: "number",
    name: "number",
    label: "Number",
    color: Colors.red,
    controls: [Controls.number({ label: "Number", name: "number" })],
  })
  .addPortType({
    type: "any",
    name: "any",
    label: "Any",
    color: Colors.grey,
    acceptTypes: ["number", "any"]
  })
  .addNodeType({
    type: "number",
    label: "Number",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number()],
    outputs: (ports: any) => [ports.number()],
  })
  .addNodeType({
    type: "addNumbers",
    label: "Add Numbers",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "num1", label: "First Number" }),
      ports.number({ name: "num2", label: "Second Number" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "subtractNumbers",
    label: "Subtract Numbers",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "num1", label: "First Number" }),
      ports.number({ name: "num2", label: "Second Number" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "multiplyNumbers",
    label: "Multiply Numbers",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "num1", label: "First Number" }),
      ports.number({ name: "num2", label: "Second Number" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "divideNumbers",
    label: "Divide Numbers",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "num1", label: "First Number" }),
      ports.number({ name: "num2", label: "Second Number" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "exponent",
    label: "Exponent",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "input", label: "Input" }),
      ports.number({ name: "exponent", label: "To the power of" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "sin",
    label: "Sine",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "cos",
    label: "Cosine",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "tan",
    label: "Tangent",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "frame",
    label: "Frame Data",
    initialWidth: 140,
    outputs: (ports: any) => [
      ports.number({ name: "frameNumber", label: "Frame Number" }),
      ports.number({ name: "frameProgress", label: "Frame Progress" }),
    ],
  })
  .addNodeType({
    type: "tile",
    label: "Tile",
    initialWidth: 140,
    outputs: (ports: any) => [
      ports.number({ name: "tileIndex", label: "Tile Index" }),
    ],
  })
  .addNodeType({
    type: "stage",
    label: "Stage",
    initialWidth: 140,
    outputs: (ports: any) => [
      ports.number({ name: "width", label: "Width" }),
      ports.number({ name: "height", label: "Height" }),
    ],
  })
  .addRootNodeType({
    type: "output",
    label: "Output",
    initialWidth: 160,
    inputs: (ports: any) => [
      ports.number({ name: "x", label: "X Position" }),
      ports.number({ name: "y", label: "Y Position" }),
      ports.number({ name: "width", label: "Width" }),
      ports.number({ name: "height", label: "Height" }),
      ports.any({ name: "log", label: "Debug Log"})
    ],
  });
