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
            name: 'select_i32'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            },
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
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            type: 'i32',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'lhs'
              }
            },
            alternate: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'rhs'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'select_i64'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            },
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
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'select',
            type: 'i64',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'lhs'
              }
            },
            alternate: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'rhs'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'select_f32'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            },
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
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            type: 'f32',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'lhs'
              }
            },
            alternate: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'rhs'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'select_f64'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'cond',
                type: 'i32'
              }]
            },
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
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            type: 'f64',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'lhs'
              }
            },
            alternate: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'rhs'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'select_trap_l'
          },
          type: null,
          param: [{
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
            type: 'i32',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {kind: 'unreachable'},
            alternate: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'select_trap_r'
          },
          type: null,
          param: [{
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
            type: 'i32',
            test: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'cond'
              }
            },
            consequent: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            alternate: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_i32'
          },
          name: 'select_i32'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_i64'
          },
          name: 'select_i64'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_f32'
          },
          name: 'select_f32'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_f64'
          },
          name: 'select_f64'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_trap_l'
          },
          name: 'select_trap_l'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'select_trap_r'
          },
          name: 'select_trap_r'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
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
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2'
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
        name: 'select_i32',
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
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'select_i32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'select_i64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xf0f0f0f0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        init: '2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'select_f32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'select_f64',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'select_trap_l',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'select_trap_l',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'select_trap_r',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'select_trap_r',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unreachable executed'
      }
    }
  ]
}
