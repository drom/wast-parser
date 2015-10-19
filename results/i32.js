{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: 'add',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'sub',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
          id: 'mul',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'div_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'div_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'rem_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'rem_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'and',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
          id: 'or',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
          id: 'xor',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
          id: 'shl',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'shr_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'shr_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
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
          id: 'clz',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
          id: 'ctz',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
          id: 'popcnt',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
          id: 'eq',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'ne',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'lt_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'lt_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'le_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'le_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'gt_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'gt_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'ge_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
          id: 'ge_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x7fffffff'
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
        init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x3fffffff'
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x7fffffff'
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
        type: 'i32',
        init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x3fffffff'
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
        type: 'i32',
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
            type: 'i32',
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
        type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x10000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4096'
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
        type: 'i32',
        init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
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
        type: 'i32',
        init: '0x80000001'
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
            type: 'i32',
            init: '0x01234567'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x76543210'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x358e7470'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
        init: '0xc0000000'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffdf3b65'
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
            type: 'i32',
            init: '5'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
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
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'div_u',
        body: [
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
        init: '0x40000000'
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
            type: 'i32',
            init: '0x8ff00ff0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x10001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x8fef'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20c49b'
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
            type: 'i32',
            init: '5'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
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
        init: '0x7ffffffd'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
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
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'rem_s',
        body: [
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
            type: 'i32',
            init: '0x7fffffff'
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
        type: 'i32',
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-647'
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
            type: 'i32',
            init: '5'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
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
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
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
        type: 'i32',
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
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
        type: 'i32',
        init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x8ff00ff0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x10001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x8001'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '649'
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
            type: 'i32',
            init: '5'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
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
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
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
        name: 'and',
        body: [
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
        name: 'and',
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
        name: 'and',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
        name: 'or',
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
        name: 'or',
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
        name: 'or',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        init: '0x80000000'
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
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffff'
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
        name: 'xor',
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
        name: 'xor',
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
        name: 'xor',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
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
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
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
        name: 'shl',
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
        name: 'shl',
        body: [
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        init: '0xfffffffe'
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
            type: 'i32',
            init: '0xffffffff'
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
        init: '0xfffffffe'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x40000000'
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
        init: '0x80000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
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
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_s',
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
        name: 'shr_s',
        body: [
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x7fffffff'
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
        init: '0x3fffffff'
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
            type: 'i32',
            init: '0x80000000'
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
        init: '0xc0000000'
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
            type: 'i32',
            init: '0x40000000'
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
        init: '0x20000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
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
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'shr_u',
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
        name: 'shr_u',
        body: [
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
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
        init: '0x3fffffff'
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
            type: 'i32',
            init: '0x80000000'
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
        init: '0x40000000'
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
            type: 'i32',
            init: '0x40000000'
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
        init: '0x20000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
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
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
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
        type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffffffff'
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
          type: 'i32',
          init: '0x00010000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
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
        name: 'eq',
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
        name: 'gt_s',
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
        name: 'gt_u',
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
            type: 'i32',
            init: '0x80000000'
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
        name: 'ge_s',
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
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
            type: 'i32',
            init: '-1'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
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
        name: 'ge_u',
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
            type: 'i32',
            init: '0x80000000'
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
