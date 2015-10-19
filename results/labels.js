{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: 'block',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: {
              kind: 'var',
              name: 'exit'
            },
            body: [
              {
                kind: 'break',
                id: {
                  kind: 'var',
                  name: 'exit'
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
                init: '0'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: 'loop1',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            name: 'i',
            body: 'i32'
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'var',
                name: 'exit'
              },
              extra: null,
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'var',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
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
                      type: 'i32',
                      init: '5'
                    }
                  },
                  consequent: {
                    kind: 'break',
                    id: {
                      kind: 'var',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: 'loop2',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            name: 'i',
            body: 'i32'
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'loop',
              id: {
                kind: 'var',
                name: 'exit'
              },
              extra: {
                kind: 'var',
                name: 'cont'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'var',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
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
                      type: 'i32',
                      init: '5'
                    }
                  },
                  consequent: {
                    kind: 'break',
                    id: {
                      kind: 'var',
                      name: 'cont'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '-1'
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
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
                      type: 'i32',
                      init: '8'
                    }
                  },
                  consequent: {
                    kind: 'break',
                    id: {
                      kind: 'var',
                      name: 'exit'
                    },
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    }
                  },
                  alternate: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'var',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'var',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: 'switch',
          params: [{
            kind: 'param',
            types: ['i32']
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'label',
            id: {
              kind: 'var',
              name: 'ret'
            },
            body: {
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'const',
                type: 'i32',
                init: '10'
              },
              right: {
                kind: 'switch',
                id: {
                  kind: 'var',
                  name: 'exit'
                },
                type: 'i32',
                before: {
                  kind: 'get_local',
                  id: '0'
                },
                body: [
                  {
                    kind: 'case',
                    test: '1',
                    body: [{
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '2',
                    body: [{
                      kind: 'break',
                      id: {
                        kind: 'var',
                        name: 'exit'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '2'
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: '3',
                    body: [{
                      kind: 'break',
                      id: {
                        kind: 'var',
                        name: 'ret'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '3'
                      }
                    }],
                    fallthrough: false
                  }
                ],
                after: {
                  kind: 'const',
                  type: 'i32',
                  init: '4'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: 'return',
          params: [{
            kind: 'param',
            types: ['i32']
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'switch',
            type: 'i32',
            before: {
              kind: 'get_local',
              id: '0'
            },
            body: [
              {
                kind: 'case',
                test: '1',
                body: [{
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }],
                fallthrough: false
              },
              {
                kind: 'case',
                test: '2',
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }],
                fallthrough: false
              }
            ],
            after: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'export',
          name: 'block'
        },
        {
          kind: 'export',
          name: 'loop1'
        },
        {
          kind: 'export',
          name: 'loop2'
        },
        {
          kind: 'export',
          name: 'switch'
        },
        {
          kind: 'export',
          name: 'return'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'block',
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
        name: 'loop1',
        body: []
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
        name: 'loop2',
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
        name: 'switch',
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
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
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
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
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
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
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
        name: 'return',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    }
  ]
}
