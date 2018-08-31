{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        impo: null,
        expo: null,
        int: {
          kind: 'literal',
          value: 0,
          raw: [
            [' '],
            '0'
          ]
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
        impo: null,
        expo: null,
        int: {
          kind: 'literal',
          value: 0,
          raw: [
            [' '],
            '0'
          ]
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
        impo: null,
        expo: null,
        int: {
          kind: 'literal',
          value: 0,
          raw: [
            [' '],
            '0'
          ]
        },
        int1: {
          kind: 'literal',
          value: 65536,
          raw: '65536'
        },
        segment: []
      }]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 0,
              raw: [
                [' '],
                '0'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 0,
              raw: [
                [' '],
                '0'
              ]
            },
            int1: null,
            segment: []
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'multiple memories'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            impo: {
              kind: 'import',
              id: null,
              modName: {
                kind: 'literal',
                value: 'spectest'
              },
              funcName: {
                kind: 'literal',
                value: 'memory'
              },
              type: null,
              params: [],
              result: null
            },
            expo: null,
            int: {
              kind: 'literal',
              value: 0,
              raw: [
                [' '],
                '0'
              ]
            },
            int1: null,
            segment: []
          },
          {
            kind: 'memory',
            impo: null,
            expo: null,
            int: {
              kind: 'literal',
              value: 0,
              raw: [
                [' '],
                '0'
              ]
            },
            int1: null,
            segment: []
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'multiple memories'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: []
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'memsize'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'memory.size'}]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'memsize',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: ''
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'memsize'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'memory.size'}]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'memsize',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          impo: null,
          expo: null,
          int: null,
          int1: null,
          segment: [{
            kind: 'data',
            expr: null,
            values: [{
              kind: 'literal',
              value: 'x'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'memsize'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{kind: 'memory.size'}]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'memsize',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          values: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          values: [{
            kind: 'literal',
            value: ''
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          values: [{
            kind: 'literal',
            value: 'x'
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'f32',
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
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'f32',
              init: '0'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
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
              init: '0'
            }
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{kind: 'memory.size'}]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'drop',
            body: [{
              kind: 'memory.grow',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }]
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
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
        value: 'size minimum must not be greater than maximum'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 65537,
            raw: [
              [' '],
              '65537'
            ]
          },
          int1: null,
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'memory size must be at most 65536 pages (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 2147483648,
            raw: [
              [' '],
              '2147483648'
            ]
          },
          int1: null,
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'memory size must be at most 65536 pages (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 4294967295,
            raw: [
              [' '],
              '4294967295'
            ]
          },
          int1: null,
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'memory size must be at most 65536 pages (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 0,
            raw: [
              [' '],
              '0'
            ]
          },
          int1: {
            kind: 'literal',
            value: 65537,
            raw: '65537'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'memory size must be at most 65536 pages (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 0,
            raw: [
              [' '],
              '0'
            ]
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
        value: 'memory size must be at most 65536 pages (4GiB)'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          impo: null,
          expo: null,
          int: {
            kind: 'literal',
            value: 0,
            raw: [
              [' '],
              '0'
            ]
          },
          int1: {
            kind: 'literal',
            value: 4294967295,
            raw: '4294967295'
          },
          segment: []
        }]
      },
      failure: {
        kind: 'literal',
        value: 'memory size must be at most 65536 pages (4GiB)'
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
            value: 'ABC\\a7D'
          }]
        },
        {
          kind: 'data',
          expr: {
            kind: 'const',
            type: 'i32',
            init: '20'
          },
          values: [{
            kind: 'literal',
            value: 'WASM'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'data'
          }],
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'cast'
          }],
          imp: null,
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
              id: null,
              result: null,
              body: [
                {
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
                {
                  kind: 'then',
                  id: null,
                  body: [{
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'f64',
                      init: '0'
                    }
                  }]
                }
              ]
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32_load8_s'
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32_load8_u'
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32_load16_s'
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32_load16_u'
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load8_s'
          }],
          imp: null,
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load8_u'
          }],
          imp: null,
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load16_s'
          }],
          imp: null,
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load16_u'
          }],
          imp: null,
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load32_s'
          }],
          imp: null,
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64_load32_u'
          }],
          imp: null,
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
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfedc6543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x3456cdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfedc6543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x3456cdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfedc6543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x6543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x3456cdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffcdef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfedc6543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x6543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x3456cdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xcdef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
        id: null,
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
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffffef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffcdef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xcdef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x56346543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff98bacdef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfedcba9856346543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x56346543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3456436598bacdef'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x98bacdef'
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
            value: '(func (param i32) (result i32) (i32.load32 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i32) (i32.load32_u (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i32) (i32.load32_s (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i32) (i32.load64 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i32) (i32.load64_u (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i32) (i32.load64_s (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (i32.store32 (get_local 0) (i32.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (i32.store64 (get_local 0) (i64.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i64) (i64.load64 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i64) (i64.load64_u (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result i64) (i64.load64_s (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (i64.store64 (get_local 0) (i64.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result f32) (f32.load32 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result f32) (f32.load64 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (f32.store32 (get_local 0) (f32.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (f32.store64 (get_local 0) (f64.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result f64) (f64.load32 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (result f64) (f64.load64 (get_local 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (f64.store32 (get_local 0) (f32.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
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
            value: '(func (param i32) (f64.store64 (get_local 0) (f64.const 0)))'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown operator'
      }
    }
  ]
}
