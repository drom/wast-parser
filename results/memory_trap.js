{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
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
          expos: [],
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
          expos: [{
            kind: 'literal',
            value: 'store'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'load'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'grow_memory'
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
          impo: null,
          expo: null,
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
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          values: [{
            kind: 'literal',
            value: 'abcdefgh'
          }]
        },
        {
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0xfff8'
          },
          values: [{
            kind: 'literal',
            value: 'abcdefgh'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load'
          }],
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
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'a'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load'
          }],
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.load'
          }],
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
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.load'
          }],
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
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'f64',
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load8_s'
          }],
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: true,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load8_u'
          }],
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load16_s'
          }],
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: true,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.load16_u'
          }],
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load8_s'
          }],
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
            size: 8,
            sign: true,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load8_u'
          }],
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
            size: 8,
            sign: false,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load16_s'
          }],
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
            size: 16,
            sign: true,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load16_u'
          }],
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
            size: 16,
            sign: false,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load32_s'
          }],
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
            size: 32,
            sign: true,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.load32_u'
          }],
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
            size: 32,
            sign: false,
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
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.store'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'i64.store'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'f32.store'
          }],
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
                type: 'f32'
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
          expos: [{
            kind: 'literal',
            value: 'f64.store'
          }],
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
                type: 'f64'
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
          expos: [{
            kind: 'literal',
            value: 'i32.store8'
          }],
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
            size: 8,
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
          expos: [{
            kind: 'literal',
            value: 'i32.store16'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'i64.store8'
          }],
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
            size: 8,
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
          expos: [{
            kind: 'literal',
            value: 'i64.store16'
          }],
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
          expos: [{
            kind: 'literal',
            value: 'i64.store32'
          }],
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
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-6'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-8'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f32.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffff'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffe'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffd'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffc'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffb'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffa'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfff9'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-6'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'f64.store',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-8'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
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
        id: null,
        name: 'i32.store8',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store8',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
        name: 'i32.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i32.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
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
        id: null,
        name: 'i64.store8',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store8',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
        name: 'i64.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store16',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
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
            init: '0'
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
        id: null,
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i64.store32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-4'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'i32.load',
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
        id: null,
        name: 'i32.load',
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
        id: null,
        name: 'i32.load',
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
        id: null,
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffc'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffb'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffa'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfff9'
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
        id: null,
        name: 'i64.load',
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
        id: null,
        name: 'i64.load',
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
        id: null,
        name: 'i64.load',
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-5'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-6'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-7'
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
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-8'
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
        id: null,
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'f32.load',
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
        id: null,
        name: 'f32.load',
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
        id: null,
        name: 'f32.load',
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
        id: null,
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffc'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffb'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffa'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfff9'
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
        id: null,
        name: 'f64.load',
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
        id: null,
        name: 'f64.load',
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
        id: null,
        name: 'f64.load',
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-5'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-6'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-7'
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
        id: null,
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-8'
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
        id: null,
        name: 'i32.load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i32.load8_s',
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
        id: null,
        name: 'i32.load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i32.load8_u',
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
        id: null,
        name: 'i32.load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i32.load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i32.load16_s',
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
        id: null,
        name: 'i32.load16_s',
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
        id: null,
        name: 'i32.load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i32.load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i32.load16_u',
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
        id: null,
        name: 'i32.load16_u',
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
        id: null,
        name: 'i64.load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load8_s',
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
        id: null,
        name: 'i64.load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load8_u',
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
        id: null,
        name: 'i64.load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i64.load16_s',
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
        id: null,
        name: 'i64.load16_s',
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
        id: null,
        name: 'i64.load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i64.load16_u',
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
        id: null,
        name: 'i64.load16_u',
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
        id: null,
        name: 'i64.load32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i64.load32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'i64.load32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'i64.load32_s',
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
        id: null,
        name: 'i64.load32_s',
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
        id: null,
        name: 'i64.load32_s',
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
        id: null,
        name: 'i64.load32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
        name: 'i64.load32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x10000'
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
        id: null,
        name: 'i64.load32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffff'
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
        id: null,
        name: 'i64.load32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffe'
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
        id: null,
        name: 'i64.load32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffd'
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
        id: null,
        name: 'i64.load32_u',
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
        id: null,
        name: 'i64.load32_u',
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
        id: null,
        name: 'i64.load32_u',
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
        id: null,
        name: 'i64.load32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4'
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
        id: null,
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
        init: '0x6867666564636261'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6867666564636261'
      }
    }
  ]
}
