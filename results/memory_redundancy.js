{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: '1',
          segment: []
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'zero_everything'
          },
          id: {
            kind: 'identifier',
            name: 'zero_everything'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'zero_everything'
          },
          type: null,
          param: [],
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
          name: {
            kind: 'literal',
            value: 'test_store_to_load'
          },
          id: {
            kind: 'identifier',
            name: 'test_store_to_load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'test_store_to_load'
          },
          type: null,
          param: [],
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
          name: {
            kind: 'literal',
            value: 'test_redundant_load'
          },
          id: {
            kind: 'identifier',
            name: 'test_redundant_load'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'test_redundant_load'
          },
          type: null,
          param: [],
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
          name: {
            kind: 'literal',
            value: 'test_dead_store'
          },
          id: {
            kind: 'identifier',
            name: 'test_dead_store'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'test_dead_store'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 't',
              type: 'f32'
            }]
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
                kind: 'identifier',
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
                kind: 'identifier',
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
