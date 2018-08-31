{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-unreachable'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {kind: 'unreachable'}
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br-value'
          }],
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
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'drop',
              body: [{
                kind: 'drop',
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
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br_if-value'
          }],
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
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'drop',
              body: [{
                kind: 'drop',
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
                    init: '9'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
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
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-br_table-value'
          }],
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
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'br_table',
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
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
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'func-unwind-by-return'
          }],
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
              kind: 'const',
              type: 'i32',
              init: '3'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-unreachable'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br_if'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                {
                  kind: 'drop',
                  body: [{
                    kind: 'drop',
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
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br_if-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'drop',
                body: [{
                  kind: 'drop',
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
                      init: '9'
                    },
                    expr: {
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br_table'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                {
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
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-br_table-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
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
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-unwind-by-return'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-unreachable'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  },
                  {kind: 'unreachable'}
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
                    },
                    {
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      expr: null
                    }
                  ]
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  },
                  {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '9'
                    }
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br_if'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
                    },
                    {
                      kind: 'drop',
                      body: [{
                        kind: 'br_if',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        test: {
                          kind: 'const',
                          type: 'i32',
                          init: '1'
                        },
                        expr: null
                      }]
                    }
                  ]
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br_if-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  },
                  {
                    kind: 'drop',
                    body: [{
                      kind: 'drop',
                      body: [{
                        kind: 'br_if',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        test: {
                          kind: 'const',
                          type: 'i32',
                          init: '9'
                        },
                        expr: {
                          kind: 'const',
                          type: 'i32',
                          init: '1'
                        }
                      }]
                    }]
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br_table'
          }],
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
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
                    },
                    {
                      kind: 'br_table',
                      exprs: [{
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }],
                      body: [{
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      }]
                    }
                  ]
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-br_table-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  },
                  {
                    kind: 'br_table',
                    exprs: [
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '9'
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    ],
                    body: [{
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    }]
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-nested-unwind-by-return'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  },
                  {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '9'
                    }
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary-after-unreachable'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {kind: 'unreachable'},
            {
              kind: 'unop',
              type: 'i64',
              operator: 'eqz',
              expr: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary-after-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              },
              {
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary-after-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'drop',
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
                    init: '9'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              },
              {
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary-after-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                ],
                body: [
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              },
              {
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'unary-after-return'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            },
            {
              kind: 'unop',
              type: 'i64',
              operator: 'eqz',
              expr: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'binary-after-unreachable'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            },
            {kind: 'unreachable'},
            {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: null,
              right: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'binary-after-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '1'
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              },
              {
                kind: 'relop',
                type: 'i64',
                operator: 'eq',
                left: null,
                right: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'binary-after-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'drop',
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
                    init: '9'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              },
              {
                kind: 'relop',
                type: 'i64',
                operator: 'eq',
                left: null,
                right: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'binary-after-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '1'
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
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
              },
              {
                kind: 'relop',
                type: 'i64',
                operator: 'eq',
                left: null,
                right: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'binary-after-return'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: null,
              right: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select-after-unreachable'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            {kind: 'unreachable'},
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select-after-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              },
              {
                kind: 'select',
                then: null,
                else: null,
                test: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select-after-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'drop',
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
                    init: '9'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              },
              {
                kind: 'select',
                then: null,
                else: null,
                test: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select-after-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '1'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
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
              },
              {
                kind: 'select',
                then: null,
                else: null,
                test: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select-after-return'
          }],
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
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-value-after-unreachable'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-value-after-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-value-after-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'drop',
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
                    init: '9'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-value-after-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                ],
                body: [
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block-value-after-return'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop-value-after-unreachable'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop-value-after-br'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
                  }
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop-value-after-br_if'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'drop',
                  body: [{
                    kind: 'br_if',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    test: {
                      kind: 'const',
                      type: 'i32',
                      init: '9'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop-value-after-br_table'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                },
                {
                  kind: 'br_table',
                  exprs: [
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '9'
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  ],
                  body: [
                    {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    }
                  ]
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop-value-after-return'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            ]
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br_if',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br_if-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br_table',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-br_table-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'func-unwind-by-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br_if-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-br_table-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-unwind-by-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br_if-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-br_table-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-nested-unwind-by-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary-after-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary-after-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary-after-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary-after-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'unary-after-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'binary-after-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'binary-after-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'binary-after-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'binary-after-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'binary-after-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select-after-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select-after-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select-after-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select-after-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select-after-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-value-after-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-value-after-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-value-after-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-value-after-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'block-value-after-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop-value-after-unreachable',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop-value-after-br',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop-value-after-br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop-value-after-br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop-value-after-return',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    }
  ]
}
