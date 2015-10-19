{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '4',
          int1: '4',
          segment: []
        },
        {
          kind: 'func',
          id: 'store_i32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'load_i32',
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
          id: 'store_f32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'load_f32',
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
          name: 'store_i32'
        },
        {
          kind: 'export',
          name: 'load_i32'
        },
        {
          kind: 'export',
          name: 'store_f32'
        },
        {
          kind: 'export',
          name: 'load_f32'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7f800001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '8',
          int1: '8',
          segment: []
        },
        {
          kind: 'func',
          id: 'store_i64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'load_i64',
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
          id: 'store_f64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'load_f64',
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
          name: 'store_i64'
        },
        {
          kind: 'export',
          name: 'load_i64'
        },
        {
          kind: 'export',
          name: 'store_f64'
        },
        {
          kind: 'export',
          name: 'load_f64'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7ff0000000000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x0000000000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    }
  ]
}
