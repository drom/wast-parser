{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'export',
          name: 'even'
        },
        {
          kind: 'export',
          name: 'odd'
        },
        {
          kind: 'func',
          name: 'even',
          type: null,
          params: [{
            kind: 'param',
            name: 'n',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'i32',
              operator: 'eq',
              left: {
                kind: 'get_local',
                name: {
                  kind: 'var',
                  name: 'n'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            consequent: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            alternate: {
              kind: 'call',
              name: {
                kind: 'var',
                name: 'odd'
              },
              expr: [{
                kind: 'binop',
                type: 'i32',
                operator: 'sub',
                left: {
                  kind: 'get_local',
                  name: {
                    kind: 'var',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }]
            }
          }]
        },
        {
          kind: 'func',
          name: 'odd',
          type: null,
          params: [{
            kind: 'param',
            name: 'n',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'i32',
              operator: 'eq',
              left: {
                kind: 'get_local',
                name: {
                  kind: 'var',
                  name: 'n'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            consequent: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            alternate: {
              kind: 'call',
              name: {
                kind: 'var',
                name: 'even'
              },
              expr: [{
                kind: 'binop',
                type: 'i32',
                operator: 'sub',
                left: {
                  kind: 'get_local',
                  name: {
                    kind: 'var',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }]
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
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
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '20'
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
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
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
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    }
  ]
}
