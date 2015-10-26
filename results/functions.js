{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'return-none',
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
          name: 'return-none'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'return-none',
        body: []
      },
      expr: null
    }
  ]
}
