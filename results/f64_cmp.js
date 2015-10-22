{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: 'eq',
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
          id: 'lt',
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
          id: 'le',
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
          id: 'gt',
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
          id: 'ge',
          type: null,
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'eq',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ne',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'lt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'le',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'gt',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ge',
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
        type: 'i32',
        init: '0'
      }
    }
  ]
}
