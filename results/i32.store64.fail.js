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
        params: [
          {
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          },
          {
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }
        ],
        result: null,
        local: [],
        body: [{
          kind: 'store',
          type: 'i32',
          size: 64,
          offset: 0,
          align: 0,
          addr: {
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          },
          data: {
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }
        }]
      }
    ]
  }]
}
