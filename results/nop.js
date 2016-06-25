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
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-func-first'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {kind: 'nop'},
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-func-mid'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {kind: 'nop'},
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
          expo: {
            kind: 'literal',
            value: 'as-func-last'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {kind: 'nop'}
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-first'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-mid'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
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
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-last'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {kind: 'nop'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-first'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            body: [
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-mid'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'loop',
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-last'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'loop',
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              {kind: 'nop'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br-value'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
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
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_if-value'
          },
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
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {kind: 'nop'},
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
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_table-value'
          },
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
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [
                {kind: 'nop'},
                {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
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
          expo: {
            kind: 'literal',
            value: 'as-return-value'
          },
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'return',
              expr: {kind: 'nop'}
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-then'
          },
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
            id: null,
            body: [{
              kind: 'if',
              test: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              then: {kind: 'nop'},
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-else'
          },
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
            id: null,
            body: [{
              kind: 'if',
              test: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'dummy'
                },
                exprs: []
              },
              else: {kind: 'nop'}
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-func-first',
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
        name: 'as-func-mid',
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
        name: 'as-func-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-first',
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
        name: 'as-block-mid',
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
        name: 'as-block-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-first',
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
        name: 'as-loop-mid',
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
        name: 'as-loop-last',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br-value',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value',
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
        name: 'as-br_if-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '10'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
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
        name: 'as-br_table-value',
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
        name: 'as-br_table-value',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '10'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-return-value',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-then',
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
        name: 'as-if-then',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
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
        name: 'as-if-else',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'type-i32'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'nop'}]
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
            name: 'type-i64'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{kind: 'nop'}]
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
            name: 'type-f32'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{kind: 'nop'}]
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
            name: 'type-f64'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{kind: 'nop'}]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    }
  ]
}
