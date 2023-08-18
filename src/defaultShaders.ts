export const defaultShaders = {
  i415UgST: {
    id: "i415UgST",
    created: 1692394326712,
    modified: 1692396597051,
    data: {
      name: "Rainbow Wave",
      nodes: {
        "kynNb2-5_A": {
          x: 544.4345703125,
          y: -173.18673706054688,
          type: "output",
          width: 160,
          connections: {
            inputs: {
              width: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "result",
                },
              ],
              height: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "result",
                },
              ],
              x: [
                {
                  nodeId: "E9LgieAxbr",
                  portName: "result",
                },
              ],
              y: [
                {
                  nodeId: "77WRPm1d-6",
                  portName: "result",
                },
              ],
              color: [
                {
                  nodeId: "aeA0CnHl3G",
                  portName: "color",
                },
              ],
            },
            outputs: {},
          },
          inputData: {
            x: {
              number: 0,
            },
            y: {
              number: 0,
            },
            width: {
              number: 0,
            },
            height: {
              number: 0,
            },
            color: {
              h: 0,
              s: 50,
              l: 100,
              a: 0,
            },
            log: {},
          },
          root: true,
          id: "kynNb2-5_A",
        },
        sBiz5EuNTF: {
          x: -500,
          y: -200,
          type: "particle",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              numParticles: [
                {
                  nodeId: "om0n3mX8U2",
                  portName: "input",
                },
                {
                  nodeId: "iacHIEuhOX",
                  portName: "num2",
                },
              ],
              particleIndex: [
                {
                  nodeId: "y2PTJlvIUp",
                  portName: "num1",
                },
                {
                  nodeId: "iacHIEuhOX",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {},
          id: "sBiz5EuNTF",
        },
        Wc0jbyiJAd: {
          x: -500,
          y: -80,
          type: "frame",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              frameProgress: [
                {
                  nodeId: "8FohgPRo75",
                  portName: "input",
                },
              ],
            },
          },
          inputData: {},
          id: "Wc0jbyiJAd",
        },
        otWq0Yn0Ha: {
          x: -500,
          y: 40,
          type: "stage",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              width: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {},
          id: "otWq0Yn0Ha",
        },
        om0n3mX8U2: {
          id: "om0n3mX8U2",
          x: -689.4388427734375,
          y: 165.5535888671875,
          type: "sqrt",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "sBiz5EuNTF",
                  portName: "numParticles",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "num2",
                },
                {
                  nodeId: "y2PTJlvIUp",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            input: {
              number: 0,
            },
          },
        },
        s9sxK8pHGt: {
          id: "s9sxK8pHGt",
          x: -499.45895615921046,
          y: 163.9214640161164,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "om0n3mX8U2",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "otWq0Yn0Ha",
                  portName: "width",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "kynNb2-5_A",
                  portName: "width",
                },
                {
                  nodeId: "kynNb2-5_A",
                  portName: "height",
                },
                {
                  nodeId: "E9LgieAxbr",
                  portName: "num2",
                },
                {
                  nodeId: "77WRPm1d-6",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        y2PTJlvIUp: {
          id: "y2PTJlvIUp",
          x: -300.96246337890625,
          y: -385.4840087890625,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "sBiz5EuNTF",
                  portName: "particleIndex",
                },
              ],
              num2: [
                {
                  nodeId: "om0n3mX8U2",
                  portName: "result",
                },
              ],
            },
            outputs: {
              remainder: [
                {
                  nodeId: "E9LgieAxbr",
                  portName: "num1",
                },
              ],
              result: [
                {
                  nodeId: "2g0-dtOdFc",
                  portName: "input",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        E9LgieAxbr: {
          id: "E9LgieAxbr",
          x: 180.76385498046875,
          y: -377.9335632324219,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "y2PTJlvIUp",
                  portName: "remainder",
                },
              ],
              num2: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "kynNb2-5_A",
                  portName: "x",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        "2g0-dtOdFc": {
          id: "2g0-dtOdFc",
          x: -80.2880859375,
          y: -318.1719665527344,
          type: "floor",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "y2PTJlvIUp",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "77WRPm1d-6",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {
            input: {
              number: 0,
            },
          },
        },
        "77WRPm1d-6": {
          id: "77WRPm1d-6",
          x: 182.11376953125,
          y: -219.05105590820312,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "s9sxK8pHGt",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "2g0-dtOdFc",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "kynNb2-5_A",
                  portName: "y",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        aeA0CnHl3G: {
          id: "aeA0CnHl3G",
          x: 394.6907958984375,
          y: -27.7684326171875,
          type: "hsla",
          width: 100,
          connections: {
            inputs: {
              h: [
                {
                  nodeId: "WkpT5sN53H",
                  portName: "result",
                },
              ],
            },
            outputs: {
              color: [
                {
                  nodeId: "kynNb2-5_A",
                  portName: "color",
                },
              ],
            },
          },
          inputData: {
            h: {
              number: 0,
            },
            s: {
              number: 100,
            },
            l: {
              number: 50,
            },
            a: {
              number: 1,
            },
          },
        },
        YrcC79SAsK: {
          id: "YrcC79SAsK",
          x: -499.3543701171875,
          y: 338.435546875,
          type: "number",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              number: [
                {
                  nodeId: "P0ePi7NkuY",
                  portName: "num1",
                },
                {
                  nodeId: "0MZe-ha7jG",
                  portName: "outputMax",
                },
              ],
            },
          },
          inputData: {
            number: {
              number: 359,
            },
          },
        },
        "0MZe-ha7jG": {
          id: "0MZe-ha7jG",
          x: -118.19775390625,
          y: 134.41131591796875,
          type: "remap",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "iacHIEuhOX",
                  portName: "result",
                },
              ],
              outputMax: [
                {
                  nodeId: "YrcC79SAsK",
                  portName: "number",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "P0ePi7NkuY",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            input: {
              number: 0,
            },
            inputMin: {
              number: 0,
            },
            inputMax: {
              number: 1,
            },
            outputMin: {
              number: 0,
            },
            outputMax: {
              number: 0,
            },
          },
        },
        iacHIEuhOX: {
          id: "iacHIEuhOX",
          x: -300.266357421875,
          y: 163.218017578125,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "sBiz5EuNTF",
                  portName: "numParticles",
                },
              ],
              num1: [
                {
                  nodeId: "sBiz5EuNTF",
                  portName: "particleIndex",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "0MZe-ha7jG",
                  portName: "input",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        P0ePi7NkuY: {
          id: "P0ePi7NkuY",
          x: 47.3299560546875,
          y: 236.3094482421875,
          type: "addNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "YrcC79SAsK",
                  portName: "number",
                },
              ],
              num2: [
                {
                  nodeId: "0MZe-ha7jG",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "WkpT5sN53H",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
        "8FohgPRo75": {
          id: "8FohgPRo75",
          x: -301.4033203125,
          y: -200.8895263671875,
          type: "remap",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "Wc0jbyiJAd",
                  portName: "frameProgress",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "WkpT5sN53H",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {
            input: {
              number: 0,
            },
            inputMin: {
              number: 0,
            },
            inputMax: {
              number: 1,
            },
            outputMin: {
              number: 0,
            },
            outputMax: {
              number: 359,
            },
          },
        },
        WkpT5sN53H: {
          id: "WkpT5sN53H",
          x: 214.514404296875,
          y: 149.531005859375,
          type: "addNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "P0ePi7NkuY",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "8FohgPRo75",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "aeA0CnHl3G",
                  portName: "h",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 0,
            },
          },
        },
      },
      numSquares: 400,
      numFrames: 1000,
    },
  },
};
