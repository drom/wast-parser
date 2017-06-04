{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'global',
          id: {
            kind: 'identifier',
            name: 'a'
          },
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-2'
          }]
        },
        {
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'f32',
          body: [{
            kind: 'const',
            type: 'f32',
            init: '-3'
          }]
        },
        {
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'f64',
          body: [{
            kind: 'const',
            type: 'f64',
            init: '-4'
          }]
        },
        {
          kind: 'global',
          id: {
            kind: 'identifier',
            name: 'b'
          },
          mut: false,
          expo: null,
          impo: null,
          type: 'i64',
          body: [{
            kind: 'const',
            type: 'i64',
            init: '-5'
          }]
        },
        {
          kind: 'global',
          id: {
            kind: 'identifier',
            name: 'x'
          },
          mut: true,
          expo: null,
          impo: null,
          type: 'i32',
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-12'
          }]
        },
        {
          kind: 'global',
          id: null,
          mut: true,
          expo: null,
          impo: null,
          type: 'f32',
          body: [{
            kind: 'const',
            type: 'f32',
            init: '-13'
          }]
        },
        {
          kind: 'global',
          id: null,
          mut: true,
          expo: null,
          impo: null,
          type: 'f64',
          body: [{
            kind: 'const',
            type: 'f64',
            init: '-14'
          }]
        },
        {
          kind: 'global',
          id: {
            kind: 'identifier',
            name: 'y'
          },
          mut: true,
          expo: null,
          impo: null,
          type: 'i64',
          body: [{
            kind: 'const',
            type: 'i64',
            init: '-15'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-a'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'identifier',
              name: 'a'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-b'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'identifier',
              name: 'b'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-x'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'identifier',
              name: 'x'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-y'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'identifier',
              name: 'y'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'set-x'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'set_global',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            init: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'set-y'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'set_global',
            id: {
              kind: 'identifier',
              name: 'y'
            },
            init: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-1'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-2'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'literal',
              value: 2,
              raw: '2'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-5'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'literal',
              value: 5,
              raw: '5'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'get-6'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'get_global',
            id: {
              kind: 'literal',
              value: 6,
              raw: '6'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'set-5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'set_global',
            id: {
              kind: 'literal',
              value: 5,
              raw: '5'
            },
            init: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'set-6'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'set_global',
            id: {
              kind: 'literal',
              value: 6,
              raw: '6'
            },
            init: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-b',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-x',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-y',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-6',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'set-x',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'set-y',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '7'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'set-5',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '8'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'set-6',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '9'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-x',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-y',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'get-6',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'global',
            id: null,
            mut: false,
            expo: null,
            impo: null,
            type: 'f32',
            body: [{
              kind: 'const',
              type: 'f32',
              init: '0'
            }]
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
              kind: 'set_global',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'global is immutable'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'm'
          },
          funcName: {
            kind: 'literal',
            value: 'a'
          },
          type: {
            kind: 'global',
            id: null,
            mut: true,
            expo: null,
            impo: null,
            type: 'i32',
            body: []
          },
          params: [],
          result: null
        }]
      },
      failure: {
        kind: 'literal',
        value: 'mutable globals cannot be imported'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: true,
          expo: null,
          impo: {
            kind: 'import',
            id: null,
            modName: {
              kind: 'literal',
              value: 'm'
            },
            funcName: {
              kind: 'literal',
              value: 'a'
            },
            type: null,
            params: [],
            result: null
          },
          type: 'i32',
          body: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'mutable globals cannot be imported'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'global',
            id: null,
            mut: true,
            expo: null,
            impo: null,
            type: 'f32',
            body: [{
              kind: 'const',
              type: 'f32',
              init: '0'
            }]
          },
          {
            kind: 'export',
            name: {
              kind: 'literal',
              value: 'a'
            },
            id: {
              kind: 'global',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              mut: false,
              expo: null,
              impo: null,
              type: null,
              body: []
            }
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'mutable globals cannot be exported'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: true,
          expo: {
            kind: 'literal',
            value: 'a'
          },
          impo: null,
          type: 'f32',
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0'
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'mutable globals cannot be exported'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'f32',
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'constant expression required'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'f32',
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'constant expression required'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'f32',
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'constant expression required'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {kind: 'nop'}
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'constant expression required'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [{kind: 'nop'}]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'constant expression required'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0'
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: [{
            kind: 'get_global',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown global'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'global',
            id: null,
            mut: false,
            expo: null,
            impo: null,
            type: 'i32',
            body: [{
              kind: 'get_global',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              }
            }]
          },
          {
            kind: 'global',
            id: null,
            mut: false,
            expo: null,
            impo: null,
            type: 'i32',
            body: [{
              kind: 'const',
              type: 'i32',
              init: '0'
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown global'
      }
    },
    {
      kind: 'module',
      body: [{
        kind: 'import',
        id: null,
        modName: {
          kind: 'literal',
          value: 'spectest'
        },
        funcName: {
          kind: 'literal',
          value: 'global'
        },
        type: {
          kind: 'global',
          id: null,
          mut: false,
          expo: null,
          impo: null,
          type: 'i32',
          body: []
        },
        params: [],
        result: null
      }]
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
            value: '\\02\\94\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\08\\73\\70\\65\\63\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\06\\67\\6c\\6f\\62\\61\\6c'
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
            value: '\\02'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid mutability'
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
            value: '\\02\\94\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\08\\73\\70\\65\\63\\74\\65\\73\\74'
          },
          {
            kind: 'literal',
            value: '\\06\\67\\6c\\6f\\62\\61\\6c'
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
            value: '\\ff'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid mutability'
      }
    },
    {
      kind: 'module',
      body: [{
        kind: 'global',
        id: null,
        mut: false,
        expo: null,
        impo: null,
        type: 'i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      }]
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
            value: '\\06\\86\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\02'
          },
          {
            kind: 'literal',
            value: '\\41\\00'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid mutability'
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
            value: '\\06\\86\\80\\80\\80\\00'
          },
          {
            kind: 'literal',
            value: '\\01'
          },
          {
            kind: 'literal',
            value: '\\7f'
          },
          {
            kind: 'literal',
            value: '\\ff'
          },
          {
            kind: 'literal',
            value: '\\41\\00'
          },
          {
            kind: 'literal',
            value: '\\0b'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'invalid mutability'
      }
    }
  ]
}
