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
            name: null
          },
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
          name: 'a'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
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
          name: 'a'
        },
        {
          kind: 'export',
          name: 'b'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
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
          id: {
            kind: 'identifier',
            name: null
          },
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
          name: 'a'
        },
        {
          kind: 'export',
          name: 'b'
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
            id: {
              kind: 'identifier',
              name: null
            },
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
            name: 'a'
          }
        ]
      },
      failure: {
        kind: 'failure',
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
            id: {
              kind: 'identifier',
              name: null
            },
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
            id: {
              kind: 'identifier',
              name: null
            },
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
            name: 'a'
          },
          {
            kind: 'export',
            name: 'a'
          }
        ]
      },
      failure: {
        kind: 'failure',
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
            id: {
              kind: 'identifier',
              name: null
            },
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
            name: 'a'
          },
          {
            kind: 'export',
            name: 'a'
          }
        ]
      },
      failure: {
        kind: 'failure',
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
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'n'
            },
            type: 'i32'
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
                  id: 'n'
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
          name: 'e'
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
    }
  ]
}
