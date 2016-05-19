{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'b'
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
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
          id: null,
          expo: null,
          type: null,
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'b'
          },
          id: {
            kind: 'literal',
            value: 1,
            raw: '1'
          }
        }
      ]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
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
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function 1'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
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
            id: null,
            expo: null,
            type: null,
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
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          },
          {
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'duplicate export name'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
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
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          },
          {
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'duplicate export name'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'n',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'n'
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'e'
          },
          id: {
            kind: 'identifier',
            name: 'f'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'e',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '43'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: '0',
          segment: []
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 'memory'
          }
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: '0',
          segment: []
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 'memory'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'b'
          },
          id: {
            kind: 'literal',
            value: 'memory'
          }
        }
      ]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'a'
          },
          id: {
            kind: 'literal',
            value: 'memory'
          }
        }]
      },
      failure: {
        kind: 'literal',
        value: 'no memory to export'
      }
    }
  ]
}
