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
        },
        {
          kind: 'literal',
          value: '\\05\\04\\01'
        },
        {
          kind: 'literal',
          value: '\\00\\82\\00'
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
        },
        {
          kind: 'literal',
          value: '\\05\\07\\01'
        },
        {
          kind: 'literal',
          value: '\\00\\82\\80\\80\\80\\00'
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
        },
        {
          kind: 'literal',
          value: '\\06\\07\\01'
        },
        {
          kind: 'literal',
          value: '\\7f\\00'
        },
        {
          kind: 'literal',
          value: '\\41\\80\\00'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\07\\01'
        },
        {
          kind: 'literal',
          value: '\\7f\\00'
        },
        {
          kind: 'literal',
          value: '\\41\\ff\\7f'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\0a\\01'
        },
        {
          kind: 'literal',
          value: '\\7f\\00'
        },
        {
          kind: 'literal',
          value: '\\41\\80\\80\\80\\80\\00'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\0a\\01'
        },
        {
          kind: 'literal',
          value: '\\7f\\00'
        },
        {
          kind: 'literal',
          value: '\\41\\ff\\ff\\ff\\ff\\7f'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\07\\01'
        },
        {
          kind: 'literal',
          value: '\\7e\\00'
        },
        {
          kind: 'literal',
          value: '\\42\\80\\00'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\07\\01'
        },
        {
          kind: 'literal',
          value: '\\7e\\00'
        },
        {
          kind: 'literal',
          value: '\\42\\ff\\7f'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\0f\\01'
        },
        {
          kind: 'literal',
          value: '\\7e\\00'
        },
        {
          kind: 'literal',
          value: '\\42\\80\\80\\80\\80\\80\\80\\80\\80\\80\\00'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
        },
        {
          kind: 'literal',
          value: '\\06\\0f\\01'
        },
        {
          kind: 'literal',
          value: '\\7e\\00'
        },
        {
          kind: 'literal',
          value: '\\42\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\7f'
        },
        {
          kind: 'literal',
          value: '\\0b'
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
            value: '\\00asm'
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\05\\08\\01'
          },
          {
            kind: 'literal',
            value: '\\00\\82\\80\\80\\80\\80\\00'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer representation too long'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0b\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\80\\80\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer representation too long'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0b\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\ff\\ff\\ff\\ff\\ff\\7f'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer representation too long'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\10\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\80\\80\\80\\80\\80\\80\\80\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer representation too long'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\10\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\7f'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer representation too long'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\05\\04\\01'
          },
          {
            kind: 'literal',
            value: '\\00\\82\\80\\80\\80\\70'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\05\\04\\01'
          },
          {
            kind: 'literal',
            value: '\\00\\82\\80\\80\\80\\40'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0a\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\80\\80\\80\\80\\70'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0a\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\ff\\ff\\ff\\ff\\0f'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0a\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\80\\80\\80\\80\\1f'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0a\\01'
          },
          {
            kind: 'literal',
            value: '\\7f\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\ff\\ff\\ff\\ff\\4f'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0f\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\80\\80\\80\\80\\80\\80\\80\\80\\80\\7e'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0f\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\01'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0f\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\80\\80\\80\\80\\80\\80\\80\\80\\80\\02'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\06\\0f\\01'
          },
          {
            kind: 'literal',
            value: '\\7e\\00'
          },
          {
            kind: 'literal',
            value: '\\42\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\41'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer too large'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\01\\04\\01\\60\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\03\\02\\01\\00'
          },
          {
            kind: 'literal',
            value: '\\04\\04\\01\\70\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\0a\\09\\01'
          },
          {
            kind: 'literal',
            value: '\\07\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\00'
          },
          {
            kind: 'literal',
            value: '\\11\\00'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'zero flag expected'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\01\\04\\01\\60\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\03\\02\\01\\00'
          },
          {
            kind: 'literal',
            value: '\\05\\03\\01\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\0a\\09\\01'
          },
          {
            kind: 'literal',
            value: '\\07\\00'
          },
          {
            kind: 'literal',
            value: '\\41\\00'
          },
          {
            kind: 'literal',
            value: '\\40'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\1a'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'zero flag expected'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\01\\04\\01\\60\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\03\\02\\01\\00'
          },
          {
            kind: 'literal',
            value: '\\05\\03\\01\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\0a\\07\\01'
          },
          {
            kind: 'literal',
            value: '\\05\\00'
          },
          {
            kind: 'literal',
            value: '\\3f'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\1a'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'zero flag expected'
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
          },
          {
            kind: 'literal',
            value: '\\01\\00\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\01\\04\\01\\60\\00\\00'
          },
          {
            kind: 'literal',
            value: '\\03\\02\\01\\00'
          },
          {
            kind: 'literal',
            value: '\\0a\\0c\\01'
          },
          {
            kind: 'literal',
            value: '\\0a\\02'
          },
          {
            kind: 'literal',
            value: '\\ff\\ff\\ff\\ff\\0f\\7f'
          },
          {
            kind: 'literal',
            value: '\\02\\7e'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'too many locals'
      }
    }
  ]
}
