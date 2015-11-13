{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'stmt'
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
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'j',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'j'
              },
              init: {
                kind: 'const',
                type: 'i32',
                init: '100'
              }
            },
            {
              kind: 'label',
              id: null,
              body: {
                kind: 'tableswitch',
                id: null,
                test: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    id: 'i'
                  }
                },
                table: {
                  kind: 'table',
                  items: [
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '0'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '1'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '2'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '3'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '4'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '5'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '6'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '7'
                      ],
                      body: [],
                      fallthrough: false
                    }
                  ]
                },
                body: [
                  {
                    kind: 'case',
                    test: [
                      '$',
                      'default'
                    ],
                    body: [],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '0'
                    ],
                    body: [{
                      kind: 'return',
                      expr: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'i'
                        }
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '1'
                    ],
                    body: [{kind: 'nop'}],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '2'
                    ],
                    body: [],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '3'
                    ],
                    body: [
                      {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          id: 'j'
                        },
                        init: {
                          kind: 'binop',
                          type: 'i32',
                          operator: 'sub',
                          left: {
                            kind: 'const',
                            type: 'i32',
                            init: '0'
                          },
                          right: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              id: 'i'
                            }
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
                    ],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '4'
                    ],
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      },
                      expr: null
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '5'
                    ],
                    body: [{
                      kind: 'br',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      },
                      expr: {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          id: 'j'
                        },
                        init: {
                          kind: 'const',
                          type: 'i32',
                          init: '101'
                        }
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '6'
                    ],
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        id: 'j'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '101'
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      'default'
                    ],
                    body: [{
                      kind: 'set_local',
                      id: {
                        kind: 'identifier',
                        id: 'j'
                      },
                      init: {
                        kind: 'const',
                        type: 'i32',
                        init: '102'
                      }
                    }],
                    fallthrough: false
                  },
                  {
                    kind: 'case',
                    test: [
                      '$',
                      '7'
                    ],
                    body: [],
                    fallthrough: false
                  }
                ]
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  id: 'j'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'expr'
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
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'j',
              type: 'i64'
            }]
          }],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                id: 'j'
              },
              init: {
                kind: 'const',
                type: 'i64',
                init: '100'
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'label',
                id: {
                  kind: 'identifier',
                  id: 'l'
                },
                body: {
                  kind: 'tableswitch',
                  id: null,
                  test: {
                    kind: 'cvtop',
                    type: 'i32',
                    type1: 'i64',
                    operator: 'wrap',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        id: 'i'
                      }
                    }
                  },
                  table: {
                    kind: 'table',
                    items: [
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '0'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '1'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '2'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '3'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '4'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '5'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '6'
                        ],
                        body: [],
                        fallthrough: false
                      },
                      {
                        kind: 'case',
                        test: [
                          '$',
                          '7'
                        ],
                        body: [],
                        fallthrough: false
                      }
                    ]
                  },
                  body: [
                    {
                      kind: 'case',
                      test: [
                        '$',
                        'default'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '0'
                      ],
                      body: [{
                        kind: 'return',
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            id: 'i'
                          }
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '1'
                      ],
                      body: [{kind: 'nop'}],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '2'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '3'
                      ],
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          id: 'l'
                        },
                        expr: {
                          kind: 'binop',
                          type: 'i64',
                          operator: 'sub',
                          left: {
                            kind: 'const',
                            type: 'i64',
                            init: '0'
                          },
                          right: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              id: 'i'
                            }
                          }
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '6'
                      ],
                      body: [{
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          id: 'j'
                        },
                        init: {
                          kind: 'const',
                          type: 'i64',
                          init: '101'
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '4'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '5'
                      ],
                      body: [],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        'default'
                      ],
                      body: [{
                        kind: 'br',
                        id: {
                          kind: 'identifier',
                          id: 'l'
                        },
                        expr: {
                          kind: 'get_local',
                          id: {
                            kind: 'identifier',
                            id: 'j'
                          }
                        }
                      }],
                      fallthrough: false
                    },
                    {
                      kind: 'case',
                      test: [
                        '$',
                        '7'
                      ],
                      body: [{
                        kind: 'const',
                        type: 'i64',
                        init: '-5'
                      }],
                      fallthrough: false
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'corner'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'tableswitch',
              id: null,
              test: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              table: {
                kind: 'table',
                items: []
              },
              body: [
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [],
                  fallthrough: false
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [],
                  fallthrough: false
                }
              ]
            },
            {
              kind: 'tableswitch',
              id: null,
              test: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              table: {
                kind: 'table',
                items: []
              },
              body: [
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [],
                  fallthrough: false
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [{
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      id: 'x'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'x'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }
                  }],
                  fallthrough: false
                }
              ]
            },
            {
              kind: 'tableswitch',
              id: null,
              test: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              table: {
                kind: 'table',
                items: [{
                  kind: 'case',
                  test: [
                    '$',
                    '0'
                  ],
                  body: [],
                  fallthrough: false
                }]
              },
              body: [
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [],
                  fallthrough: false
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [{
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      id: 'x'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'x'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '2'
                      }
                    }
                  }],
                  fallthrough: false
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    '0'
                  ],
                  body: [{
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      id: 'x'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'x'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '4'
                      }
                    }
                  }],
                  fallthrough: false
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'break'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'tableswitch',
              id: {
                kind: 'identifier',
                id: 'l'
              },
              test: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              table: {
                kind: 'table',
                items: []
              },
              body: [{
                kind: 'br',
                id: {
                  kind: 'identifier',
                  id: 'l'
                },
                expr: null
              }]
            },
            {
              kind: 'tableswitch',
              id: {
                kind: 'identifier',
                id: 'l'
              },
              test: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              table: {
                kind: 'table',
                items: [{
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    id: 'l'
                  },
                  expr: null
                }]
              },
              body: [
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [],
                  fallthrough: false
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    'default'
                  ],
                  body: [{
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      id: 'x'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'x'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }
                  }],
                  fallthrough: false
                }
              ]
            },
            {
              kind: 'tableswitch',
              id: {
                kind: 'identifier',
                id: 'l'
              },
              test: {
                kind: 'const',
                type: 'i32',
                init: '1'
              },
              table: {
                kind: 'table',
                items: [{
                  kind: 'case',
                  test: [
                    '$',
                    '0'
                  ],
                  body: [],
                  fallthrough: false
                }]
              },
              body: [
                {
                  kind: 'br',
                  id: {
                    kind: 'identifier',
                    id: 'l'
                  },
                  expr: null
                },
                {
                  kind: 'case',
                  test: [
                    '$',
                    '0'
                  ],
                  body: [{
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      id: 'x'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          id: 'x'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '2'
                      }
                    }
                  }],
                  fallthrough: false
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'stmt'
        },
        {
          kind: 'export',
          name: 'expr'
        },
        {
          kind: 'export',
          name: 'corner'
        },
        {
          kind: 'export',
          name: 'break'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
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
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
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
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
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
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
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
        name: 'stmt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-10'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
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
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
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
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '6'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'expr',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-10'
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
        name: 'corner',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'break',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'tableswitch',
            id: null,
            test: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            table: {
              kind: 'table',
              items: []
            },
            body: [{
              kind: 'case',
              test: '0',
              body: [],
              fallthrough: false
            }]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'invalid target'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: null,
          type: null,
          param: [],
          result: null,
          local: [],
          body: [{
            kind: 'tableswitch',
            id: null,
            test: {
              kind: 'const',
              type: 'i32',
              init: '0'
            },
            table: {
              kind: 'table',
              items: []
            },
            body: [
              {
                kind: 'case',
                test: '1',
                body: [],
                fallthrough: false
              },
              {
                kind: 'case',
                test: null
              }
            ]
          }]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'invalid target'
      }
    }
  ]
}
