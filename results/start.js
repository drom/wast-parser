{
  kind: 'script',
  body: [
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: null,
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          },
          {
            kind: 'start',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'main'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: [{
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          },
          {
            kind: 'start',
            id: {
              kind: 'identifier',
              name: 'main'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'start function'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'main'
            },
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            }],
            result: null,
            local: [],
            body: []
          },
          {
            kind: 'start',
            id: {
              kind: 'identifier',
              name: 'main'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'start function'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            value: {
              kind: 'literal',
              value: 'A'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: 8,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'get'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'start',
          id: {
            kind: 'identifier',
            name: 'main'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'inc'
          },
          id: {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'inc'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'get'
          },
          id: {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'get'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '68'
      }
    },
    {
      kind: 'invoke',
      name: 'inc',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '69'
      }
    },
    {
      kind: 'invoke',
      name: 'inc',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '70'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            value: {
              kind: 'literal',
              value: 'A'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: 8,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            data: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'get'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'start',
          id: {
            kind: 'literal',
            value: 2,
            raw: '2'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'inc'
          },
          id: {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'inc'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'get'
          },
          id: {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'get'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '68'
      }
    },
    {
      kind: 'invoke',
      name: 'inc',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '69'
      }
    },
    {
      kind: 'invoke',
      name: 'inc',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'get',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '70'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          expo: null,
          imp: {},
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'print_i32'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '1'
            }]
          }]
        },
        {
          kind: 'start',
          id: {
            kind: 'literal',
            value: 1,
            raw: '1'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          expo: null,
          imp: {},
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'print_i32'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '2'
            }]
          }]
        },
        {
          kind: 'start',
          id: {
            kind: 'identifier',
            name: 'main'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'print'
          },
          expo: null,
          imp: {},
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'start',
          id: {
            kind: 'identifier',
            name: 'print'
          }
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'main'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{kind: 'unreachable'}]
          },
          {
            kind: 'start',
            id: {
              kind: 'identifier',
              name: 'main'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    }
  ]
}
