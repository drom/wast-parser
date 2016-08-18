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
            raw: '1'
          },
          int1: null,
          segment: [{
            kind: 'segment',
            int: '0',
            name: {
              kind: 'literal',
              value: 'abcdefghijklmnopqrstuvwxyz'
            }
          }]
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print'
          },
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'good'
          },
          expo: null,
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
              kind: 'call_import',
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'good'
          },
          id: {
            kind: 'identifier',
            name: 'good'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'bad2'
          },
          expo: null,
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'bad2'
          },
          id: {
            kind: 'identifier',
            name: 'bad2'
          }
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'good',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '0'
      }]
    },
    {
      kind: 'invoke',
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
        name: 'bad2',
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
        name: 'bad2',
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
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'bad1'
            },
            expo: null,
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
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 4294967296,
              align: 0,
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
      failure: {
        kind: 'literal',
        value: 'offset too large'
      }
    }
  ]
}
