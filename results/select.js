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
            value: 'select_i32'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'lhs',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'rhs',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
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
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'lhs'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'rhs'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_i64'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'lhs',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'rhs',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'lhs'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'rhs'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_f32'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'lhs',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'rhs',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'lhs'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'rhs'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_f64'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'lhs',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'rhs',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'lhs'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'rhs'
              }
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_trap_l'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'cond',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {kind: 'unreachable'},
            else: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_trap_r'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'cond',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            else: {kind: 'unreachable'},
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'cond'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'select_unreached'
          }],
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
            },
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
            },
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
            },
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'f32',
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
            {kind: 'unreachable'}
          ]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_i32',
        body: [
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
            init: '1'
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
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
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
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1'
          },
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_i32',
        body: [
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
        name: 'select_i32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
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
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xf0f0f0f0'
          }
        ]
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
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x20304'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x20304'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
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
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x20304'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
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
        type: 'f32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x20304'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
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
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x20304'
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
        type: 'f32',
        init: 'n0x20304'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x20304'
          },
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x20304'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1'
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
        type: 'f64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x20304'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1'
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
        type: 'f64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x20304'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x20304'
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
        type: 'f64',
        init: 'n0x20304'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_trap_l',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_trap_l',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_trap_r',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'select_trap_r',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable executed'
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
            name: 'arity-0'
          },
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'select',
            then: {kind: 'nop'},
            else: {kind: 'nop'},
            test: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
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
