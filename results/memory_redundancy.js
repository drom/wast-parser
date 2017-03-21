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
            raw: [
              [' '],
              '1'
            ]
          },
          int1: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'zero_everything'
          },
          imp: null,
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
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'test_store_to_load'
          },
          imp: null,
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
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'test_redundant_load'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 't',
                type: 'i32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 's',
                type: 'i32'
              }]
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 't'
              },
              init: {
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
                init: '5'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0x80000000'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 's'
              },
              init: {
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
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 't'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 's'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'test_dead_store'
          },
          imp: null,
          type: null,
          params: [],
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
        id: null,
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
      id: null,
      name: 'zero_everything',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      id: null,
      name: 'zero_everything',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
