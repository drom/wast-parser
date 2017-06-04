{
  kind: 'script',
  body: [{
    kind: 'module',
    body: [
      {
        kind: 'memory',
        expo: null,
        int: {
          kind: 'literal',
          value: 0,
          raw: [
            [' '],
            '0'
          ]
        },
        int1: null,
        segment: []
      },
      {
        kind: 'func',
        id: null,
        expo: null,
        imp: null,
        type: null,
        params: [],
        result: null,
        local: [],
        body: [{
          kind: 'store',
          type: 'i64',
          size: null,
          offset: 0,
          align: 6,
          addr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          data: {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        }]
      }
    ]
  }]
}
