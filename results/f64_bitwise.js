{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'abs'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'abs',
            expr: {
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
          expo: {
            kind: 'literal',
            value: 'neg'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
            expr: {
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
          expo: {
            kind: 'literal',
            value: 'copysign'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
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
            kind: 'binop',
            type: 'f64',
            operator: 'copysign',
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
                name: 'y'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
            init: '-inf'
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
        id: null,
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
            init: 'inf'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'inf'
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
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
            init: 'inf'
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
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
            init: 'inf'
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
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
            init: 'nan'
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
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
            init: 'nan'
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
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0p+0'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0p+0'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1022'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1022'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p+0'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p+0'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.921fb54442d18p+2'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.921fb54442d18p+2'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp+1023'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+1023'
        }]
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
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
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
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
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
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0p+0'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0p+0'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1022'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1022'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p+0'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p+0'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.921fb54442d18p+2'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.921fb54442d18p+2'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp+1023'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+1023'
        }]
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
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
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
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    }
  ]
}
