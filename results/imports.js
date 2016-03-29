{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
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
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i64'
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
              type: 'i64'
            }]
          }],
          result: null
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i32_f32'
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
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'f32'
              }
            ]
          }],
          result: null
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i64_f64'
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
            items: [
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'f64'
              }
            ]
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'print32'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                name: 'print_i32_f32'
              },
              expr: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                },
                {
                  kind: 'const',
                  type: 'f32',
                  init: '42'
                }
              ]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                name: 'print_i32'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'print64'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: null,
          local: [],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                name: 'print_i64_f64'
              },
              expr: [
                {
                  kind: 'binop',
                  type: 'i64',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i64',
                    init: '1'
                  }
                },
                {
                  kind: 'const',
                  type: 'f64',
                  init: '53'
                }
              ]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                name: 'print_i64'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }]
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'print32'
          },
          id: {
            kind: 'identifier',
            name: 'print32'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'print64'
          },
          id: {
            kind: 'identifier',
            name: 'print64'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'print32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'print64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '24'
        }]
      },
      expr: null
    }
  ]
}
