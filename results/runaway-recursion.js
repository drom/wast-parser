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
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: '0',
            expr: []
          }]
        },
        {
          kind: 'export',
          name: 'runaway'
        },
        {
          kind: 'func',
          id: 'a',
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'var',
              name: 'b'
            },
            expr: []
          }]
        },
        {
          kind: 'func',
          id: 'b',
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call',
            id: {
              kind: 'var',
              name: 'a'
            },
            expr: []
          }]
        },
        {
          kind: 'export',
          name: 'mutual_runaway'
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
        value: 'runtime: callstack exhausted'
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
        value: 'runtime: callstack exhausted'
      }
    }
  ]
}
