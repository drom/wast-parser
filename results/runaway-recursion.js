{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            exprs: []
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'runaway'
          },
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
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'b'
            },
            exprs: []
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'b'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'identifier',
              name: 'a'
            },
            exprs: []
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'mutual_runaway'
          },
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
        kind: 'literal',
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
        kind: 'literal',
        value: 'call stack exhausted'
      }
    }
  ]
}
