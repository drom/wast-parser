{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            expr: []
          }]
        },
        {
          kind: 'export',
          name: 'runaway',
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'a'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'b'
            },
            expr: []
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'b'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'a'
            },
            expr: []
          }]
        },
        {
          kind: 'export',
          name: 'mutual_runaway',
          id: {
            kind: 'identifier',
            name: 'a'
          }
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'runaway',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'call stack exhausted'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'mutual_runaway',
        body: []
      },
      failure: {
        kind: 'failure',
        value: 'call stack exhausted'
      }
    }
  ]
}
