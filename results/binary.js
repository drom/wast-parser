{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'literal',
        value: '\\00asm\\01\\00\\00\\00'
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
          value: '\\01\\00\\00\\00'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        '$M1',
        {
          kind: 'literal',
          value: '\\00asm\\01\\00\\00\\00'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        '$M2',
        {
          kind: 'literal',
          value: '\\00asm'
        },
        {
          kind: 'literal',
          value: '\\01\\00\\00\\00'
        }
      ]
    },
    {
      kind: 'assert_malformed',
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
      kind: 'assert_malformed',
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
      kind: 'assert_malformed',
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
      kind: 'assert_malformed',
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
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: 'msa\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'magic header not detected'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: 'msa\\00\\01\\00\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'magic header not detected'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: 'msa\\00\\00\\00\\00\\01'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'magic header not detected'
      }
    },
    {
      kind: 'assert_malformed',
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
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\01'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\01\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unexpected end'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\0d\\00\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown binary version'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\0e\\00\\00\\00'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown binary version'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [{
          kind: 'literal',
          value: '\\00asm\\00\\00\\00\\01'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown binary version'
      }
    }
  ]
}
