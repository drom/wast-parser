{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'block'
          }],
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
            id: {
              kind: 'identifier',
              name: 'exit'
            },
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'identifier',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop1'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              body: [{
                kind: 'loop',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                extra: null,
                body: [
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
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
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i32',
                        operator: 'eq',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '5'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'exit'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'i'
                            }
                          }
                        }]
                      }
                    ]
                  },
                  {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'cont'
                    },
                    expr: null
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop2'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              body: [{
                kind: 'loop',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                extra: null,
                body: [
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
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
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i32',
                        operator: 'eq',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '5'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'cont'
                          },
                          expr: null
                        }]
                      }
                    ]
                  },
                  {
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i32',
                        operator: 'eq',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '8'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'exit'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'i'
                            }
                          }
                        }]
                      }
                    ]
                  },
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
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
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'cont'
                    },
                    expr: null
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop3'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              body: [{
                kind: 'loop',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                extra: null,
                body: [
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
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
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i32',
                        operator: 'eq',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '5'
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'exit'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'i'
                            }
                          }
                        }]
                      }
                    ]
                  },
                  {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'max'
            },
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              body: [{
                kind: 'loop',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                extra: null,
                body: [
                  {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        }
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
                    kind: 'if',
                    id: null,
                    result: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i32',
                        operator: 'gt_u',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'max'
                          }
                        }
                      },
                      {
                        kind: 'then',
                        id: null,
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'exit'
                          },
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'i'
                            }
                          }
                        }]
                      }
                    ]
                  },
                  {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'cont'
                    },
                    expr: null
                  }
                ]
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop5'
          }],
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
            operator: 'add',
            left: {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              result: {
                kind: 'result',
                type: 'i32'
              },
              extra: null,
              body: [{
                kind: 'const',
                type: 'i32',
                init: '1'
              }]
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'loop6'
          }],
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
                init: '3'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'if'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'if',
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
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
                            kind: 'identifier',
                            name: 'l'
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
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
                            kind: 'identifier',
                            name: 'l'
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [{
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
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
                            kind: 'identifier',
                            name: 'l'
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [{
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
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
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [
                        {
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'l'
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
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
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [
                        {
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'l'
                          },
                          expr: null
                        },
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'if2'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: null,
              id: null,
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
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [{
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                        {
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    },
                    {
                      kind: 'else',
                      id: null,
                      body: [{
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
                      }]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
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
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'i'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '888'
                        }
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
                          kind: 'set_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'const',
                            type: 'i32',
                            init: '666'
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'switch'
          }],
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
            id: {
              kind: 'identifier',
              name: 'ret'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'const',
                type: 'i32',
                init: '10'
              },
              right: {
                kind: 'block',
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                id: {
                  kind: 'identifier',
                  name: 'exit'
                },
                body: [
                  {
                    kind: 'block',
                    result: null,
                    id: {
                      kind: 'identifier',
                      name: '0'
                    },
                    body: [{
                      kind: 'block',
                      result: null,
                      id: {
                        kind: 'identifier',
                        name: 'default'
                      },
                      body: [
                        {
                          kind: 'block',
                          result: null,
                          id: {
                            kind: 'identifier',
                            name: '3'
                          },
                          body: [
                            {
                              kind: 'block',
                              result: null,
                              id: {
                                kind: 'identifier',
                                name: '2'
                              },
                              body: [{
                                kind: 'block',
                                result: null,
                                id: {
                                  kind: 'identifier',
                                  name: '1'
                                },
                                body: [{
                                  kind: 'br_table',
                                  exprs: [{
                                    kind: 'get_local',
                                    id: {
                                      kind: 'literal',
                                      value: 0,
                                      raw: '0'
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
                                      name: 'default'
                                    }
                                  ]
                                }]
                              }]
                            },
                            {
                              kind: 'br',
                              id: {
                                kind: 'identifier',
                                name: 'exit'
                              },
                              expr: {
                                kind: 'const',
                                type: 'i32',
                                init: '2'
                              }
                            }
                          ]
                        },
                        {
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'ret'
                          },
                          expr: {
                            kind: 'const',
                            type: 'i32',
                            init: '3'
                          }
                        }
                      ]
                    }]
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '5'
                  }
                ]
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'return'
          }],
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: {
                kind: 'identifier',
                name: 'default'
              },
              body: [{
                kind: 'block',
                result: null,
                id: {
                  kind: 'identifier',
                  name: '1'
                },
                body: [
                  {
                    kind: 'block',
                    result: null,
                    id: {
                      kind: 'identifier',
                      name: '0'
                    },
                    body: [
                      {
                        kind: 'br_table',
                        exprs: [{
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 0,
                            raw: '0'
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
                          }
                        ]
                      },
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'default'
                        },
                        expr: null
                      }
                    ]
                  },
                  {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  }
                ]
              }]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'br_if0'
          }],
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
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            },
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: {
                kind: 'identifier',
                name: 'outer'
              },
              body: [
                {
                  kind: 'block',
                  result: null,
                  id: {
                    kind: 'identifier',
                    name: 'inner'
                  },
                  body: [
                    {
                      kind: 'br_if',
                      id: {
                        kind: 'identifier',
                        name: 'inner'
                      },
                      test: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      },
                      expr: null
                    },
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'or',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x1'
                        }
                      }
                    },
                    {
                      kind: 'br_if',
                      id: {
                        kind: 'identifier',
                        name: 'inner'
                      },
                      test: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      },
                      expr: null
                    },
                    {
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      },
                      init: {
                        kind: 'binop',
                        type: 'i32',
                        operator: 'or',
                        left: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        },
                        right: {
                          kind: 'const',
                          type: 'i32',
                          init: '0x2'
                        }
                      }
                    }
                  ]
                },
                {
                  kind: 'drop',
                  body: [{
                    kind: 'br_if',
                    id: {
                      kind: 'identifier',
                      name: 'outer'
                    },
                    test: {
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
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'binop',
                            type: 'i32',
                            operator: 'or',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'identifier',
                                name: 'i'
                              }
                            },
                            right: {
                              kind: 'const',
                              type: 'i32',
                              init: '0x4'
                            }
                          }
                        },
                        {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        }
                      ]
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  }]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'or',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0x8'
                    }
                  }
                },
                {
                  kind: 'drop',
                  body: [{
                    kind: 'br_if',
                    id: {
                      kind: 'identifier',
                      name: 'outer'
                    },
                    test: {
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
                            kind: 'identifier',
                            name: 'i'
                          },
                          init: {
                            kind: 'binop',
                            type: 'i32',
                            operator: 'or',
                            left: {
                              kind: 'get_local',
                              id: {
                                kind: 'identifier',
                                name: 'i'
                              }
                            },
                            right: {
                              kind: 'const',
                              type: 'i32',
                              init: '0x10'
                            }
                          }
                        },
                        {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            name: 'i'
                          }
                        }
                      ]
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }]
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'or',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'i'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0x20'
                    }
                  }
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  }
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
            value: 'br_if1'
          }],
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
            id: {
              kind: 'identifier',
              name: 'l0'
            },
            body: [
              {
                kind: 'drop',
                body: [{
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'l0'
                  },
                  test: {
                    kind: 'block',
                    result: {
                      kind: 'result',
                      type: 'i32'
                    },
                    id: {
                      kind: 'identifier',
                      name: 'l1'
                    },
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'identifier',
                        name: 'l1'
                      },
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }]
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'br_if2'
          }],
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
            id: {
              kind: 'identifier',
              name: 'l0'
            },
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
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'identifier',
                        name: 'l0'
                      },
                      expr: {
                        kind: 'block',
                        result: {
                          kind: 'result',
                          type: 'i32'
                        },
                        id: {
                          kind: 'identifier',
                          name: 'l1'
                        },
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'l1'
                          },
                          expr: {
                            kind: 'const',
                            type: 'i32',
                            init: '1'
                          }
                        }]
                      }
                    }]
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'br_if3'
          }],
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
              name: 'i1',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'drop',
              body: [{
                kind: 'binop',
                type: 'i32',
                operator: 'add',
                left: {
                  kind: 'block',
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  id: {
                    kind: 'identifier',
                    name: 'l0'
                  },
                  body: [
                    {
                      kind: 'drop',
                      body: [{
                        kind: 'br_if',
                        id: {
                          kind: 'identifier',
                          name: 'l0'
                        },
                        test: {
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
                                kind: 'identifier',
                                name: 'i1'
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
                                kind: 'identifier',
                                name: 'i1'
                              }
                            }
                          ]
                        },
                        expr: {
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
                                kind: 'identifier',
                                name: 'i1'
                              },
                              init: {
                                kind: 'const',
                                type: 'i32',
                                init: '2'
                              }
                            },
                            {
                              kind: 'get_local',
                              id: {
                                kind: 'identifier',
                                name: 'i1'
                              }
                            }
                          ]
                        }
                      }]
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  ]
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i1'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'br'
          }],
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
            id: {
              kind: 'identifier',
              name: 'l0'
            },
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
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'identifier',
                        name: 'l0'
                      },
                      expr: {
                        kind: 'block',
                        result: {
                          kind: 'result',
                          type: 'i32'
                        },
                        id: {
                          kind: 'identifier',
                          name: 'l1'
                        },
                        body: [{
                          kind: 'br',
                          id: {
                            kind: 'identifier',
                            name: 'l1'
                          },
                          expr: {
                            kind: 'const',
                            type: 'i32',
                            init: '1'
                          }
                        }]
                      }
                    }]
                  },
                  {
                    kind: 'else',
                    id: null,
                    body: [{
                      kind: 'block',
                      result: null,
                      id: null,
                      body: [{
                        kind: 'drop',
                        body: [{
                          kind: 'block',
                          result: {
                            kind: 'result',
                            type: 'i32'
                          },
                          id: {
                            kind: 'identifier',
                            name: 'l1'
                          },
                          body: [{
                            kind: 'br',
                            id: {
                              kind: 'identifier',
                              name: 'l1'
                            },
                            expr: {
                              kind: 'const',
                              type: 'i32',
                              init: '1'
                            }
                          }]
                        }]
                      }]
                    }]
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'shadowing'
          }],
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
            id: {
              kind: 'identifier',
              name: 'l1'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'xor',
              left: {
                kind: 'br',
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'redefinition'
          }],
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
            id: {
              kind: 'identifier',
              name: 'l1'
            },
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'block',
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                body: [{
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }]
              },
              right: {
                kind: 'block',
                result: {
                  kind: 'result',
                  type: 'i32'
                },
                id: {
                  kind: 'identifier',
                  name: 'l1'
                },
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    name: 'l1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }
                }]
              }
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'loop3',
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
        name: 'loop4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'loop5',
        body: []
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
        id: null,
        name: 'loop6',
        body: []
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
        id: null,
        name: 'if',
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
        id: null,
        name: 'if2',
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
        id: null,
        name: 'switch',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'return',
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
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
        name: 'br_if0',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1d'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'br_if1',
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
        name: 'br_if2',
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
        name: 'br_if3',
        body: []
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
        id: null,
        name: 'br',
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
        name: 'shadowing',
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
        name: 'redefinition',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
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
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [
              {
                kind: 'unop',
                type: 'f32',
                operator: 'neg',
                expr: {
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'l'
                  },
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  expr: null
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
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'br_if',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              test: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
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
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'br_if',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              test: {
                kind: 'const',
                type: 'f32',
                init: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
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
