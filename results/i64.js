{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'add',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'sub',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'mul',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'div_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'div_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'rem_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'rem_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'and',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'and',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'or',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'or',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'xor',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'xor',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'shl',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shl',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'shr_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'shr_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'clz',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'i64',
            operator: 'clz',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'ctz',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'i64',
            operator: 'ctz',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'popcnt',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'i64',
            operator: 'popcnt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'eq',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'eq',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'ne',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ne',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'lt_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'lt_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'le_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'le_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'gt_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'gt_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'ge_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'ge_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'add'
        },
        {
          kind: 'export',
          name: 'sub'
        },
        {
          kind: 'export',
          name: 'mul'
        },
        {
          kind: 'export',
          name: 'div_s'
        },
        {
          kind: 'export',
          name: 'div_u'
        },
        {
          kind: 'export',
          name: 'rem_s'
        },
        {
          kind: 'export',
          name: 'rem_u'
        },
        {
          kind: 'export',
          name: 'and'
        },
        {
          kind: 'export',
          name: 'or'
        },
        {
          kind: 'export',
          name: 'xor'
        },
        {
          kind: 'export',
          name: 'shl'
        },
        {
          kind: 'export',
          name: 'shr_s'
        },
        {
          kind: 'export',
          name: 'shr_u'
        },
        {
          kind: 'export',
          name: 'clz'
        },
        {
          kind: 'export',
          name: 'ctz'
        },
        {
          kind: 'export',
          name: 'popcnt'
        },
        {
          kind: 'export',
          name: 'eq'
        },
        {
          kind: 'export',
          name: 'ne'
        },
        {
          kind: 'export',
          name: 'lt_s'
        },
        {
          kind: 'export',
          name: 'lt_u'
        },
        {
          kind: 'export',
          name: 'le_s'
        },
        {
          kind: 'export',
          name: 'le_u'
        },
        {
          kind: 'export',
          name: 'gt_s'
        },
        {
          kind: 'export',
          name: 'gt_u'
        },
        {
          kind: 'export',
          name: 'ge_s'
        },
        {
          kind: 'export',
          name: 'ge_u'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
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
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x3fffffff'
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
        init: '0x40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x3fffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x1000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '4096'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456789abcdef'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfedcba9876543210'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2236d88fe5618cf0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer overflow'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
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
        name: 'div_s',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xc000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffdf3b645a1cac09'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
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
        name: 'div_u',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8ff00ff00ff00ff0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x100000001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8ff00fef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20c49ba5e353f7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ffffffffffffffd'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '3'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8ff00ff00ff00ff0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x100000001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x80000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '809'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'and',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'and',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xf0f0f0f0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
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
        name: 'or',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
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
        name: 'xor',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0f0f0f0f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
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
        name: 'shl',
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
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        init: '0xfffffffffffffffe'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
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
        init: '0xfffffffffffffffe'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
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
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_s',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        init: '0x3fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0xc000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
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
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        init: '0x3fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0x4000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
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
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffffffffffff'
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '56'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00010000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        name: 'eq',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_s',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_s',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        name: 'le_s',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_s',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        name: 'le_u',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_u',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_s',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        name: 'gt_s',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_u',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        name: 'gt_u',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        name: 'ge_s',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        name: 'ge_s',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        name: 'ge_u',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        name: 'ge_u',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    }
  ]
}
