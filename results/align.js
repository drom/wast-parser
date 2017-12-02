{
  kind: 'script',
  body: [
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(module (memory 0) (func (drop (i64.load align=0 (i32.const 0)))))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(module (memory 0) (func (drop (i64.load align=7 (i32.const 0)))))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
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
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(module (memory 0) (func (i64.store align=0 (i32.const 0) (i64.const 0))))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          'quote',
          {
            kind: 'literal',
            value: '(module (memory 0) (func (i64.store align=5 (i32.const 0) (i64.const 0))))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
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
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 16,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment'
      }
    }
  ]
}
