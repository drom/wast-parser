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
            name: 'empty'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'empty'
          },
          id: {
            kind: 'identifier',
            name: 'empty'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'result-nop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{kind: 'nop'}]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'result-nop'
          },
          id: {
            kind: 'identifier',
            name: 'result-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'result-drop'
          },
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
            value: 'result-drop'
          },
          id: {
            kind: 'identifier',
            name: 'result-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'result-block-nop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              {kind: 'nop'}
            ]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'result-block-nop'
          },
          id: {
            kind: 'identifier',
            name: 'result-block-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'result-block-drop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {kind: 'nop'},
              {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            ]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'result-block-drop'
          },
          id: {
            kind: 'identifier',
            name: 'result-block-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: null
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'return'
          },
          id: {
            kind: 'identifier',
            name: 'return'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return-nop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: {kind: 'nop'}
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'return-nop'
          },
          id: {
            kind: 'identifier',
            name: 'return-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return-drop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: {
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
            value: 'return-drop'
          },
          id: {
            kind: 'identifier',
            name: 'return-drop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return-block-nop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {kind: 'nop'}
              ]
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'return-block-nop'
          },
          id: {
            kind: 'identifier',
            name: 'return-block-nop'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'return-block-drop'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'return',
            expr: {
              kind: 'block',
              id: null,
              body: [
                {kind: 'nop'},
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              ]
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'return-block-drop'
          },
          id: {
            kind: 'identifier',
            name: 'return-block-drop'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'empty',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'result-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'result-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'result-block-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'result-block-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-drop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-block-nop',
        body: []
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-block-drop',
        body: []
      },
      expr: null
    }
  ]
}
