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
            value: 'abs'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
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
          expos: [{
            kind: 'literal',
            value: 'neg'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
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
          expos: [{
            kind: 'literal',
            value: 'copysign'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
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
            kind: 'binop',
            type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'inf'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-inf'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'inf'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
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
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
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
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
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
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
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
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
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
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
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
          type: 'f32',
          init: '-0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
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
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
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
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
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
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
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
          type: 'f32',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-nan'
        }]
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
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
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
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x0p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
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
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
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
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
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
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
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
          type: 'f32',
          init: '-0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x1p-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '0x1p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.921fb6p+2'
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
          type: 'f32',
          init: '0x1.921fb6p+2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.921fb6p+2'
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
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
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
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
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
          type: 'f32',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
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
          type: 'f32',
          init: '-nan'
        }]
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
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    }
  ]
}
