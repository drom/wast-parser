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
            value: 'type-local-i32'
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
              type: 'i32'
            }]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-local-i64'
          }],
          imp: null,
          type: null,
          params: [],
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
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-local-f32'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-local-f64'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-param-i32'
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
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-param-i64'
          }],
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
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-param-f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-param-f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-mixed'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'f64'
              },
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
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'f64'
              }
            ]
          }],
          body: [
            {
              kind: 'drop',
              body: [{
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
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'f32',
                operator: 'neg',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'f64',
                operator: 'neg',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 2,
                    raw: '2'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 3,
                    raw: '3'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 4,
                    raw: '4'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'f32',
                operator: 'neg',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 5,
                    raw: '5'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 6,
                    raw: '6'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 7,
                    raw: '7'
                  }
                }
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'f64',
                operator: 'neg',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 8,
                    raw: '8'
                  }
                }
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'read'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'f64'
              },
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
            type: 'f64'
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
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'f64'
              }
            ]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 5,
                raw: '5'
              },
              init: {
                kind: 'const',
                type: 'f32',
                init: '5.5'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 6,
                raw: '6'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '6'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 8,
                raw: '8'
              },
              init: {
                kind: 'const',
                type: 'f64',
                init: '8'
              }
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'cvtop',
                type: 'f64',
                type1: 'i64',
                operator: 'convert_u',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'f64',
                operator: 'add',
                left: {
                  kind: 'cvtop',
                  type: 'f64',
                  type1: 'f32',
                  operator: 'promote',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 1,
                      raw: '1'
                    }
                  }
                },
                right: {
                  kind: 'binop',
                  type: 'f64',
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
                    kind: 'binop',
                    type: 'f64',
                    operator: 'add',
                    left: {
                      kind: 'cvtop',
                      type: 'f64',
                      type1: 'i32',
                      operator: 'convert_u',
                      expr: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 3,
                          raw: '3'
                        }
                      }
                    },
                    right: {
                      kind: 'binop',
                      type: 'f64',
                      operator: 'add',
                      left: {
                        kind: 'cvtop',
                        type: 'f64',
                        type1: 'i32',
                        operator: 'convert_s',
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'literal',
                            value: 4,
                            raw: '4'
                          }
                        }
                      },
                      right: {
                        kind: 'binop',
                        type: 'f64',
                        operator: 'add',
                        left: {
                          kind: 'cvtop',
                          type: 'f64',
                          type1: 'f32',
                          operator: 'promote',
                          expr: {
                            kind: 'get_local',
                            id: {
                              kind: 'literal',
                              value: 5,
                              raw: '5'
                            }
                          }
                        },
                        right: {
                          kind: 'binop',
                          type: 'f64',
                          operator: 'add',
                          left: {
                            kind: 'cvtop',
                            type: 'f64',
                            type1: 'i64',
                            operator: 'convert_u',
                            expr: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 6,
                                raw: '6'
                              }
                            }
                          },
                          right: {
                            kind: 'binop',
                            type: 'f64',
                            operator: 'add',
                            left: {
                              kind: 'cvtop',
                              type: 'f64',
                              type1: 'i64',
                              operator: 'convert_u',
                              expr: {
                                kind: 'get_local',
                                id: {
                                  kind: 'literal',
                                  value: 7,
                                  raw: '7'
                                }
                              }
                            },
                            right: {
                              kind: 'get_local',
                              id: {
                                kind: 'literal',
                                value: 8,
                                raw: '8'
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
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
        name: 'type-local-i32',
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
        name: 'type-local-i64',
        body: []
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
        id: null,
        name: 'type-local-f32',
        body: []
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
        name: 'type-local-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-param-i32',
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
        name: 'type-param-i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-param-f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4.4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4.4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-param-f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '5.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '5.5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-mixed',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'read',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '34.8'
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
            name: 'type-local-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
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
            name: 'type-local-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
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
            name: 'type-local-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'f64'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
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
            name: 'type-param-num-vs-num'
          },
          expos: [],
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
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
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
            name: 'type-param-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
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
            name: 'type-param-num-vs-num'
          },
          expos: [],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'f64'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
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
            name: 'unbound-local'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 3,
              raw: '3'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
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
            name: 'large-local'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 14324343,
              raw: '14324343'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
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
            name: 'unbound-param'
          },
          expos: [],
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
                type: 'i64'
              }
            ]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 2,
              raw: '2'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
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
            name: 'large-param'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 714324343,
              raw: '714324343'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
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
            name: 'unbound-mixed'
          },
          expos: [],
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
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 3,
              raw: '3'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
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
            name: 'large-mixed'
          },
          expos: [],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: null,
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 214324343,
              raw: '214324343'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown local'
      }
    }
  ]
}
