{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        int1: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        int1: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        int1: {
          kind: 'literal',
          value: 256,
          raw: '256'
        },
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        int1: {
          kind: 'literal',
          value: 65535,
          raw: '65535'
        },
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        int1: {
          kind: 'literal',
          value: 0,
          raw: '0'
        },
        segment: [{
          kind: 'segment',
          offset: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          init: {
            kind: 'literal',
            value: ''
          }
        }]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        int1: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        segment: [{
          kind: 'segment',
          offset: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          init: {
            kind: 'literal',
            value: 'a'
          }
        }]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        int1: {
          kind: 'literal',
          value: 2,
          raw: '2'
        },
        segment: [
          {
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: 'a'
            }
          },
          {
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 65535,
              raw: '65535'
            },
            init: {
              kind: 'literal',
              value: 'b'
            }
          }
        ]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: {
          kind: 'literal',
          value: 1,
          raw: '1'
        },
        int1: {
          kind: 'literal',
          value: 2,
          raw: '2'
        },
        segment: [
          {
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: 'a'
            }
          },
          {
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 1,
              raw: '1'
            },
            init: {
              kind: 'literal',
              value: 'b'
            }
          },
          {
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 2,
              raw: '2'
            },
            init: {
              kind: 'literal',
              value: 'c'
            }
          }
        ]
      }]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'minimum memory pages must be less than or equal to the maximum'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          segment: [{
            kind: 'segment',
            offset: {
              kind: 'literal',
              value: 0,
              raw: '0'
            },
            init: {
              kind: 'literal',
              value: 'a'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 2,
            raw: '2'
          },
          segment: [
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'a'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 98304,
                raw: '98304'
              },
              init: {
                kind: 'literal',
                value: 'b'
              }
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 2,
            raw: '2'
          },
          segment: [
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'abc'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'def'
              }
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 2,
            raw: '2'
          },
          segment: [
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 3,
                raw: '3'
              },
              init: {
                kind: 'literal',
                value: 'ab'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'de'
              }
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: {
            kind: 'literal',
            value: 2,
            raw: '2'
          },
          segment: [
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'a'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 2,
                raw: '2'
              },
              init: {
                kind: 'literal',
                value: 'b'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              init: {
                kind: 'literal',
                value: 'c'
              }
            }
          ]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: {
            kind: 'literal',
            value: 65536,
            raw: '65536'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'linear memory pages must be less or equal to 65535 (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: {
            kind: 'literal',
            value: 2147483648,
            raw: '2147483648'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'linear memory pages must be less or equal to 65535 (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: {
            kind: 'literal',
            value: 4294967296,
            raw: '4294967296'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'linear memory pages must be less or equal to 65535 (4GiB)'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 8,
            sign: false,
            offset: 0,
            align: 1,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: 16,
            sign: false,
            offset: 0,
            align: 2,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 4,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
            align: 4,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must be a power of two'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 3,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must be a power of two'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 5,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must be a power of two'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 6,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must be a power of two'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 7,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must be a power of two'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 16,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 32,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 0,
              align: 8,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: false,
              offset: 0,
              align: 4,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 2,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
              value: 0,
              raw: '0'
            },
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            expo: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 2,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'alignment must not be larger than natural'
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
            raw: '1'
          },
          int1: null,
          segment: [
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'literal',
                value: 'ABC\\a7D'
              }
            },
            {
              kind: 'segment',
              offset: {
                kind: 'literal',
                value: 20,
                raw: '20'
              },
              init: {
                kind: 'literal',
                value: 'WASM'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'data'
          },
          expo: null,
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
            operator: 'and',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '65'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '3'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '167'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '6'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '19'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '20'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '87'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '23'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '77'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '24'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: 8,
                    sign: false,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1023'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'aligned'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            },
            {
              kind: 'loop',
              body: [
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  then: {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: null
                  },
                  else: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 2,
                    raw: '2'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '4'
                    }
                  }
                },
                {
                  kind: 'store',
                  type: 'i32',
                  size: null,
                  offset: 0,
                  align: 0,
                  addr: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    }
                  },
                  data: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  init: {
                    kind: 'load',
                    type: 'i32',
                    size: null,
                    sign: null,
                    offset: 0,
                    align: 0,
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 2,
                        raw: '2'
                      }
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'ne',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      }
                    }
                  },
                  then: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  else: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'unaligned'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'f64'
              },
              {
                kind: 'item',
                type: 'f64'
              }
            ]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            },
            {
              kind: 'loop',
              body: [
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'i32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  then: {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: null
                  },
                  else: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 2,
                    raw: '2'
                  },
                  init: {
                    kind: 'cvtop',
                    type: 'f64',
                    type1: 'i32',
                    operator: 'convert_s',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    }
                  }
                },
                {
                  kind: 'store',
                  type: 'f64',
                  size: null,
                  offset: 0,
                  align: 1,
                  addr: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 0,
                      raw: '0'
                    }
                  },
                  data: {
                    kind: 'get_local',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 1,
                    raw: '1'
                  },
                  init: {
                    kind: 'load',
                    type: 'f64',
                    size: null,
                    sign: null,
                    offset: 0,
                    align: 1,
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    }
                  }
                },
                {
                  kind: 'if',
                  test: {
                    kind: 'relop',
                    type: 'f64',
                    operator: 'ne',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 2,
                        raw: '2'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 1,
                        raw: '1'
                      }
                    }
                  },
                  then: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  else: null
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  }
                },
                {
                  kind: 'br',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'cast'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '-12345'
              }
            },
            {
              kind: 'if',
              test: {
                kind: 'relop',
                type: 'f64',
                operator: 'eq',
                left: {
                  kind: 'load',
                  type: 'f64',
                  size: null,
                  sign: null,
                  offset: 0,
                  align: 0,
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '8'
                  }
                },
                right: {
                  kind: 'cvtop',
                  type: 'f64',
                  type1: 'i64',
                  operator: 'reinterpret',
                  expr: {
                    kind: 'const',
                    type: 'i64',
                    init: '-12345'
                  }
                }
              },
              then: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'f64',
                  init: '0'
                }
              },
              else: null
            },
            {
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 1,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              },
              data: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 1,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '15'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '16453'
              }
            },
            {
              kind: 'load',
              type: 'f64',
              size: null,
              sign: null,
              offset: 0,
              align: 1,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_load8_s'
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_load8_u'
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_load16_s'
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_load16_u'
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
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load8_s'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load8_u'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load16_s'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load16_u'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load32_s'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load32_u'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                }
              }
            },
            {
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'data'
          },
          id: {
            kind: 'identifier',
            name: 'data'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'aligned'
          },
          id: {
            kind: 'identifier',
            name: 'aligned'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'unaligned'
          },
          id: {
            kind: 'identifier',
            name: 'unaligned'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'cast'
          },
          id: {
            kind: 'identifier',
            name: 'cast'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_load8_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_load8_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_load8_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_load8_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_load16_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_load16_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_load16_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_load16_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load8_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load8_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load8_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load8_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load16_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load16_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load16_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load16_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load32_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load32_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_load32_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_load32_u'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'data',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'aligned',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'unaligned',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'cast',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '42.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294967295'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '40000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '40000'
      }
    }
  ]
}
