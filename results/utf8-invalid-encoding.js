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
            value: '(func (export \"\\\\00\\\\00\\\\fe\\\\ff\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\8f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\9f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c0\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c1\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c1\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\2e\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\c2\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\df\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\df\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\df\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\df\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\00\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\7f\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\80\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\9f\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\9f\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\a0\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\a0\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\a0\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\a0\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\c0\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e0\\\\fd\\\\a0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\2e\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\2e\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\e1\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ec\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\a0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\a0\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\bf\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\bf\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ed\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ee\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ef\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\00\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\7f\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\80\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\8f\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\8f\\\\bf\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\00\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\7f\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\90\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\90\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\90\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\90\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\c0\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\90\\\\fd\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\c0\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f0\\\\fd\\\\90\\\\90\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\00\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\7f\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\80\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\c0\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f1\\\\fd\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\00\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\7f\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\80\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\c0\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f3\\\\fd\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\00\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\7f\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\00\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\7f\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\80\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\80\\\\7f\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\80\\\\c0\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\80\\\\fd\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\c0\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\80\\\\fd\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\90\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\bf\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\c0\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f4\\\\fd\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f5\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f7\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f7\\\\bf\\\\bf\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\f8\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fb\\\\bf\\\\bf\\\\bf\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\\\\80\\\\23\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\\\\80\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fc\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fd\\\\bf\\\\bf\\\\bf\\\\bf\\\\bf\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fe\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\fe\\\\ff\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ff\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ff\\\\fe\\\\00\\\\00\"))'
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
          'quote',
          {
            kind: 'literal',
            value: '(func (export \"\\\\ff\\\\fe\"))'
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
