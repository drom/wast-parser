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
            value: 'type-i32'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'drop',
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
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              }]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-i64'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'drop',
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
                    init: '0'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              }]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f32'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'drop',
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
                    init: '0'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              }]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f64'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'drop',
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
                    type: 'f64',
                    init: '0'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              }]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-i32-value'
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
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-i64-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i64'
            },
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
                  init: '2'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f32-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'f32'
            },
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
                  init: '3'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'type-f64-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'f64'
            },
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
                  type: 'f64',
                  init: '4'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-first'
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
              kind: 'block',
              result: null,
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
          expos: [{
            kind: 'literal',
            value: 'as-block-mid'
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
              kind: 'block',
              result: null,
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
          expos: [{
            kind: 'literal',
            value: 'as-block-last'
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
          body: [{
            kind: 'block',
            result: null,
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
          expos: [{
            kind: 'literal',
            value: 'as-block-first-value'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
                body: [{
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
                }]
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '11'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-mid-value'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
                kind: 'drop',
                body: [{
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
                }]
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '21'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-block-last-value'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
                  kind: 'const',
                  type: 'i32',
                  init: '11'
                },
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loop-first'
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
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [
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
              }]
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
          expos: [{
            kind: 'literal',
            value: 'as-loop-mid'
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
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
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
              }]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '4'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-loop-last'
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
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
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
          expos: [{
            kind: 'literal',
            value: 'as-br-value'
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
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-cond'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              expr: null
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-value'
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
            id: null,
            body: [
              {
                kind: 'drop',
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
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '2'
                    }
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_if-value-cond'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
                body: [{
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  },
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
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    }
                  }
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_table-index'
          }],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [{
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
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }
              }],
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
          expos: [{
            kind: 'literal',
            value: 'as-br_table-value'
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
            id: null,
            body: [
              {
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
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '2'
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '3'
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
              },
              {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-br_table-value-index'
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
            id: null,
            body: [
              {
                kind: 'br_table',
                exprs: [
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
                      init: '1'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '3'
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
                  }
                ]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-return-value'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i64'
            },
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
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-cond'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'if',
              id: null,
              result: {
                kind: 'result',
                type: 'i32'
              },
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
                  kind: 'then',
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '3'
                  }]
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-then'
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
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
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
                  body: [{
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
                        value: 1,
                        raw: '1'
                      }
                    },
                    expr: null
                  }]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'dummy'
                    },
                    exprs: []
                  }]
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-if-else'
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
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
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
                  body: [{
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'dummy'
                    },
                    exprs: []
                  }]
                },
                {
                  kind: 'else',
                  id: null,
                  body: [{
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
                        value: 1,
                        raw: '1'
                      }
                    },
                    expr: null
                  }]
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-first'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'select',
              then: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '10'
                }
              },
              else: {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              test: {
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
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-second'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'select',
              then: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              else: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '10'
                }
              },
              test: {
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
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-select-cond'
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
            id: null,
            body: [{
              kind: 'select',
              then: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              else: {
                kind: 'const',
                type: 'i32',
                init: '2'
              },
              test: {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '10'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f'
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
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-first'
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
            id: null,
            body: [{
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f'
              },
              exprs: [
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
                    init: '12'
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
                  init: '2'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-mid'
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
            id: null,
            body: [{
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
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
                    init: '13'
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
                  init: '3'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call-last'
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
            id: null,
            body: [{
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
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
                    init: '14'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'func'
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
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'check'
          },
          expr: {
            kind: 'func',
            id: null,
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
            body: []
          }
        },
        {
          kind: 'table',
          expo: null,
          index: [],
          items: {
            kind: 'elem',
            items: [{
              kind: 'identifier',
              name: 'func'
            }]
          }
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-func'
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
            id: null,
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'identifier',
                    name: 'check'
                  }
                }
              ],
              exprs: [
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
                    kind: 'const',
                    type: 'i32',
                    init: '10'
                  }
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-first'
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
            id: null,
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'identifier',
                    name: 'check'
                  }
                }
              ],
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
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
                    kind: 'const',
                    type: 'i32',
                    init: '10'
                  }
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-mid'
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
            id: null,
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'identifier',
                    name: 'check'
                  }
                }
              ],
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
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
                    kind: 'const',
                    type: 'i32',
                    init: '10'
                  }
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-call_indirect-last'
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
            id: null,
            body: [{
              kind: 'call_indirect',
              type: [
                [],
                {
                  kind: 'type',
                  id: {
                    kind: 'identifier',
                    name: 'check'
                  }
                }
              ],
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '2'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
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
                    kind: 'const',
                    type: 'i32',
                    init: '10'
                  }
                }
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-set_local-value'
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
          body: [{
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
                  value: 0,
                  raw: '0'
                },
                init: {
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'const',
                    type: 'i32',
                    init: '17'
                  },
                  expr: {
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
                kind: 'const',
                type: 'i32',
                init: '-1'
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
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'block',
            result: {
              kind: 'result',
              type: 'f64'
            },
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
                  type: 'f64',
                  init: '1.0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-binary-left'
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
            id: null,
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
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
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-binary-right'
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
            id: null,
            body: [{
              kind: 'binop',
              type: 'i32',
              operator: 'sub',
              left: {
                kind: 'const',
                type: 'i32',
                init: '10'
              },
              right: {
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
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 0,
            raw: [
              [' '],
              '0'
            ]
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'as-memory.grow-size'
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
            id: null,
            body: [{
              kind: 'memory.grow',
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
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'nested-block-value'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
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
                    result: {
                      kind: 'result',
                      type: 'i32'
                    },
                    id: null,
                    body: [
                      {
                        kind: 'drop',
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
                        }]
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
          expos: [{
            kind: 'literal',
            value: 'nested-br-value'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
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
                    result: {
                      kind: 'result',
                      type: 'i32'
                    },
                    id: null,
                    body: [
                      {
                        kind: 'drop',
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
                        }]
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
          expos: [{
            kind: 'literal',
            value: 'nested-br_if-value'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
                },
                {
                  kind: 'drop',
                  body: [{
                    kind: 'br_if',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
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
                          kind: 'drop',
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
                          }]
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
          expos: [{
            kind: 'literal',
            value: 'nested-br_if-value-cond'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
                },
                {
                  kind: 'drop',
                  body: [{
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
                      result: {
                        kind: 'result',
                        type: 'i32'
                      },
                      id: null,
                      body: [
                        {
                          kind: 'drop',
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
                          }]
                        },
                        {
                          kind: 'const',
                          type: 'i32',
                          init: '1'
                        }
                      ]
                    }
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
          expos: [{
            kind: 'literal',
            value: 'nested-br_table-value'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
                },
                {
                  kind: 'br_table',
                  exprs: [
                    {
                      kind: 'block',
                      result: {
                        kind: 'result',
                        type: 'i32'
                      },
                      id: null,
                      body: [
                        {
                          kind: 'drop',
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
                          }]
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
          expos: [{
            kind: 'literal',
            value: 'nested-br_table-value-index'
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
              result: {
                kind: 'result',
                type: 'i32'
              },
              id: null,
              body: [
                {
                  kind: 'drop',
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }]
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
                      result: {
                        kind: 'result',
                        type: 'i32'
                      },
                      id: null,
                      body: [
                        {
                          kind: 'drop',
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
                          }]
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
        id: null,
        name: 'type-i32',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-i64',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-f32',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-f64',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-i32-value',
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
        name: 'type-i64-value',
        body: []
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
        id: null,
        name: 'type-f32-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'type-f64-value',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'as-block-last-value',
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
        id: null,
        name: 'as-block-last-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'as-br-value',
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
        name: 'as-br_if-cond',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_if-value',
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
        name: 'as-br_if-value-cond',
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
        id: null,
        name: 'as-br_if-value-cond',
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
        id: null,
        name: 'as-br_table-index',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-br_table-value',
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
        name: 'as-br_table-value-index',
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
        name: 'as-return-value',
        body: []
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
        id: null,
        name: 'as-if-cond',
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
        id: null,
        name: 'as-if-cond',
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'as-select-first',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'as-select-first',
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
        id: null,
        name: 'as-select-second',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'as-select-second',
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
        id: null,
        name: 'as-select-cond',
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
        name: 'as-call-first',
        body: []
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
        name: 'as-call-mid',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call-last',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-call_indirect-func',
        body: []
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
        id: null,
        name: 'as-call_indirect-first',
        body: []
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
        id: null,
        name: 'as-call_indirect-mid',
        body: []
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
        id: null,
        name: 'as-call_indirect-last',
        body: []
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
        id: null,
        name: 'as-set_local-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        id: null,
        name: 'as-set_local-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '17'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-unary-operand',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'as-binary-left',
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
        name: 'as-binary-right',
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
        name: 'as-memory.grow-size',
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
            name: 'type-false-arg-num-vs-void'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                type: 'i32',
                init: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
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
            name: 'type-true-arg-num-vs-void'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                type: 'i32',
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
          id: {
            kind: 'identifier',
            name: 'type-false-arg-void-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {kind: 'nop'},
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
            name: 'type-true-arg-void-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {kind: 'nop'},
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
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
            name: 'type-false-arg-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
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
                    init: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'drop',
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
                    init: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
            name: 'type-arg-void-vs-num-nested'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {
                kind: 'block',
                result: null,
                id: null,
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
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
          expos: [],
          imp: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'block',
              result: null,
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
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'br_if',
            id: {
              kind: 'literal',
              value: 268435457,
              raw: '0x10000001'
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
