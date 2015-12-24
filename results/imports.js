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
          name1: 'spectest',
          name2: 'print',
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
          name1: 'spectest',
          name2: 'print',
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
          name1: 'spectest',
          name2: 'print',
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
          name1: 'spectest',
          name2: 'print',
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
          param: [{
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
                id: 'print_i32'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'i'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i32_f32'
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
                      id: 'i'
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
          id: {
            kind: 'identifier',
            name: 'print64'
          },
          type: null,
          param: [{
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
                id: 'print_i64'
              },
              expr: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'i'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64_f64'
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
                      id: 'i'
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
          id: {
            kind: 'identifier',
            id: 'print32'
          },
          name: 'print32'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'print64'
          },
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
