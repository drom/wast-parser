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
            value: '(func (drop (i32.const0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func br 0drop)'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
      }
    }
  ]
}
