{
  kind: 'script',
  body: [{
    kind: 'module',
    body: [
      {
        kind: 'memory',
        impo: null,
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
        expos: [],
        imp: null,
        type: null,
        params: [],
        result: null,
        local: [],
        body: [{
          kind: 'drop',
          body: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
            align: 16,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      }
    ]
  }]
}
