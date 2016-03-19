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
            name: 'stmt'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'j',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'j'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '100'
              }
            },
            {
              kind: 'block',
              id: {
                kind: 'identifier',
                name: 'switch'
              },
              body: [{
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: '7'
                },
                body: [
                  {
                    kind: 'block',
                    id: {
                      kind: 'identifier',
                      name: 'default'
                    },
                    body: [
                      {
                        kind: 'block',
                        id: {
                          kind: 'identifier',
                          name: '6'
                        },
                        body: [
                          {
                            kind: 'block',
                            id: {
                              kind: 'identifier',
                              name: '5'
                            },
                            body: [
                              {
                                kind: 'block',
                                id: {
                                  kind: 'identifier',
                                  name: '4'
                                },
                                body: [
                                  {
                                    kind: 'block',
                                    id: {
                                      kind: 'identifier',
                                      name: '3'
                                    },
                                    body: [{
                                      kind: 'block',
                                      id: {
                                        kind: 'identifier',
                                        name: '2'
                                      },
                                      body: [
                                        {
                                          kind: 'block',
                                          id: {
                                            kind: 'identifier',
                                            name: '1'
                                          },
                                          body: [
                                            {
                                              kind: 'block',
                                              id: {
                                                kind: 'identifier',
                                                name: '0'
                                              },
                                              body: [{
                                                kind: 'br_table',
                                                expr: [{
                                                  kind: 'get_local',
                                                  id: {
                                                    kind: 'identifier',
                                                    name: 'i'
                                                  }
                                                }],
                                                body: [
                                                  {
                                                    kind: 'identifier',
                                                    name: '0'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '1'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '2'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '3'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '4'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '5'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '6'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '7'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: 'default'
                                                  }
                                                ]
                                              }]
                                            },
                                            {
                                              kind: 'return',
                                              expr: {
                                                kind: 'get_local',
                                                id: {
                                                  kind: 'identifier',
                                                  name: 'i'
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {kind: 'nop'}
                                      ]
                                    }]
                                  },
                                  {
                                    kind: 'set_local',
                                    id: {
                                      kind: 'identifier',
                                      name: 'j'
                                    },
                                    init: {
                                      kind: 'binop',
                                      type: 'i32',
                                      operator: 'sub',
                                      left: {
                                        kind: 'const',
                                        type: 'i32',
                                        init: '0'
                                      },
                                      right: {
                                        kind: 'get_local',
                                        id: {
                                          kind: 'identifier',
                                          name: 'i'
                                        }
                                      }
                                    }
                                  },
                                  {
                                    kind: 'br',
                                    id: {
                                      kind: 'identifier',
                                      name: 'switch'
                                    },
                                    expr: null
                                  }
                                ]
                              },
                              {
                                kind: 'br',
                                id: {
                                  kind: 'identifier',
                                  name: 'switch'
                                },
                                expr: null
                              }
                            ]
                          },
                          {
                            kind: 'set_local',
                            id: {
                              kind: 'identifier',
                              name: 'j'
                            },
                            init: {
                              kind: 'const',
                              type: 'i32',
                              init: '101'
                            }
                          },
                          {
                            kind: 'br',
                            id: {
                              kind: 'identifier',
                              name: 'switch'
                            },
                            expr: null
                          }
                        ]
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'j'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '101'
                        }
                      }
                    ]
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'j'
                    },
                    init: {
                      kind: 'const',
                      type: 'i32',
                      init: '102'
                    }
                  }
                ]
              }]
            },
            {
              kind: 'return',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'j'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'expr'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
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
              name: 'j',
              type: 'i64'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'j'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '100'
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'switch'
                },
                body: [
                  {
                    kind: 'block',
                    id: {
                      kind: 'identifier',
                      name: '7'
                    },
                    body: [
                      {
                        kind: 'block',
                        id: {
                          kind: 'identifier',
                          name: 'default'
                        },
                        body: [{
                          kind: 'block',
                          id: {
                            kind: 'identifier',
                            name: '4'
                          },
                          body: [{
                            kind: 'block',
                            id: {
                              kind: 'identifier',
                              name: '5'
                            },
                            body: [
                              {
                                kind: 'block',
                                id: {
                                  kind: 'identifier',
                                  name: '6'
                                },
                                body: [
                                  {
                                    kind: 'block',
                                    id: {
                                      kind: 'identifier',
                                      name: '3'
                                    },
                                    body: [{
                                      kind: 'block',
                                      id: {
                                        kind: 'identifier',
                                        name: '2'
                                      },
                                      body: [
                                        {
                                          kind: 'block',
                                          id: {
                                            kind: 'identifier',
                                            name: '1'
                                          },
                                          body: [
                                            {
                                              kind: 'block',
                                              id: {
                                                kind: 'identifier',
                                                name: '0'
                                              },
                                              body: [{
                                                kind: 'br_table',
                                                expr: [{
                                                  kind: 'cvtop',
                                                  type: 'i32',
                                                  type1: 'i64',
                                                  operator: 'wrap',
                                                  expr: {
                                                    kind: 'get_local',
                                                    id: {
                                                      kind: 'identifier',
                                                      name: 'i'
                                                    }
                                                  }
                                                }],
                                                body: [
                                                  {
                                                    kind: 'identifier',
                                                    name: '0'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '1'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '2'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '3'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '4'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '5'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '6'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: '7'
                                                  },
                                                  {
                                                    kind: 'identifier',
                                                    name: 'default'
                                                  }
                                                ]
                                              }]
                                            },
                                            {
                                              kind: 'return',
                                              expr: {
                                                kind: 'get_local',
                                                id: {
                                                  kind: 'identifier',
                                                  name: 'i'
                                                }
                                              }
                                            }
                                          ]
                                        },
                                        {kind: 'nop'}
                                      ]
                                    }]
                                  },
                                  {
                                    kind: 'br',
                                    id: {
                                      kind: 'identifier',
                                      name: 'switch'
                                    },
                                    expr: {
                                      kind: 'binop',
                                      type: 'i64',
                                      operator: 'sub',
                                      left: {
                                        kind: 'const',
                                        type: 'i64',
                                        init: '0'
                                      },
                                      right: {
                                        kind: 'get_local',
                                        id: {
                                          kind: 'identifier',
                                          name: 'i'
                                        }
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                kind: 'set_local',
                                id: {
                                  kind: 'identifier',
                                  name: 'j'
                                },
                                init: {
                                  kind: 'const',
                                  type: 'i64',
                                  init: '101'
                                }
                              }
                            ]
                          }]
                        }]
                      },
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'switch'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'j'
                          }
                        }
                      }
                    ]
                  },
                  {
                    kind: 'const',
                    type: 'i64',
                    init: '-5'
                  }
                ]
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'arg'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'block',
              id: {
                kind: 'identifier',
                name: '2'
              },
              body: [{
                kind: 'binop',
                type: 'i32',
                operator: 'add',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '10'
                },
                right: {
                  kind: 'block',
                  id: {
                    kind: 'identifier',
                    name: '1'
                  },
                  body: [{
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'const',
                      type: 'i32',
                      init: '100'
                    },
                    right: {
                      kind: 'block',
                      id: {
                        kind: 'identifier',
                        name: '0'
                      },
                      body: [{
                        kind: 'binop',
                        type: 'i32',
                        operator: 'add',
                        left: {
                          kind: 'const',
                          type: 'i32',
                          init: '1000'
                        },
                        right: {
                          kind: 'block',
                          id: {
                            kind: 'identifier',
                            name: 'default'
                          },
                          body: [{
                            kind: 'br_table',
                            expr: [
                              {
                                kind: 'binop',
                                type: 'i32',
                                operator: 'mul',
                                left: {
                                  kind: 'const',
                                  type: 'i32',
                                  init: '2'
                                },
                                right: {
                                  kind: 'get_local',
                                  id: {
                                    kind: 'identifier',
                                    name: 'i'
                                  }
                                }
                              },
                              {
                                kind: 'binop',
                                type: 'i32',
                                operator: 'and',
                                left: {
                                  kind: 'const',
                                  type: 'i32',
                                  init: '3'
                                },
                                right: {
                                  kind: 'get_local',
                                  id: {
                                    kind: 'identifier',
                                    name: 'i'
                                  }
                                }
                              }
                            ],
                            body: [
                              {
                                kind: 'identifier',
                                name: '0'
                              },
                              {
                                kind: 'identifier',
                                name: '1'
                              },
                              {
                                kind: 'identifier',
                                name: '2'
                              },
                              {
                                kind: 'identifier',
                                name: 'default'
                              }
                            ]
                          }]
                        }
                      }]
                    }
                  }]
                }
              }]
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'corner'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'block',
              id: null,
              body: [{
                kind: 'br_table',
                expr: [{
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
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'export',
          name: 'stmt',
          id: {
            kind: 'identifier',
            name: 'stmt'
          }
        },
        {
          kind: 'export',
          name: 'expr',
          id: {
            kind: 'identifier',
            name: 'expr'
          }
        },
        {
          kind: 'export',
          name: 'arg',
          id: {
            kind: 'identifier',
            name: 'arg'
          }
        },
        {
          kind: 'export',
          name: 'corner',
          id: {
            kind: 'identifier',
            name: 'corner'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-10'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '6'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-10'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '110'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1116'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '118'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
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
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'arg',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'corner',
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
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'br_table',
            expr: [{
              kind: 'const',
              type: 'i32',
              init: '0'
            }],
            body: [{
              kind: 'literal',
              value: 3,
              raw: '3'
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unknown label'
      }
    }
  ]
}
