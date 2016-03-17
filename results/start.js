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
            type: null,
            param: [],
            result: null,
            local: [],
            body: [{
              kind: 'const',
              type: 'i32',
              init: '1'
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
      failure: {
        kind: 'failure',
        value: 'unknown function 1'
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
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'start function must not return anything'
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
            type: null,
            param: [{
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
        kind: 'failure',
        value: 'start function must be nullary'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: null,
          segment: [{
            kind: 'segment',
            int: '0',
            name: 'A'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
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
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          name: 'inc'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'get'
          },
          name: 'get'
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
          int: '1',
          int1: null,
          segment: [{
            kind: 'segment',
            int: '0',
            name: 'A'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'inc'
              },
              expr: []
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
          id: {
            kind: 'identifier',
            name: 'inc'
          },
          name: 'inc'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'get'
          },
          name: 'get'
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
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          name1: 'spectest',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_import',
            id: {
              kind: 'identifier',
              name: 'print_i32'
            },
            expr: [{
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
            value: 0,
            raw: '0'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          name1: 'spectest',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'main'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_import',
            id: {
              kind: 'identifier',
              name: 'print_i32'
            },
            expr: [{
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
    }
  ]
}
