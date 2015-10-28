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
            name: 'f32.add'
          },
          type: null,
          param: [
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
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.sub'
          },
          type: null,
          param: [
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
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.mul'
          },
          type: null,
          param: [
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
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.div'
          },
          type: null,
          param: [
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
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.sqrt'
          },
          type: null,
          param: [{
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
            operator: 'sqrt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.abs'
          },
          type: null,
          param: [{
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
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.neg'
          },
          type: null,
          param: [{
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
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.copysign'
          },
          type: null,
          param: [
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
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.ceil'
          },
          type: null,
          param: [{
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
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.floor'
          },
          type: null,
          param: [{
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
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.trunc'
          },
          type: null,
          param: [{
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
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.nearest'
          },
          type: null,
          param: [{
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
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.add'
          },
          type: null,
          param: [
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
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.sub'
          },
          type: null,
          param: [
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
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.mul'
          },
          type: null,
          param: [
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
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.div'
          },
          type: null,
          param: [
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
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.sqrt'
          },
          type: null,
          param: [{
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
            operator: 'sqrt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.abs'
          },
          type: null,
          param: [{
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
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.neg'
          },
          type: null,
          param: [{
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
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.copysign'
          },
          type: null,
          param: [
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
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.ceil'
          },
          type: null,
          param: [{
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
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.floor'
          },
          type: null,
          param: [{
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
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.trunc'
          },
          type: null,
          param: [{
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
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.nearest'
          },
          type: null,
          param: [{
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
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'f32.add'
        },
        {
          kind: 'export',
          name: 'f32.sub'
        },
        {
          kind: 'export',
          name: 'f32.mul'
        },
        {
          kind: 'export',
          name: 'f32.div'
        },
        {
          kind: 'export',
          name: 'f32.sqrt'
        },
        {
          kind: 'export',
          name: 'f32.abs'
        },
        {
          kind: 'export',
          name: 'f32.neg'
        },
        {
          kind: 'export',
          name: 'f32.copysign'
        },
        {
          kind: 'export',
          name: 'f32.ceil'
        },
        {
          kind: 'export',
          name: 'f32.floor'
        },
        {
          kind: 'export',
          name: 'f32.trunc'
        },
        {
          kind: 'export',
          name: 'f32.nearest'
        },
        {
          kind: 'export',
          name: 'f64.add'
        },
        {
          kind: 'export',
          name: 'f64.sub'
        },
        {
          kind: 'export',
          name: 'f64.mul'
        },
        {
          kind: 'export',
          name: 'f64.div'
        },
        {
          kind: 'export',
          name: 'f64.sqrt'
        },
        {
          kind: 'export',
          name: 'f64.abs'
        },
        {
          kind: 'export',
          name: 'f64.neg'
        },
        {
          kind: 'export',
          name: 'f64.copysign'
        },
        {
          kind: 'export',
          name: 'f64.ceil'
        },
        {
          kind: 'export',
          name: 'f64.floor'
        },
        {
          kind: 'export',
          name: 'f64.trunc'
        },
        {
          kind: 'export',
          name: 'f64.nearest'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.1234567890'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1.2345e-10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.123456789'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p23'
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
        init: '0x1p23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p+23'
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
        init: '0x1.000004p+23'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.1234567890'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1.2345e-10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1f9add37c11f7p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+63'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1024.25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1008'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000001716p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-1009'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p-53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p52'
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
        init: '0x1p52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p+52'
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
        init: '0x1.0000000000002p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f33e1fbca27aap-413'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6b192891ed61p+249'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6b192891ed61p+249'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.46f75d130eeb1p+76'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.25275d6f7a4acp-184'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.46f75d130eeb1p+76'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.04dec9265a731p-148'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.11eed4e8c127cp-12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.11eed4e8c127cp-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.05773b7166b0ap+497'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.134022f2da37bp+66'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.05773b7166b0ap+497'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ef4f794282a82p+321'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.14a82266badep+394'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.14a82266badep+394'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f8dd15ca97d4ap+179'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.367317d1fe8bfp-527'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f8dd15ca97d4ap+179'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5db08d739228cp+155'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fb316fa147dcbp-61'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5db08d739228cp+155'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bbb403cb85c07p-404'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7e44046b8bbf3p-979'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.bbb403cb85c07p-404'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.34d38af291831p+147'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9890b47439953p+139'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.366c1ba705bcap+147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b61dedf4e0306p+3'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.09e2f31773c4ap+290'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.09e2f31773c4ap+290'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bf68acc263a0fp-777'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5f9352965e5a6p+1004'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.5f9352965e5a6p+1004'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.76eaa70911f51p+516'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2d746324ce47ap+493'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.76eaa963fabb6p+516'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b637d82c15a7ap-967'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cc654ccab4152p-283'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cc654ccab4152p-283'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a5b1fb66e846ep-509'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4bdd36f0bb5ccp-860'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.a5b1fb66e846ep-509'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.14108da880f9ep+966'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.417f35701e89fp+800'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.14108da880f9ep+966'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fa0caf21ffebcp+804'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4ca8fdcff89f9p+826'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4ca8f5e7c5e31p+826'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.016f1fcbdfd38p+784'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.375dffcbc9a2cp+746'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.016f1fcbe4b0fp+784'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dffda6d5bff3ap+624'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f9e8cc2dff782p+674'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f9e8cc2dff77bp+674'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fff4b43687dfbp+463'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0fd5617c4a809p+517'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0fd5617c4a809p+517'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.535d380035da2p-995'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cce37dddbb73bp-963'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cce37ddf0ed0fp-963'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d91cd3fc0c66fp+752'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4e18c80229734p+952'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.4e18c80229734p+952'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.afc70fd36e372p+193'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd10a9b377b46p+273'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.bd10a9b377b46p+273'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2abd570b078b2p+302'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b3c1ad759cb5bp-423'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.2abd570b078b2p+302'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5b2ae84c0686cp-317'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dba7a1c022823p+466'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.dba7a1c022823p+466'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ac627bd7cbf38p-198'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.2312e265b8d59p-990'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.ac627bd7cbf38p-198'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.397be95d10fddp+719'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e13909d198d32p+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e13909d198d32p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.234a5a0412f41p+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.53e9106c9367p+161'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.234a5a0412f41p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a86bdb66cbb32p+562'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d10ff29e1d6e8p+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d10ff29e1d6e8p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dc295727a06e2p+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5e6979d7b24fp+485'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.dc295727a06e2p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.3ff7dee2861c6p-557'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.84a2c18238b4cp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.84a2c18238b4cp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.2d2c9b631ae47p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.8e173a51d11a7p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.bb43d5b4ebfeep-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.ce7d534f2c7ep-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.32f94dc4b7ee5p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0176a113e46c5p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.44d9fb78bf5d3p-1021'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.02766a20d263fp-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.46153089288f2p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.89e17f0fdc567p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d9a93a01fd27dp-1021'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.94b87a7a0efcap-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.3f3d1a052fa2bp-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4b78292c7d2adp-1021'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6b16b62f14fc2p-1021'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '65536.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c21151a709b6cp-78'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0a12fff8910f6p-115'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c21151a701663p-78'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c57912aae2f64p-982'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dbfbd4800b7cfp-1010'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c579128d2338fp-982'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ffef4399af9c6p-254'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.edb96dfaea8b1p-200'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.edb96dfaea8b1p-200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.363eee391cde2p-39'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a65462000265fp-69'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.363eee32838c9p-39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.59016dba002a1p-25'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5d4374f124cccp-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.5d436f8d1f15dp-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e15'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.93e592p+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e20'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e25'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1848874880.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '19954563072.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+65'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '77.1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '850'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e15'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.93e5939a08ceap+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e20'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d6329f1c35ca5p+132'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e25'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.11b0ec57e649bp+166'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1848874847.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '19954562207.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '3.6893488147419111424e+19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '77.1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '850'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '65534.99999999999272404'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f99fb602c89b7p-341'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6caab46a31a2ep-575'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.68201f986e9d7p-915'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.86999c5eee379p-9'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6e3b9e0d53e0dp+723'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.17654a0ef35f5p+715'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.069571b176f9p+367'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e248b6ab0a0e3p-652'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.eeaff575cae1dp-285'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c217645777dd2p+775'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d93f5715dd646p+60'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a0064aa1d920dp+836'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.848981b6e694ap-276'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f5aacb64a0d19p+896'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.7cb2296e6c2e5p+621'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.db3bd2a286944p-599'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ce910af1d55cap-425'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.d6accdd538a39p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.aca223916012p-57'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2b2b4958dd228p-966'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fa74eccae5615p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd062def16cffp-488'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7ddd91a0c4c0ep-536'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.a5f4d7769d90dp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c6a56169e9cep-772'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.517d55a474122p-255'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.12baf260afb77p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.08951b0b41705p-516'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.102dc27168d09p-507'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8ca6dbf3f592bp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.123456789'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.702264p-7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '8391667.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '12582905.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.55754p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+53'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.dcbf6ap+0'
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
        init: '0x1.dcbf68p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.555556p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '4195835'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3145727'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.557542p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.123456789'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.01123456789'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '8391667.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '12582905.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.55753f1d9ba27p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+53'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '4'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5555555555555p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '4195835'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3145727'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.557541c7c6b43p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9c52726aed366p+585'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7d0568c75660fp+195'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1507ca2a65f23p+390'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.522672f461667p+546'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.36d36572c9f71p+330'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1681369370619p+216'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.01051b4e8cd61p+185'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2cbb5ca3d33ebp+965'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b59471598a2f3p-781'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5f93bb80fc2cbp+217'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7e051aae9f0edp+427'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d732fa926ba4fp-211'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e251d762163ccp+825'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3ee63581e1796p+349'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8330077d90a07p+476'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dcbf69f10006dp+0'
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
        init: '0x0.772fda7c4001bp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e14169442fbcap-1011'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.505451d62ff7dp+12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.b727e85f38b39p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d3ebe726ec964p-144'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4a7bfc0b83608p+880'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.5a9d8c50cbf87p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6c3def770aee1p-393'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8b84724347598p+631'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.3af0707fcd0c7p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.16abda1bb3cb3p-856'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6c9c7198eb1e6p+166'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.c3a8fd6741649p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7057d6ab553cap-1005'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2abf1e98660ebp+23'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.04ee8d8ec01cdp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b2348a1c81899p+61'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4a58aad903dd3p-861'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.507c1e2a41b35p+922'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.23fa5137a918ap-130'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7268db1951263p-521'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.93965e0d896bep+390'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dcb3915d82deep+669'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.50caaa1dc6b19p+638'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.6a58ec814b09dp+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.046e378c0cc46p+182'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ac925009a922bp+773'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.3720aa94dab18p-592'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8945fd69d8e11p-871'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0a37870af809ap-646'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.7a2e286c62382p-225'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.82002af0ea1f3p-57'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d0a9b0c2fa339p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a952fbd1fc17cp-58'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1e12b515db471p-102'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.41fc3c94fba5p-42'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.c6e50cccb7cb6p-61'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.aba5adcd6f583p-41'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.17dfac639ce0fp-112'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.872b0a008c326p+71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cf82510d0ae6bp+89'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0207d86498053p+97'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cbdc804e2cf14p-8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4c82cbb508e21p-11'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6b57208c2d5d5p+52'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d48e8b369129ap-64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0263fcc94f259p-164'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0131485de579fp-82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.352dfa278c43dp+338'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.195607dac5417p+169'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.b15daa23924fap+402'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4d143db561493p+201'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.518c8e68cb753p-37'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.9fb8ef1ad5bfdp-19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.86d8b6518078ep-370'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.3c5142a48fcadp-185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.abs',
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
        name: 'f32.abs',
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
        name: 'f32.abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.abs',
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
        name: 'f64.abs',
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
        name: 'f64.abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.neg',
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.neg',
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
        name: 'f32.neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.neg',
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.neg',
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
        name: 'f64.neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
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
        name: 'f32.copysign',
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
        name: 'f32.copysign',
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
        name: 'f32.copysign',
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
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x0f1e2'
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
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x0f1e2'
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
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0f1e2'
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
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0f1e2'
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
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
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
        name: 'f64.copysign',
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
        name: 'f64.copysign',
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
        name: 'f64.copysign',
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
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x0f1e27a6b'
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
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x0f1e27a6b'
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
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0f1e27a6b'
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
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0f1e27a6b'
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
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-3.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-3.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-4.0'
      }
    }
  ]
}
