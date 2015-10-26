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
          name: 'store'
        },
        {
          kind: 'func',
          name: 'store',
          type: null,
          params: [
            {
              kind: 'param',
              name: 'i',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'v',
              type: 'i32'
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
                name: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            data: {
              kind: 'get_local',
              name: {
                kind: 'var',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'load'
        },
        {
          kind: 'func',
          name: 'load',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
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
                name: {
                  kind: 'var',
                  name: 'i'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'grow_memory'
        },
        {
          kind: 'func',
          name: 'grow_memory',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          body: [{
            kind: 'grow_memory',
            expression: {
              kind: 'get_local',
              name: {
                kind: 'var',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'overflow_memory_size'
        },
        {
          kind: 'func',
          name: 'overflow_memory_size',
          type: null,
          params: [],
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
                left: {kind: 'page_size'},
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: out of bounds memory access'
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
        value: 'runtime: grow_memory operand not multiple of page_size'
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
        value: 'runtime: grow_memory overflow'
      }
    }
  ]
}
