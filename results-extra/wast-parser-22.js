{
  kind: 'script',
  body: [{
    kind: 'module',
    body: [
      {
        kind: 'export',
        name: {
          kind: 'literal',
          value: 'add'
        },
        id: {
          kind: 'identifier',
          name: 'add'
        }
      },
      {
        kind: 'func',
        id: {
          kind: 'identifier',
          name: 'add'
        },
        expos: [],
        imp: null,
        type: null,
        params: [
          {
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          },
          {
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'y'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }
        ],
        result: {
          kind: 'result',
          type: 'f64'
        },
        local: [],
        body: [{
          kind: 'binop',
          type: 'f64',
          operator: 'add',
          left: {
            kind: 'get_local',
            id: {
              kind: 'identifier',
              name: 'x'
            }
          },
          right: {
            kind: 'get_local',
            id: {
              kind: 'identifier',
              name: 'y'
            }
          }
        }]
      }
    ]
  }]
}
