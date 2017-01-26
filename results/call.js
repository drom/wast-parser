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
            name: 'const-i32'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '0x132'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-i64'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'i64',
            init: '0x164'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-f32'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0xf32'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-f64'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0xf64'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'id-i32'
          },
          expo: null,
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
          id: {
            kind: 'identifier',
            name: 'id-i64'
          },
          expo: null,
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
          id: {
            kind: 'identifier',
            name: 'id-f32'
          },
          expo: null,
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
          id: {
            kind: 'identifier',
            name: 'id-f64'
          },
          expo: null,
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
          id: {
            kind: 'identifier',
            name: 'f32-i32'
          },
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'f32'
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
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32-i64'
          },
          expo: null,
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
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64-f32'
          },
          expo: null,
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
                type: 'f32'
              }
            ]
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
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64-f64'
          },
          expo: null,
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
                type: 'f64'
              }
            ]
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
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'const-i32'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'const-i64'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'const-f32'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'const-f64'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'id-i32'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '32'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'id-i64'
            },
            exprs: [{
              kind: 'const',
              type: 'i64',
              init: '64'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'id-f32'
            },
            exprs: [{
              kind: 'const',
              type: 'f32',
              init: '1.32'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'id-f64'
            },
            exprs: [{
              kind: 'const',
              type: 'f64',
              init: '1.64'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'f32-i32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f32',
                init: '32.1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '32'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'i32-i64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '32'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '64'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'f64-f32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'f32',
                init: '32'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'i64-f64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '64.1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fac'
          },
          expo: {
            kind: 'literal',
            value: 'fac'
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
                    kind: 'identifier',
                    name: 'fac'
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
            name: 'fac-acc'
          },
          expo: {
            kind: 'literal',
            value: 'fac-acc'
          },
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
                type: 'i64'
              }
            ]
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
              },
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                }
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'fac-acc'
                },
                exprs: [
                  {
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
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      }
                    }
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fib'
          },
          expo: {
            kind: 'literal',
            value: 'fib'
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
                operator: 'le_u',
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
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'binop',
                type: 'i64',
                operator: 'add',
                left: {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'fib'
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
                      init: '2'
                    }
                  }]
                },
                right: {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'fib'
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
            name: 'even'
          },
          expo: {
            kind: 'literal',
            value: 'even'
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            type: 'i32',
            body: [
              {
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
              },
              {
                kind: 'const',
                type: 'i32',
                init: '44'
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'odd'
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
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'odd'
          },
          expo: {
            kind: 'literal',
            value: 'odd'
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            type: 'i32',
            body: [
              {
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
              },
              {
                kind: 'const',
                type: 'i32',
                init: '99'
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'even'
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
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'runaway'
          },
          expo: {
            kind: 'literal',
            value: 'runaway'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'runaway'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mutual-runaway1'
          },
          expo: {
            kind: 'literal',
            value: 'mutual-runaway'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'mutual-runaway2'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mutual-runaway2'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'mutual-runaway1'
            },
            exprs: []
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x132'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x164'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0xf32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0xf64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '64.1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
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
        name: 'fac-acc',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-acc',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-acc',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac-acc',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '25'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10946'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '77'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '77'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_exhaustion',
      module: {
        kind: 'invoke',
        name: 'runaway',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'call stack exhausted'
      }
    },
    {
      kind: 'assert_exhaustion',
      module: {
        kind: 'invoke',
        name: 'mutual-runaway',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'call stack exhausted'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: {
                kind: 'call',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                exprs: []
              }
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: {
                kind: 'call',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                exprs: []
              }
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: [{
              kind: 'const',
              type: 'i64',
              init: '1'
            }]
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-0-vs-1'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: []
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
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
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-0-vs-2'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: []
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
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
                  type: 'i32'
                }
              ]
            }],
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-1-vs-0'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '1'
              }]
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-2-vs-0'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'f64',
                  init: '2'
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
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-first-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [
                {kind: 'nop'},
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
            expo: null,
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
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-second-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {kind: 'nop'}
              ]
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
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
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-first-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'f64',
                  init: '1'
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
            expo: null,
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
                  type: 'f64'
                }
              ]
            }],
            result: null,
            local: [],
            body: []
          }
        ]
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
        body: [
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-second-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'f64',
                  init: '1'
                }
              ]
            }]
          },
          {
            kind: 'func',
            id: null,
            expo: null,
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
                  type: 'i32'
                }
              ]
            }],
            result: null,
            local: [],
            body: []
          }
        ]
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
            name: 'unbound-func'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
            exprs: []
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function'
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
            name: 'large-func'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'literal',
              value: 1012321300,
              raw: '1012321300'
            },
            exprs: []
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function'
      }
    }
  ]
}
