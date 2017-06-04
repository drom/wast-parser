{
  kind: 'script',
  body: [
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'local-index'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'drop',
              body: [{
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }]
            }
          ]
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
            name: 'global-index'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'drop',
              body: [{
                kind: 'get_global',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }]
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown global'
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
            name: 'func-index'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: []
            }
          ]
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
            name: 'label-index'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'br',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              expr: null
            }
          ]
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
            name: 'type-num-vs-num'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
            }
          ]
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
            name: 'type-poly-num-vs-num'
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
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
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
            name: 'type-poly-transitive-num-vs-num'
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
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i64',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
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
            name: 'type-unconsumed-const'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
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
            name: 'type-unconsumed-result'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: null
            }
          ]
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
            name: 'type-unconsumed-result2'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: null,
              right: null
            }
          ]
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
            name: 'type-unconsumed-poly0'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
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
            name: 'type-unconsumed-poly1'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
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
            name: 'type-unconsumed-poly2'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'select',
              then: null,
              else: null,
              test: null
            }
          ]
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
            name: 'type-unary-num-vs-void-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'drop',
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'eqz',
                    expr: {kind: 'nop'}
                  }]
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
            name: 'type-unary-num-vs-num-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                kind: 'drop',
                body: [{
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: {
                    kind: 'const',
                    type: 'f32',
                    init: '1'
                  }
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
            name: 'type-binary-num-vs-void-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'drop',
                  body: [{
                    kind: 'relop',
                    type: 'f32',
                    operator: 'eq',
                    left: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    right: null
                  }]
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
            name: 'type-binary-num-vs-num-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
                kind: 'drop',
                body: [{
                  kind: 'relop',
                  type: 'f32',
                  operator: 'eq',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  right: {
                    kind: 'const',
                    type: 'f32',
                    init: '0'
                  }
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
            name: 'type-block-value-num-vs-void-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
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
            name: 'type-block-value-num-vs-num-after-break'
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
                init: '1'
              },
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
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-loop-value-num-vs-void-after-break'
          },
          expo: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
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
            name: 'type-loop-value-num-vs-num-after-break'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-func-value-num-vs-void-after-break'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
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
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
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
            name: 'type-func-value-num-vs-num-after-break'
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
          body: [
            {
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
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
            name: 'type-unary-num-vs-void-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'return',
              expr: null
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: {kind: 'nop'}
                }]
              }]
            }
          ]
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
            name: 'type-unary-num-vs-num-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'return',
              expr: null
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                }
              }]
            }
          ]
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
            name: 'type-binary-num-vs-void-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'return',
              expr: null
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'relop',
                  type: 'f32',
                  operator: 'eq',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  right: null
                }]
              }]
            }
          ]
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
            name: 'type-binary-num-vs-num-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'return',
              expr: null
            },
            {
              kind: 'drop',
              body: [{
                kind: 'relop',
                type: 'f32',
                operator: 'eq',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                right: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                }
              }]
            }
          ]
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
            name: 'type-block-value-num-vs-void-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'return',
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
            name: 'type-block-value-num-vs-num-after-return'
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
                init: '1'
              },
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-loop-value-num-vs-void-after-return'
          },
          expo: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'return',
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
            name: 'type-loop-value-num-vs-num-after-return'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-func-value-num-vs-void-after-return'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'return',
              expr: null
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
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
            name: 'type-func-value-num-vs-num-after-return'
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
          body: [
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
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
            name: 'type-unary-num-vs-void-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: {kind: 'nop'}
                }]
              }]
            }
          ]
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
            name: 'type-unary-num-vs-num-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                }
              }]
            }
          ]
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
            name: 'type-binary-num-vs-void-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'relop',
                  type: 'f32',
                  operator: 'eq',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  right: null
                }]
              }]
            }
          ]
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
            name: 'type-binary-num-vs-num-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'drop',
              body: [{
                kind: 'relop',
                type: 'f32',
                operator: 'eq',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                right: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                }
              }]
            }
          ]
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
            name: 'type-block-value-num-vs-void-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {kind: 'unreachable'},
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
            name: 'type-block-value-num-vs-num-after-unreachable'
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
                init: '1'
              },
              {kind: 'unreachable'},
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-loop-value-num-vs-void-after-unreachable'
          },
          expo: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {kind: 'unreachable'},
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              ]
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
            name: 'type-loop-value-num-vs-num-after-unreachable'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {kind: 'unreachable'},
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-func-value-num-vs-void-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
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
            name: 'type-func-value-num-vs-num-after-unreachable'
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
          body: [
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
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
            name: 'type-unary-num-vs-void-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: {kind: 'nop'}
                }]
              }]
            }
          ]
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
            name: 'type-unary-num-vs-num-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                }
              }]
            }
          ]
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
            name: 'type-binary-num-vs-void-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'relop',
                  type: 'f32',
                  operator: 'eq',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  right: null
                }]
              }]
            }
          ]
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
            name: 'type-binary-num-vs-num-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'relop',
                type: 'f32',
                operator: 'eq',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                right: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                }
              }]
            }
          ]
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
            name: 'type-block-value-num-vs-void-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
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
            name: 'type-block-value-num-vs-num-after-nested-unreachable'
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
                init: '1'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-loop-value-num-vs-void-after-nested-unreachable'
          },
          expo: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [{kind: 'unreachable'}]
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              ]
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
            name: 'type-loop-value-num-vs-num-after-nested-unreachable'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-func-value-num-vs-void-after-nested-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
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
            name: 'type-func-value-num-vs-num-after-nested-unreachable'
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
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
            },
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
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
            name: 'type-unary-num-vs-void-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              }]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'unop',
                  type: 'i32',
                  operator: 'eqz',
                  expr: {kind: 'nop'}
                }]
              }]
            }
          ]
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
            name: 'type-unary-num-vs-num-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                }
              }]
            }
          ]
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
            name: 'type-binary-num-vs-void-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              }]
            },
            {
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'drop',
                body: [{
                  kind: 'relop',
                  type: 'f32',
                  operator: 'eq',
                  left: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  },
                  right: null
                }]
              }]
            }
          ]
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
            name: 'type-binary-num-vs-num-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              }]
            },
            {
              kind: 'drop',
              body: [{
                kind: 'relop',
                type: 'f32',
                operator: 'eq',
                left: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                right: {
                  kind: 'const',
                  type: 'f32',
                  init: '0'
                }
              }]
            }
          ]
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
            name: 'type-block-value-num-vs-void-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
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
            name: 'type-block-value-num-vs-num-after-infinite-loop'
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
                init: '1'
              },
              {
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                }]
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-loop-value-num-vs-void-after-infinite-loop'
          },
          expo: null,
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
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [
                {
                  kind: 'loop',
                  id: null,
                  result: null,
                  extra: null,
                  body: [{
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    },
                    expr: null
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
            name: 'type-loop-value-num-vs-num-after-infinite-loop'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
            extra: null,
            body: [
              {
                kind: 'loop',
                id: null,
                result: null,
                extra: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                }]
              },
              {
                kind: 'const',
                type: 'f32',
                init: '0'
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
            name: 'type-func-value-num-vs-void-after-infinite-loop'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
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
            name: 'type-func-value-num-vs-num-after-infinite-loop'
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
          body: [
            {
              kind: 'loop',
              id: null,
              result: null,
              extra: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: null
              }]
            },
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
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
            name: 'type-unary-num-vs-void-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'drop',
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'eqz',
                    expr: {kind: 'nop'}
                  }]
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
            name: 'type-unary-num-vs-num-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'drop',
                  body: [{
                    kind: 'unop',
                    type: 'i32',
                    operator: 'eqz',
                    expr: {
                      kind: 'const',
                      type: 'f32',
                      init: '1'
                    }
                  }]
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
            name: 'type-binary-num-vs-void-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'drop',
                  body: [{
                    kind: 'relop',
                    type: 'f32',
                    operator: 'eq',
                    left: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    right: null
                  }]
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
            name: 'type-binary-num-vs-num-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'drop',
                  body: [{
                    kind: 'relop',
                    type: 'f32',
                    operator: 'eq',
                    left: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    },
                    right: {
                      kind: 'const',
                      type: 'f32',
                      init: '0'
                    }
                  }]
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
            name: 'type-if-value-num-vs-void-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'const',
                  type: 'i32',
                  init: '1'
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
            name: 'type-if-value-num-vs-num-in-dead-body'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
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
                  kind: 'const',
                  type: 'f32',
                  init: '0'
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
            name: 'type-block-value-num-vs-void-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }]
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
            name: 'type-block-value-num-vs-num-in-dead-body'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
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
                  kind: 'block',
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  id: null,
                  body: [{
                    kind: 'const',
                    type: 'f32',
                    init: '0'
                  }]
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
            name: 'type-block-value-num-vs-void-in-dead-body'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
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
                  kind: 'loop',
                  id: null,
                  result: null,
                  extra: null,
                  body: [{
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }]
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
            name: 'type-block-value-num-vs-num-in-dead-body'
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
            kind: 'if',
            id: null,
            result: {
              kind: 'result',
              type: 'i32'
            },
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
                  kind: 'loop',
                  id: null,
                  result: {
                    kind: 'result',
                    type: 'i32'
                  },
                  extra: null,
                  body: [{
                    kind: 'const',
                    type: 'f32',
                    init: '0'
                  }]
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
            name: 'type-return-second-num-vs-num'
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
          body: [
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'f64',
                init: '1'
              }
            }
          ]
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
            name: 'type-br-second-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              {
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                expr: {
                  kind: 'const',
                  type: 'f64',
                  init: '1'
                }
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
            name: 'type-br_if-cond-num-vs-num-after-unreachable'
          },
          expo: null,
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
              test: {kind: 'unreachable'},
              expr: {
                kind: 'const',
                type: 'f32',
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
            name: 'type-br_table-num-vs-num-after-unreachable'
          },
          expo: null,
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
              exprs: [
                {kind: 'unreachable'},
                {
                  kind: 'const',
                  type: 'f32',
                  init: '1'
                }
              ],
              body: [{
                kind: 'literal',
                value: 0,
                raw: '0'
              }]
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
            name: 'type-br_table-label-num-vs-num-after-unreachable'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {kind: 'unreachable'},
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'f32',
                    init: '0'
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
            name: 'type-br_table-label-num-vs-label-void-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'block',
                result: {
                  kind: 'result',
                  type: 'f32'
                },
                id: null,
                body: [
                  {kind: 'unreachable'},
                  {
                    kind: 'br_table',
                    exprs: [{
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }],
                    body: [
                      {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      },
                      {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    ]
                  }
                ]
              },
              {
                kind: 'drop',
                body: []
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
            name: 'type-br_table-label-num-vs-label-num-after-unreachable'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              result: {
                kind: 'result',
                type: 'f64'
              },
              id: null,
              body: [
                {
                  kind: 'block',
                  result: {
                    kind: 'result',
                    type: 'f32'
                  },
                  id: null,
                  body: [
                    {kind: 'unreachable'},
                    {
                      kind: 'br_table',
                      exprs: [{
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }],
                      body: [
                        {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        },
                        {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        },
                        {
                          kind: 'literal',
                          value: 1,
                          raw: '1'
                        }
                      ]
                    }
                  ]
                },
                {
                  kind: 'drop',
                  body: []
                },
                {
                  kind: 'const',
                  type: 'f64',
                  init: '0'
                }
              ]
            },
            {
              kind: 'drop',
              body: []
            }
          ]
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
            name: 'type-block-value-nested-unreachable-num-vs-void'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
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
            name: 'type-block-value-nested-unreachable-void-vs-num'
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
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
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
            name: 'type-block-value-nested-unreachable-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i64'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
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
            name: 'type-block-value-nested-unreachable-num2-vs-void'
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
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
                    },
                    {kind: 'unreachable'}
                  ]
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
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
            name: 'type-block-value-nested-br-num-vs-void'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
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
            name: 'type-block-value-nested-br-void-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'br',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                },
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
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
            name: 'type-block-value-nested-br-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
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
            name: 'type-block-value-nested2-br-num-vs-void'
          },
          expo: null,
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
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [{
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: null
                  }]
                }
              ]
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
            name: 'type-block-value-nested2-br-void-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 2,
                    raw: '2'
                  },
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }]
              }]
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
            name: 'type-block-value-nested2-br-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i32'
            },
            id: null,
            body: [{
              kind: 'block',
              result: {
                kind: 'result',
                type: 'i64'
              },
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i64',
                  init: '0'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [{
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  }]
                }
              ]
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
            name: 'type-block-value-nested2-br-num2-vs-void'
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
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
                    },
                    {
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      },
                      expr: null
                    }
                  ]
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
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
            name: 'type-block-value-nested-return-num-vs-void'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            result: null,
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'return',
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
            name: 'type-block-value-nested-return-void-vs-num'
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
            kind: 'block',
            result: null,
            id: null,
            body: [{
              kind: 'block',
              result: null,
              id: null,
              body: [{
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              }]
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
            name: 'type-block-value-nested-return-num-vs-num'
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
            kind: 'block',
            result: {
              kind: 'result',
              type: 'i64'
            },
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{
                  kind: 'return',
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
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
            name: 'type-block-value-nested-return-num2-vs-void'
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
          body: [
            {
              kind: 'block',
              result: null,
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '3'
                },
                {
                  kind: 'block',
                  result: null,
                  id: null,
                  body: [
                    {
                      kind: 'const',
                      type: 'i64',
                      init: '1'
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
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '9'
            }
          ]
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
            name: 'type-loop-value-nested-unreachable-num-vs-void'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '3'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
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
            name: 'type-loop-value-nested-unreachable-void-vs-num'
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
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
            body: [{
              kind: 'block',
              result: null,
              id: null,
              body: [{kind: 'unreachable'}]
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
            name: 'type-loop-value-nested-unreachable-num-vs-num'
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
            kind: 'loop',
            id: null,
            result: {
              kind: 'result',
              type: 'i64'
            },
            extra: null,
            body: [
              {
                kind: 'const',
                type: 'i64',
                init: '0'
              },
              {
                kind: 'block',
                result: null,
                id: null,
                body: [{kind: 'unreachable'}]
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
            name: 'type-cont-last-void-vs-empty'
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
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {kind: 'nop'}
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
            name: 'type-cont-last-num-vs-empty'
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
            kind: 'loop',
            id: null,
            result: null,
            extra: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
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
    }
  ]
}
