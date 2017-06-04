{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'even'
          },
          expos: [{
            kind: 'literal',
            value: 'even'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'n',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'relop',
                type: 'i32',
                operator: 'eq',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'odd'
                  },
                  exprs: [{
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'n'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
                }]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'odd'
          },
          expos: [{
            kind: 'literal',
            value: 'odd'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'n',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'relop',
                type: 'i32',
                operator: 'eq',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'even'
                  },
                  exprs: [{
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'n'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
                }]
              }
            ]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
