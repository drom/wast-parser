{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\00\\00\\a0\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'f32',
              init: 'n0x200000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0x7fa00000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\00\\00\\00\\00\\00\\00\\f4\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'f64',
              init: 'n0x4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0x7ff4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\00\\00\\00\\a0\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'f32',
              init: 'n0x200000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0x7fa00000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\00\\00\\00\\00\\00\\00\\00\\f4\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'f64',
              init: 'n0x4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0x7ff4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\01\\00\\d0\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'f32',
              init: 'n0x500001'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0x7fd00001'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fd00001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x500001'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fd00001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x500001'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fd00001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x500001'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: '\\01\\00\\00\\00\\00\\00\\fc\\7f'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'f64',
              init: 'n0xc000000000001'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.store'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0x7ffc000000000001'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'reset'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ffc000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000001'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ffc000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000001'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'invoke',
      id: null,
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ffc000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000001'
      }
    }
  ]
}
