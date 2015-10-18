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
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
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
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
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
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
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
          name: 'div',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
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
          name: 'sqrt',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'sqrt',
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
          name: 'min',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
            operator: 'min',
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
          name: 'max',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
            operator: 'max',
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
          name: 'ceil',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'ceil',
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
          name: 'floor',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'floor',
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
          name: 'trunc',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'trunc',
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
          name: 'nearest',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'nearest',
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
          name: 'abs',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'abs',
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
          name: 'neg',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
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
          name: 'copysign',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f64'
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'f64',
            operator: 'copysign',
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
          name: 'div'
        },
        {
          kind: 'export',
          name: 'sqrt'
        },
        {
          kind: 'export',
          name: 'min'
        },
        {
          kind: 'export',
          name: 'max'
        },
        {
          kind: 'export',
          name: 'ceil'
        },
        {
          kind: 'export',
          name: 'floor'
        },
        {
          kind: 'export',
          name: 'trunc'
        },
        {
          kind: 'export',
          name: 'nearest'
        },
        {
          kind: 'export',
          name: 'abs'
        },
        {
          kind: 'export',
          name: 'neg'
        },
        {
          kind: 'export',
          name: 'copysign'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000002p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000002p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1021'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1021'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+3'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+3'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000002p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000002p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fffffffffffffp-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1021'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1021'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.721fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d21fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.521fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+3'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+3'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.8p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.8p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8p-1022'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.8p-1022'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.8p-1022'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8p-1022'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-2'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-2'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000006p-1022'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p-1020'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+1'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.3bd3cc9be45dep+5'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.3bd3cc9be45dep+5'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.3bd3cc9be45dep+5'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.3bd3cc9be45dep+5'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-51'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1022'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
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
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
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
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000002p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000002p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000002p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000002p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.28be60db9391p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.28be60db9391p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.28be60db9391p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.28be60db9391p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c883p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c883p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c883p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c883p-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.2p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.2p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.2p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.2p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c883p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c883p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c883p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c883p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.4p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.4p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.4p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.4p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d19p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d19p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d19p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d19p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c882p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c882p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.45f306dc9c882p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.45f306dc9c882p+1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.921fb54442d18p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+0'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.921fb54442d18p+2'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
  ]