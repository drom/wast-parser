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
            value: 'fac-rec'
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
          local: [],
          body: [{
            kind: 'if',
            type: 'i64',
            body: [
              {
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
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
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
                  exprs: [{
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
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fac-rec-named'
          },
          expo: {
            kind: 'literal',
            value: 'fac-rec-named'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'n',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'if',
            type: 'i64',
            body: [
              {
                kind: 'relop',
                type: 'i64',
                operator: 'eq',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i64',
                  init: '0'
                }
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'binop',
                type: 'i64',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  }
                },
                right: {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'fac-rec-named'
                  },
                  exprs: [{
                    kind: 'binop',
                    type: 'i64',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
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
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'fac-iter'
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
              kind: 'block',
              type: null,
              id: null,
              body: [{
                kind: 'loop',
                type: null,
                id: null,
                extra: null,
                body: [
                  {
                    kind: 'if',
                    type: null,
                    body: [
                      {
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
                      {
                        kind: 'br',
                        id: {
                          kind: 'literal',
                          value: 2,
                          raw: '2'
                        },
                        expr: null
                      },
                      {
                        kind: 'block',
                        type: null,
                        id: null,
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
                    ]
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
                value: 2,
                raw: '2'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'fac-iter-named'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'n',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'i',
                type: 'i64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'res',
                type: 'i64'
              }]
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'i'
              },
              init: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'n'
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'res'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            {
              kind: 'block',
              type: null,
              id: {
                kind: 'identifier',
                name: 'done'
              },
              body: [{
                kind: 'loop',
                type: null,
                id: {
                  kind: 'identifier',
                  name: 'loop'
                },
                extra: null,
                body: [
                  {
                    kind: 'if',
                    type: null,
                    body: [
                      {
                        kind: 'relop',
                        type: 'i64',
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
                          type: 'i64',
                          init: '0'
                        }
                      },
                      {
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          name: 'done'
                        },
                        expr: null
                      },
                      {
                        kind: 'block',
                        type: null,
                        id: null,
                        body: [
                          {
                            kind: 'set_local',
                            id: {
                              kind: 'identifier',
                              name: 'res'
                            },
                            init: {
                              kind: 'binop',
                              type: 'i64',
                              operator: 'mul',
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
                                  name: 'res'
                                }
                              }
                            }
                          },
                          {
                            kind: 'set_local',
                            id: {
                              kind: 'identifier',
                              name: 'i'
                            },
                            init: {
                              kind: 'binop',
                              type: 'i64',
                              operator: 'sub',
                              left: {
                                kind: 'get_local',
                                id: {
                                  kind: 'identifier',
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
                    ]
                  },
                  {
                    kind: 'br',
                    id: {
                      kind: 'identifier',
                      name: 'loop'
                    },
                    expr: null
                  }
                ]
              }]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'res'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'fac-opt'
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
              type: null,
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
                    kind: 'relop',
                    type: 'i64',
                    operator: 'lt_s',
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
                      init: '2'
                    }
                  },
                  expr: null
                },
                {
                  kind: 'loop',
                  type: null,
                  id: null,
                  extra: null,
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
                        type: 'i64',
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
                          kind: 'const',
                          type: 'i64',
                          init: '-1'
                        }
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
                        kind: 'relop',
                        type: 'i64',
                        operator: 'gt_s',
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
                      },
                      expr: null
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-opt',
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
      kind: 'assert_exhaustion',
      module: {
        kind: 'invoke',
        name: 'fac-rec',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1073741824'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'call stack exhausted'
      }
    }
  ]
}
