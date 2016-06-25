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
            value: 'as-block-first'
          },
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
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  },
                  expr: null
                },
                {
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-mid'
          },
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
              kind: 'block',
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
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  },
                  expr: null
                },
                {
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-last'
          },
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
          body: [{
            kind: 'block',
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-first-value'
          },
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
                  init: '10'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '11'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-mid-value'
          },
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
            kind: 'block',
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
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
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
            value: 'as-loop-first'
          },
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
            kind: 'loop',
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
                  init: '3'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-mid'
          },
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
            kind: 'loop',
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '4'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-last'
          },
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
          body: [{
            kind: 'loop',
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br-value'
          },
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_if-value'
          },
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                expr: null
              },
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_table-value'
          },
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
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  },
                  expr: null
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
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
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-return-value'
          },
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
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'return',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                expr: null
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-then'
          },
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
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'if',
              test: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              then: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                }
              },
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-else'
          },
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
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'if',
              test: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              else: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '4'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'nested-block-value'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '4'
                  },
                  right: {
                    kind: 'block',
                    id: null,
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
                          init: '8'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 0,
                            raw: '0'
                          }
                        }
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '16'
                      }
                    ]
                  }
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
            value: 'nested-br-value'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
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
                        kind: 'br_if',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        test: {
                          kind: 'const',
                          type: 'i32',
                          init: '8'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 0,
                            raw: '0'
                          }
                        }
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '4'
                      }
                    ]
                  }
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '16'
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
            value: 'nested-br_if-value'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
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
                        kind: 'br_if',
                        id: {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        test: {
                          kind: 'const',
                          type: 'i32',
                          init: '8'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 0,
                            raw: '0'
                          }
                        }
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '4'
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
                  kind: 'const',
                  type: 'i32',
                  init: '16'
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
            value: 'nested-br_if-value-cond'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
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
                    init: '4'
                  },
                  expr: {
                    kind: 'block',
                    id: null,
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
                          init: '8'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 0,
                            raw: '0'
                          }
                        }
                      },
                      {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    ]
                  }
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '16'
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
            value: 'nested-br_table-value'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'br_table',
                  exprs: [
                    {
                      kind: 'block',
                      id: null,
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
                            init: '8'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'literal',
                              value: 0,
                              raw: '0'
                            }
                          }
                        },
                        {
                          kind: 'const',
                          type: 'i32',
                          init: '4'
                        }
                      ]
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  ],
                  body: [{
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '16'
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
            value: 'nested-br_table-value-index'
          },
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            right: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'br_table',
                  exprs: [
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '4'
                    },
                    {
                      kind: 'block',
                      id: null,
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
                            init: '8'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'literal',
                              value: 0,
                              raw: '0'
                            }
                          }
                        },
                        {
                          kind: 'const',
                          type: 'i32',
                          init: '1'
                        }
                      ]
                    }
                  ],
                  body: [{
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '16'
                }
              ]
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-first',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-first',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-mid',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-mid',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-last',
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
        name: 'as-block-last',
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
        name: 'as-block-first-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'as-block-first-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'as-block-mid-value',
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
        name: 'as-block-mid-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'as-loop-first',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-first',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-mid',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-mid',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'as-loop-last',
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
        name: 'as-loop-last',
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
        name: 'as-br-value',
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
        name: 'as-br-value',
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
        name: 'as-br_if-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '10'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '10'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-return-value',
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
        name: 'as-return-value',
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
        name: 'as-if-then',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-then',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-then',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-then',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
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
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-block-value',
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
        name: 'nested-block-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'nested-br-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-br-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'nested-br_if-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-br_if-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'nested-br_if-value-cond',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-br_if-value-cond',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'nested-br_table-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-br_table-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'nested-br_table-value-index',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nested-br_table-value-index',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
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
            name: 'type-false-i32'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'ctz',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: null
              }
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
            name: 'type-false-i64'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'i64',
              operator: 'ctz',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: null
              }
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
            name: 'type-false-f32'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: null
              }
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
            name: 'type-false-f64'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: null
              }
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
            name: 'type-true-i32'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'ctz',
              expr: {
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
              }
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
            name: 'type-true-i64'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'i64',
              operator: 'ctz',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                expr: null
              }
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
            name: 'type-true-f32'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                },
                expr: null
              }
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
            name: 'type-true-f64'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                expr: null
              }
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
            name: 'type-false-arg-void-vs-num'
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
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
            name: 'type-true-arg-void-vs-num'
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
            name: 'type-false-arg-num-vs-num'
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
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
            name: 'type-true-arg-num-vs-num'
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
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
            name: 'type-cond-void-vs-i32'
          },
          expo: null,
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
            name: 'type-cond-num-vs-i32'
          },
          expo: null,
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
                type: 'i64',
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
          id: {
            kind: 'identifier',
            name: 'type-arg-cond-void-vs-i32'
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: {kind: 'nop'}
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
            name: 'type-arg-cond-num-vs-i32'
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
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i64',
                  init: '0'
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
            name: 'unbound-label'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
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
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown label'
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
            name: 'unbound-nested-label'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'block',
              id: null,
              body: [{
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 5,
                  raw: '5'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                expr: null
              }]
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown label'
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
            name: 'large-label'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'br_if',
            id: {
              kind: 'literal',
              value: 4294967297,
              raw: '0x100000001'
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
      failure: {
        kind: 'literal',
        value: 'unknown label'
      }
    }
  ]
}
