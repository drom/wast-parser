{
  kind: 'script',
  body: [
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expo: null,
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
            kind: 'set_local',
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
          kind: 'func',
          id: null,
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
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
          kind: 'func',
          id: null,
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'const',
              type: 'f32',
              init: '1'
            }
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
          kind: 'func',
          id: null,
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'set_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'const',
              type: 'f64',
              init: '1'
            }
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
            expo: null,
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: [{
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f32'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f32'
            },
            local: [],
            body: [{
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f64'
            },
            local: [],
            body: [{
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
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
              kind: 'store',
              type: 'i32',
              size: 8,
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
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
              kind: 'store',
              type: 'i32',
              size: 16,
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 8,
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 16,
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
                init: '1'
              }
            }]
          }
        ]
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
            expo: null,
            imp: null,
            type: null,
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: [{
              kind: 'store',
              type: 'i64',
              size: 32,
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
                init: '1'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    }
  ]
}
