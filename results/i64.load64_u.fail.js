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
        id: null,
        expos: [],
        imp: null,
        type: null,
        params: [{
          kind: 'param',
          items: [{
            kind: 'item',
            type: 'i32'
          }]
        }],
        result: {
          kind: 'result',
          type: 'i64'
        },
        local: [],
        body: [{
          kind: 'load',
          type: 'i64',
          size: 64,
          sign: false,
          offset: 0,
          align: 0,
          expr: {
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }
        }]
      }
    ]
  }]
}
