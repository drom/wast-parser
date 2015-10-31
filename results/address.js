{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1024',
          int1: null,
          segment: [{
            kind: 'segment',
            int: '0',
            name: 'abcdefghijklmnopqrstuvwxyz'
          }]
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print'
          },
          name1: 'stdio',
          name2: 'print',
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
          type: null,
          param: [{
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
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: false,
                offset: '0',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: false,
                offset: '1',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: false,
                offset: '2',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: false,
                offset: '25',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: false,
                offset: '0',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: false,
                offset: '1',
                align: '1',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: false,
                offset: '2',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: false,
                offset: '25',
                align: '1',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: null,
                sign: null,
                offset: '0',
                align: 0,
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: null,
                sign: null,
                offset: '1',
                align: '1',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: null,
                sign: null,
                offset: '2',
                align: '2',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print'
              },
              expr: [{
                kind: 'load',
                type: 'i32',
                size: null,
                sign: null,
                offset: '25',
                align: '1',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                }
              }]
            }
          ]
        },
        {
          kind: 'export',
          name: 'good'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'bad1'
          },
          type: null,
          param: [{
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
            offset: '4294967296',
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'bad1'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'bad2'
          },
          type: null,
          param: [{
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
            offset: '4294967295',
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'bad2'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'good',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'good',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '995'
        }]
      },
      expr: null
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'good',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '996'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'bad1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'bad1',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'failure',
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
        kind: 'failure',
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
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    }
  ]
}
