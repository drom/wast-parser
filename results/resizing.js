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
          name: {
            kind: 'literal',
            value: 'round_up_to_page'
          },
          id: {
            kind: 'identifier',
            name: 'round_up_to_page'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'round_up_to_page'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'and',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '0xFFFF'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '0xFFFF0000'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'load_at_zero'
          },
          id: {
            kind: 'identifier',
            name: 'load_at_zero'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'load_at_zero'
          },
          type: null,
          param: [],
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
            value: 'store_at_zero'
          },
          id: {
            kind: 'identifier',
            name: 'store_at_zero'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'store_at_zero'
          },
          type: null,
          param: [],
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
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'load_at_page_size'
          },
          id: {
            kind: 'identifier',
            name: 'load_at_page_size'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'load_at_page_size'
          },
          type: null,
          param: [],
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
              init: '0x10000'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'store_at_page_size'
          },
          id: {
            kind: 'identifier',
            name: 'store_at_page_size'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'store_at_page_size'
          },
          type: null,
          param: [],
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
              kind: 'const',
              type: 'i32',
              init: '0x10000'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'grow'
          },
          id: {
            kind: 'identifier',
            name: 'grow'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'grow'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'sz',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'grow_memory',
            expr: {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'round_up_to_page'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'sz'
                }
              }]
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'size_at_least'
          },
          id: {
            kind: 'identifier',
            name: 'size_at_least'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'size_at_least'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'ge_u',
            left: {kind: 'memory_size'},
            right: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'size'
          },
          id: {
            kind: 'identifier',
            name: 'size'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'size'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'memory_size'}]
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
        kind: 'literal',
        value: 'out of bounds memory access'
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
        kind: 'literal',
        value: 'out of bounds memory access'
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
        kind: 'literal',
        value: 'out of bounds memory access'
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
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'grow',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
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
        kind: 'literal',
        value: 'out of bounds memory access'
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
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'grow',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '65536'
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
