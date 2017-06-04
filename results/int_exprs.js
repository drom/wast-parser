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
            value: 'i32.no_fold_cmp_s_offset'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'lt_s',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_cmp_u_offset'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
            operator: 'lt_u',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_cmp_s_offset'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_s',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            right: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_cmp_u_offset'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_u',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            right: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
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
        name: 'i32.no_fold_cmp_s_offset',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
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
        name: 'i32.no_fold_cmp_u_offset',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
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
        name: 'i64.no_fold_cmp_s_offset',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'i64.no_fold_cmp_u_offset',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'module',
      body: [{
        kind: 'func',
        id: null,
        expos: [{
          kind: 'literal',
          value: 'i64.no_fold_wrap_extend_s'
        }],
        imp: null,
        type: null,
        params: [{
          kind: 'param',
          items: [{
            kind: 'item',
            name: 'x',
            type: 'i64'
          }]
        }],
        result: {
          kind: 'result',
          type: 'i64'
        },
        local: [],
        body: [{
          kind: 'cvtop',
          type: 'i64',
          type1: 'i32',
          operator: 'extend_s',
          expr: {
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }
        }]
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_wrap_extend_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x0010203040506070'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0000000040506070'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_wrap_extend_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00a0b0c0d0e0f0a0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffd0e0f0a0'
      }
    },
    {
      kind: 'module',
      body: [{
        kind: 'func',
        id: null,
        expos: [{
          kind: 'literal',
          value: 'i64.no_fold_wrap_extend_u'
        }],
        imp: null,
        type: null,
        params: [{
          kind: 'param',
          items: [{
            kind: 'item',
            name: 'x',
            type: 'i64'
          }]
        }],
        result: {
          kind: 'result',
          type: 'i64'
        },
        local: [],
        body: [{
          kind: 'cvtop',
          type: 'i64',
          type1: 'i32',
          operator: 'extend_u',
          expr: {
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }
        }]
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_wrap_extend_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x0010203040506070'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0000000040506070'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_shl_shr_s'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'shr_s',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
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
            value: 'i32.no_fold_shl_shr_u'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'shr_u',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
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
            value: 'i64.no_fold_shl_shr_s'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_s',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'shl',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_shl_shr_u'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_u',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'shl',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_shl_shr_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
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
        name: 'i32.no_fold_shl_shr_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
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
        name: 'i64.no_fold_shl_shr_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
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
        id: null,
        name: 'i64.no_fold_shl_shr_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_shr_s_shl'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'shl',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_s',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
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
            value: 'i32.no_fold_shr_u_shl'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'shl',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_u',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
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
            value: 'i64.no_fold_shr_s_shl'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shl',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_s',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_shr_u_shl'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shl',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_u',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_shr_s_shl',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'i32.no_fold_shr_u_shl',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'i64.no_fold_shr_s_shl',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
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
        id: null,
        name: 'i64.no_fold_shr_u_shl',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_s_mul'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'div_s',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_u_mul'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'div_u',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_s_mul'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'div_s',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_u_mul'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'div_u',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '6'
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
        name: 'i32.no_fold_div_s_mul',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'i32.no_fold_div_u_mul',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'i64.no_fold_div_s_mul',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
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
        id: null,
        name: 'i64.no_fold_div_u_mul',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_s_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_u_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_s_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_u_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_div_s_self',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_div_u_self',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_div_s_self',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_div_u_self',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_rem_s_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_rem_u_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_rem_s_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_rem_u_self'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_rem_s_self',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_rem_u_self',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_rem_s_self',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_rem_u_self',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_mul_div_s'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_mul_div_u'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_mul_div_s'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_mul_div_u'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '6'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '6'
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
        name: 'i32.no_fold_mul_div_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
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
        name: 'i32.no_fold_mul_div_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
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
        name: 'i64.no_fold_mul_div_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
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
        id: null,
        name: 'i64.no_fold_mul_div_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_s_2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_s_2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '2'
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
        name: 'i32.no_fold_div_s_2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-11'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_div_s_2',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-11'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-5'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_rem_s_2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_rem_s_2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '2'
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
        name: 'i32.no_fold_rem_s_2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-11'
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
        name: 'i64.no_fold_rem_s_2',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-11'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_s_0'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_u_0'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_s_0'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_u_0'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_s_0',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_u_0',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_0',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_0',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_s_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_u_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_s_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_u_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '3'
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
        name: 'i32.div_s_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_s_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x60000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_u_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_u_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xc0000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x1000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xc000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4000000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_s_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_u_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_s_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_u_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '5'
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
        name: 'i32.div_s_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
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
        name: 'i32.div_s_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x50000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x10000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_u_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
        }]
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
        name: 'i32.div_u_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xa0000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x5000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x1000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xa000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_s_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.div_u_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_s_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.div_u_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '7'
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
        name: 'i32.div_s_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.div_s_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x70000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x10000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.div_u_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.div_u_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xe0000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_s_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x1000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.div_u_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xe000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_s_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_u_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_s_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '3'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_u_3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '3'
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
        name: 'i32.rem_s_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_s_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x60000000'
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
        name: 'i32.rem_u_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_u_3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xc0000000'
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
        name: 'i64.rem_s_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_s_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3000000000000000'
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
        id: null,
        name: 'i64.rem_u_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_u_3',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xc000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_s_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_u_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_s_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_u_5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '5'
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
        name: 'i32.rem_s_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_s_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x50000000'
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
        name: 'i32.rem_u_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_u_5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xa0000000'
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
        name: 'i64.rem_s_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_s_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x5000000000000000'
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
        id: null,
        name: 'i64.rem_u_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_u_5',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xa000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_s_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.rem_u_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_s_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.rem_u_7'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '7'
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
        name: 'i32.rem_s_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_s_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x70000000'
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
        name: 'i32.rem_u_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '71'
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
        name: 'i32.rem_u_7',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xe0000000'
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
        name: 'i64.rem_s_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_s_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7000000000000000'
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
        id: null,
        name: 'i64.rem_u_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '71'
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
        id: null,
        name: 'i64.rem_u_7',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xe000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.no_fold_div_neg1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '-1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.no_fold_div_neg1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'i64',
              init: '-1'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.no_fold_div_neg1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.no_fold_div_neg1',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    }
  ]
}
