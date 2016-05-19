{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: null
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'S'
          }
        },
        {
          kind: 'type',
          id: null
        },
        {
          kind: 'type',
          id: null
        },
        {
          kind: 'type',
          id: null
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'U'
          }
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'S'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'one'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 4,
              raw: '4'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '13'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'one'
          },
          id: {
            kind: 'identifier',
            name: 'one'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'two'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'two'
          },
          id: {
            kind: 'identifier',
            name: 'two'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'three'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'a',
              type: 'i32'
            }]
          }],
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
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'three'
          },
          id: {
            kind: 'identifier',
            name: 'three'
          }
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print'
          },
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 6,
              raw: '6'
            }
          },
          params: [],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'four'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_import',
            id: {
              kind: 'identifier',
              name: 'print'
            },
            exprs: [{
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'four'
          },
          id: {
            kind: 'identifier',
            name: 'four'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'one',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'two',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'three',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '11'
      }
    },
    {
      kind: 'invoke',
      name: 'four',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '83'
      }]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 42,
              raw: '42'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function type 42'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 43,
              raw: '43'
            }
          },
          params: [],
          result: null
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function type 43'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'U'
          }
        },
        {
          kind: 'table',
          items: [
            {
              kind: 'identifier',
              name: 't1'
            },
            {
              kind: 'identifier',
              name: 't2'
            },
            {
              kind: 'identifier',
              name: 't3'
            },
            {
              kind: 'identifier',
              name: 'u1'
            },
            {
              kind: 'identifier',
              name: 'u2'
            },
            {
              kind: 'identifier',
              name: 't1'
            },
            {
              kind: 'identifier',
              name: 't3'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't2'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't3'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '3'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'u1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '4'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'u2'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '5'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'callt'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'T'
            },
            exprs: [{
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'callt'
          },
          id: {
            kind: 'identifier',
            name: 'callt'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'callu'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'U'
            },
            exprs: [{
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'callu'
          },
          id: {
            kind: 'identifier',
            name: 'callu'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'undefined table index 7'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'undefined table index 100'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'undefined table index -1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'undefined table index 7'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'undefined table index -1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'T'
          }
        },
        {
          kind: 'table',
          items: [
            {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          ]
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't2'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'callt'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'T'
            },
            exprs: [{
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'callt'
          },
          id: {
            kind: 'identifier',
            name: 'callt'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    }
  ]
}
