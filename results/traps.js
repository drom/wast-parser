{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'no_dce.i32.div_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i32.div_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.div_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.div_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'no_dce.i32.div_s'
        },
        {
          kind: 'export',
          name: 'no_dce.i32.div_u'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.div_s'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.div_u'
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'no_dce.i32.rem_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i32.rem_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i32'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i32'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.rem_s',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.rem_u',
          params: [
            {
              kind: 'param',
              name: 'x',
              type: 'i64'
            },
            {
              kind: 'param',
              name: 'y',
              type: 'i64'
            }
          ],
          result: null,
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'no_dce.i32.rem_s'
        },
        {
          kind: 'export',
          name: 'no_dce.i32.rem_u'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.rem_s'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.rem_u'
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'no_dce.i32.trunc_s_f32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i32.trunc_u_f32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i32.trunc_s_f64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i32.trunc_u_f64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.trunc_s_f32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.trunc_u_f32',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.trunc_s_f64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'no_dce.i64.trunc_u_f64',
          params: [{
            kind: 'param',
            name: 'x',
            type: 'f64'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'no_dce.i32.trunc_s_f32'
        },
        {
          kind: 'export',
          name: 'no_dce.i32.trunc_u_f32'
        },
        {
          kind: 'export',
          name: 'no_dce.i32.trunc_s_f64'
        },
        {
          kind: 'export',
          name: 'no_dce.i32.trunc_u_f64'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.trunc_s_f32'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.trunc_u_f32'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.trunc_s_f64'
        },
        {
          kind: 'export',
          name: 'no_dce.i64.trunc_u_f64'
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: invalid conversion to integer'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '8',
          int1: null,
          segment: []
        },
        {
          kind: 'export',
          name: 'i32.load'
        },
        {
          kind: 'func',
          name: 'i32.load',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'i64.load'
        },
        {
          kind: 'func',
          name: 'i64.load',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'i64',
            size: null,
            sign: null,
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'f32.load'
        },
        {
          kind: 'func',
          name: 'f32.load',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: 'f64.load'
        },
        {
          kind: 'func',
          name: 'f64.load',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'f64',
            size: null,
            sign: null,
            align: 0,
            expr: {
              kind: 'get_local',
              id: {
                kind: 'var',
                name: 'i'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: out of bounds memory access'
      }
    }
  ]
}