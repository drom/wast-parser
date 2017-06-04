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
            name: 'dummy'
          },
          expo: null,
          imp: null,
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
            value: 'empty'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: []
            },
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              result: null,
              extra: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{kind: 'nop'}]
            },
            {
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
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
          id: null,
          expo: {
            kind: 'literal',
            value: 'multi'
          },
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'dummy'
                    },
                    exprs: []
                  },
                  {
                    kind: 'block',
                    result: null,
                    id: null,
                    body: []
                  },
                  {kind: 'nop'}
                ]
              },
              {
                kind: 'loop',
                id: null,
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                extra: null,
                body: [
                  {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'dummy'
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
                                                                                        body: [{
                                                                                          kind: 'block',
                                                                                          result: {
                                                                                            kind: 'result',
                                                                                            type: 'i32'
                                                                                          },
                                                                                          id: null,
                                                                                          body: [
                                                                                            {
                                                                                              kind: 'call',
                                                                                              id: {
                                                                                                kind: 'identifier',
                                                                                                name: 'dummy'
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
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-unary-operand'
          },
          imp: null,
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
          imp: null,
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
          imp: null,
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
          imp: null,
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'f32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
              kind: 'loop',
              id: null,
              result: {
                kind: 'result',
                type: 'f32'
              },
              extra: null,
              body: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'dummy'
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
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
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
                    expr: null
                  },
                  {kind: 'unreachable'}
                ]
              }]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
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
                  },
                  {kind: 'unreachable'}
                ]
              }]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
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
                      value: 1,
                      raw: '1'
                    }]
                  },
                  {kind: 'unreachable'}
                ]
              }]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
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
                        value: 1,
                        raw: '1'
                      },
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
                  },
                  {kind: 'unreachable'}
                ]
              }]
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
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
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
                  expr: null
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '19'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-repeated'
          },
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
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
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
                    value: 1,
                    raw: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '19'
                  }
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
                      init: '20'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  }]
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
                      init: '20'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
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
                      init: '0'
                    }
                  ],
                  body: [{
                    kind: 'literal',
                    value: 1,
                    raw: '1'
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
                      value: 1,
                      raw: '1'
                    },
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
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '21'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'break-inner'
          },
          imp: null,
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
                    body: [{
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
                          value: 2,
                          raw: '2'
                        },
                        expr: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x1'
                        }
                      }]
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
                    body: [{
                      kind: 'loop',
                      id: null,
                      result: {
                        kind: 'result',
                        type: 'i32'
                      },
                      extra: null,
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'literal',
                          value: 2,
                          raw: '2'
                        },
                        expr: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x2'
                        }
                      }]
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
                            init: '0x4'
                          }
                        }]
                      }]
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
                    body: [{
                      kind: 'unop',
                      type: 'i32',
                      operator: 'ctz',
                      expr: {
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
                    body: [{
                      kind: 'unop',
                      type: 'i32',
                      operator: 'ctz',
                      expr: {
                        kind: 'loop',
                        id: null,
                        result: {
                          kind: 'result',
                          type: 'i32'
                        },
                        extra: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'literal',
                            value: 2,
                            raw: '2'
                          },
                          expr: {
                            kind: 'const',
                            type: 'i32',
                            init: '0x10'
                          }
                        }]
                      }
                    }]
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
            value: 'cont-inner'
          },
          imp: null,
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
                  kind: 'loop',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  extra: null,
                  body: [{
                    kind: 'loop',
                    id: null,
                    result: {
                      kind: 'result',
                      type: 'i32'
                    },
                    extra: null,
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      expr: null
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
                  kind: 'loop',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  extra: null,
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
                      expr: null
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
                  kind: 'loop',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  extra: null,
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'ctz',
                    expr: {
                      kind: 'loop',
                      id: null,
                      result: {
                        kind: 'result',
                        type: 'i32'
                      },
                      extra: null,
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        expr: null
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
          id: {
            kind: 'identifier',
            name: 'fx'
          },
          expo: {
            kind: 'literal',
            value: 'effects'
          },
          imp: null,
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
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
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
                      value: 1,
                      raw: '1'
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
              }]
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
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'while'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
                    kind: 'br_if',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    test: {
                      kind: 'unop',
                      type: 'i64',
                      operator: 'eqz',
                      expr: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
                      }
                    },
                    expr: null
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i64',
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
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
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
                      type: 'i64',
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
                        type: 'i64',
                        init: '1'
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
                  }
                ]
              }]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'for'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 2,
                raw: '2'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '2'
              }
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
                    kind: 'br_if',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    test: {
                      kind: 'relop',
                      type: 'i64',
                      operator: 'gt_u',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 2,
                          raw: '2'
                        }
                      },
                      right: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
                      }
                    },
                    expr: null
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i64',
                      operator: 'mul',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      right: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 2,
                          raw: '2'
                        }
                      }
                    }
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i64',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 2,
                          raw: '2'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i64',
                        init: '1'
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
                  }
                ]
              }]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'nesting'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'f32'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'f32'
              }
            ]
          }],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
                  {
                    kind: 'br_if',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    },
                    test: {
                      kind: 'relop',
                      type: 'f32',
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
                        type: 'f32',
                        init: '0'
                      }
                    },
                    expr: null
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    init: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      }
                    }
                  },
                  {
                    kind: 'block',
                    result: null,
                    id: null,
                    body: [{
                      kind: 'loop',
                      id: null,
                      result: null,
                      extra: null,
                      body: [
                        {
                          kind: 'br_if',
                          id: {
                            kind: 'literal',
                            value: 1,
                            raw: '1'
                          },
                          test: {
                            kind: 'relop',
                            type: 'f32',
                            operator: 'eq',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 2,
                                raw: '2'
                              }
                            },
                            right: {
                              kind: 'const',
                              type: 'f32',
                              init: '0'
                            }
                          },
                          expr: null
                        },
                        {
                          kind: 'br_if',
                          id: {
                            kind: 'literal',
                            value: 3,
                            raw: '3'
                          },
                          test: {
                            kind: 'relop',
                            type: 'f32',
                            operator: 'lt',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 2,
                                raw: '2'
                              }
                            },
                            right: {
                              kind: 'const',
                              type: 'f32',
                              init: '0'
                            }
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'literal',
                            value: 3,
                            raw: '3'
                          },
                          init: {
                            kind: 'binop',
                            type: 'f32',
                            operator: 'add',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 3,
                                raw: '3'
                              }
                            },
                            right: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 2,
                                raw: '2'
                              }
                            }
                          }
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'literal',
                            value: 2,
                            raw: '2'
                          },
                          init: {
                            kind: 'binop',
                            type: 'f32',
                            operator: 'sub',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 2,
                                raw: '2'
                              }
                            },
                            right: {
                              kind: 'const',
                              type: 'f32',
                              init: '2'
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
                        }
                      ]
                    }]
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'literal',
                      value: 3,
                      raw: '3'
                    },
                    init: {
                      kind: 'binop',
                      type: 'f32',
                      operator: 'div',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 3,
                          raw: '3'
                        }
                      },
                      right: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
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
                      type: 'f32',
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
                        type: 'f32',
                        init: '1'
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
                  }
                ]
              }]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 3,
                raw: '3'
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
        id: null,
        name: 'empty',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'break-inner',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'while',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2432902008176640000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'for',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2432902008176640000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2550'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '101'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2601'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '10'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '10.3095235825'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4381.54785156'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nesting',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '101'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2601'
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
            result: null,
            extra: null,
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
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
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
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
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
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
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
            name: 'type-value-num-vs-void'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
            body: [{
              kind: 'const',
              type: 'i32',
              init: '1'
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
            name: 'type-value-empty-vs-num'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
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
            name: 'type-value-unreached-select'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i64'
            },
            extra: null,
            body: [{
              kind: 'select',
              then: {kind: 'unreachable'},
              else: {kind: 'unreachable'},
              test: {kind: 'unreachable'}
            }]
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
