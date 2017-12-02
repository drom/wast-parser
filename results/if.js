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
          expos: [],
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
          expos: [{
            kind: 'literal',
            value: 'empty'
          }],
          imp: null,
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
          body: [
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: []
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: []
                },
                {
                  kind: 'else',
                  id: null,
                  body: []
                }
              ]
            },
            {
              kind: 'if',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: []
                }
              ]
            },
            {
              kind: 'if',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: []
                },
                {
                  kind: 'else',
                  id: null,
                  body: []
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'singular'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: [{kind: 'nop'}]
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: [{kind: 'nop'}]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{kind: 'nop'}]
                }
              ]
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
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '7'
                  }]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '8'
                  }]
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'multi'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
                  id: null,
                  body: []
                },
                {
                  kind: 'else',
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
                }
              ]
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
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                },
                {
                  kind: 'else',
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
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'nested'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
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
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              {
                kind: 'then',
                id: null,
                body: [
                  {
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
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
                            kind: 'block',
                            result: null,
                            id: null,
                            body: []
                          },
                          {kind: 'nop'}
                        ]
                      }
                    ]
                  },
                  {
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: []
                      },
                      {
                        kind: 'else',
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
                            kind: 'block',
                            result: null,
                            id: null,
                            body: []
                          },
                          {kind: 'nop'}
                        ]
                      }
                    ]
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
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
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
                            init: '9'
                          }
                        ]
                      },
                      {
                        kind: 'else',
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
                            init: '10'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                kind: 'else',
                id: null,
                body: [
                  {
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
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
                            kind: 'block',
                            result: null,
                            id: null,
                            body: []
                          },
                          {kind: 'nop'}
                        ]
                      }
                    ]
                  },
                  {
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: []
                      },
                      {
                        kind: 'else',
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
                            kind: 'block',
                            result: null,
                            id: null,
                            body: []
                          },
                          {kind: 'nop'}
                        ]
                      }
                    ]
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
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      },
                      {
                        kind: 'then',
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
                            init: '10'
                          }
                        ]
                      },
                      {
                        kind: 'else',
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
                            init: '11'
                          }
                        ]
                      }
                    ]
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
            value: 'as-unary-operand'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
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
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                      init: '13'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      init: '-13'
                    }
                  ]
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-binary-operand'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
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
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                      init: '3'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      init: '-3'
                    }
                  ]
                }
              ]
            },
            right: {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                },
                {
                  kind: 'then',
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
                      init: '4'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      init: '-5'
                    }
                  ]
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-test-operand'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
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
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                      init: '13'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      init: '0'
                    }
                  ]
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-compare-operand'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
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
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'f32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                {
                  kind: 'then',
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
                      type: 'f32',
                      init: '3'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      type: 'f32',
                      init: '-3'
                    }
                  ]
                }
              ]
            },
            right: {
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'f32'
              },
              body: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                },
                {
                  kind: 'then',
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
                      type: 'f32',
                      init: '4'
                    }
                  ]
                },
                {
                  kind: 'else',
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
                      type: 'f32',
                      init: '-4'
                    }
                  ]
                }
              ]
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'break-bare'
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
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                  kind: 'else',
                  id: null,
                  body: [{kind: 'unreachable'}]
                }
              ]
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
                  body: [{kind: 'unreachable'}]
                },
                {
                  kind: 'else',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                  kind: 'else',
                  id: null,
                  body: [{kind: 'unreachable'}]
                }
              ]
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
                  body: [{kind: 'unreachable'}]
                },
                {
                  kind: 'else',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                }
              ]
            },
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'then',
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
                  kind: 'else',
                  id: null,
                  body: [{kind: 'unreachable'}]
                }
              ]
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
                  body: [{kind: 'unreachable'}]
                },
                {
                  kind: 'else',
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
                }
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
          expos: [{
            kind: 'literal',
            value: 'break-value'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
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
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              {
                kind: 'then',
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
              },
              {
                kind: 'else',
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
                      init: '21'
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '20'
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
            value: 'effects'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
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
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'if',
              id: null,
              result: null,
              body: [
                {
                  kind: 'block',
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  id: null,
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
                        type: 'i32',
                        init: '1'
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
                  kind: 'then',
                  id: null,
                  body: [
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'sub',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 1,
                            raw: '1'
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
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                          kind: 'const',
                          type: 'i32',
                          init: '100'
                        }
                      }
                    }
                  ]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'sub',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 1,
                            raw: '1'
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
                      kind: 'set_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                          kind: 'const',
                          type: 'i32',
                          init: '3'
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
                        value: 1,
                        raw: '1'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
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
                          kind: 'const',
                          type: 'i32',
                          init: '1000'
                        }
                      }
                    }
                  ]
                }
              ]
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
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'empty',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'empty',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'empty',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'empty',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'singular',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'singular',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'singular',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '10'
        }]
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
        name: 'singular',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-10'
        }]
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
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'multi',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'multi',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
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
        name: 'multi',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-5'
        }]
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '11'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nested',
        body: [
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
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nested',
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nested',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
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
        name: 'nested',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nested',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '10'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '10'
          }
        ]
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
        name: 'nested',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'nested',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-111'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'as-unary-operand',
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
        id: null,
        name: 'as-unary-operand',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'as-unary-operand',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
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
        name: 'as-binary-operand',
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-operand',
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-operand',
        body: [
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
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-operand',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
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
        init: '12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-test-operand',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'as-test-operand',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'as-compare-operand',
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
          }
        ]
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
        name: 'as-compare-operand',
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
          }
        ]
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
        body: [
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
        ]
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
        name: 'as-compare-operand',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
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
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'break-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '21'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'effects',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'effects',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-6'
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
          id: {
            kind: 'identifier',
            name: 'type-empty-i64'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
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
          id: {
            kind: 'identifier',
            name: 'type-empty-f32'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
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
          id: {
            kind: 'identifier',
            name: 'type-empty-f64'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
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
          id: {
            kind: 'identifier',
            name: 'type-empty-i32'
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
                body: []
              },
              {
                kind: 'else',
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
          id: {
            kind: 'identifier',
            name: 'type-empty-i64'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
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
                body: []
              },
              {
                kind: 'else',
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
          id: {
            kind: 'identifier',
            name: 'type-empty-f32'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
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
                body: []
              },
              {
                kind: 'else',
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
          id: {
            kind: 'identifier',
            name: 'type-empty-f64'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
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
                body: []
              },
              {
                kind: 'else',
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
          id: {
            kind: 'identifier',
            name: 'type-then-value-num-vs-void'
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
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-then-value-num-vs-void'
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
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
          id: {
            kind: 'identifier',
            name: 'type-else-value-num-vs-void'
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
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: []
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-both-value-num-vs-void'
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
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-then-value-empty-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: []
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
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
            name: 'type-then-value-empty-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
          id: {
            kind: 'identifier',
            name: 'type-both-value-empty-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: []
              },
              {
                kind: 'else',
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
          id: {
            kind: 'identifier',
            name: 'type-no-else-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-then-value-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{kind: 'nop'}]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
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
            name: 'type-then-value-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
                body: [{kind: 'nop'}]
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
            name: 'type-both-value-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{kind: 'nop'}]
              },
              {
                kind: 'else',
                id: null,
                body: [{kind: 'nop'}]
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
            name: 'type-then-value-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-then-value-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }]
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
            name: 'type-both-value-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }]
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
            name: 'type-both-different-value-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'f64',
                  init: '1'
                }]
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
            name: 'type-then-value-unreached-select'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i64'
            },
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
                  kind: 'select',
                  then: {kind: 'unreachable'},
                  else: {kind: 'unreachable'},
                  test: {kind: 'unreachable'}
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '0'
                }]
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
            name: 'type-else-value-unreached-select'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i64'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i64',
                  init: '0'
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'select',
                  then: {kind: 'unreachable'},
                  else: {kind: 'unreachable'},
                  test: {kind: 'unreachable'}
                }]
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
            name: 'type-else-value-unreached-select'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i64'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [{
                  kind: 'select',
                  then: {kind: 'unreachable'},
                  else: {kind: 'unreachable'},
                  test: {kind: 'unreachable'}
                }]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'select',
                  then: {kind: 'unreachable'},
                  else: {kind: 'unreachable'},
                  test: {kind: 'unreachable'}
                }]
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
            name: 'type-then-break-last-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
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
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-else-break-last-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
            name: 'type-then-break-empty-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
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
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-else-break-empty-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
            name: 'type-then-break-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
                id: null,
                body: [
                  {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    },
                    expr: {kind: 'nop'}
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                ]
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-else-break-void-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
                body: [
                  {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    },
                    expr: {kind: 'nop'}
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                ]
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
            name: 'type-then-break-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {
                kind: 'then',
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
              },
              {
                kind: 'else',
                id: null,
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }]
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
            name: 'type-else-break-num-vs-num'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
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
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if $a end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if else $l end)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if $a else $l end)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if else end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if else $l end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if else $l1 end $l2)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if $a else end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if $a else $a end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(func if $a else $l end $l)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mismatching label'
      }
    }
  ]
}
