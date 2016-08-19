{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: '\\00\\00\\a0\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.load'
          },
          id: {
            kind: 'identifier',
            name: 'f32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.load'
          },
          id: {
            kind: 'identifier',
            name: 'i32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.store'
          },
          id: {
            kind: 'identifier',
            name: 'f32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.store'
          },
          id: {
            kind: 'identifier',
            name: 'i32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: '\\00\\00\\00\\00\\00\\00\\f4\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.load'
          },
          id: {
            kind: 'identifier',
            name: 'f64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.load'
          },
          id: {
            kind: 'identifier',
            name: 'i64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.store'
          },
          id: {
            kind: 'identifier',
            name: 'f64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.store'
          },
          id: {
            kind: 'identifier',
            name: 'i64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
            init: {
              kind: 'literal',
              value: '\\00\\00\\a0\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.load'
          },
          id: {
            kind: 'identifier',
            name: 'f32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.load'
          },
          id: {
            kind: 'identifier',
            name: 'i32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.store'
          },
          id: {
            kind: 'identifier',
            name: 'f32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.store'
          },
          id: {
            kind: 'identifier',
            name: 'i32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
            init: {
              kind: 'literal',
              value: '\\00\\00\\00\\00\\00\\00\\f4\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.load'
          },
          id: {
            kind: 'identifier',
            name: 'f64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.load'
          },
          id: {
            kind: 'identifier',
            name: 'i64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.store'
          },
          id: {
            kind: 'identifier',
            name: 'f64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.store'
          },
          id: {
            kind: 'identifier',
            name: 'i64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: '\\01\\00\\d0\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.load'
          },
          id: {
            kind: 'identifier',
            name: 'f32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.load'
          },
          id: {
            kind: 'identifier',
            name: 'i32.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.store'
          },
          id: {
            kind: 'identifier',
            name: 'f32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.store'
          },
          id: {
            kind: 'identifier',
            name: 'i32.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i32.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: '\\01\\00\\00\\00\\00\\00\\fc\\7f'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.load'
          },
          id: {
            kind: 'identifier',
            name: 'f64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.load'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.load'
          },
          id: {
            kind: 'identifier',
            name: 'i64.load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.store'
          },
          id: {
            kind: 'identifier',
            name: 'f64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.store'
          },
          expo: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.store'
          },
          id: {
            kind: 'identifier',
            name: 'i64.store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'reset'
          },
          id: {
            kind: 'identifier',
            name: 'reset'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'f64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'reset',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      name: 'i64.store',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
