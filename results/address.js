{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'print'
            },
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }],
            result: null,
            local: [],
            body: []
          },
          params: [],
          result: null
        },
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
            value: 'good'
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
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 1,
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 2,
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 25,
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: 16,
                sign: false,
                offset: 2,
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: 16,
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
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
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'print'
              },
              exprs: [{
                kind: 'load',
                type: 'i32',
                size: null,
                sign: null,
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
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'bad'
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
      kind: 'invoke',
      id: null,
      name: 'good',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '0'
      }]
    },
    {
      kind: 'invoke',
      id: null,
      name: 'good',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '65507'
      }]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'good',
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
        name: 'bad',
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
        name: 'bad',
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
