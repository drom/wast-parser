{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '100',
          int1: null,
          segment: []
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i32'
          },
          name1: 'stdio',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            types: ['i32']
          }],
          result: null
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_i64'
          },
          name1: 'stdio',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            types: ['i64']
          }],
          result: null
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_f32'
          },
          name1: 'stdio',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            types: ['f32']
          }],
          result: null
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print_f64'
          },
          name1: 'stdio',
          name2: 'print',
          type: null,
          params: [{
            kind: 'param',
            types: ['f64']
          }],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'run'
          },
          type: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i32'
              },
              body: 'i32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i64'
              },
              body: 'i64'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f32'
              },
              body: 'f32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f64'
              },
              body: 'f64'
            }
          ],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i32'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  id: 'i32'
                },
                init: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  id: 'i64'
                },
                init: {
                  kind: 'const',
                  type: 'i64',
                  init: '2'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_f32'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  id: 'f32'
                },
                init: {
                  kind: 'const',
                  type: 'f32',
                  init: '3'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_f64'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  id: 'f64'
                },
                init: {
                  kind: 'const',
                  type: 'f64',
                  init: '4'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i32',
                  init: '11'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i64',
                  init: '12'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_f32'
              },
              expr: [{
                kind: 'store',
                type: 'f32',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'f32',
                  init: '13'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_f64'
              },
              expr: [{
                kind: 'store',
                type: 'f64',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'f64',
                  init: '14'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: '8',
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i32',
                  init: '512'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: '1',
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i32',
                  init: '65536'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '8',
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i64',
                  init: '512'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '1',
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i64',
                  init: '65536'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'identifier',
                id: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '3',
                offset: 0,
                align: 0,
                addr: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                data: {
                  kind: 'const',
                  type: 'i64',
                  init: '4294967296'
                }
              }]
            }
          ]
        },
        {
          kind: 'export',
          name: 'run'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'run',
      body: []
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i32'
              },
              body: 'i32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i64'
              },
              body: 'i64'
            }
          ],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'identifier',
              id: 'i64'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'i32'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch: expression has type i32 but the context requires i64'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i32'
              },
              body: 'i32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'i64'
              },
              body: 'i64'
            }
          ],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'identifier',
              id: 'i32'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'i64'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            }
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch: expression has type i64 but the context requires i32'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f32'
              },
              body: 'f32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f64'
              },
              body: 'f64'
            }
          ],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'identifier',
              id: 'f64'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'f32'
              },
              init: {
                kind: 'const',
                type: 'f32',
                init: '1'
              }
            }
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch: expression has type f32 but the context requires f64'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f32'
              },
              body: 'f32'
            },
            {
              kind: 'local',
              id: {
                kind: 'identifier',
                name: 'f64'
              },
              body: 'f64'
            }
          ],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'identifier',
              id: 'f32'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'f64'
              },
              init: {
                kind: 'const',
                type: 'f64',
                init: '1'
              }
            }
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'type mismatch: expression has type f64 but the context requires f32'
      }
    }
  ]
}
