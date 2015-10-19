{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          params: [{
            kind: 'param',
            types: ['i64']
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: {
                kind: 'get_local',
                id: '0'
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            },
            consequent: {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            alternate: {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: '0'
              },
              right: {
                kind: 'call',
                id: '0',
                expr: [{
                  kind: 'binop',
                  type: 'i64',
                  operator: 'sub',
                  left: {
                    kind: 'get_local',
                    id: '0'
                  },
                  right: {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  }
                }]
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'fac-rec',
          params: [{
            kind: 'param',
            name: 'n',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'n'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            },
            consequent: {
              kind: 'const',
              type: 'i64',
              init: '1'
            },
            alternate: {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'n'
                }
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'var',
                  name: 'fac-rec'
                },
                expr: [{
                  kind: 'binop',
                  type: 'i64',
                  operator: 'sub',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'var',
                      name: 'n'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  }
                }]
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          params: [{
            kind: 'param',
            types: ['i64']
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [{
            kind: 'local',
            body: [
              'i64',
              'i64'
            ]
          }],
          body: [
            {
              kind: 'set_local',
              id: '1',
              init: {
                kind: 'get_local',
                id: '0'
              }
            },
            {
              kind: 'set_local',
              id: '2',
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {
              kind: 'label',
              id: null,
              body: {
                kind: 'loop',
                body: [{
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i64',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: '1'
                    },
                    right: {
                      kind: 'const',
                      type: 'i64',
                      init: '0'
                    }
                  },
                  consequent: {
                    kind: 'break',
                    id: '0',
                    expr: null
                  },
                  alternate: {
                    kind: 'block',
                    body: [
                      {
                        kind: 'set_local',
                        id: '2',
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'mul',
                          left: {
                            kind: 'get_local',
                            id: '1'
                          },
                          right: {
                            kind: 'get_local',
                            id: '2'
                          }
                        }
                      },
                      {
                        kind: 'set_local',
                        id: '1',
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'sub',
                          left: {
                            kind: 'get_local',
                            id: '1'
                          },
                          right: {
                            kind: 'const',
                            type: 'i64',
                            init: '1'
                          }
                        }
                      }
                    ]
                  }
                }]
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'get_local',
                id: '2'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: 'fac-iter',
          params: [{
            kind: 'param',
            name: 'n',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [
            {
              kind: 'local',
              name: 'i',
              body: 'i64'
            },
            {
              kind: 'local',
              name: 'res',
              body: 'i64'
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'i'
              },
              init: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'n'
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'res'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {
              kind: 'label',
              id: {
                kind: 'var',
                name: 'done'
              },
              body: {
                kind: 'loop',
                body: [{
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i64',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i64',
                      init: '0'
                    }
                  },
                  consequent: {
                    kind: 'break',
                    id: {
                      kind: 'var',
                      name: 'done'
                    },
                    expr: null
                  },
                  alternate: {
                    kind: 'block',
                    body: [
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'var',
                          name: 'res'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'mul',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'var',
                              name: 'i'
                            }
                          },
                          right: {
                            kind: 'get_local',
                            id: {
                              kind: 'var',
                              name: 'res'
                            }
                          }
                        }
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'var',
                          name: 'i'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'sub',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'var',
                              name: 'i'
                            }
                          },
                          right: {
                            kind: 'const',
                            type: 'i64',
                            init: '1'
                          }
                        }
                      }
                    ]
                  }
                }]
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'res'
                }
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'fac-rec'
        },
        {
          kind: 'export',
          name: 'fac-iter'
        },
        {
          kind: 'export',
          name: 'fac-rec-named'
        },
        {
          kind: 'export',
          name: 'fac-iter-named'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-rec',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '25'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7034535277573963776'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-iter',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '25'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7034535277573963776'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-rec-named',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '25'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7034535277573963776'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-iter-named',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '25'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7034535277573963776'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'fac-rec',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1073741824'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: callstack exhausted'
      }
    }
  ]
}
