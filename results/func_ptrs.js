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
          id: 'S'
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
          id: 'T'
        },
        {
          kind: 'type',
          id: 'U'
        },
        {
          kind: 'func',
          id: null,
          type: [
            '(',
            [],
            'type',
            [' '],
            '0',
            [],
            ')'
          ],
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'S'
            ],
            [],
            ')'
          ],
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: 'one',
          type: [
            '(',
            [],
            'type',
            [' '],
            '4',
            [],
            ')'
          ],
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
          name: 'one'
        },
        {
          kind: 'func',
          id: 'two',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'T'
            ],
            [],
            ')'
          ],
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: '0'
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
          name: 'two'
        },
        {
          kind: 'func',
          id: 'three',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'T'
            ],
            [],
            ')'
          ],
          params: [{
            kind: 'param',
            name: 'a',
            type: 'i32'
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
              id: '0'
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
          name: 'three'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print',
          type: [
            '(',
            [],
            'type',
            [' '],
            '6',
            [],
            ')'
          ],
          params: [],
          result: null
        },
        {
          kind: 'func',
          id: 'four',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'U'
            ],
            [],
            ')'
          ],
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_import',
            id: {
              kind: 'var',
              name: 'print'
            },
            expr: [{
              kind: 'get_local',
              id: '0'
            }]
          }]
        },
        {
          kind: 'export',
          name: 'four'
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
          type: [
            '(',
            [],
            'type',
            [' '],
            '42',
            [],
            ')'
          ],
          params: [],
          result: null,
          local: [],
          body: []
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unknown function type 42'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'import',
          name1: 'stdio',
          name2: 'print',
          type: [
            '(',
            [],
            'type',
            [' '],
            '43',
            [],
            ')'
          ],
          params: [],
          result: null
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unknown function type 43'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: 'T'
        },
        {
          kind: 'type',
          id: 'U'
        },
        [
          'table',
          [
            [
              [' '],
              {
                kind: 'var',
                name: 't1'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 't2'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 't3'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 'u1'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 'u2'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 't1'
              }
            ],
            [
              [' '],
              {
                kind: 'var',
                name: 't3'
              }
            ]
          ]
        ],
        {
          kind: 'func',
          id: 't1',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'T'
            ],
            [],
            ')'
          ],
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
          id: 't2',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'T'
            ],
            [],
            ')'
          ],
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
          id: 't3',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'T'
            ],
            [],
            ')'
          ],
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
          id: 'u1',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'U'
            ],
            [],
            ')'
          ],
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
          id: 'u2',
          type: [
            '(',
            [],
            'type',
            [' '],
            [
              '$',
              'U'
            ],
            [],
            ')'
          ],
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
          id: 'callt',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'var',
              name: 'T'
            },
            expr: [{
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: 'callt'
        },
        {
          kind: 'func',
          id: 'callu',
          type: null,
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'var',
              name: 'U'
            },
            expr: [{
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: 'callu'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: undefined table element 7'
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
        kind: 'failure',
        value: 'runtime: undefined table element 100'
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
        kind: 'failure',
        value: 'runtime: undefined table element -1'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
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
        kind: 'failure',
        value: 'runtime: undefined table element 7'
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
        kind: 'failure',
        value: 'runtime: undefined table element -1'
      }
    }
  ]
}
