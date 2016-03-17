{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          name: 'a'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          name: 'a'
        },
        {
          kind: 'export',
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          name: 'b'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          name: 'a'
        },
        {
          kind: 'export',
          id: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
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
            id: null,
            type: null,
            param: [],
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
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
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
            id: null,
            type: null,
            param: [],
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
            type: null,
            param: [],
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
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            name: 'a'
          },
          {
            kind: 'export',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
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
            id: null,
            type: null,
            param: [],
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
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            name: 'a'
          },
          {
            kind: 'export',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
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
          param: [{
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
          id: {
            kind: 'identifier',
            name: 'f'
          },
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
          id: 'memory',
          name: 'a'
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
          id: 'memory',
          name: 'a'
        },
        {
          kind: 'export',
          id: 'memory',
          name: 'b'
        }
      ]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'export',
          id: 'memory',
          name: 'a'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'no memory to export'
      }
    }
  ]
}
