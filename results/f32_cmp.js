{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'eq',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
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
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
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
          name: 'lt',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
            operator: 'lt',
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
          name: 'le',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
            operator: 'le',
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
          name: 'gt',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
            operator: 'gt',
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
          name: 'ge',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'f32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ge',
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
          name: 'eq'
        },
        {
          kind: 'export',
          name: 'ne'
        },
        {
          kind: 'export',
          name: 'lt'
        },
        {
          kind: 'export',
          name: 'le'
        },
        {
          kind: 'export',
          name: 'gt'
        },
        {
          kind: 'export',
          name: 'ge'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'lt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'le',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'gt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x0p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.921fb6p+2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
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
        name: 'ge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
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
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    }
  ]
}
