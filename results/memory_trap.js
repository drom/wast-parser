{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: [
              [' '],
              '1'
            ]
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'addr_limit'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'mul',
            left: {kind: 'current_memory'},
            right: {
              kind: 'const',
              type: 'i32',
              init: '0x10000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'store'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'i',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'addr_limit'
                },
                exprs: []
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'addr_limit'
                },
                exprs: []
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'grow_memory'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'grow_memory',
            expr: {
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
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '42'
          }
        ]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-3'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'grow_memory',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: [
              [' '],
              '1'
            ]
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32.store16'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: 16,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32.store'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64.store16'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: 16,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64.store32'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: 32,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64.store'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'v'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f32.store'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'cvtop',
              type: 'f32',
              type1: 'i32',
              operator: 'reinterpret',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'v'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f64.store'
          },
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'v',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            },
            data: {
              kind: 'cvtop',
              type: 'f64',
              type1: 'i64',
              operator: 'reinterpret',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'v'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64.load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'a',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i32.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffc'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffb'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffa'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfff9'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x01234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffc'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffb'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffa'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfff9'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456701234567'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfff8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    }
  ]
}
