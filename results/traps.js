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
            name: 'no_dce.i32.div_s'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.div_u'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.div_s'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.div_u'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.rem_s'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.rem_u'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.rem_s'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.rem_u'
          },
          type: null,
          param: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'y'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
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
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.trunc_s_f32'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.trunc_u_f32'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.trunc_s_f64'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.trunc_u_f64'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.trunc_s_f32'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.trunc_u_f32'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.trunc_s_f64'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.trunc_u_f64'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: null,
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'x'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
        value: 'invalid conversion to integer'
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
          name: 'no_dce.i32.load'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i32.load'
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
            offset: 0,
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
          name: 'no_dce.i64.load'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.i64.load'
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
            type: 'i64',
            size: null,
            sign: null,
            offset: 0,
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
          name: 'no_dce.f32.load'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.f32.load'
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
            type: 'f32',
            size: null,
            sign: null,
            offset: 0,
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
          name: 'no_dce.f64.load'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_dce.f64.load'
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
            type: 'f64',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'no_dce.i32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
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
        name: 'no_dce.i64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
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
        name: 'no_dce.f32.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
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
        name: 'no_dce.f64.load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'out of bounds memory access'
      }
    }
  ]
}
