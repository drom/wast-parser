{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'export',
          name: 'round_up_to_page'
        },
        {
          kind: 'func',
          name: 'round_up_to_page',
          params: [{
            kind: 'param',
            types: ['i32']
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'and',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: '0'
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
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'sub',
              left: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              right: {kind: 'page_size'}
            }
          }]
        },
        {
          kind: 'export',
          name: 'load_at_zero'
        },
        {
          kind: 'func',
          name: 'load_at_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
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
          kind: 'export',
          name: 'store_at_zero'
        },
        {
          kind: 'func',
          name: 'store_at_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'store',
            type: 'i32',
            size: null,
            align: 0,
            expr1: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            expr2: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'export',
          name: 'load_at_page_size'
        },
        {
          kind: 'func',
          name: 'load_at_page_size',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            align: 0,
            expr: {kind: 'page_size'}
          }]
        },
        {
          kind: 'export',
          name: 'store_at_page_size'
        },
        {
          kind: 'func',
          name: 'store_at_page_size',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'store',
            type: 'i32',
            size: null,
            align: 0,
            expr1: {kind: 'page_size'},
            expr2: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'export',
          name: 'grow'
        },
        {
          kind: 'func',
          name: 'grow',
          params: [{
            kind: 'param',
            name: 'sz',
            type: 'i32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'grow_memory',
            expression: {
              kind: 'call',
              id: {
                kind: 'var',
                name: 'round_up_to_page'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'sz'
                }
              }]
            }
          }]
        },
        {
          kind: 'export',
          name: 'size_at_least'
        },
        {
          kind: 'func',
          name: 'size_at_least',
          params: [{
            kind: 'param',
            types: ['i32']
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i32',
            operator: 'ge_u',
            left: {kind: 'memory_size'},
            right: {
              kind: 'get_local',
              id: '0'
            }
          }]
        },
        {
          kind: 'export',
          name: 'size'
        },
        {
          kind: 'func',
          name: 'size',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{kind: 'memory_size'}]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'size',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'size_at_least',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store_at_zero',
        body: []
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
        name: 'load_at_zero',
        body: []
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
        name: 'store_at_page_size',
        body: []
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
        name: 'load_at_page_size',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    },
    {
      kind: 'invoke',
      name: 'grow',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '4'
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'size_at_least',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_at_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_at_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_at_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store_at_page_size',
        body: []
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
        name: 'load_at_page_size',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    },
    {
      kind: 'invoke',
      name: 'grow',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '4'
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'size_at_least',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_at_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_at_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_at_page_size',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'store_at_page_size',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load_at_page_size',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    }
  ]
}
