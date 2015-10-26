{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'stmt',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            name: 'j',
            body: 'i32'
          }],
          body: [
            {
              kind: 'set_local',
              name: {
                kind: 'var',
                name: 'j'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '100'
              }
            },
            {
              kind: 'label',
              name: null,
              body: {
                kind: 'switch',
                type: 'i32',
                before: {
                  kind: 'get_local',
                  name: {
                    kind: 'var',
                    name: 'i'
                  }
                },
                body: [
                  {
                    kind: 'case',
                    test: '0',
                    body: [{
                      kind: 'return',
                      expr: {
                        kind: 'get_local',
                        name: {
                          kind: 'var',
                          name: 'i'
                        }
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '1',
                    body: [{kind: 'nop'}],
                    fallthrough: true
                  },
                  {
                    kind: 'case',
                    test: '2',
                    body: [],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '3',
                    body: [
                      {
                        kind: 'set_local',
                        name: {
                          kind: 'var',
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
                            name: {
                              kind: 'var',
                              name: 'i'
                            }
                          }
                        }
                      },
                      {
                        kind: 'break',
                        name: '0',
                        expr: null
                      }
                    ],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '4',
                    body: [{
                      kind: 'break',
                      name: '0',
                      expr: null
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '5',
                    body: [{
                      kind: 'set_local',
                      name: {
                        kind: 'var',
                        name: 'j'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '101'
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '6',
                    body: [{
                      kind: 'set_local',
                      name: {
                        kind: 'var',
                        name: 'j'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '101'
                      }
                    }],
                    fallthrough: true
                  }
                ],
                after: {
                  kind: 'set_local',
                  name: {
                    kind: 'var',
                    name: 'j'
                  },
                  init: {
                    kind: 'const',
                    type: 'i32',
                    init: '102'
                  }
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'get_local',
                name: {
                  kind: 'var',
                  name: 'j'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'expr',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [{
            kind: 'local',
            name: 'j',
            body: 'i64'
          }],
          body: [
            {
              kind: 'set_local',
              name: {
                kind: 'var',
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
                kind: 'label',
                name: {
                  kind: 'var',
                  name: 'l'
                },
                body: {
                  kind: 'switch',
                  type: 'i64',
                  before: {
                    kind: 'get_local',
                    name: {
                      kind: 'var',
                      name: 'i'
                    }
                  },
                  body: [
                    {
                      kind: 'case',
                      test: '0',
                      body: [{
                        kind: 'return',
                        expr: {
                          kind: 'get_local',
                          name: {
                            kind: 'var',
                            name: 'i'
                          }
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: '1',
                      body: [{kind: 'nop'}],
                      fallthrough: true
                    },
                    {
                      kind: 'case',
                      test: '2',
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: '3',
                      body: [{
                        kind: 'break',
                        name: {
                          kind: 'var',
                          name: 'l'
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
                            name: {
                              kind: 'var',
                              name: 'i'
                            }
                          }
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: '6',
                      body: [{
                        kind: 'set_local',
                        name: {
                          kind: 'var',
                          name: 'j'
                        },
                        init: {
                          kind: 'const',
                          type: 'i64',
                          init: '101'
                        }
                      }],
                      fallthrough: true
                    }
                  ],
                  after: {
                    kind: 'get_local',
                    name: {
                      kind: 'var',
                      name: 'j'
                    }
                  }
                }
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'stmt'
        },
        {
          kind: 'export',
          name: 'expr'
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
        init: '100'
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
    }
  ]
}
