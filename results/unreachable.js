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
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'dummy3'
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
          body: [{kind: 'unreachable'}]
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
            type: 'i32'
          },
          local: [],
          body: [{kind: 'unreachable'}]
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
            type: 'f64'
          },
          local: [],
          body: [{kind: 'unreachable'}]
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
          body: [{kind: 'unreachable'}]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-func-first'
          },
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
              type: 'i32',
              init: '-1'
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {kind: 'unreachable'},
            {
              kind: 'const',
              type: 'i32',
              init: '-1'
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
          imp: null,
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
            {kind: 'unreachable'}
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-func-value'
          },
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'dummy'
              },
              exprs: []
            },
            {kind: 'unreachable'}
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-first'
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
            kind: 'block',
            type: 'i32',
            id: null,
            body: [
              {kind: 'unreachable'},
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
            type: 'i32',
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
              {kind: 'unreachable'},
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
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            type: null,
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
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-value'
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
            kind: 'block',
            type: 'i32',
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
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-block-broke'
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
            kind: 'block',
            type: 'i32',
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
              {kind: 'unreachable'}
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
            type: 'i32',
            id: null,
            extra: null,
            body: [
              {kind: 'unreachable'},
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
            type: 'i32',
            id: null,
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
              {kind: 'unreachable'},
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
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'loop',
            type: null,
            id: null,
            extra: null,
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
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loop-broke'
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
            kind: 'block',
            type: 'i32',
            id: null,
            body: [{
              kind: 'loop',
              type: 'i32',
              id: null,
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
                {kind: 'unreachable'}
              ]
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br-value'
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
            kind: 'block',
            type: 'i32',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              expr: {kind: 'unreachable'}
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_if-cond'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            type: null,
            id: null,
            body: [{
              kind: 'br_if',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              test: {kind: 'unreachable'},
              expr: null
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
            type: 'i32',
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
                  test: {kind: 'unreachable'},
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
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_if-value-cond'
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
            kind: 'block',
            type: 'i32',
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
                    init: '6'
                  },
                  expr: {kind: 'unreachable'}
                }]
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_table-index'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            type: null,
            id: null,
            body: [{
              kind: 'br_table',
              exprs: [{kind: 'unreachable'}],
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
            value: 'as-br_table-value'
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
            kind: 'block',
            type: 'i32',
            id: null,
            body: [
              {
                kind: 'br_table',
                exprs: [
                  {kind: 'unreachable'},
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
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
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-br_table-value-index'
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
            kind: 'block',
            type: 'i32',
            id: null,
            body: [
              {
                kind: 'br_table',
                exprs: [
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '6'
                  },
                  {kind: 'unreachable'}
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
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-return-value'
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
            kind: 'return',
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-cond'
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
            kind: 'if',
            type: 'i32',
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
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-if-then'
          },
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
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              },
              {kind: 'unreachable'},
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
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
            value: 'as-if-else'
          },
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
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
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
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-select-first'
          },
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {kind: 'unreachable'},
            else: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            test: {
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
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-select-second'
          },
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
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            else: {kind: 'unreachable'},
            test: {
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
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-select-cond'
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
            kind: 'select',
            then: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            else: {
              kind: 'const',
              type: 'i32',
              init: '1'
            },
            test: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-call-first'
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
              name: 'dummy3'
            },
            exprs: [
              {kind: 'unreachable'},
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
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-call-mid'
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
              name: 'dummy3'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {kind: 'unreachable'},
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
          expo: {
            kind: 'literal',
            value: 'as-call-last'
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
              name: 'dummy3'
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
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'sig'
          },
          expr: {
            kind: 'func',
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
            result: null,
            local: [],
            body: []
          }
        },
        {
          kind: 'table',
          index: null,
          items: {
            kind: 'elem',
            items: [{
              kind: 'identifier',
              name: 'dummy3'
            }]
          }
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-call_indirect-func'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {kind: 'unreachable'},
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
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-call_indirect-first'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              {kind: 'unreachable'},
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
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-call_indirect-mid'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
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
              {kind: 'unreachable'},
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
          expo: {
            kind: 'literal',
            value: 'as-call_indirect-last'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'sig'
            },
            exprs: [
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
              },
              {kind: 'unreachable'}
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-set_local-value'
          },
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
            kind: 'set_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: [
              [' '],
              '1'
            ]
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-load-address'
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
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-loadN-address'
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
            kind: 'load',
            type: 'i64',
            size: 8,
            sign: true,
            offset: 0,
            align: 0,
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-store-address'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {kind: 'unreachable'},
            data: {
              kind: 'const',
              type: 'f64',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-store-value'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '2'
            },
            data: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-storeN-address'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: 8,
            offset: 0,
            align: 0,
            addr: {kind: 'unreachable'},
            data: {
              kind: 'const',
              type: 'i32',
              init: '7'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-storeN-value'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: 16,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '2'
            },
            data: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-unary-operand'
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
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-binary-left'
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
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {kind: 'unreachable'},
            right: {
              kind: 'const',
              type: 'i32',
              init: '10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-binary-right'
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
            kind: 'binop',
            type: 'i64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'i64',
              init: '10'
            },
            right: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-test-operand'
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
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-compare-left'
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
            kind: 'relop',
            type: 'f64',
            operator: 'le',
            left: {kind: 'unreachable'},
            right: {
              kind: 'const',
              type: 'f64',
              init: '10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-compare-right'
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
            kind: 'relop',
            type: 'f32',
            operator: 'ne',
            left: {
              kind: 'const',
              type: 'f32',
              init: '10'
            },
            right: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-convert-operand'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {kind: 'unreachable'}
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'as-grow_memory-size'
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
            kind: 'grow_memory',
            expr: {kind: 'unreachable'}
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'type-i32',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'type-i64',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'type-f32',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'type-f64',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-func-first',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-func-mid',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-func-last',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-func-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-block-first',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-block-mid',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-block-last',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-block-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-block-broke',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-first',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-mid',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-last',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-loop-broke',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-cond',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_if-value-cond',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-index',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-br_table-value-index',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-return-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-if-cond',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-if-then',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
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
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'as-if-else',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-select-first',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-select-first',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-select-second',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-select-second',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '6'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-select-cond',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call-first',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call-mid',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call-last',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call_indirect-func',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call_indirect-first',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call_indirect-mid',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-call_indirect-last',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-set_local-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-load-address',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-loadN-address',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-store-address',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-store-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-storeN-address',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-storeN-value',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-unary-operand',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-binary-left',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-binary-right',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-test-operand',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-compare-left',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-compare-right',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-convert-operand',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'as-grow_memory-size',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'unreachable'
      }
    }
  ]
}
