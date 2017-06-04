{
  kind: 'script',
  body: [
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\8f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\9f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\c2\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\c2'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c2\\2e'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c0\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c1\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c1\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c2\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c2\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c2\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\c2\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\df\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\df\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\df\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\df\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\e1\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\e1\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\80\\2e'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\e1'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\e1\\2e'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\00\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\7f\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\80\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\9f\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\9f\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\c0\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\fd\\a0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\a0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\a0\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\bf\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\bf\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\a0\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\a0\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\a0\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e0\\a0\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\e1\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ec\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ed\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ee\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\ef\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\f1\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\f1\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\f1\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\f1\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\f1'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\f1\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\00\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\7f\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\80\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\8f\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\8f\\bf\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\c0\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\fd\\90\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\00\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\7f\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\c0\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\fd\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\00\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\7f\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\c0\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\fd\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\00\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\7f\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\90\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\bf\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\c0\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\fd\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f5\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f7\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f7\\bf\\bf\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\00\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\7f\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\c0\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\fd\\90'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\00\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\7f\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\c0\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\fd\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\90\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\90\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\90\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f0\\90\\90\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f1\\80\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f3\\80\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\80\\7f'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\80\\c0'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f4\\80\\80\\fd'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\10'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\06\\f8\\80\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f8\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\f8\\80\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\f8\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\f8\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\f8\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\f8\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\f8'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\f8\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\f8\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\fb\\bf\\bf\\bf\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\11'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\07\\fc\\80\\80\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\fc\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\10'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\06\\fc\\80\\80\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\fc\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\fc\\80\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\fc\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\fc\\80\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\fc\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0d'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\03\\fc\\80\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\fc'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\fc\\23'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\10'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\06\\fc\\80\\80\\80\\80\\80'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\10'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\06\\fd\\bf\\bf\\bf\\bf\\bf'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\fe'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0b'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\01\\ff'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\fe\\ff'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\00\\00\\fe\\ff'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0c'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\02\\ff\\fe'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    },
    {
      kind: 'assert_malformed',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'literal',
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\02\\0e'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\04\\ff\\fe\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\03'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid UTF-8 encoding'
      }
    }
  ]
}
