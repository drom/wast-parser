{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'func',
          id: 'print32',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i32'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
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
                      kind: 'var',
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
            }
          ]
        },
        {
          kind: 'func',
          id: 'print64',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: null,
          local: [],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
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
                      kind: 'var',
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
            }
          ]
        },
        {
          kind: 'export',
          name: 'print32'
        },
        {
          kind: 'export',
          name: 'print64'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'print32',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '13'
      }]
    },
    {
      kind: 'invoke',
      name: 'print64',
      body: [{
        kind: 'const',
        type: 'i64',
        init: '24'
      }]
    }
  ]
}
