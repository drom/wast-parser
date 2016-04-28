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
            name: 'f64.no_contraction'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_contraction'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_contraction'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_contraction',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9e87ce14273afp-103'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.2515ad31db63ep+664'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.868c6685e6185p+533'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.da94885b11493p+561'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_contraction',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.da21c460a6f44p+52'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.60859d2e7714ap-321'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e63f1b7b660e1p-302'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4672f256d1794p-268'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_contraction',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f3eaf43f327cp-594'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dfcc009906b57p+533'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5984e03c520a1p-104'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d4797fb3db166p-60'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_contraction',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dab6c772cb2e2p-69'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d761663679a84p-101'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f22f92c843226p-218'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b50d72dfcef68p-169'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_contraction',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.87c5def1e4d3dp-950'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.50cd5dab2207fp+935'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e629bd0da8c5dp-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.01b6feb4e78a7p-14'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fma'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fma'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fma'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fma'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fma'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fma'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a78402p+124'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.cf8548p-23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.992adap+107'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a5262cp+107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ed15a4p-28'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.613c72p-50'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.4757bp-88'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.5406b8p-77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ae63a2p+37'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b3a59ap-13'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c16918p+10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6e385cp+25'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2a77fap-8'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.bb7356p+22'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.32be2ap+1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0286d4p+15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.298fb6p+126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.03080cp-70'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.418de6p+34'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.2d15c6p+56'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ac357ff46eed4p+557'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.852c01a5e7297p+430'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.05995704eda8ap+987'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.855d905d338ep+987'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e2fd6bf32010cp+749'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.01c2238d405e4p-130'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.2ecc0db4b9f94p+573'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.e64eb07e063bcp+619'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.92b7c7439ede3p-721'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6aa97586d3de6p+1011'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8de4823f6358ap+237'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.1d4139fd20ecdp+291'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.466d30bddb453p-386'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.185a4d739c7aap+443'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5f9c436fbfc7bp+55'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.bd61a350fcc1ap+57'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fma',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7e2c44058a799p+52'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c73b71765b8b2p+685'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.16c641df0b108p+690'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.53ccb53de0bd1p+738'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_zero'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_add_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_zero'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_zero'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_add_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_zero'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_zero',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_zero',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_zero_sub'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_zero_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_zero_sub'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_zero_sub'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_zero_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_zero_sub'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_sub',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_sub',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_sub',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_sub',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_zero'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_mul_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_zero'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_zero'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_mul_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_zero'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_zero',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_zero_div'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_zero_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_zero_div'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_zero_div'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_zero_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_zero_div'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_div',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_one'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_one'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_one'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_one'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_one'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_one'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_one',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_one',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_neg1'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '-1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_neg1'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_neg1'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_neg1'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '-1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_neg1'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_neg1'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg1',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg1',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg0_sub'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'f32',
              init: '-0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_neg0_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg0_sub'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg0_sub'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'f64',
              init: '-0.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_neg0_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg0_sub'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_neg0_sub',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_neg0_sub',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg1_mul'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'f32',
              init: '-1.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_neg1_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg1_mul'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg1_mul'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'const',
              type: 'f64',
              init: '-1.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_neg1_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg1_mul'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_neg1_mul',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_neg1_mul',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_eq_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'eq',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_eq_self'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_eq_self'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_eq_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'eq',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_eq_self'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_eq_self'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_eq_self',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
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
        name: 'f64.no_fold_eq_self',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
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
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ne_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f32',
            operator: 'ne',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_ne_self'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ne_self'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ne_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'f64',
            operator: 'ne',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_ne_self'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ne_self'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ne_self',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
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
        name: 'f64.no_fold_ne_self',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sub_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_sub_self'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sub_self'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_self'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_sub_self'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_self'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_self',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_self',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_self',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'infinity'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_self',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_3'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '3.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_3'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_3'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_3'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '3.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_3'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_3'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.359c26p+50'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.9cd032p+48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.e45646p+93'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.42e42ep+92'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.2a3916p-83'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8da172p-85'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.1f8b38p-124'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.7f644ap-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.d64f64p-56'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.398a42p-57'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.a8a88d29e2cc3p+632'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.1b1b08c69732dp+631'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.bcf52dc950972p-167'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.28a373db8b0f7p-168'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.bd3c0d989f7a4p-874'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.28d2b3bb14fc3p-875'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.0138bf530a53cp+1007'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.56f6546eb86fbp+1005'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_3',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.052b87f9d794dp+415'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5c3a0aa274c67p+413'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_factor'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_factor'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_factor'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_factor'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_factor'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_factor'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4e2352p+40'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.842e2cp+49'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.eea602p+59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.77a7dp+109'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b4e7f6p-6'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8c990cp-5'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.70cc02p-9'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.00a342p-14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.06722ep-41'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.eed3cep-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5c5558p+123'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.651aaep+82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f8c6a4p-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.08c806p-83'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b5ceccp+118'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.afa15p+55'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3aaa1ep-84'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6d5eep-71'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8d2924p+20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.60c9cep-50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3adeda9144977p-424'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c15af887049e1p-462'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.905179c4c4778p-225'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.ec606bcb87b1ap-649'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3c84821c1d348p-662'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4ffd4c77ad037p-1009'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dd275335c6f4p-957'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.074f372347051p-334'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.aaeef661f4c96p-282'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9bd34abe8696dp+479'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5767029593e2p+198'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c4ded58a6f389p-289'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ba6fdef5d59c9p-260'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c1201c0470205p-253'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.841ada2e0f184p-512'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_factor',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9d3688f8e375ap-608'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bf91311588256p-579'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1605a6b5d5ff8p+489'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e6118ca76af53p-90'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_distribute'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_distribute'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_distribute'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_distribute'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_distribute'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_distribute'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4e2352p+40'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.842e2cp+49'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.eea602p+59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.77a7d2p+109'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b4e7f6p-6'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8c990cp-5'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.70cc02p-9'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.00a34p-14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.06722ep-41'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.eed3cep-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5c5558p+123'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.651abp+82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f8c6a4p-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.08c806p-83'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b5ceccp+118'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.afa14ep+55'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3aaa1ep-84'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6d5eep-71'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8d2924p+20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.60c9ccp-50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3adeda9144977p-424'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c15af887049e1p-462'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.905179c4c4778p-225'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.ec606bcb87b1bp-649'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3c84821c1d348p-662'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4ffd4c77ad037p-1009'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dd275335c6f4p-957'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.074f372347051p-334'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.aaeef661f4c96p-282'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9bd34abe8696dp+479'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5767029593e1fp+198'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c4ded58a6f389p-289'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ba6fdef5d59c9p-260'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c1201c0470205p-253'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.841ada2e0f183p-512'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_distribute',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9d3688f8e375ap-608'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bf91311588256p-579'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1605a6b5d5ff8p+489'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e6118ca76af52p-90'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_regroup_div_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_regroup_div_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_regroup_div_mul'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_regroup_div_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_regroup_div_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_regroup_div_mul'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2d14a6p-115'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.575a6cp-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5cee0ep-116'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.2844cap-63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.454738p+91'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b28a66p-115'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f53908p+72'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.6be56ep+16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b46fc6p-21'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a51df6p-123'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.792258p+118'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c343f8p-94'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e4d906p+73'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.be69f8p+68'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.ea1df2p-89'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6ae76p+112'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fc953cp+24'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.60b3e8p+71'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.47d0eap+66'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3c04b815e30bp-423'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.379646fd98127p-119'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bddb158506031p-642'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b9b3301f2dd2dp+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.46b3a402f86d5p+337'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6fbf1b9e1798dp-447'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd9704a5a6a06p+797'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6c9765bb4347fp-479'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a4af42e34a141p+902'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d2dde70eb68f9p-448'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.706023645be72p+480'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6c229f7d9101dp+611'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4d50fa68d3d9ep+836'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.926fa3cacc651p+255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8cc63d8caf4c7p-599'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8671ac4c35753p-878'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ef35b1695e659p-838'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.38d55f56406dp-639'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_regroup_mul_div'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_regroup_mul_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_regroup_mul_div'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_regroup_mul_div'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_regroup_mul_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_regroup_mul_div'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2d14a6p-115'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.575a6cp-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5cee0ep-116'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.454738p+91'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b28a66p-115'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f53908p+72'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.1a00e8p-96'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.6be56ep+16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b46fc6p-21'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a51df6p-123'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.79225ap+118'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c343f8p-94'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e4d906p+73'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.be69f8p+68'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.ea1df4p-89'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6ae76p+112'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fc953cp+24'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.60b3e8p+71'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3c04b815e30bp-423'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.379646fd98127p-119'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bddb158506031p-642'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b9b3301f2dd2ep+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.46b3a402f86d5p+337'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6fbf1b9e1798dp-447'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd9704a5a6a06p+797'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0da0b6328e09p-907'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6c9765bb4347fp-479'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a4af42e34a141p+902'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d2dde70eb68f9p-448'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4886b6d9a9a79p+871'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.706023645be72p+480'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6c229f7d9101dp+611'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4d50fa68d3d9ep+836'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_regroup_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8cc63d8caf4c7p-599'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8671ac4c35753p-878'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ef35b1695e659p-838'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0p+0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_reassociate_add'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'w',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'binop',
                type: 'f32',
                operator: 'add',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'w'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_reassociate_add'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_reassociate_add'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_reassociate_add'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'w',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'binop',
                type: 'f64',
                operator: 'add',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'w'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_reassociate_add'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_reassociate_add'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5f7ddcp+44'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.854e1p+34'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b2068cp+47'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.209692p+41'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.e26c76p+47'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.da3b78p-9'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4312fap-7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.0395e6p-4'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.6d5ea6p-7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.78b31ap-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fdb93ap+34'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b6fce6p+41'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c131d8p+44'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8835b6p+38'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8ff3a2p+44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.1739fcp+47'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a4b186p+49'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.0c623cp+35'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.16a102p+51'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.913ff6p+51'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.733cfap+108'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.38d30cp+108'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2f5854p+105'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ccb058p+94'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.813716p+106'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.697a4d9ff19a6p+841'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b305466238397p+847'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e0b2d9bfb4e72p+855'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6e1f3ae2b06bbp+857'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.eb0e5936f087ap+856'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.00ef6746b30e1p-543'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cc1cfafdf3fe1p-544'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f7726df3ecba6p-543'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b26695f99d307p-594'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.074892e3fad76p-547'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e807b3bd6d854p+440'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cedae26c2c5fp+407'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.00ab6e1442541p+437'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.28538a55997bdp+397'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.040e90bf871ebp+441'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ba2b6f35a2402p-317'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ad1c3fea7cd9ep-307'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.93aace2bf1261p-262'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9fddbe472847ep-260'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.3af30abc2c01bp-260'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ccb9c6092fb1dp+641'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4b7c28c108244p+614'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8a7cefef4bde1p+646'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.901b28b08b482p+644'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1810579194126p+646'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_reassociate_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'w',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'binop',
                type: 'f32',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'w'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_reassociate_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_reassociate_mul'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_reassociate_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'w',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'binop',
                type: 'f64',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'w'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_reassociate_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_reassociate_mul'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.950ba8p-116'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.efdacep-33'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5f9bcp+102'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f04508p-56'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.ff356ep-101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5990aep-56'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.7dfb04p+102'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4f774ap-125'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.595fe6p+70'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.c7c8fcp-8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6ad9a4p-48'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9138aap+55'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4a774ep-40'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.1ff08p+76'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.9cd8ecp+44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e1caecp-105'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.af0dd2p+77'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.016eep+56'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ab70d6p+59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.54870ep+89'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3b1dcp-99'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.4e5a34p-49'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.38ba5ap+3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7fb8eep+59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.5bbf98p-85'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e7842ab7181p-667'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fabf40ceeceafp+990'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1a38a825ab01ap-376'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.27e8ea469b14fp+664'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.336eb428af4f3p+613'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4ca2292a6acbcp+454'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6ffbab850089ap-516'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.547c32e1f5b93p-899'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c7571d9388375p+540'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1ac796954fc1p-419'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.73881a52e0401p-501'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1b68dd9efb1a7p+788'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d1c5e6a3eb27cp-762'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.56cb2fcc7546fp+88'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f508db92c34efp-386'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.2efa87859987cp+692'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.68e4373e241p-423'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4e2d0fb383a57p+223'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.301d3265c737bp-23'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.4b2b6c393f30cp+470'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_reassociate_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1013f7498b95fp-234'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d2d1c36fff138p-792'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.cbf1824ea7bfdp+728'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.440da9c8b836dp-599'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1a16512881c91p-895'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_0'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_0'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_0'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_0'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_0'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_0'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_neg0'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '-0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_neg0'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_neg0'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_neg0'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '-0.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_neg0'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_neg0'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-infinity'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-infinity'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_to_hypot'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'binop',
                type: 'f32',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'f32',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_to_hypot'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_to_hypot'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_to_hypot'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'sqrt',
            expr: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'binop',
                type: 'f64',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'f64',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                },
                right: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_to_hypot'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_to_hypot'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c2f338p-81'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.401b5ep-68'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.401cccp-68'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c38d1p-71'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.359ddp-107'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.c36a62p-71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.99e0cap-114'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ed0c6cp-69'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.ed0e48p-69'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.1b6ceap+5'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5440bep+17'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.5440cp+17'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8f019ep-76'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.182308p-71'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.17e2bcp-71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1a0ac4f7c8711p-636'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1372ebafff551p-534'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.13463fa37014ep-534'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b793512167499p+395'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.11cbc52af4c36p+410'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.11cbc530783a2p+410'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.76777f44ff40bp-536'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c3896e4dc1fbp-766'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8p-536'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.889ac72cc6b5dp-521'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8d7084e659f3bp-733'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.889ac72ca843ap-521'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_to_hypot',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5ee588c02cb08p-670'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.05ce25788d9ecp-514'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.05ce25788d9dfp-514'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_reciprocal'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'f32',
              init: '1.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_approximate_reciprocal'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_reciprocal'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2900b6p-10'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d427e8p+56'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b950d4p+9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e7212p+127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.55832ap+44'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0d11f8p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.42a466p-93'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7b62d8p+36'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.963ee6p+92'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5d0c32p+76'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d14dccp-74'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.778362p-77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.601de2p-82'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3c7abap+42'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.743d7ep+81'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_reciprocal_sqrt'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'f32',
              init: '1.0'
            },
            right: {
              kind: 'unop',
              type: 'f32',
              operator: 'sqrt',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_approximate_reciprocal_sqrt'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_reciprocal_sqrt'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal_sqrt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6af12ap-43'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b2113ap-14'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.300ed4p+21'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal_sqrt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e82fc6p-8'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.56a382p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.72c376p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal_sqrt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b9fa9cp-66'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.35394cp+35'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.85a9bap+32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal_sqrt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f4f546p-44'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c92ecep+122'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6e01c2p+21'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_reciprocal_sqrt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5da7aap-86'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.665652p+119'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b618cap+42'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_sqrt_reciprocal'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'const',
                type: 'f32',
                init: '1.0'
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_approximate_sqrt_reciprocal'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_approximate_sqrt_reciprocal'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_sqrt_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a4c986p+60'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.04e29cp-72'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8f5ac6p-31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_sqrt_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.50511ep-9'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.39228ep-32'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.3bdd46p+4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_sqrt_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.125ec2p+69'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a7f42ep+92'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.5db572p-35'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_sqrt_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ba4c5p+13'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.947784p-72'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.136f16p-7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_approximate_sqrt_reciprocal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.4a5be2p+104'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a7b718p-19'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.c2b5bp-53'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.no_fold_f32_s'
          },
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'cvtop',
              type: 'f32',
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.no_fold_f32_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32.no_fold_f32_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32.no_fold_f32_u'
          },
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'cvtop',
              type: 'f32',
              type1: 'i32',
              operator: 'convert_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32.no_fold_f32_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32.no_fold_f32_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.no_fold_f64_s'
          },
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
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'cvtop',
              type: 'f64',
              type1: 'i64',
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.no_fold_f64_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64.no_fold_f64_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64.no_fold_f64_u'
          },
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
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'cvtop',
              type: 'f64',
              type1: 'i64',
              operator: 'convert_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64.no_fold_f64_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64.no_fold_f64_u'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x1000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x1000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xf0000010'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xf0000010'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x1000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x1000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.no_fold_f32_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xf0000010'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xf0000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x20000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x20000000000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xf000000000000400'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xf000000000000400'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x20000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x20000000000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.no_fold_f64_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xf000000000000400'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xf000000000000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_sub'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_add_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_sub'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_sub'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_add_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_sub'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b553e4p-47'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.67db2cp-26'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.cp-47'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a884dp-23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f2ae1ep-19'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.a884ep-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fc04fp+82'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.65403ap+101'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p+83'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.870fa2p-78'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c54916p-56'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8p-78'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.17e966p-108'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5fa61ap-84'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1053ea172dba8p-874'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.113c413408ac8p-857'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.1053ea172p-874'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e377d54807972p-546'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.040a0a4d1ff7p-526'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.e377d548p-546'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.75f53cd926b62p-30'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.66b176e602bb5p-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.75f53dp-30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c450ff28332ap-341'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.15a5855023baep-305'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.c451p-341'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1ad4a596d3ea8p-619'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.17d81a41c0ea8p-588'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.1ad4a8p-619'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sub_add'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'sub',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_sub_add'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sub_add'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_add'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'sub',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_sub_add'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_add'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.523cb8p+9'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.93096cp+8'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.523cbap+9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a31a1p-111'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.745efp-95'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.a4p-111'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.3d5328p+26'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.58567p+35'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.3d54p+26'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.374e26p-39'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.66a5p-27'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.374p-39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.320facp-3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ac069ap+14'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.34p-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8f92aad2c9b8dp+255'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.08cd4992266cbp+259'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8f92aad2c9b9p+255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5aaff55742c8bp-666'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8f5f47181f46dp-647'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5aaff5578p-666'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.21bc52967a98dp+251'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fcffaa32d0884p+300'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.2p+251'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9c78361f47374p-26'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.69d69f4edc61cp-13'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.9c78361f48p-26'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sub_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4dbe68e4afab2p-367'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dc24e5b39cd02p-361'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4dbe68e4afacp-367'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_div'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_mul_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_div'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_div'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_mul_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_div'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.cd859ap+54'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6ca936p-47'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.cd8598p+54'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.0b56b8p-26'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.48264cp-106'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0b56a4p-26'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e7555cp-48'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9161cp+48'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.e7555ap-48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.aaa50ep+52'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.dfb39ep+60'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.aaa50cp+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2b7dfap-92'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.7c4ca6p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.2b7dfep-92'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.3d79ff4118a1ap-837'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b8b5dda31808cp-205'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.3d79ff412263ep-837'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f894d1ee6b3a4p+384'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8c2606d03d58ap+585'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f894d1ee6b3a5p+384'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a022260acc993p+238'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5fbc128fc8e3cp-552'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.a022260acc992p+238'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9d4b8ed174f54p-166'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ee3d467aeeac6p-906'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8dcc95a053b2bp-166'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e95ea897cdcd4p+660'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.854d5df085f2ep-327'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e95ea897cdcd5p+660'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_mul'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_mul'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_mul'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.dc6364p+38'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d630ecp+29'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.dc6362p+38'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.1f9836p-52'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.16c4e4p-18'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.1f9838p-52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c5972cp-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.d6659ep+7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.c5980ep-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2e3a9ep-74'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.353994p+59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.2e3a4p-74'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d96b82p-98'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.95d908p+27'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d96b84p-98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d01f913a52481p-876'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2cd0668b28344p+184'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d020daf71cdcp-876'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.81cb7d400918dp-714'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7caa643586d6ep-53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.81cb7d400918ep-714'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.66904c97b5c8ep-145'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5c3481592ad4cp+428'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.66904c97b5c8dp-145'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e75859d2f0765p-278'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5f19b6ab497f9p+283'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e75859d2f0764p-278'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.515fe9c3b5f5p+620'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.36be869c99f7ap+989'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.515fe9c3b5f4fp+620'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_fold_demote_promote'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'f32',
            operator: 'promote',
            expr: {
              kind: 'cvtop',
              type: 'f32',
              type1: 'f64',
              operator: 'demote',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'no_fold_demote_promote'
          },
          id: {
            kind: 'identifier',
            name: 'no_fold_demote_promote'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_demote_promote',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.dece272390f5dp-133'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.decep-133'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_demote_promote',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.19e6c79938a6fp-85'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.19e6c8p-85'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_demote_promote',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.49b297ec44dc1p+107'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.49b298p+107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_demote_promote',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.74f5bd865163p-88'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.74f5bep-88'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_demote_promote',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.26d675662367ep+104'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.26d676p+104'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_add'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'cvtop',
                type: 'f64',
                type1: 'f32',
                operator: 'promote',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'no_demote_mixed_add'
          },
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_add'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_add_commuted'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'cvtop',
                type: 'f64',
                type1: 'f32',
                operator: 'promote',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'no_demote_mixed_add_commuted'
          },
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_add_commuted'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f51a9d04854f9p-95'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.3f4e9cp-119'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f51a9ep-95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.065b3d81ad8dp+37'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.758cd8p+38'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f8ba76p+38'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.626c80963bd17p-119'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9bbf86p-121'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f6f93ep-120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0d5110e3385bbp-20'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.096f4ap-29'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0ccc5ap-20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.73852db4e5075p-20'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.24e474p-41'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.738536p-20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add_commuted',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.3f4e9cp-119'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f51a9d04854f9p-95'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f51a9ep-95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add_commuted',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.758cd8p+38'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.065b3d81ad8dp+37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f8ba76p+38'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add_commuted',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9bbf86p-121'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.626c80963bd17p-119'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f6f93ep-120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add_commuted',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.096f4ap-29'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0d5110e3385bbp-20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0ccc5ap-20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_add_commuted',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.24e474p-41'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.73852db4e5075p-20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.738536p-20'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_sub'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'binop',
              type: 'f64',
              operator: 'sub',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'cvtop',
                type: 'f64',
                type1: 'f32',
                operator: 'promote',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'no_demote_mixed_sub'
          },
          id: {
            kind: 'identifier',
            name: 'no_demote_mixed_sub'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a0a183220e9b1p+82'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c5acf8p+61'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a0a174p+82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6e2c5ac39f63ep+30'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d48ca4p+17'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.6e3bp+30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.98c74350dde6ap+6'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.9d69bcp-12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.98c7aap+6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0459f34091dbfp-54'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.61ad08p-71'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.045942p-54'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_demote_mixed_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a7498dca3fdb7p+14'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ed21c8p+15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.197d02p+15'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_s_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f32',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i32.no_fold_trunc_s_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_s_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_u_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f32',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i32.no_fold_trunc_u_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_u_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_s_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f32',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i32.no_fold_trunc_s_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_s_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_u_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f32',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i32.no_fold_trunc_u_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i32.no_fold_trunc_u_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_s_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f64',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i32.no_fold_trunc_s_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_s_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_u_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f64',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i32.no_fold_trunc_u_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_u_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_s_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f64',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i32.no_fold_trunc_s_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_s_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_u_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i32',
              type1: 'f64',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i32.no_fold_trunc_u_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i32.no_fold_trunc_u_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_s_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f32',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i64.no_fold_trunc_s_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_s_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_u_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f32',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i64.no_fold_trunc_u_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_u_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_s_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f32',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i64.no_fold_trunc_s_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_s_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_u_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f32',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.i64.no_fold_trunc_u_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f32.i64.no_fold_trunc_u_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_s_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f64',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i64.no_fold_trunc_s_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_s_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_u_convert_s'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f64',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i64.no_fold_trunc_u_convert_s'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_u_convert_s'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_s_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f64',
              operator: 'trunc_s',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i64.no_fold_trunc_s_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_s_convert_u'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_u_convert_u'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'f64',
              operator: 'trunc_u',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.i64.no_fold_trunc_u_convert_u'
          },
          id: {
            kind: 'identifier',
            name: 'f64.i64.no_fold_trunc_u_convert_u'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i32.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffep+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i32.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.i64.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_s_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_u_convert_s',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_s_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.i64.no_fold_trunc_u_convert_u',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: '1',
          segment: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'init'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'i',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'init'
          },
          id: {
            kind: 'identifier',
            name: 'init'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'run'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f32'
              }]
            }
          ],
          result: null,
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [{
            kind: 'loop',
            id: {
              kind: 'identifier',
              name: 'exit'
            },
            extra: {
              kind: 'identifier',
              name: 'cont'
            },
            body: [
              {
                kind: 'store',
                type: 'f32',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  }
                },
                data: {
                  kind: 'binop',
                  type: 'f32',
                  operator: 'div',
                  left: {
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
                        name: 'i'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'z'
                    }
                  }
                }
              },
              {
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                },
                init: {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
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
                kind: 'br_if',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                test: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'lt_u',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    }
                  }
                },
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'run'
          },
          id: {
            kind: 'identifier',
            name: 'run'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'check'
          },
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
            type: 'f32'
          },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'check'
          },
          id: {
            kind: 'identifier',
            name: 'check'
          }
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '0'
        },
        {
          kind: 'const',
          type: 'f32',
          init: '15.1'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '4'
        },
        {
          kind: 'const',
          type: 'f32',
          init: '15.2'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '8'
        },
        {
          kind: 'const',
          type: 'f32',
          init: '15.3'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '12'
        },
        {
          kind: 'const',
          type: 'f32',
          init: '15.4'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '15.1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '15.2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '15.3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '12'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '15.4'
      }
    },
    {
      kind: 'invoke',
      name: 'run',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '16'
        },
        {
          kind: 'const',
          type: 'f32',
          init: '3.0'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.422222p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.444444p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.466666p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '12'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.488888p+2'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: '1',
          segment: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'init'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'i',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'f64',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'i'
              }
            },
            data: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'init'
          },
          id: {
            kind: 'identifier',
            name: 'init'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'run'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'z',
                type: 'f64'
              }]
            }
          ],
          result: null,
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'i',
              type: 'i32'
            }]
          }],
          body: [{
            kind: 'loop',
            id: {
              kind: 'identifier',
              name: 'exit'
            },
            extra: {
              kind: 'identifier',
              name: 'cont'
            },
            body: [
              {
                kind: 'store',
                type: 'f64',
                size: null,
                offset: 0,
                align: 0,
                addr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'i'
                  }
                },
                data: {
                  kind: 'binop',
                  type: 'f64',
                  operator: 'div',
                  left: {
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
                        name: 'i'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'z'
                    }
                  }
                }
              },
              {
                kind: 'set_local',
                id: {
                  kind: 'identifier',
                  name: 'i'
                },
                init: {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '8'
                  }
                }
              },
              {
                kind: 'br_if',
                id: {
                  kind: 'identifier',
                  name: 'cont'
                },
                test: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'lt_u',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'i'
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    }
                  }
                },
                expr: null
              }
            ]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'run'
          },
          id: {
            kind: 'identifier',
            name: 'run'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'check'
          },
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
            type: 'f64'
          },
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
                name: 'i'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'check'
          },
          id: {
            kind: 'identifier',
            name: 'check'
          }
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '0'
        },
        {
          kind: 'const',
          type: 'f64',
          init: '15.1'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '8'
        },
        {
          kind: 'const',
          type: 'f64',
          init: '15.2'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '16'
        },
        {
          kind: 'const',
          type: 'f64',
          init: '15.3'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'init',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '24'
        },
        {
          kind: 'const',
          type: 'f64',
          init: '15.4'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '15.1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '15.2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '15.3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '15.4'
      }
    },
    {
      kind: 'invoke',
      name: 'run',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '32'
        },
        {
          kind: 'const',
          type: 'f64',
          init: '3.0'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4222222222222p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4444444444444p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4666666666667p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'check',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4888888888889p+2'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.ult'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.ule'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.ugt'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.uge'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.ult'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.ule'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.ugt'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.uge'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
            operator: 'eqz',
            expr: {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.ult'
          },
          id: {
            kind: 'identifier',
            name: 'f32.ult'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.ule'
          },
          id: {
            kind: 'identifier',
            name: 'f32.ule'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.ugt'
          },
          id: {
            kind: 'identifier',
            name: 'f32.ugt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.uge'
          },
          id: {
            kind: 'identifier',
            name: 'f32.uge'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.ult'
          },
          id: {
            kind: 'identifier',
            name: 'f64.ult'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.ule'
          },
          id: {
            kind: 'identifier',
            name: 'f64.ule'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.ugt'
          },
          id: {
            kind: 'identifier',
            name: 'f64.ugt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.uge'
          },
          id: {
            kind: 'identifier',
            name: 'f64.uge'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.ult',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ult',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ult',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          }
        ]
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
        name: 'f32.ult',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
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
        name: 'f32.ule',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ule',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ule',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          }
        ]
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
        name: 'f32.ule',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
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
        name: 'f32.ugt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ugt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.ugt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          }
        ]
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
        name: 'f32.ugt',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
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
        name: 'f32.uge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.uge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          }
        ]
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
        name: 'f32.uge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3.0'
          }
        ]
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
        name: 'f32.uge',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
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
        name: 'f64.ult',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ult',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ult',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          }
        ]
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
        name: 'f64.ult',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
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
        name: 'f64.ule',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ule',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ule',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          }
        ]
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
        name: 'f64.ule',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
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
        name: 'f64.ugt',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ugt',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.ugt',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          }
        ]
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
        name: 'f64.ugt',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
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
        name: 'f64.uge',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.uge',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          }
        ]
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
        name: 'f64.uge',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3.0'
          }
        ]
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
        name: 'f64.uge',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '2.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_lt_select'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_le_select'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_gt_select'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_ge_select'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_lt_select'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_le_select'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_gt_select'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_select'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_select'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_ge_select'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_select'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_lt_if'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_le_if'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_gt_if'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_ge_if'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_lt_if'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_le_if'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_gt_if'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_if'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_if'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'y'
                }
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_ge_if'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_if'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_lt_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_le_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_gt_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_ge_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_lt_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '-0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_le_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '-0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_gt_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_select_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_select_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'select',
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '0.0'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_ge_select_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_select_to_abs'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_select_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '0.0'
              }
            },
            then: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_lt_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_lt_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            },
            then: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_le_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_le_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_gt_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_gt_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '0.0'
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f32',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_ge_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_ge_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '0.0'
              }
            },
            then: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_lt_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_lt_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '-0.0'
              }
            },
            then: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            else: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_le_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_le_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '-0.0'
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_gt_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_gt_if_to_abs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_if_to_abs'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'if',
            test: {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '0.0'
              }
            },
            then: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            else: {
              kind: 'unop',
              type: 'f64',
              operator: 'neg',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_ge_if_to_abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_ge_if_to_abs'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_lt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_le_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_gt_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_ge_if_to_abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'incorrect_correction'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'sub',
              left: {
                kind: 'binop',
                type: 'f32',
                operator: 'add',
                left: {
                  kind: 'const',
                  type: 'f32',
                  init: '1.333'
                },
                right: {
                  kind: 'const',
                  type: 'f32',
                  init: '1.225'
                }
              },
              right: {
                kind: 'const',
                type: 'f32',
                init: '1.333'
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '1.225'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'incorrect_correction'
          },
          id: {
            kind: 'identifier',
            name: 'incorrect_correction'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'incorrect_correction',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-23'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'incorrect_correction'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'sub',
              left: {
                kind: 'binop',
                type: 'f64',
                operator: 'add',
                left: {
                  kind: 'const',
                  type: 'f64',
                  init: '1.333'
                },
                right: {
                  kind: 'const',
                  type: 'f64',
                  init: '1.225'
                }
              },
              right: {
                kind: 'const',
                type: 'f64',
                init: '1.333'
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '1.225'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'incorrect_correction'
          },
          id: {
            kind: 'identifier',
            name: 'incorrect_correction'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'incorrect_correction',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-52'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'calculate'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'r',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'q',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'z0',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'z1',
                type: 'f32'
              }]
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              init: {
                kind: 'const',
                type: 'f32',
                init: '156.25'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'r'
              },
              init: {
                kind: 'const',
                type: 'f32',
                init: '208.333333334'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'q'
              },
              init: {
                kind: 'const',
                type: 'f32',
                init: '1.77951304201'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'z0'
              },
              init: {
                kind: 'binop',
                type: 'f32',
                operator: 'div',
                left: {
                  kind: 'binop',
                  type: 'f32',
                  operator: 'mul',
                  left: {
                    kind: 'unop',
                    type: 'f32',
                    operator: 'neg',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'r'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
                    }
                  }
                },
                right: {
                  kind: 'binop',
                  type: 'f32',
                  operator: 'sub',
                  left: {
                    kind: 'binop',
                    type: 'f32',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'x'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'q'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'r'
                    }
                  }
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'z1'
              },
              init: {
                kind: 'binop',
                type: 'f32',
                operator: 'div',
                left: {
                  kind: 'binop',
                  type: 'f32',
                  operator: 'mul',
                  left: {
                    kind: 'unop',
                    type: 'f32',
                    operator: 'neg',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'r'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
                    }
                  }
                },
                right: {
                  kind: 'binop',
                  type: 'f32',
                  operator: 'sub',
                  left: {
                    kind: 'binop',
                    type: 'f32',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'x'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'q'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'r'
                    }
                  }
                }
              }
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'relop',
                    type: 'f32',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'z0'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'z1'
                      }
                    }
                  },
                  expr: null
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z1'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'calculate'
          },
          id: {
            kind: 'identifier',
            name: 'calculate'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'calculate',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d2ed46p+8'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'calculate'
          },
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'r',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'q',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'z0',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'z1',
                type: 'f64'
              }]
            }
          ],
          body: [
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              init: {
                kind: 'const',
                type: 'f64',
                init: '156.25'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'r'
              },
              init: {
                kind: 'const',
                type: 'f64',
                init: '208.333333334'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'q'
              },
              init: {
                kind: 'const',
                type: 'f64',
                init: '1.77951304201'
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'z0'
              },
              init: {
                kind: 'binop',
                type: 'f64',
                operator: 'div',
                left: {
                  kind: 'binop',
                  type: 'f64',
                  operator: 'mul',
                  left: {
                    kind: 'unop',
                    type: 'f64',
                    operator: 'neg',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'r'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
                    }
                  }
                },
                right: {
                  kind: 'binop',
                  type: 'f64',
                  operator: 'sub',
                  left: {
                    kind: 'binop',
                    type: 'f64',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'x'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'q'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'r'
                    }
                  }
                }
              }
            },
            {
              kind: 'set_local',
              id: {
                kind: 'identifier',
                name: 'z1'
              },
              init: {
                kind: 'binop',
                type: 'f64',
                operator: 'div',
                left: {
                  kind: 'binop',
                  type: 'f64',
                  operator: 'mul',
                  left: {
                    kind: 'unop',
                    type: 'f64',
                    operator: 'neg',
                    expr: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'r'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
                    }
                  }
                },
                right: {
                  kind: 'binop',
                  type: 'f64',
                  operator: 'sub',
                  left: {
                    kind: 'binop',
                    type: 'f64',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'x'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'q'
                      }
                    }
                  },
                  right: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'r'
                    }
                  }
                }
              }
            },
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'br_if',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  test: {
                    kind: 'relop',
                    type: 'f64',
                    operator: 'eq',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'z0'
                      }
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'z1'
                      }
                    }
                  },
                  expr: null
                },
                {kind: 'unreachable'}
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'z1'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'calculate'
          },
          id: {
            kind: 'identifier',
            name: 'calculate'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'calculate',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d2ed4d0218c93p+8'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'llvm_pr26746'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'const',
              type: 'f32',
              init: '0.0'
            },
            right: {
              kind: 'binop',
              type: 'f32',
              operator: 'sub',
              left: {
                kind: 'const',
                type: 'f32',
                init: '-0.0'
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'llvm_pr26746'
          },
          id: {
            kind: 'identifier',
            name: 'llvm_pr26746'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'llvm_pr26746',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'llvm_pr27153'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'cvtop',
              type: 'f32',
              type1: 'i32',
              operator: 'convert_s',
              expr: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'x'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '268435455'
                }
              }
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '-8388608.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'llvm_pr27153'
          },
          id: {
            kind: 'identifier',
            name: 'llvm_pr27153'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'llvm_pr27153',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '33554434'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '25165824.000000'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'thepast0'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'b',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'c',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'd',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'a'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'b'
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'c'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'd'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'thepast0'
          },
          id: {
            kind: 'identifier',
            name: 'thepast0'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'thepast1'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'b',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'c',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'a'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'b'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'c'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'thepast1'
          },
          id: {
            kind: 'identifier',
            name: 'thepast1'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'thepast2'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'a',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'b',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'c',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'a'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'b'
                }
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'c'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'thepast2'
          },
          id: {
            kind: 'identifier',
            name: 'thepast2'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'thepast0',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1021'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'thepast1',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-54'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp-1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'thepast2',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-125'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'inverse'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'const',
              type: 'f32',
              init: '1.0'
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'inverse'
          },
          id: {
            kind: 'identifier',
            name: 'inverse'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'inverse',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '96.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.555556p-7'
      }
    }
  ]
}
