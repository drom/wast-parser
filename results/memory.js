{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '0',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '1',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1',
        int1: '256',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '0',
        segment: [{
          kind: 'segment',
          int: '0',
          name: ''
        }]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1',
        int1: '1',
        segment: [{
          kind: 'segment',
          int: '0',
          name: 'a'
        }]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1',
        int1: '2',
        segment: [
          {
            kind: 'segment',
            int: '0',
            name: 'a'
          },
          {
            kind: 'segment',
            int: '65535',
            name: 'b'
          }
        ]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1',
        int1: '2',
        segment: [
          {
            kind: 'segment',
            int: '0',
            name: 'a'
          },
          {
            kind: 'segment',
            int: '1',
            name: 'b'
          },
          {
            kind: 'segment',
            int: '2',
            name: 'c'
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
          int: '1',
          int1: '0',
          segment: []
        }]
      },
      failure: {
        kind: 'failure',
        value: 'initial memory pages must be less than or equal to the maximum'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '0',
          int1: '0',
          segment: [{
            kind: 'segment',
            int: '0',
            name: 'a'
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1',
          int1: '2',
          segment: [
            {
              kind: 'segment',
              int: '0',
              name: 'a'
            },
            {
              kind: 'segment',
              int: '98304',
              name: 'b'
            }
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1',
          int1: '2',
          segment: [
            {
              kind: 'segment',
              int: '0',
              name: 'abc'
            },
            {
              kind: 'segment',
              int: '0',
              name: 'def'
            }
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1',
          int1: '2',
          segment: [
            {
              kind: 'segment',
              int: '3',
              name: 'ab'
            },
            {
              kind: 'segment',
              int: '0',
              name: 'de'
            }
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1',
          int1: '2',
          segment: [
            {
              kind: 'segment',
              int: '0',
              name: 'a'
            },
            {
              kind: 'segment',
              int: '2',
              name: 'b'
            },
            {
              kind: 'segment',
              int: '1',
              name: 'c'
            }
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'load',
            type: 'f32',
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
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            id: null,
            type: null,
            param: [],
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
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: null,
          segment: [
            {
              kind: 'segment',
              int: '0',
              name: 'ABC\a7D'
            },
            {
              kind: 'segment',
              int: '20',
              name: 'WASM'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'data'
          },
          type: null,
          param: [],
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
          type: null,
          param: [],
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
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: null
                  },
                  alternate: null
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
                  consequent: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  alternate: null
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
          type: null,
          param: [],
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
                  consequent: {
                    kind: 'br',
                    id: {
                      kind: 'literal',
                      value: 2,
                      raw: '2'
                    },
                    expr: null
                  },
                  alternate: null
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
                  consequent: {
                    kind: 'return',
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  alternate: null
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
          type: null,
          param: [],
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
              consequent: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'f64',
                  init: '0'
                }
              },
              alternate: null
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
              size: 1,
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
              size: 1,
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
          type: null,
          param: [{
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
              size: 1,
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
              size: 1,
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
          type: null,
          param: [{
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
              size: 1,
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
          type: null,
          param: [{
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
              size: 3,
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
          type: null,
          param: [{
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
              size: 3,
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
          id: {
            kind: 'identifier',
            name: 'data'
          },
          name: 'data'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'aligned'
          },
          name: 'aligned'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'unaligned'
          },
          name: 'unaligned'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'cast'
          },
          name: 'cast'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i32_load8_s'
          },
          name: 'i32_load8_s'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i32_load8_u'
          },
          name: 'i32_load8_u'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i32_load16_s'
          },
          name: 'i32_load16_s'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i32_load16_u'
          },
          name: 'i32_load16_u'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load8_s'
          },
          name: 'i64_load8_s'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load8_u'
          },
          name: 'i64_load8_u'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load16_s'
          },
          name: 'i64_load16_s'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load16_u'
          },
          name: 'i64_load16_u'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load32_s'
          },
          name: 'i64_load32_s'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            name: 'i64_load32_u'
          },
          name: 'i64_load32_u'
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
