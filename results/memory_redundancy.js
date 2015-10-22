{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '16',
          int1: '16',
          segment: []
        },
        {
          kind: 'export',
          name: 'zero_everything'
        },
        {
          kind: 'func',
          id: 'zero_everything',
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
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
            },
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '4'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '12'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'test_store_to_load'
        },
        {
          kind: 'func',
          id: 'test_store_to_load',
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'store',
              type: 'f32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '5'
              },
              data: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'test_redundant_load'
        },
        {
          kind: 'func',
          id: 'test_redundant_load',
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            },
            {
              kind: 'store',
              type: 'f32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '5'
              },
              data: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'test_dead_store'
        },
        {
          kind: 'func',
          id: 'test_dead_store',
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [{
            kind: 'local',
            name: 't',
            body: 'f32'
          }],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0x23232323'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 't'
              },
              init: {
                kind: 'load',
                type: 'f32',
                size: null,
                sign: null,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '11'
                }
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 't'
              }
            }
          ]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'test_store_to_load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000080'
      }
    },
    {
      kind: 'invoke',
      name: 'zero_everything',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'test_redundant_load',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000080'
      }
    },
    {
      kind: 'invoke',
      name: 'zero_everything',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'test_dead_store',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.18p-144'
      }
    }
  ]
}
