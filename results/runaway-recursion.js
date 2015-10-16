{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: null,
          params: [],
          result: null,
          local: [],
          expr: [{
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
          name: 'a',
          params: [],
          result: null,
          local: [],
          expr: [{
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
          name: 'b',
          params: [],
          result: null,
          local: [],
          expr: [{
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
