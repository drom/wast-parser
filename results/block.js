{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'empty'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              id: null,
              body: []
            },
            {
              kind: 'block',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              body: []
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'singular'
          },
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
              id: null,
              body: [{kind: 'nop'}]
            },
            {
              kind: 'block',
              id: null,
              body: [{
                kind: 'const',
                type: 'i32',
                init: '7'
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'nop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'multi'
          },
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
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'nested'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'block',
                id: null,
                body: [
                  {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'nop'
                    },
                    exprs: []
                  },
                  {
                    kind: 'block',
                    id: null,
                    body: []
                  },
                  {kind: 'nop'}
                ]
              },
              {
                kind: 'block',
                id: null,
                body: [
                  {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'nop'
                    },
                    exprs: []
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '9'
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'deep'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'block',
              id: null,
              body: [{
                kind: 'block',
                id: null,
                body: [{
                  kind: 'block',
                  id: null,
                  body: [{
                    kind: 'block',
                    id: null,
                    body: [{
                      kind: 'block',
                      id: null,
                      body: [{
                        kind: 'block',
                        id: null,
                        body: [{
                          kind: 'block',
                          id: null,
                          body: [{
                            kind: 'block',
                            id: null,
                            body: [{
                              kind: 'block',
                              id: null,
                              body: [{
                                kind: 'block',
                                id: null,
                                body: [{
                                  kind: 'block',
                                  id: null,
                                  body: [{
                                    kind: 'block',
                                    id: null,
                                    body: [{
                                      kind: 'block',
                                      id: null,
                                      body: [{
                                        kind: 'block',
                                        id: null,
                                        body: [{
                                          kind: 'block',
                                          id: null,
                                          body: [{
                                            kind: 'block',
                                            id: null,
                                            body: [{
                                              kind: 'block',
                                              id: null,
                                              body: [{
                                                kind: 'block',
                                                id: null,
                                                body: [{
                                                  kind: 'block',
                                                  id: null,
                                                  body: [{
                                                    kind: 'block',
                                                    id: null,
                                                    body: [{
                                                      kind: 'block',
                                                      id: null,
                                                      body: [{
                                                        kind: 'block',
                                                        id: null,
                                                        body: [{
                                                          kind: 'block',
                                                          id: null,
                                                          body: [{
                                                            kind: 'block',
                                                            id: null,
                                                            body: [{
                                                              kind: 'block',
                                                              id: null,
                                                              body: [{
                                                                kind: 'block',
                                                                id: null,
                                                                body: [{
                                                                  kind: 'block',
                                                                  id: null,
                                                                  body: [{
                                                                    kind: 'block',
                                                                    id: null,
                                                                    body: [{
                                                                      kind: 'block',
                                                                      id: null,
                                                                      body: [{
                                                                        kind: 'block',
                                                                        id: null,
                                                                        body: [{
                                                                          kind: 'block',
                                                                          id: null,
                                                                          body: [{
                                                                            kind: 'block',
                                                                            id: null,
                                                                            body: [{
                                                                              kind: 'block',
                                                                              id: null,
                                                                              body: [{
                                                                                kind: 'block',
                                                                                id: null,
                                                                                body: [{
                                                                                  kind: 'block',
                                                                                  id: null,
                                                                                  body: [{
                                                                                    kind: 'block',
                                                                                    id: null,
                                                                                    body: [{
                                                                                      kind: 'block',
                                                                                      id: null,
                                                                                      body: [{
                                                                                        kind: 'block',
                                                                                        id: null,
                                                                                        body: [{
                                                                                          kind: 'block',
                                                                                          id: null,
                                                                                          body: [{
                                                                                            kind: 'block',
                                                                                            id: null,
                                                                                            body: [{
                                                                                              kind: 'block',
                                                                                              id: null,
                                                                                              body: [{
                                                                                                kind: 'block',
                                                                                                id: null,
                                                                                                body: [{
                                                                                                  kind: 'block',
                                                                                                  id: null,
                                                                                                  body: [{
                                                                                                    kind: 'block',
                                                                                                    id: null,
                                                                                                    body: [
                                                                                                      {
                                                                                                        kind: 'call',
                                                                                                        id: {
                                                                                                          kind: 'identifier',
                                                                                                          name: 'nop'
                                                                                                        },
                                                                                                        exprs: []
                                                                                                      },
                                                                                                      {
                                                                                                        kind: 'const',
                                                                                                        type: 'i32',
                                                                                                        init: '150'
                                                                                                      }
                                                                                                    ]
                                                                                                  }]
                                                                                                }]
                                                                                              }]
                                                                                            }]
                                                                                          }]
                                                                                        }]
                                                                                      }]
                                                                                    }]
                                                                                  }]
                                                                                }]
                                                                              }]
                                                                            }]
                                                                          }]
                                                                        }]
                                                                      }]
                                                                    }]
                                                                  }]
                                                                }]
                                                              }]
                                                            }]
                                                          }]
                                                        }]
                                                      }]
                                                    }]
                                                  }]
                                                }]
                                              }]
                                            }]
                                          }]
                                        }]
                                      }]
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-unary-operand'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'ctz',
            expr: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '13'
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-binary-operand'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'mul',
            left: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                }
              ]
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '4'
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-test-operand'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '13'
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-compare-operand'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'gt',
            left: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'f32',
                  init: '3'
                }
              ]
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                {
                  kind: 'const',
                  type: 'f32',
                  init: '3'
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-bare'
          },
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
              id: null,
              body: [
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
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
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
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
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'br_table',
                  exprs: [{
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }],
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
                    },
                    {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  ]
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '19'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-value'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
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
                  init: '18'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '19'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-repeated'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
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
                  init: '18'
                }
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
                  init: '19'
                }
              },
              {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '20'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '20'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
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
                  init: '21'
                }
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '22'
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '4'
                  }
                ],
                body: [{
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }]
              },
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '23'
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
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
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '21'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-inner'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
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
                  kind: 'block',
                  id: null,
                  body: [{
                    kind: 'block',
                    id: null,
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '0x1'
                      }
                    }]
                  }]
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
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
                  kind: 'block',
                  id: null,
                  body: [
                    {
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
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '0x2'
                    }
                  ]
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
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
                  kind: 'block',
                  id: null,
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'ctz',
                    expr: {
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '0x4'
                      }
                    }
                  }]
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
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
                  kind: 'block',
                  id: null,
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'ctz',
                    expr: {
                      kind: 'block',
                      id: null,
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        expr: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x8'
                        }
                      }]
                    }
                  }]
                }
              }
            },
            {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'drop-mid'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'fx'
                },
                exprs: []
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'nop'
                },
                exprs: []
              },
              {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'drop-last'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'nop'
                },
                exprs: []
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'fx'
                },
                exprs: []
              },
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'drop-break-void'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
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
            },
            {
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
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                }
              }]
            },
            {
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
                  init: '0'
                }
              }]
            },
            {
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
            },
            {
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
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
            },
            {
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
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'nop'
                  },
                  exprs: []
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }]
            },
            {
              kind: 'block',
              id: null,
              body: [{
                kind: 'br_table',
                exprs: [
                  {kind: 'nop'},
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }
                ],
                body: [{
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }]
              }]
            },
            {
              kind: 'block',
              id: null,
              body: [{
                kind: 'br_table',
                exprs: [
                  {kind: 'nop'},
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
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
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'drop-break-value'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
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
                  init: '12'
                }
              }]
            },
            {
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
                  init: '11'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
            },
            {
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
                  init: '10'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }]
            },
            {
              kind: 'block',
              id: null,
              body: [{
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
                    init: '5'
                  }
                ],
                body: [{
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }]
              }]
            },
            {
              kind: 'block',
              id: null,
              body: [{
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '8'
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
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
                  },
                  {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'drop-break-value-heterogeneous'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              id: null,
              body: [
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
                    init: '8'
                  }
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
                    type: 'f64',
                    init: '8'
                  }
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
                    type: 'f32',
                    init: '8'
                  }
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
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
                    init: '8'
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
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
                    type: 'f64',
                    init: '8'
                  }
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
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
                    init: '8'
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'nop'
                    },
                    exprs: []
                  }
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
                    type: 'f64',
                    init: '8'
                  }
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
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
                    init: '8'
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
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
                    type: 'f32',
                    init: '8'
                  }
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '3'
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
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
                    init: '8'
                  }
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
                    type: 'f64',
                    init: '8'
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: {kind: 'nop'}
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
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
                    init: '8'
                  }
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
                    type: 'f32',
                    init: '8'
                  }
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '3'
                }
              ]
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'block',
                  id: null,
                  body: [
                    {
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      },
                      expr: null
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
                        init: '8'
                      }
                    }
                  ]
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
                    type: 'f32',
                    init: '8'
                  }
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '3'
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fx'
          },
          expo: {
            kind: 'literal',
            value: 'effects'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
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
                      init: '3'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
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
                      init: '5'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
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
                      init: '7'
                    }
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
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
                      init: '100'
                    }
                  }
                }
              ]
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'eq',
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
                init: '-14'
              }
            }
          ]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'empty',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'singular',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'multi',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested',
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
        name: 'deep',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '150'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-unary-operand',
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
        name: 'as-binary-operand',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-test-operand',
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
        name: 'as-compare-operand',
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
        name: 'break-bare',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'break-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'break-repeated',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'break-inner',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'drop-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'drop-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'drop-break-void',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'drop-break-value',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'drop-break-value-heterogeneous',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'effects',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
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
            name: 'type-empty-i32'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: []
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
            name: 'type-empty-i64'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: []
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
            name: 'type-empty-f32'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: []
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
            name: 'type-empty-f64'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: []
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
            name: 'type-value-void-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{kind: 'nop'}]
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
            name: 'type-value-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'const',
              type: 'f32',
              init: '0'
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
            name: 'type-value-void-vs-num-after-break'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
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
                  init: '1'
                }
              },
              {kind: 'nop'}
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
          id: {
            kind: 'identifier',
            name: 'type-value-num-vs-num-after-break'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
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
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
          id: {
            kind: 'identifier',
            name: 'type-break-last-void-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
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
            name: 'type-break-void-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
          id: {
            kind: 'identifier',
            name: 'type-break-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
          id: {
            kind: 'identifier',
            name: 'type-break-first-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }
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
                  init: '1'
                }
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
          id: {
            kind: 'identifier',
            name: 'type-break-second-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
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
                  init: '1'
                }
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
                  type: 'f64',
                  init: '1'
                }
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
          id: {
            kind: 'identifier',
            name: 'type-break-nested-void-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'block',
                id: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  expr: null
                }]
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
                  init: '1'
                }
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
          id: {
            kind: 'identifier',
            name: 'type-break-nested-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'block',
                id: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  }
                }]
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
                  init: '1'
                }
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
          id: {
            kind: 'identifier',
            name: 'type-break-operand-void-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'ctz',
            expr: {
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
          id: {
            kind: 'identifier',
            name: 'type-break-operand-num-vs-num'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'ctz',
            expr: {
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
                  type: 'i64',
                  init: '9'
                }
              }]
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
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
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
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'ctz',
            expr: {
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
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    }
  ]
}
