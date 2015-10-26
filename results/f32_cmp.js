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
            name: 'eq'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'eq',
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
            name: 'ne'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
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
            name: 'lt'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'lt',
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
            name: 'le'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'le',
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
            name: 'gt'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'gt',
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
            name: 'ge'
          },
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              type: 'f32'
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              type: 'f32'
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ge',
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
