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
        expo: null,
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
              type: 'f32'
            }]
          }
        ],
        result: null,
        local: [],
        body: [{
          kind: 'store',
          type: 'f64',
          size: 32,
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
