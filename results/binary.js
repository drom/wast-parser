{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'literal',
        value: '\\00asm\\0b\\00\\00\\00'
      }]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'literal',
          value: '\\00asm'
        },
        {
          kind: 'literal',
          value: '\\0b\\00\\00\\00'
        }
      ]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: ''
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\01'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00as'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\01'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: 'asm\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'magic header not detected'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\0b'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\0b\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\10\\00\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown binary version'
      }
    }
  ]
}
