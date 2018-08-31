{
  kind: 'script',
  body: [
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-unary-operand-missing'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-unary-operand-missing-in-block'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-unary-operand-missing-in-loop'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-unary-operand-missing-in-if'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [{
                kind: 'then',
                id: null,
                body: [
                  {
                    kind: 'unop',
                    type: 'i32',
                    operator: 'eqz',
                    expr: null
                  },
                  {
                    kind: 'drop',
                    body: []
                  }
                ]
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-unary-operand-missing-in-else'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
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
                    kind: 'unop',
                    type: 'i32',
                    operator: 'eqz',
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
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-1st-operand-missing'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: null,
              right: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-2nd-operand-missing'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: null,
              right: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-1st-operand-missing-in-block'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: null,
                  right: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-2nd-operand-missing-in-block'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: null,
                  right: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-1st-operand-missing-in-loop'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: null,
                  right: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-2nd-operand-missing-in-loop'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: null,
                  right: null
                },
                {
                  kind: 'drop',
                  body: []
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-1st-operand-missing-in-if'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: null,
                  right: null
                },
                {
                  kind: 'then',
                  id: null,
                  body: [{
                    kind: 'drop',
                    body: []
                  }]
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-2nd-operand-missing-in-if'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'then',
                  id: null,
                  body: [{
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: null,
                    right: null
                  }]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{
                    kind: 'drop',
                    body: []
                  }]
                }
              ]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-1st-operand-missing-in-else'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
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
                  body: [
                    {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: null,
                      right: null
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  ]
                }
              ]
            },
            {
              kind: 'drop',
              body: []
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-binary-2nd-operand-missing-in-else'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
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
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: null,
                    right: null
                  }]
                }
              ]
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-if-operand-missing'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: null,
            body: [{
              kind: 'then',
              id: null,
              body: []
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-if-operand-missing-in-block'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'if',
                id: null,
                result: null,
                body: [{
                  kind: 'then',
                  id: null,
                  body: []
                }]
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-if-operand-missing-in-loop'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'if',
                id: null,
                result: null,
                body: [{
                  kind: 'then',
                  id: null,
                  body: []
                }]
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-if-operand-missing-in-if'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [{
                kind: 'then',
                id: null,
                body: [{
                  kind: 'if',
                  id: null,
                  result: null,
                  body: [{
                    kind: 'then',
                    id: null,
                    body: []
                  }]
                }]
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-if-operand-missing-in-else'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
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
                  body: [
                    {
                      kind: 'if',
                      id: null,
                      result: null,
                      body: [{
                        kind: 'then',
                        id: null,
                        body: []
                      }]
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  ]
                }
              ]
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-br-operand-missing'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
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
            },
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-br-operand-missing-in-block'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
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
            },
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-br-operand-missing-in-if'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
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
                  init: '0'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'if',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  body: [{
                    kind: 'then',
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
                }
              ]
            },
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-br-operand-missing-in-else'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
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
                  init: '0'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'if',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  body: [
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
                        kind: 'br',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        },
                        expr: null
                      }]
                    }
                  ]
                }
              ]
            },
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            },
            {
              kind: 'drop',
              body: []
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-return-operand-missing'
          },
          expos: [],
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
            expr: null
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-return-operand-missing-in-block'
          },
          expos: [],
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
              init: '0'
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'return',
                expr: null
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-return-operand-missing-in-loop'
          },
          expos: [],
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
              init: '0'
            },
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'return',
                expr: null
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-return-operand-missing-in-if'
          },
          expos: [],
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
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [{
                kind: 'then',
                id: null,
                body: [{
                  kind: 'return',
                  expr: null
                }]
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-return-operand-missing-in-else'
          },
          expos: [],
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
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
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
                    kind: 'return',
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
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'if',
            id: null,
            result: null,
            body: [
              {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              {
                kind: 'then',
                id: null,
                body: []
              }
            ]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                type: 'f32',
                init: '0'
              },
              expr: null
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [{
                kind: 'const',
                type: 'f32',
                init: '0'
              }],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              id: null,
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
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'const',
                type: 'f32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              id: null,
              params: [{
                kind: 'param',
                id: null,
                items: [{
                  kind: 'item',
                  type: 'i32'
                }]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: {
              kind: 'type',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            params: [],
            result: null,
            local: [],
            body: []
          },
          {
            kind: 'table',
            expo: null,
            index: ['0'],
            items: null
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              ],
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              id: null,
              params: [],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: {
              kind: 'type',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            params: [],
            result: null,
            local: [],
            body: []
          },
          {
            kind: 'table',
            expo: null,
            index: ['0'],
            items: null
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              ],
              exprs: [{
                kind: 'const',
                type: 'f32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
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
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
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
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'f32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'f64',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
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
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'f32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'f64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
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
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
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
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
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
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'f64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'f32',
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
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'f64',
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
                type: 'i64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'and',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'or',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rotl',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rotr',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'shl',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'shr_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'shr_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'xor',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'and',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'or',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rotl',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rotr',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shl',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'xor',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'copysign',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'max',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'min',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'copysign',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'max',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'min',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'clz',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'ctz',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'popcnt',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'eqz',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'clz',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'ctz',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'popcnt',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'abs',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'ceil',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'floor',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'nearest',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'trunc',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'abs',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'ceil',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'floor',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'nearest',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'sqrt',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'trunc',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'eq',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'ge_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'ge_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'gt_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'gt_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'le_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'le_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'lt_s',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'lt_u',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'eq',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_s',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_u',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'eq',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ge',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'gt',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'le',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'lt',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'eq',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'ge',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'gt',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'le',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'lt',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'i32',
            operator: 'extend_s',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'i32',
            operator: 'extend_u',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'f32',
            operator: 'promote',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 1,
              raw: [
                [' '],
                '1'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'memory.grow',
              expr: {
                kind: 'const',
                type: 'f32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    }
  ]
}
