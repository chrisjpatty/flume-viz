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
      numFrames: 150,
      frameRate: 60,
    },
  },
  tE8cpYrn: {
    id: "tE8cpYrn",
    created: 1692205454809,
    modified: 1692205938593,
    data: {
      name: "Wobbler",
      numSquares: 10,
      numFrames: 120,
      frameRate: 100,
      nodes: {
        QsIlbJCvPw: {
          x: 525.187255859375,
          y: -0.27691650390625,
          type: "output",
          width: 160,
          connections: {
            inputs: {
              x: [
                {
                  nodeId: "DAvwCRNi0y",
                  portName: "result",
                },
              ],
              width: [
                {
                  nodeId: "_QD_H02GGr",
                  portName: "number",
                },
              ],
              height: [
                {
                  nodeId: "_QD_H02GGr",
                  portName: "number",
                },
              ],
              color: [
                {
                  nodeId: "36is5SZNoO",
                  portName: "color",
                },
              ],
              y: [
                {
                  nodeId: "8MDVmbC-Ri",
                  portName: "result",
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
              number: 20,
            },
            height: {
              number: 20,
            },
            color: {
              h: 0,
              s: 50,
              l: 100,
              a: 1,
            },
            log: {},
          },
          root: true,
          id: "QsIlbJCvPw",
        },
        KX2l28ywAT: {
          x: -1184.3971073822108,
          y: -167.55979844255916,
          type: "frame",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              frameProgress: [
                {
                  nodeId: "fd78bAa7iq",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {},
          id: "KX2l28ywAT",
        },
        RD6WuwRiTf: {
          x: -491.49879715243765,
          y: 143.31836776189968,
          type: "stage",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              width: [
                {
                  nodeId: "uXd9QiFE_6",
                  portName: "num1",
                },
              ],
              height: [],
            },
          },
          inputData: {},
          id: "RD6WuwRiTf",
        },
        uXd9QiFE_6: {
          id: "uXd9QiFE_6",
          x: -310.88640591693934,
          y: 142.62695006043947,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "RD6WuwRiTf",
                  portName: "width",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "72JB8QlBbn",
                  portName: "num1",
                },
                {
                  nodeId: "4hvCKxtnyU",
                  portName: "num1",
                },
                {
                  nodeId: "e4Oha0oFtP",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 2,
            },
          },
        },
        "72JB8QlBbn": {
          id: "72JB8QlBbn",
          x: -17.289702112084,
          y: -268.5408436634017,
          type: "subtractNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "J8tM4WoRul",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "uXd9QiFE_6",
                  portName: "result",
                },
              ],
            },
            outputs: {},
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 10,
            },
          },
        },
        _QD_H02GGr: {
          id: "_QD_H02GGr",
          x: -527.6224691653802,
          y: -394.9915667581592,
          type: "number",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              number: [
                {
                  nodeId: "J8tM4WoRul",
                  portName: "num1",
                },
                {
                  nodeId: "QsIlbJCvPw",
                  portName: "width",
                },
                {
                  nodeId: "QsIlbJCvPw",
                  portName: "height",
                },
              ],
            },
          },
          inputData: {
            number: {
              number: 20,
            },
          },
        },
        J8tM4WoRul: {
          id: "J8tM4WoRul",
          x: -311.35037349857123,
          y: -394.93880371894807,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "_QD_H02GGr",
                  portName: "number",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "72JB8QlBbn",
                  portName: "num2",
                },
                {
                  nodeId: "dwx5aFHjqP",
                  portName: "num2",
                },
                {
                  nodeId: "sR5kIZ7hD4",
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
              number: 2,
            },
          },
        },
        DAvwCRNi0y: {
          id: "DAvwCRNi0y",
          x: -311.87202020269274,
          y: -196.37169284255964,
          type: "remap",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "uSpSe-gu-f",
                  portName: "result",
                },
              ],
              outputMin: [
                {
                  nodeId: "dwx5aFHjqP",
                  portName: "result",
                },
              ],
              outputMax: [
                {
                  nodeId: "sR5kIZ7hD4",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "QsIlbJCvPw",
                  portName: "x",
                },
              ],
            },
          },
          inputData: {
            input: {
              number: 0,
            },
            inputMin: {
              number: -1,
            },
            inputMax: {
              number: 1,
            },
            outputMin: {
              number: 0,
            },
            outputMax: {
              number: 200,
            },
          },
        },
        KBwf6U0ofp: {
          id: "KBwf6U0ofp",
          x: -504.2242126464844,
          y: 354.0297546386719,
          type: "number",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              number: [
                {
                  nodeId: "4hvCKxtnyU",
                  portName: "num2",
                },
                {
                  nodeId: "e4Oha0oFtP",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            number: {
              number: 110,
            },
          },
        },
        "4hvCKxtnyU": {
          id: "4hvCKxtnyU",
          x: -111.98726272984231,
          y: 211.91464743179893,
          type: "subtractNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "uXd9QiFE_6",
                  portName: "result",
                },
              ],
              num2: [
                {
                  nodeId: "KBwf6U0ofp",
                  portName: "number",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "dwx5aFHjqP",
                  portName: "num1",
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
        "h9iKDZhWU-": {
          id: "h9iKDZhWU-",
          x: -1090.9869568630315,
          y: -9.236923097644564,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "KbQDNh2BJY",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "fd78bAa7iq",
                  portName: "num2",
                },
                {
                  nodeId: "xDJQ_ZjyK-",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 0,
            },
            num2: {
              number: 2,
            },
          },
        },
        KbQDNh2BJY: {
          id: "KbQDNh2BJY",
          x: -1186.30368818517,
          y: 3.332721098984507,
          type: "pi",
          width: 60,
          connections: {
            inputs: {},
            outputs: {
              result: [
                {
                  nodeId: "h9iKDZhWU-",
                  portName: "num1",
                },
              ],
            },
          },
          inputData: {},
        },
        fd78bAa7iq: {
          id: "fd78bAa7iq",
          x: -886.3845859221269,
          y: -150.49690990159226,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "h9iKDZhWU-",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "KX2l28ywAT",
                  portName: "frameProgress",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "Zf8CeUpApK",
                  portName: "num1",
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
        "uSpSe-gu-f": {
          id: "uSpSe-gu-f",
          x: -521.3022380257024,
          y: -154.74112176035857,
          type: "sin",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "Zf8CeUpApK",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "DAvwCRNi0y",
                  portName: "input",
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
        dwx5aFHjqP: {
          id: "dwx5aFHjqP",
          x: 78.026754651999,
          y: 213.24942357422276,
          type: "subtractNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "J8tM4WoRul",
                  portName: "result",
                },
              ],
              num1: [
                {
                  nodeId: "4hvCKxtnyU",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "DAvwCRNi0y",
                  portName: "outputMin",
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
        e4Oha0oFtP: {
          id: "e4Oha0oFtP",
          x: -268.8064048027824,
          y: 354.59209043667283,
          type: "addNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "uXd9QiFE_6",
                  portName: "result",
                },
              ],
              num2: [
                {
                  nodeId: "KBwf6U0ofp",
                  portName: "number",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "sR5kIZ7hD4",
                  portName: "num1",
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
        sR5kIZ7hD4: {
          id: "sR5kIZ7hD4",
          x: -78.53743018025344,
          y: 392.64588536117867,
          type: "subtractNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "e4Oha0oFtP",
                  portName: "result",
                },
              ],
              num2: [
                {
                  nodeId: "J8tM4WoRul",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "DAvwCRNi0y",
                  portName: "outputMax",
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
        "-y5sFvxdr3": {
          id: "-y5sFvxdr3",
          x: -295.7175024718551,
          y: -639.6084572409725,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "numParticles",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "Iso5Y6A6Na",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {
            num1: {
              number: 359,
            },
            num2: {
              number: 0,
            },
          },
        },
        "36is5SZNoO": {
          id: "36is5SZNoO",
          x: 160.6153304241916,
          y: -462.5100534717983,
          type: "hsla",
          width: 100,
          connections: {
            inputs: {
              h: [
                {
                  nodeId: "Iso5Y6A6Na",
                  portName: "result",
                },
              ],
            },
            outputs: {
              color: [
                {
                  nodeId: "QsIlbJCvPw",
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
        AXbTlV_XPI: {
          id: "AXbTlV_XPI",
          x: -514.8637969542983,
          y: -672.3170701330871,
          type: "particle",
          width: 140,
          connections: {
            inputs: {},
            outputs: {
              particleIndex: [
                {
                  nodeId: "8MDVmbC-Ri",
                  portName: "input",
                },
                {
                  nodeId: "Iso5Y6A6Na",
                  portName: "num1",
                },
                {
                  nodeId: "QMKu0Vx8Pr",
                  portName: "num2",
                },
              ],
              numParticles: [
                {
                  nodeId: "8MDVmbC-Ri",
                  portName: "inputMax",
                },
                {
                  nodeId: "-y5sFvxdr3",
                  portName: "num2",
                },
                {
                  nodeId: "xDJQ_ZjyK-",
                  portName: "num2",
                },
              ],
            },
          },
          inputData: {},
        },
        "8MDVmbC-Ri": {
          id: "8MDVmbC-Ri",
          x: 319.48082946666784,
          y: -699.1205439556886,
          type: "remap",
          width: 140,
          connections: {
            inputs: {
              input: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "particleIndex",
                },
              ],
              inputMax: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "numParticles",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "QsIlbJCvPw",
                  portName: "y",
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
              number: 0,
            },
            outputMin: {
              number: 20,
            },
            outputMax: {
              number: 290,
            },
          },
        },
        Iso5Y6A6Na: {
          id: "Iso5Y6A6Na",
          x: -81.41794893901582,
          y: -534.6689996555687,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "particleIndex",
                },
              ],
              num2: [
                {
                  nodeId: "-y5sFvxdr3",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "36is5SZNoO",
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
        "xDJQ_ZjyK-": {
          id: "xDJQ_ZjyK-",
          x: -933.563269400925,
          y: -464.81021855041604,
          type: "divideNumbers",
          width: 140,
          connections: {
            inputs: {
              num2: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "numParticles",
                },
              ],
              num1: [
                {
                  nodeId: "h9iKDZhWU-",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "QMKu0Vx8Pr",
                  portName: "num1",
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
        QMKu0Vx8Pr: {
          id: "QMKu0Vx8Pr",
          x: -731.8954673426542,
          y: -421.31324163588704,
          type: "multiplyNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "xDJQ_ZjyK-",
                  portName: "result",
                },
              ],
              num2: [
                {
                  nodeId: "AXbTlV_XPI",
                  portName: "particleIndex",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "Zf8CeUpApK",
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
        Zf8CeUpApK: {
          id: "Zf8CeUpApK",
          x: -676.5356785423445,
          y: -116.83440323418392,
          type: "addNumbers",
          width: 140,
          connections: {
            inputs: {
              num1: [
                {
                  nodeId: "fd78bAa7iq",
                  portName: "result",
                },
              ],
              num2: [
                {
                  nodeId: "QMKu0Vx8Pr",
                  portName: "result",
                },
              ],
            },
            outputs: {
              result: [
                {
                  nodeId: "uSpSe-gu-f",
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
      },
      comments: {
        xsHEPcxFII: {
          id: "xsHEPcxFII",
          text: "Wobble Period",
          x: -525.5,
          y: 323.5,
          width: 186,
          height: 170,
          color: "blue",
        },
        "82KJFIsfsH": {
          id: "82KJFIsfsH",
          text: "Particle Size",
          x: -545.5,
          y: -430.5,
          width: 174,
          height: 183,
          color: "blue",
        },
      },
    },
  },
};
