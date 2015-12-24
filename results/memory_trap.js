{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '100',
          int1: null,
          segment: []
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'store'
          },
          name: 'store'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'store'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'i',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {kind: 'memory_size'},
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'i'
                }
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'v'
              }
            }
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'load'
          },
          name: 'load'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'load'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
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
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {kind: 'memory_size'},
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'i'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'grow_memory'
          },
          name: 'grow_memory'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'grow_memory'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'grow_memory',
            expression: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'overflow_memory_size'
          },
          name: 'overflow_memory_size'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'overflow_memory_size'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'grow_memory',
            expression: {
              kind: 'binop',
              type: 'i32',
              operator: 'xor',
              left: {
                kind: 'const',
                type: 'i32',
                init: '-1'
              },
              right: {
                kind: 'binop',
                type: 'i32',
                operator: 'sub',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '0x10000'
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '42'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-3'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'grow_memory',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'growing memory by non-multiple of page size'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'overflow_memory_size',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'memory size exceeds implementation limit'
      }
    }
  ]
}
