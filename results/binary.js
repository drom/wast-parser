{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        'binary',
        {
          kind: 'literal',
          value: '\\00asm\\01\\00\\00\\00'
        }
      ]
    },
    {
      kind: 'module',
      body: [
        'binary',
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
        'binary',
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
        'binary',
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: ''
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\01'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00as'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'asm\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'msa\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'msa\\00\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'msa\\00\\00\\00\\00\\01'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'asm\\01\\00\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'wasm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\7fasm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\80asm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\82asm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\ffasm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00\\00\\00\\01msa\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'a\\00ms\\00\\01\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: 'sm\\00a\\00\\00\\01\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00ASM\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00\\81\\a2\\94\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\ef\\bb\\bf\\00asm\\01\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\01'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\01\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\00\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\0d\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\0e\\00\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\00\\01\\00\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\00\\00\\01\\00'
          }
        ]
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
        body: [
          'binary',
          {
            kind: 'literal',
            value: '\\00asm\\00\\00\\00\\01'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown binary version'
      }
    }
  ]
}
