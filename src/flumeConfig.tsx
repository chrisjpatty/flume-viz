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
    acceptTypes: ["number", "any", "hsla", "string"],
  })
  .addPortType({
    type: "string",
    name: "string",
    label: "String",
    color: Colors.green,
    controls: [
      Controls.text({
        label: "String",
        name: "string",
        defaultValue: "",
      })
    ]
  })
  .addPortType({
    type: "hsla",
    name: "hsla",
    label: "HSLA",
    color: Colors.yellow,
    controls: [
      Controls.number({
        label: "Hue",
        name: "h",
        defaultValue: 0,
      }),
      Controls.number({
        label: "Saturation",
        name: "s",
        defaultValue: 50,
      }),
      Controls.number({
        label: "Lightness",
        name: "l",
        defaultValue: 100,
      }),
      Controls.number({
        label: "Alpha",
        name: "a",
        defaultValue: 1,
      }),
    ],
    acceptTypes: ["hsla"],
  })
  .addNodeType({
    type: "hsla",
    label: "HSLA",
    initialWidth: 100,
    inputs: (ports: any) => [
      ports.number({ name: "h", label: "Hue", defaultValue: 0 }),
      ports.number({ name: "s", label: "Saturation", defaultValue: 50 }),
      ports.number({ name: "l", label: "Lightness", defaultValue: 100 }),
      ports.number({ name: "a", label: "Alpha", defaultValue: 1 }),
    ],
    outputs: (ports: any) => [ports.hsla({ name: "color", label: "Color" })],
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
      ports.number({ name: "remainder", label: "Remainder" }),
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
    type: "sqrt",
    label: "Square Root",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "input", label: "Input" })
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
    type: "floor",
    label: "Floor",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "ceil",
    label: "Ceiling",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "round",
    label: "Round",
    initialWidth: 140,
    inputs: (ports: any) => [ports.number({ name: "input", label: "Input" })],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Result" }),
    ],
  })
  .addNodeType({
    type: "clamp",
    label: "Clamp",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "input", label: "Input" }),
      ports.number({ name: "min", label: "Min" }),
      ports.number({ name: "max", label: "Max" }),
    ],
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
    type: "particle",
    label: "Particle",
    initialWidth: 140,
    outputs: (ports: any) => [
      ports.number({ name: "particleIndex", label: "Particle Index" }),
      ports.number({ name: "numParticles", label: "Number of Particles" }),
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
  .addNodeType({
    type: "remap",
    label: "Remap",
    initialWidth: 140,
    inputs: (ports: any) => [
      ports.number({ name: "input", label: "Value" }),
      ports.number({ name: "inputMin", label: "Input Min" }),
      ports.number({ name: "inputMax", label: "Input Max" }),
      ports.number({ name: "outputMin", label: "Output Min" }),
      ports.number({ name: "outputMax", label: "Output Max" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Value" }),
    ],
  })
  .addNodeType({
    type: "pi",
    label: "PI",
    initialWidth: 60,
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "PI" }),
    ],
  })
  .addNodeType({
    type: "random",
    label: "Random",
    initialWidth: 100,
    inputs: (ports: any) => [
      ports.number({ name: "seed", label: "Seed (optional)" }),
    ],
    outputs: (ports: any) => [
      ports.number({ name: "result", label: "Random" }),
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
      ports.hsla({ name: "color", label: "Color" }),
      ports.any({ name: "log", label: "Debug Log" }),
    ],
  });
