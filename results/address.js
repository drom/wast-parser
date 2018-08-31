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
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          values: [{
            kind: 'literal',
            value: 'abcdefghijklmnopqrstuvwxyz'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
            offset: 0,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
            offset: 2,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
            offset: 25,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: true,
            offset: 0,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: true,
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: true,
            offset: 2,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: true,
            offset: 25,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
            offset: 0,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
            offset: 25,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: true,
            offset: 0,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: true,
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: true,
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: true,
            offset: 25,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
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
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 25,
            align: 4,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: true,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: false,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: true,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25442'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25699'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25442'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25699'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1701077858'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1717920867'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65507'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65508'
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
        name: '8u_bad',
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
        name: '8s_bad',
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
        name: '16u_bad',
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
        name: '16s_bad',
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
        name: '32_bad',
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
        name: '8u_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '8s_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '16u_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '16s_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '32_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
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
            value: '(memory 1)'
          },
          {
            kind: 'literal',
            value: '(func (drop (i32.load offset=4294967296 (i32.const 0))))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'i32 constant'
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
            value: 'abcdefghijklmnopqrstuvwxyz'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 4,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 4,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 25,
            align: 8,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8u_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: false,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '8s_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: true,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16u_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: false,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '16s_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: true,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32u_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: false,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32s_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: true,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25442'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25699'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25442'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '25699'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1701077858'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1717920867'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1684234849'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1701077858'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1717920867'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6968676665646362'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6a69686766656463'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65503'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '8s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '16s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32u_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32s_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65504'
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
        name: '8u_bad',
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
        name: '8s_bad',
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
        name: '16u_bad',
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
        name: '16s_bad',
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
        name: '32u_bad',
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
        name: '32s_bad',
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
        name: '64_bad',
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
        name: '8u_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '8s_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '16u_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '16s_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: '32u_bad',
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
        name: '32s_bad',
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
        name: '64_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
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
            value: '\\00\\00\\00\\00\\00\\00\\a0\\7f\\01\\00\\d0\\7f'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 8,
            align: 4,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '32_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'f32',
              size: null,
              sign: null,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x500001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65524'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65524'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65524'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65524'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65524'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65525'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65525'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65525'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65525'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '32_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65525'
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
        name: '32_bad',
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
        name: '32_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
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
            value: '\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\\f4\\7f\\01\\00\\00\\00\\00\\00\\fc\\7f'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good1'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good2'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good3'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 1,
            align: 1,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good4'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 2,
            align: 2,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_good5'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
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
            offset: 18,
            align: 8,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '64_bad'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'f64',
              size: null,
              sign: null,
              offset: 4294967295,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65510'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65510'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65510'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65510'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65510'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65511'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good2',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65511'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good3',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65511'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good4',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65511'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '64_good5',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '65511'
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
        name: '64_bad',
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
        name: '64_bad',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'out of bounds memory access'
      }
    }
  ]
}
