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
            name: null
          },
          type: null,
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
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
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
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: [{
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
                }]
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fac-rec'
          },
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'n'
            },
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
                  kind: 'identifier',
                  id: 'n'
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
                  kind: 'identifier',
                  id: 'n'
                }
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  id: 'fac-rec'
                },
                expr: [{
                  kind: 'binop',
                  type: 'i64',
                  operator: 'sub',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      id: 'n'
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
          id: {
            kind: 'identifier',
            name: null
          },
          type: null,
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
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              init: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
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
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
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
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    },
                    expr: null
                  },
                  alternate: {
                    kind: 'block',
                    body: [
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
                          value: 1,
                          raw: '1'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i64',
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
                  kind: 'literal',
                  value: 2,
                  raw: '2'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fac-iter'
          },
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'n'
            },
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              body: 'i64'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'res'
              },
              body: 'i64'
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'i'
              },
              init: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'n'
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'res'
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
                kind: 'identifier',
                id: 'done'
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
                        kind: 'identifier',
                        id: 'i'
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
                      kind: 'identifier',
                      id: 'done'
                    },
                    expr: null
                  },
                  alternate: {
                    kind: 'block',
                    body: [
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          id: 'res'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'mul',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              id: 'i'
                            }
                          },
                          right: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              id: 'res'
                            }
                          }
                        }
                      },
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          id: 'i'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'sub',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              id: 'i'
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
                  kind: 'identifier',
                  id: 'res'
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
