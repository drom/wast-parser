{
  kind: 'script',
  body: [{
    kind: 'module',
    body: [{
      kind: 'func',
      id: null,
      expo: null,
      type: null,
      params: [],
      result: null,
      local: [],
      body: [{
        kind: 'block',
        id: null,
        body: [{
          kind: 'if',
          test: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          then: {
            kind: 'then',
            id: {
              kind: 'identifier',
              name: 'l'
            },
            body: [{
              kind: 'br',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          },
          else: {
            kind: 'else',
            id: null,
            body: [{
              kind: 'br',
              id: {
                kind: 'identifier',
                name: 'l'
              },
              expr: {
                kind: 'const',
                type: 'i32',
                init: '42'
              }
            }]
          }
        }]
      }]
    }]
  }]
}
