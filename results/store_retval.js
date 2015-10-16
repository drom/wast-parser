{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1,0,0',
          int1: null,
          segment: []
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'import',
          name1: 'stdio',
          name2: 'print'
        },
        {
          kind: 'func',
          name: 'run',
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              name: 'i32',
              body: 'i32'
            },
            {
              kind: 'local',
              name: 'i64',
              body: 'i64'
            },
            {
              kind: 'local',
              name: 'f32',
              body: 'f32'
            },
            {
              kind: 'local',
              name: 'f64',
              body: 'f64'
            }
          ],
          expr: [
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i32'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'var',
                  name: 'i32'
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
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'var',
                  name: 'i64'
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
                kind: 'var',
                name: 'print_f32'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'var',
                  name: 'f32'
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
                kind: 'var',
                name: 'print_f64'
              },
              expr: [{
                kind: 'set_local',
                id: {
                  kind: 'var',
                  name: 'f64'
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
                kind: 'var',
                name: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: null,
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i32',
                  init: '11'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: null,
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i64',
                  init: '12'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_f32'
              },
              expr: [{
                kind: 'store',
                type: 'f32',
                size: null,
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'f32',
                  init: '13'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_f64'
              },
              expr: [{
                kind: 'store',
                type: 'f64',
                size: null,
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'f64',
                  init: '14'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: '8',
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i32',
                  init: '512'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i32'
              },
              expr: [{
                kind: 'store',
                type: 'i32',
                size: '1',
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i32',
                  init: '65536'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '8',
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i64',
                  init: '512'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '1',
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
                  kind: 'const',
                  type: 'i64',
                  init: '65536'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'var',
                name: 'print_i64'
              },
              expr: [{
                kind: 'store',
                type: 'i64',
                size: '3',
                align: 0,
                expr1: {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                expr2: {
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
          name: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              name: 'i32',
              body: 'i32'
            },
            {
              kind: 'local',
              name: 'i64',
              body: 'i64'
            }
          ],
          expr: [{
            kind: 'set_local',
            id: {
              kind: 'var',
              name: 'i64'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'i32'
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
          name: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              name: 'i32',
              body: 'i32'
            },
            {
              kind: 'local',
              name: 'i64',
              body: 'i64'
            }
          ],
          expr: [{
            kind: 'set_local',
            id: {
              kind: 'var',
              name: 'i32'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'i64'
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
          name: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              name: 'f32',
              body: 'f32'
            },
            {
              kind: 'local',
              name: 'f64',
              body: 'f64'
            }
          ],
          expr: [{
            kind: 'set_local',
            id: {
              kind: 'var',
              name: 'f64'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'f32'
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
          name: null,
          params: [],
          result: null,
          local: [
            {
              kind: 'local',
              name: 'f32',
              body: 'f32'
            },
            {
              kind: 'local',
              name: 'f64',
              body: 'f64'
            }
          ],
          expr: [{
            kind: 'set_local',
            id: {
              kind: 'var',
              name: 'f32'
            },
            init: {
              kind: 'set_local',
              id: {
                kind: 'var',
                name: 'f64'
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
