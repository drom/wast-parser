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
            name: 'br'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: null
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br'
          },
          id: {
            kind: 'identifier',
            name: 'br'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {kind: 'nop'}
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br-block-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'block',
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  {kind: 'nop'}
                ]
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br-block-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br-block-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br-block-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'block',
                id: null,
                body: [
                  {kind: 'nop'},
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                ]
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br-block-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br-block-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              expr: null
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if'
          },
          id: {
            kind: 'identifier',
            name: 'br_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {kind: 'nop'},
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br_if-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br_if-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if-block-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {
                kind: 'block',
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  {kind: 'nop'}
                ]
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if-block-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br_if-block-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if-block-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {
                kind: 'block',
                id: null,
                body: [
                  {kind: 'nop'},
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                ]
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if-block-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br_if-block-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table'
          },
          id: {
            kind: 'identifier',
            name: 'br_table'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {kind: 'nop'},
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br_table-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br_table-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table-block-nop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {
                  kind: 'block',
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    {kind: 'nop'}
                  ]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table-block-nop'
          },
          id: {
            kind: 'identifier',
            name: 'br_table-block-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table-block-drop'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {
                  kind: 'block',
                  id: null,
                  body: [
                    {kind: 'nop'},
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  ]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table-block-drop'
          },
          id: {
            kind: 'identifier',
            name: 'br_table-block-drop'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br-block-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br-block-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if-block-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if-block-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table-block-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table-block-drop',
        body: []
      },
      expr: null
    }
  ]
}
