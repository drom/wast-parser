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
          value: 1,
          raw: [
            [' '],
            '1'
          ]
        },
        int1: null,
        segment: []
      },
      {
        kind: 'func',
        id: {
          kind: 'identifier',
          name: 'bad'
        },
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
            type: 'i32',
            size: null,
            sign: null,
            offset: 4294967296,
            align: 0,
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
