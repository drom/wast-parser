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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_zero',
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
        name: 'f64.no_fold_add_zero',
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
            name: 'f32.no_fold_sub_zero'
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
            value: 'f32.no_fold_sub_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sub_zero'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_zero'
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
            value: 'f64.no_fold_sub_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sub_zero'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sub_zero',
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
        name: 'f64.no_fold_sub_zero',
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
        name: 'f32.no_fold_mul_zero',
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_zero',
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
            name: 'f32.no_fold_mul_one'
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
              init: '1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_mul_one'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_one'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_one'
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
              init: '1.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_mul_one'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_one'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_one',
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
        name: 'f64.no_fold_mul_one',
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_zero_div',
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_zero_div',
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_0',
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_neg0',
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
            name: 'no_fold_promote_demote'
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
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'cvtop',
              type: 'f64',
              type1: 'f32',
              operator: 'promote',
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
            value: 'no_fold_promote_demote'
          },
          id: {
            kind: 'identifier',
            name: 'no_fold_promote_demote'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'no_fold_promote_demote',
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
            name: 'llvm_pr27036'
          },
          type: null,
          params: [
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
                operator: 'or',
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
                  init: '-25034805'
                }
              }
            },
            right: {
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
                    name: 'y'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '14942208'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'llvm_pr27036'
          },
          id: {
            kind: 'identifier',
            name: 'llvm_pr27036'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'llvm_pr27036',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-25034805'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '14942208'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.340068p+23'
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
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_sqrt_minus_2'
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
            },
            right: {
              kind: 'const',
              type: 'f32',
              init: '2.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_sqrt_minus_2'
          },
          id: {
            kind: 'identifier',
            name: 'f32_sqrt_minus_2'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_sqrt_minus_2'
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
              kind: 'unop',
              type: 'f64',
              operator: 'sqrt',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            right: {
              kind: 'const',
              type: 'f64',
              init: '2.0'
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_sqrt_minus_2'
          },
          id: {
            kind: 'identifier',
            name: 'f64_sqrt_minus_2'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_sqrt_minus_2',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4.0'
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
        name: 'f64_sqrt_minus_2',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4.0'
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
            name: 'f32.no_fold_recip_recip'
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
            value: 'f32.no_fold_recip_recip'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_recip_recip'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_recip_recip'
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
              init: '1.0'
            },
            right: {
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'const',
                type: 'f64',
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
            value: 'f64.no_fold_recip_recip'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_recip_recip'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.e8bf18p+65'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.e8bf16p+65'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.e24248p-77'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.e24246p-77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.caf0e8p-64'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.caf0eap-64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.e66982p+4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.e66984p+4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.f99916p+70'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f99914p+70'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.d81248dda63dp+148'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d81248dda63d1p+148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.f4750312039e3p+66'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.f4750312039e2p+66'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fa50630eec7f6p+166'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fa50630eec7f5p+166'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.db0598617ba92p-686'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.db0598617ba91p-686'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_recip_recip',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.85f1638a0c82bp+902'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.85f1638a0c82ap+902'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_algebraic_factoring'
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
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_algebraic_factoring'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_algebraic_factoring'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_algebraic_factoring'
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
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_algebraic_factoring'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_algebraic_factoring'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ef678ep-55'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c160b8p-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.129402p-107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2d76bcp+24'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f4089cp+24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.36d89ap+49'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7ca2b2p+45'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.08513cp+47'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.db10dep+93'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7d5e3p+17'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c783b4p+7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1c10a6p+35'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.daf96p+7'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.dac6bp+19'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b8422ep+39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e17c0a02ac6b5p-476'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e8f13f1fcdc14p-463'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d2ec518f62863p-925'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.971b55a57e3a3p-377'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.edeb4233c1b27p-399'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.43b3f69fb258bp-753'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c3b9dc02472fap-378'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.74e9faebaff14p-369'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0f9c07e8caa25p-737'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.afaf4688ed019p+179'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b07171cb49e94p+188'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6d3f2e2bebcf7p+377'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4377a98948f12p+114'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.500c05bd24c97p+90'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.98b72dbf7bf72p+228'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_algebraic_factoring'
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_algebraic_factoring'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_algebraic_factoring'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_algebraic_factoring'
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_algebraic_factoring'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_algebraic_factoring'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8e2c14p-46'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.bad59ap-39'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.7efe5p-77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.7ef192p+41'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.db184ap+33'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1e6932p+83'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7eb458p-12'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.52c498p-13'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.cc0bc6p-24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2675c6p-44'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.edd31ap-46'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.17294cp-88'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.9a5f92p+51'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2b0098p+52'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.7189a6p+103'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.749a128f18f69p+356'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0bc97ee1354e1p+337'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0f28115518d74p+713'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2dab01b2215eap+309'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e12b288bff2bdp+331'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.c4319ad25d201p+663'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3ed898431e102p+42'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c409183fa92e6p+39'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.80a611103c71dp+84'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.be663e4c0e4b2p+182'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.da85703760d25p+166'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.853434f1a2ffep+365'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_algebraic_factoring',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.230e09952df1cp-236'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fa2752adfadc9p-237'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.42e43156bd1b8p-474'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: '1',
          segment: [{
            kind: 'segment',
            int: '0',
            name: {
              kind: 'literal',
              value: '\\c4\\c5\\57\\24\\a5\\84\\c8\\0b\\6d\\b8\\4b\\2e\\f2\\76\\17\\1c\\ca\\4a\\56\\1e\\1b\\6e\\71\\22\\5d\\17\\1e\\6e\\bf\\cd\\14\\5c\\c7\\21\\55\\51\\39\\9c\\1f\\b2\\51\\f0\\a3\\93\\d7\\c1\\2c\\ae\\7e\\a8\\28\\3a\\01\\21\\f4\\0a\\58\\93\\f8\\42\\77\\9f\\83\\39\\6a\\5f\\ba\\f7\\0a\\d8\\51\\6a\\34\\ca\\ad\\c6\\34\\0e\\d8\\26\\dc\\4c\\33\\1c\\ed\\29\\90\\a8\\78\\0f\\d1\\ce\\76\\31\\23\\83\\b8\\35\\e8\\f2\\44\\b0\\d3\\a1\\fc\\bb\\32\\e1\\b0\\ba\\69\\44\\09\\d6\\d9\\7d\\ff\\2e\\c0\\5a\\36\\14\\33\\14\\3e\\a9\\fa\\87\\6d\\8b\\bc\\ce\\9d\\a7\\fd\\c4\\e9\\85\\3f\\dd\\d7\\e1\\18\\a6\\50\\26\\72\\6e\\3f\\73\\0f\\f8\\12\\93\\23\\34\\61\\76\\12\\48\\c0\\9b\\05\\93\\eb\\ac\\86\\de\\94\\3e\\55\\e8\\8c\\e8\\dd\\e4\\fc\\95\\47\\be\\56\\03\\21\\20\\4c\\e6\\bf\\7b\\f6\\7f\\d5\\ba\\73\\1c\\c1\\14\\8f\\c4\\27\\96\\b3\\bd\\33\\ff\\78\\41\\5f\\c0\\5a\\ce\\f6\\67\\6e\\73\\9a\\17\\66\\70\\03\\f8\\ce\\27\\a3\\52\\b2\\9f\\3b\\bf\\fb\\ae\\ed\\d3\\5a\\f8\\37\\57\\f0\\f5\\6e\\ef\\b1\\4d\\70\\3d\\54\\a7\\01\\9a\\85\\08\\48\\91\\f5\\9d\\0c\\60\\87\\5b\\d9\\54\\1e\\51\\6d\\88\\8e\\08\\8c\\a5\\71\\3a\\56\\08\\67\\46\\8f\\8f\\13\\2a\\2c\\ec\\2c\\1f\\b4\\62\\2b\\6f\\41\\0a\\c4\\65\\42\\a2\\31\\6b\\2c\\7d\\3e\\bb\\75\\ac\\86\\97\\30\\d9\\48\\cd\\9a\\1f\\56\\c4\\c6\\e4\\12\\c0\\9d\\fb\\ee\\02\\8c\\ce\\1c\\f2\\1e\\a1\\78\\23\\db\\c4\\1e\\49\\03\\d3\\71\\cc\\08\\50\\c5\\d8\\5c\\ed\\d5\\b5\\65\\ac\\b5\\c9\\21\\d2\\c9\\29\\76\\de\\f0\\30\\1a\\5b\\3c\\f2\\3b\\db\\3a\\39\\82\\3a\\16\\08\\6f\\a8\\f1\\be\\69\\69\\99\\71\\a6\\05\\d3\\14\\93\\2a\\16\\f2\\2f\\11\\c7\\7e\\20\\bb\\91\\44\\ee\\f8\\e4\\01\\53\\c0\\b9\\7f\\f0\\bf\\f0\\03\\9c\\6d\\b1\\df\\a2\\44\\01\\6d\\6b\\71\\2b\\5c\\b3\\21\\19\\46\\5e\\8f\\db\\91\\d3\\7c\\78\\6b\\b7\\12\\00\\8f\\eb\\bd\\8a\\f5\\d4\\2e\\c4\\c1\\1e\\df\\73\\63\\59\\47\\49\\03\\0a\\b7\\cf\\24\\cf\\9c\\0e\\44\\7a\\9e\\14\\fb\\42\\bf\\9d\\39\\30\\9e\\a0\\ab\\2f\\d1\\ae\\9e\\6a\\83\\43\\e3\\55\\7d\\85\\bf\\63\\8a\\f8\\96\\10\\1f\\fe\\6d\\e7\\22\\1b\\e1\\69\\46\\8a\\44\\c8\\c8\\f9\\0c\\2b\\19\\07\\a5\\02\\3e\\f2\\30\\10\\9a\\85\\8a\\5f\\ef\\81\\45\\a0\\77\\b1\\03\\10\\73\\4b\\ae\\98\\9d\\47\\bf\\9a\\2d\\3a\\d5\\0f\\03\\66\\e3\\3d\\53\\d9\\40\\ce\\1f\\6f\\32\\2f\\21\\2b\\23\\21\\6c\\62\\d4\\a7\\3e\\a8\\ce\\28\\31\\2d\\00\\3d\\67\\5e\\af\\a0\\cf\\2e\\d2\\b9\\6b\\84\\eb\\69\\08\\3c\\62\\36\\be\\12\\fd\\36\\7f\\88\\3e\\ad\\bc\\0b\\c0\\41\\c4\\50\\b6\\e3\\50\\31\\e8\\ce\\e2\\96\\65\\55\\9c\\16\\46\\e6\\b0\\2d\\3a\\e8\\81\\05\\b0\\bf\\34\\f7\\bc\\10\\1c\\fb\\cc\\3c\\f1\\85\\97\\42\\9f\\eb\\14\\8d\\3c\\bf\\d7\\17\\88\\49\\9d\\8b\\2b\\b2\\3a\\83\\d1\\4f\\04\\9e\\a1\\0f\\ad\\08\\9d\\54\\af\\d1\\82\\c3\\ec\\32\\2f\\02\\8f\\05\\21\\2d\\a2\\b7\\e4\\f4\\6f\\2e\\81\\2b\\0b\\9c\\fc\\cb\\fe\\74\\02\\f9\\db\\f4\\f3\\ea\\00\\a8\\ec\\d1\\99\\74\\26\\dd\\d6\\34\\d5\\25\\b1\\46\\dd\\9c\\aa\\71\\f5\\60\\b0\\88\\c8\\e0\\0b\\59\\5a\\25\\4f\\29\\66\\f9\\e3\\2e\\fe\\e9\\da\\e5\\18\\4f\\27\\62\\f4\\ce\\a4\\21\\95\\74\\c7\\57\\64\\27\\9a\\4c\\fd\\54\\7d\\61\\ce\\c3\\ac\\87\\46\\9c\\fa\\ff\\09\\ca\\79\\97\\67\\24\\74\\ca\\d4\\21\\83\\26\\25\\19\\12\\37\\64\\19\\e5\\65\\e0\\74\\75\\8e\\dd\\c8\\ef\\74\\c7\\d8\\21\\2b\\79\\04\\51\\46\\65\\60\\03\\5d\\fa\\d8\\f4\\65\\a4\\9e\\5d\\23\\da\\d7\\8a\\92\\80\\a4\\de\\78\\3c\\f1\\57\\42\\6d\\cd\\c9\\2f\\d5\\a4\\9e\\ab\\40\\f4\\cb\\1b\\d7\\a3\\ca\\fc\\eb\\a7\\01\\b2\\9a\\69\\4e\\46\\9b\\18\\4e\\dd\\79\\a7\\aa\\a6\\52\\39\\1e\\ef\\30\\cc\\9b\\bd\\5b\\ee\\4c\\21\\6d\\30\\00\\72\\b0\\46\\5f\\08\\cf\\c5\\b9\\e0\\3e\\c2\\b3\\0c\\dc\\8e\\64\\de\\19\\42\\79\\cf\\43\\ea\\43\\5d\\8e\\88\\f7\\ab\\15\\dc\\3f\\c8\\67\\20\\db\\b8\\64\\b1\\47\\1f\\de\\f2\\cb\\3f\\59\\9f\\d8\\46\\90\\dc\\ae\\2f\\22\\f9\\e2\\31\\89\\d9\\9c\\1c\\4c\\d3\\a9\\4a\\57\\84\\9c\\9f\\ea\\2c\\3c\\ae\\3c\\c3\\1e\\8b\\e5\\4e\\17\\01\\25\\db\\34\\46\\5f\\15\\ea\\05\\0c\\7c\\d9\\45\\8c\\19\\d0\\73\\8a\\96\\16\\dd\\44\\f9\\05\\b7\\5b\\71\\b0\\e6\\21\\36\\5f\\75\\89\\91\\73\\75\\ab\\7d\\ae\\d3\\73\\ec\\37\\c6\\ea\\55\\75\\ef\\ea\\ab\\8b\\7b\\11\\dc\\6d\\1a\\b2\\6a\\c4\\25\\cf\\aa\\e3\\9f\\49\\49\\89\\cb\\37\\9b\\0a\\a7\\01\\60\\70\\dc\\b7\\c8\\83\\e1\\42\\f5\\be\\ad\\62\\94\\ad\\8d\\a1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.kahan_sum'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'p',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'sum',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'c',
                type: 'f32'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 't',
                type: 'f32'
              }]
            }
          ],
          body: [
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'top'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 't'
                  },
                  init: {
                    kind: 'binop',
                    type: 'f32',
                    operator: 'sub',
                    left: {
                      kind: 'binop',
                      type: 'f32',
                      operator: 'sub',
                      left: {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'sum'
                        },
                        init: {
                          kind: 'binop',
                          type: 'f32',
                          operator: 'add',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'c'
                            }
                          },
                          right: {
                            kind: 'set_local',
                            id: {
                              kind: 'identifier',
                              name: 't'
                            },
                            init: {
                              kind: 'binop',
                              type: 'f32',
                              operator: 'sub',
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
                                    name: 'p'
                                  }
                                }
                              },
                              right: {
                                kind: 'get_local',
                                id: {
                                  kind: 'identifier',
                                  name: 't'
                                }
                              }
                            }
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
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 't'
                      }
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'p'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'p'
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
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'c'
                  },
                  init: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'sum'
                    }
                  }
                },
                {
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'top'
                  },
                  test: {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          name: 'n'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '-1'
                      }
                    }
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'sum'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.kahan_sum'
          },
          id: {
            kind: 'identifier',
            name: 'f32.kahan_sum'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.plain_sum'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'p',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'sum',
              type: 'f32'
            }]
          }],
          body: [
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'top'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'sum'
                  },
                  init: {
                    kind: 'binop',
                    type: 'f32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'sum'
                      }
                    },
                    right: {
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
                          name: 'p'
                        }
                      }
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'p'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'p'
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
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'n'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '-1'
                    }
                  }
                },
                {
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'top'
                  },
                  test: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    }
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'sum'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.plain_sum'
          },
          id: {
            kind: 'identifier',
            name: 'f32.plain_sum'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.kahan_sum',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '256'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.101a1ap+104'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.plain_sum',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '256'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.a0343ap+103'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: '1',
          segment: [{
            kind: 'segment',
            int: '0',
            name: {
              kind: 'literal',
              value: '\\13\\05\\84\\42\\5d\\a2\\2c\\c6\\43\\db\\55\\a9\\cd\\da\\55\\e3\\73\\fc\\58\\d6\\ba\\d5\\00\\fd\\83\\35\\42\\88\\8b\\13\\5d\\38\\4a\\47\\0d\\72\\73\\a1\\1a\\ef\\c4\\45\\17\\57\\d8\\c9\\46\\e0\\8d\\6c\\e1\\37\\70\\c8\\83\\5b\\55\\5e\\5a\\2d\\73\\1e\\56\\c8\\e1\\6d\\69\\14\\78\\0a\\8a\\5a\\64\\3a\\09\\c7\\a8\\87\\c5\\f0\\d3\\5d\\e6\\03\\fc\\93\\be\\26\\ca\\d6\\a9\\91\\60\\bd\\b0\\ed\\ae\\f7\\30\\7e\\92\\3a\\6f\\a7\\59\\8e\\aa\\7d\\bf\\67\\58\\2a\\54\\f8\\4e\\fe\\ed\\35\\58\\a6\\51\\bf\\42\\e5\\4b\\66\\27\\24\\6d\\7f\\42\\2d\\28\\92\\18\\ec\\08\\ae\\e7\\55\\da\\b1\\a6\\65\\a5\\72\\50\\47\\1b\\b8\\a9\\54\\d7\\a6\\06\\5b\\0f\\42\\58\\83\\8a\\17\\82\\c6\\10\\43\\a0\\c0\\2e\\6d\\bc\\5a\\85\\53\\72\\7f\\ad\\44\\bc\\30\\3c\\55\\b2\\24\\9a\\74\\3a\\9e\\e1\\d8\\0f\\70\\fc\\a9\\3a\\cd\\93\\4b\\ec\\e3\\7e\\dd\\5d\\27\\cd\\f8\\a0\\9d\\1c\\11\\c0\\57\\2e\\fd\\c8\\13\\32\\cc\\3a\\1a\\7d\\a3\\41\\55\\ed\\c3\\82\\49\\2a\\04\\1e\\ef\\73\\b9\\2e\\2e\\e3\\5f\\f4\\df\\e6\\b2\\33\\0c\\39\\3f\\6f\\44\\6a\\03\\c1\\42\\b9\\fa\\b1\\c8\\ed\\a5\\58\\99\\7f\\ed\\b4\\72\\9e\\79\\eb\\fb\\43\\82\\45\\aa\\bb\\95\\d2\\ff\\28\\9e\\f6\\a1\\ad\\95\\d6\\55\\95\\0d\\6f\\60\\11\\c7\\78\\3e\\49\\f2\\7e\\48\\f4\\a2\\71\\d0\\13\\8e\\b3\\de\\99\\52\\e3\\45\\74\\ea\\76\\0e\\1b\\2a\\c8\\ee\\14\\01\\c4\\50\\5b\\36\\3c\\ef\\ba\\72\\a2\\a6\\08\\f8\\7b\\36\\9d\\f9\\ef\\0b\\c7\\56\\2d\\5c\\f0\\9d\\5d\\de\\fc\\b8\\ad\\0f\\64\\0e\\97\\15\\32\\26\\c2\\31\\e6\\05\\1e\\ef\\cb\\17\\1b\\6d\\15\\0b\\74\\5d\\d3\\2e\\f8\\6b\\86\\b4\\ba\\73\\52\\53\\99\\a9\\76\\20\\45\\c9\\40\\80\\6b\\14\\ed\\a1\\fa\\80\\46\\e6\\26\\d2\\e6\\98\\c4\\57\\bf\\c4\\1c\\a4\\90\\7a\\36\\94\\14\\ba\\15\\89\\6e\\e6\\9c\\37\\8c\\f4\\de\\12\\22\\5d\\a1\\79\\50\\67\\0d\\3d\\7a\\e9\\d4\\aa\\2e\\7f\\2a\\7a\\30\\3d\\ea\\5d\\12\\48\\fe\\e1\\18\\cd\\a4\\57\\a2\\87\\3e\\b6\\9a\\8b\\db\\da\\9d\\78\\9c\\cf\\8d\\b1\\4f\\90\\b4\\34\\e0\\9d\\f6\\ca\\fe\\4c\\3b\\78\\6d\\0a\\5c\\18\\9f\\61\\b9\\dd\\b4\\e0\\0f\\76\\e0\\1b\\69\\0d\\5e\\58\\73\\70\\5e\\0e\\2d\\a1\\7d\\ff\\20\\eb\\91\\34\\92\\ac\\38\\72\\2a\\1f\\8e\\71\\2e\\6a\\f1\\af\\c7\\27\\70\\d9\\c4\\57\\f7\\d2\\3c\\1d\\b8\\f0\\f0\\64\\cf\\dc\\ae\\be\\a3\\cc\\3e\\22\\7d\\4e\\69\\21\\63\\17\\ed\\03\\02\\54\\9a\\0f\\50\\4e\\13\\5a\\35\\a1\\22\\a4\\df\\86\\c2\\74\\79\\16\\b8\\69\\69\\a0\\52\\5d\\11\\64\\bd\\5b\\93\\fc\\69\\a0\\f4\\13\\d0\\81\\51\\dd\\fa\\0c\\15\\c3\\7a\\c9\\62\\7a\\a9\\1d\\c9\\e6\\5a\\b3\\5b\\97\\02\\3c\\64\\22\\12\\3c\\22\\90\\64\\2d\\30\\54\\4c\\b4\\a1\\22\\09\\57\\22\\5e\\8e\\38\\2b\\02\\a8\\ae\\f6\\be\\0d\\2b\\f2\\03\\ad\\fa\\10\\01\\71\\77\\2a\\30\\02\\95\\f6\\00\\3e\\d0\\c4\\8d\\34\\19\\50\\21\\0a\\bc\\50\\da\\3c\\30\\d6\\3a\\31\\94\\8d\\3a\\fe\\ef\\14\\57\\9d\\4b\\93\\00\\96\\24\\0c\\6f\\fd\\bc\\23\\76\\02\\6c\\eb\\52\\72\\80\\11\\7e\\80\\3a\\13\\12\\38\\1d\\38\\49\\95\\40\\27\\8a\\44\\7b\\e8\\dc\\6d\\8c\\8c\\8e\\3c\\b5\\b3\\18\\0e\\f6\\08\\1a\\84\\41\\35\\ff\\8b\\b8\\93\\40\\ea\\e1\\51\\1d\\89\\a5\\8d\\42\\68\\29\\ea\\2f\\c1\\7a\\52\\eb\\90\\5d\\4d\\d6\\80\\e3\\d7\\75\\48\\ce\\ed\\d3\\01\\1c\\8d\\5b\\a5\\94\\0d\\78\\cf\\f1\\06\\13\\2f\\98\\02\\a4\\6d\\2e\\6c\\f2\\d5\\74\\29\\89\\4c\\f9\\03\\f5\\c7\\18\\ad\\7a\\f0\\68\\f8\\5c\\d6\\59\\87\\6e\\d6\\3f\\06\\be\\86\\20\\e3\\41\\91\\22\\f3\\6e\\8b\\f0\\68\\1c\\57\\a7\\fc\\b0\\7c\\9e\\99\\0b\\96\\1a\\89\\5f\\e6\\0d\\7c\\08\\51\\a0\\a2\\67\\9a\\47\\00\\93\\6b\\f9\\28\\f0\\68\\db\\62\\f1\\e0\\65\\2c\\53\\33\\e0\\a7\\ca\\11\\42\\30\\f6\\af\\01\\c1\\65\\3d\\32\\01\\6f\\ab\\2e\\be\\d3\\8b\\be\\14\\c3\\ff\\ec\\fb\\f0\\f9\\c5\\0c\\05\\6f\\01\\09\\6b\\e3\\34\\31\\0c\\1f\\66\\a6\\42\\bc\\1a\\87\\49\\16\\16\\8c\\b0\\90\\0d\\34\\8c\\0a\\e1\\09\\5e\\10\\a4\\6b\\56\\cc\\f0\\c9\\bb\\dc\\b8\\5c\\ce\\f6\\cc\\8d\\75\\7e\\b3\\07\\88\\04\\2f\\b4\\5e\\c9\\e3\\4a\\23\\73\\19\\62\\6c\\9a\\03\\76\\44\\86\\9c\\60\\fc\\db\\72\\8f\\27\\a0\\dd\\b3\\c5\\da\\ff\\f9\\ec\\6a\\b1\\7b\\d3\\cf\\50\\37\\c9\\7a\\78\\0c\\e4\\3a\\b6\\f5\\e6\\f4\\98\\6e\\42\\7d\\35\\73\\8b\\45\\c0\\56\\97\\cd\\6d\\ce\\cf\\ad\\31\\b3\\c3\\54\\fa\\ef\\d5\\c0\\f4\\6a\\5f\\54\\e7\\49\\3e\\33\\0a\\30\\38\\fd\\d9\\05\\ff\\a5\\3f\\57\\46\\14\\b5\\91\\17\\ca\\6b\\98\\23\\7a\\65\\b3\\6c\\02\\b4\\cc\\79\\5d\\58\\d8\\b3\\d5\\94\\ae\\f4\\6d\\75\\65\\f7\\92\\bf\\7e\\47\\4c\\3c\\ee\\db\\ac\\f1\\32\\5d\\fb\\6f\\41\\1c\\34\\c8\\83\\4f\\c2\\58\\01\\be\\05\\3e\\66\\16\\a6\\04\\6d\\5d\\4f\\86\\09\\27\\82\\25\\12\\cd\\3a\\cd\\ce\\6b\\bc\\ca\\ac\\28\\9b\\ee\\6a\\25\\86\\9e\\45\\70\\c6\\d2\\bd\\3b\\7d\\42\\e5\\27\\af\\c7\\1d\\f4\\81\\c8\\b3\\76\\8a\\a8\\36\\a3\\ae\\2a\\e6\\18\\e1\\36\\22\\ad\\f6\\25\\72\\b0\\39\\8b\\01\\9a\\22\\7b\\84\\c3\\2d\\5f\\72\\a4\\98\\ac\\15\\70\\e7\\d4\\18\\e2\\7d\\d2\\30\\7c\\33\\08\\cd\\ca\\c4\\22\\85\\88\\75\\81\\c6\\4a\\74\\58\\8d\\e0\\e8\\ac\\c5\\ab\\75\\5a\\f4\\28\\12\\f0\\18\\45\\52\\f2\\97\\b2\\93\\41\\6f\\8d\\7f\\db\\70\\fb\\a3\\5d\\1f\\a7\\8d\\98\\20\\2b\\22\\9f\\3a\\01\\b5\\8b\\1b\\d2\\cb\\14\\03\\0e\\14\\14\\d2\\19\\5a\\1f\\ce\\5e\\cd\\81\\79\\15\\01\\ca\\de\\73\\74\\8c\\56\\20\\9f\\77\\2d\\25\\16\\f6\\61\\51\\1d\\a4\\8e\\9b\\98\\a5\\c6\\ec\\a8\\45\\57\\82\\59\\78\\0d\\90\\b4\\df\\51\\b0\\c3\\82\\94\\cc\\b3\\53\\09\\15\\6d\\96\\6c\\3a\\40\\47\\b7\\4a\\7a\\05\\2f\\a1\\1e\\8c\\9d\\a0\\20\\88\\fb\\52\\b7\\9f\\f3\\f3\\bb\\5f\\e7\\8a\\61\\a7\\21\\b1\\ac\\fa\\09\\aa\\a4\\6c\\bc\\24\\80\\ba\\2a\\e9\\65\\ff\\70\\ff\\cc\\fa\\65\\87\\76\\f3\\c5\\15\\ce\\cb\\e8\\42\\31\\00\\0c\\91\\57\\d9\\e0\\9d\\35\\54\\24\\ad\\a4\\d8\\f9\\08\\67\\63\\c8\\cf\\81\\dd\\90\\a2\\d7\\c4\\07\\4a\\e6\\10\\6f\\67\\e7\\27\\d4\\23\\59\\18\\f2\\a8\\9d\\5f\\d8\\94\\30\\aa\\54\\86\\4f\\87\\9d\\82\\b5\\26\\ca\\a6\\96\\bf\\cf\\55\\f9\\9d\\37\\01\\19\\48\\43\\c5\\94\\6c\\f3\\74\\97\\58\\4c\\3c\\9d\\08\\e8\\04\\c2\\58\\30\\76\\e1\\a0\\f8\\ea\\e9\\c5\\ae\\cf\\78\\9e\\a9\\0c\\ac\\b3\\44\\42\\e0\\bc\\5d\\1b\\9c\\49\\58\\4a\\1c\\19\\49\\c1\\3a\\ea\\f5\\eb\\3b\\81\\a9\\4b\\70\\0c\\cc\\9e\\1a\\d3\\2f\\b7\\52\\2f\\20\\3b\\eb\\64\\51\\1d\\a0\\2d\\b2\\3e\\be\\13\\85\\48\\92\\32\\2e\\db\\5c\\a1\\e7\\8c\\45\\91\\35\\01\\0a\\93\\c2\\eb\\09\\ce\\f3\\d2\\22\\24\\d0\\8c\\cc\\1d\\9d\\38\\c8\\4d\\e3\\82\\cc\\64\\15\\06\\2d\\e7\\01\\2f\\ab\\bb\\b5\\04\\4c\\92\\1c\\7a\\d6\\3f\\e8\\5f\\31\\15\\0c\\dc\\e4\\31\\b4\\c4\\25\\3e\\2a\\aa\\00\\9e\\c8\\e5\\21\\7a\\7f\\29\\f1\\c0\\af\\1d\\5e\\e8\\63\\39\\ad\\f8\\7e\\6c\\c8\\c5\\7f\\c2\\a8\\97\\27\\0a\\d9\\f4\\21\\6a\\ea\\03\\09\\fb\\f7\\96\\3b\\83\\79\\5f\\7c\\4b\\30\\9f\\56\\35\\de\\b4\\73\\d4\\95\\f0\\14\\c3\\74\\2f\\0d\\a3\\1d\\4e\\8d\\31\\24\\b3\\1a\\84\\85\\62\\5a\\7b\\3c\\14\\39\\17\\e6\\6d\\eb\\37\\c2\\00\\58\\5b\\0b\\e3\\3c\\8a\\62\\e1\\f8\\35\\4b\\56\\e2\\87\\60\\8b\\be\\a7\\38\\91\\77\\54\\a9\\5a\\24\\25\\90\\9f\\a5\\42\\77\\f3\\5c\\39\\df\\ff\\74\\07\\76\\a1\\cd\\1f\\62\\0b\\81\\81\\68\\af\\05\\c1\\c0\\7f\\26\\ee\\c0\\91\\a3\\6a\\7d\\29\\61\\45\\27\\e5\\57\\88\\dc\\0d\\97\\04\\1a\\33\\a9\\44\\8a\\da\\02\\10\\45\\3f\\8e\\55\\a6\\76\\8c\\4d\\e3\\f1\\89\\83\\c8\\d0\\f8\\9b\\50\\77\\9f\\47\\df\\4c\\9c\\66\\0d\\aa\\18\\b8\\5f\\4f\\c4\\01\\ce\\dc\\84\\ac\\46\\9e\\69\\e1\\76\\45\\6b\\61\\89\\e4\\5d\\94\\bb\\11\\83\\9f\\78\\d8\\0a\\d2\\f5\\7e\\5d\\43\\ea\\bc\\10\\f1\\3a\\c9\\e2\\64\\fb\\53\\65\\d0\\c7\\b4\\a7\\fb\\d4\\05\\53\\25\\d0\\cd\\29\\88\\00\\56\\25\\24\\7d\\5d\\b4\\f3\\41\\9f\\e9\\b5\\f7\\ae\\64\\2c\\e3\\c9\\6d\\d5\\84\\3a\\72\\12\\b8\\7a\\d9\\1b\\09\\e8\\38\\da\\26\\4f\\04\\ce\\03\\71\\6e\\8a\\44\\7b\\5c\\81\\59\\9c\\d2\\e4\\c3\\ba\\59\\a6\\e5\\28\\a7\\8f\\9a\\e4\\d5\\4e\\b9\\ca\\7f\\cb\\75\\b8\\2b\\43\\3e\\b3\\15\\46\\b1\\a5\\bc\\9d\\9e\\38\\15\\f1\\bd\\1b\\21\\aa\\f1\\82\\00\\95\\fc\\a7\\77\\47\\39\\a7\\33\\43\\92\\d7\\52\\40\\4b\\06\\81\\8a\\a0\\bd\\f1\\6b\\99\\84\\42\\5b\\e2\\3b\\c5\\5e\\12\\5c\\28\\4d\\b6\\0e\\4e\\c8\\5c\\e8\\01\\8a\\c5\\e7\\e4\\9d\\42\\ee\\5d\\9c\\c4\\eb\\eb\\68\\09\\27\\92\\95\\9a\\11\\54\\73\\c4\\12\\80\\fb\\7d\\fe\\c5\\08\\60\\7f\\36\\41\\e0\\10\\ba\\d6\\2b\\6c\\f1\\b4\\17\\fe\\26\\34\\e3\\4b\\f8\\a8\\e3\\91\\be\\4f\\2a\\fc\\da\\81\\b8\\e7\\fe\\d5\\26\\50\\47\\f3\\1a\\65\\32\\81\\e0\\05\\b8\\4f\\32\\31\\26\\00\\4a\\53\\97\\c2\\c3\\0e\\2e\\a1\\26\\54\\ab\\05\\8e\\56\\2f\\7d\\af\\22\\84\\68\\a5\\8b\\97\\f6\\a4\\fd\\a8\\cc\\75\\41\\96\\86\\fd\\27\\3d\\29\\86\\8d\\7f\\4c\\d4\\8e\\73\\41\\f4\\1e\\e2\\dd\\58\\27\\97\\ce\\9c\\94\\cf\\7a\\04\\2f\\dc\\ed'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.kahan_sum'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'p',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'sum',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 'c',
                type: 'f64'
              }]
            },
            {
              kind: 'local',
              items: [{
                kind: 'item',
                name: 't',
                type: 'f64'
              }]
            }
          ],
          body: [
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'top'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 't'
                  },
                  init: {
                    kind: 'binop',
                    type: 'f64',
                    operator: 'sub',
                    left: {
                      kind: 'binop',
                      type: 'f64',
                      operator: 'sub',
                      left: {
                        kind: 'set_local',
                        id: {
                          kind: 'identifier',
                          name: 'sum'
                        },
                        init: {
                          kind: 'binop',
                          type: 'f64',
                          operator: 'add',
                          left: {
                            kind: 'get_local',
                            id: {
                              kind: 'identifier',
                              name: 'c'
                            }
                          },
                          right: {
                            kind: 'set_local',
                            id: {
                              kind: 'identifier',
                              name: 't'
                            },
                            init: {
                              kind: 'binop',
                              type: 'f64',
                              operator: 'sub',
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
                                    name: 'p'
                                  }
                                }
                              },
                              right: {
                                kind: 'get_local',
                                id: {
                                  kind: 'identifier',
                                  name: 't'
                                }
                              }
                            }
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
                    },
                    right: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 't'
                      }
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'p'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'p'
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
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'c'
                  },
                  init: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'sum'
                    }
                  }
                },
                {
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'top'
                  },
                  test: {
                    kind: 'set_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    },
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'add',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'identifier',
                          name: 'n'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '-1'
                      }
                    }
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'sum'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.kahan_sum'
          },
          id: {
            kind: 'identifier',
            name: 'f64.kahan_sum'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.plain_sum'
          },
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'p',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'n',
                type: 'i32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              name: 'sum',
              type: 'f64'
            }]
          }],
          body: [
            {
              kind: 'loop',
              id: {
                kind: 'identifier',
                name: 'exit'
              },
              extra: {
                kind: 'identifier',
                name: 'top'
              },
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'sum'
                  },
                  init: {
                    kind: 'binop',
                    type: 'f64',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'sum'
                      }
                    },
                    right: {
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
                          name: 'p'
                        }
                      }
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'p'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'p'
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
                  kind: 'set_local',
                  id: {
                    kind: 'identifier',
                    name: 'n'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'n'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '-1'
                    }
                  }
                },
                {
                  kind: 'br_if',
                  id: {
                    kind: 'identifier',
                    name: 'top'
                  },
                  test: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'n'
                    }
                  },
                  expr: null
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'sum'
              }
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.plain_sum'
          },
          id: {
            kind: 'identifier',
            name: 'f64.plain_sum'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.kahan_sum',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '256'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.dd7cb2a5ffc88p+998'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.plain_sum',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '256'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.dd7cb2a63fc87p+998'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg_sub'
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
            operator: 'neg',
            expr: {
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
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_neg_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_neg_sub'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg_sub'
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
            operator: 'neg',
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
            value: 'f64.no_fold_neg_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_neg_sub'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_neg_sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0.0'
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
        name: 'f32.no_fold_neg_sub',
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
        name: 'f32.no_fold_neg_sub',
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
        name: 'f32.no_fold_neg_sub',
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
        name: 'f64.no_fold_neg_sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0.0'
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
        name: 'f64.no_fold_neg_sub',
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
        name: 'f64.no_fold_neg_sub',
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
        name: 'f64.no_fold_neg_sub',
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
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_neg'
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
            value: 'f32.no_fold_add_neg'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_neg'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_neg'
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
            value: 'f64.no_fold_add_neg'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_neg'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_neg',
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
        name: 'f32.no_fold_add_neg',
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'infinity'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-infinity'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_neg',
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
        name: 'f64.no_fold_add_neg',
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
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'infinity'
        }]
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-infinity'
        }]
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_7x_via_add'
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
                          name: 'x'
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
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
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
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_7x_via_add'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_7x_via_add'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_7x_via_add'
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
                          name: 'x'
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
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'x'
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
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_7x_via_add'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_7x_via_add'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.30f15cp+21'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0ad332p+24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.a51c14p+11'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.70789p+14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.f03e64p-116'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b23696p-113'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.f15fecp-85'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b333fp-82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.1a38aep-71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.ede332p-69'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.07899efbf7601p+404'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.cd30d638f0e81p+406'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.0f4ae73f5f74bp-412'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.dac314aee70c4p-410'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.1eb6bb5682abap+554'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.f5bfc7d764ac4p+556'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.5c23a99615d72p+65'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.309f3463531c3p+68'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_7x_via_add',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.cc7846ee11dd4p+397'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.92e93e104fa18p+400'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_div'
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
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_div_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_div'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_div'
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
                name: 'z'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_div_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_div'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f70228p+78'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fbc612p-16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.8c379p+10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.47b43cp+83'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d29d2ep-70'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f3a17ep+110'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.64d41p-112'
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
        name: 'f32.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.867f98p+43'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.30acfcp-105'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e210d8p+105'
          }
        ]
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
        name: 'f32.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c4001ap-14'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9beb6cp+124'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.74f34cp-43'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.819874p-96'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.db0e6ep+46'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.55eea2p+56'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f3134p+124'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.6cep-135'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b4dc8ec3c7777p+337'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9f95ac2d1863p+584'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d4318abba341ep-782'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.2649159d87e02p+534'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ac53af5eb445fp+791'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8549c0a4ceb13p-29'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.64e384003c801p+316'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.9417cdccbae91p+503'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d2685afb27327p+2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.abb1eeed3dbebp+880'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a543e2e6968a3p+170'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000002a69a5fp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.47ddede78ad1cp+825'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6d932d070a367p-821'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.79cf18cc64fp+961'
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
        name: 'f64.no_fold_div_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f73d4979a9379p-888'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4d83b53e97788p-596'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f8f86c9603b5bp-139'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.87a7bd89c586cp-154'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_divs'
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
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'w'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_mul_divs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_divs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_divs'
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
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'z'
                }
              },
              right: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'w'
                }
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_mul_divs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_divs'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c483bep-109'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ee1c3cp-92'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.800756p-88'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.95b972p+4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.bbd30cp-110'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.0f4262p+102'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.248498p+25'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f66a7cp-17'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.897fc8p-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.2f1aa4p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.df5f22p+33'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fcee3ep+39'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9ea914p+29'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2c4d3p+10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.4cf51cp+13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f568bcp+109'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d9963p-34'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.37a87ap-16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a1524ap+78'
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
        name: 'f32.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.3dd592p-53'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.332c22p-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b01064p-91'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.92bb3ap-36'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.1c2dbp-44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.363d6764f7b12p-819'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ed5471f660b5fp-464'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.671b0a7f3a42p+547'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0633be34ba1f2p+186'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b8fa2b76baeebp+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.37880182e0fa8p+115'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f842631576147p-920'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.999372231d156p+362'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d5db481ab9554p+467'
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
        name: 'f64.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9a747c8d4b541p+308'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.99092ad6bbdc8p+192'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.cb23755c20101p-140'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.de8716f6b0b6ap+732'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.ecf584c8466a5p-757'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c424b2ece903dp+129'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.568ce281db37fp-347'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.53900b99fd3dp-957'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5c33952254dadp+223'
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
        name: 'f64.no_fold_mul_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a8ec2cecb32a9p-18'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.58acab0051851p-277'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.35e87c9077f7fp-620'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.925ee37ffb386p+352'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e6286970b31bfp-714'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_divs'
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
                  name: 'z'
                }
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
            value: 'f32.no_fold_add_divs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_add_divs'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_divs'
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
                  name: 'z'
                }
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
            value: 'f64.no_fold_add_divs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_add_divs'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.795e7p+8'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.48a5eep-5'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.9a244cp+126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d709b6p-119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ae89e8p-63'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e9903ep-49'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.370a8cp+47'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.92f3f6p-96'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.626408p-46'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2ee5b2p-64'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ecefaap+48'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.701864p-95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.061d3p-101'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.383492p-98'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.1d92d2p+88'
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
        name: 'f32.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.1ea39ep-10'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a7fffep-3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6fc574p-123'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.28b2dep+120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c5fcc3273b136p+430'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.892a09eed8f6fp+434'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8258b71e64397p+911'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.e36eb9706ad82p-478'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2215d4061b5b3p+53'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fb6184d97f27cp+5'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f3bb59dacc0ebp-957'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.2934eb0118be3p+1009'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e7a4533741d8ep-967'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a519bb7feb802p-976'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1f8a43454e51ap+504'
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
        name: 'f64.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.991c6cf93e2b4p+313'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f2f7432698d11p+329'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0d8c1b2453617p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d9e1d84ddd1d4p+455'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_add_divs',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d436849dc1271p-728'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.19d1c1450e52dp-755'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fa1be69ea06fep-70'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d9a9b1c2f5623p-659'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sqrt_square'
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
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
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
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.no_fold_sqrt_square'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_sqrt_square'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sqrt_square'
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
            kind: 'unop',
            type: 'f64',
            operator: 'sqrt',
            expr: {
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
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.no_fold_sqrt_square'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_sqrt_square'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.5cb316p-66'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.5cb322p-66'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.b0f9e4p-73'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b211b2p-73'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.de417cp-71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.de65b8p-71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.64c872p-86'
        }]
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
        name: 'f32.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.e199e4p+108'
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
        name: 'f64.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.1759d657203fdp-529'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1759dd57545f3p-529'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.4c68de1c78d83p-514'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4c68de1c78d81p-514'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.214736edb6e1ep-521'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.214736ed9cf8dp-521'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.0864b9f68457p-616'
        }]
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
        name: 'f64.no_fold_sqrt_square',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.b2a9855995abap+856'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'infinity'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_sqrts'
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
            },
            right: {
              kind: 'unop',
              type: 'f32',
              operator: 'sqrt',
              expr: {
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
            value: 'f32.no_fold_mul_sqrts'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_sqrts'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_sqrts'
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
              kind: 'unop',
              type: 'f64',
              operator: 'sqrt',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            right: {
              kind: 'unop',
              type: 'f64',
              operator: 'sqrt',
              expr: {
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
            value: 'f64.no_fold_mul_sqrts'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_sqrts'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.dddda8p-125'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.25d22ap-83'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.418d14p-92'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6535cp-32'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7e373ap-62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.4de7ep-88'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.84ff18p+6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.686668p-41'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.78091ep+101'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.81feb8p-9'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7cfb98p+46'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.583ap-56'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.14ba2ap-9'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b47a8ep-33'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d1144cc28cdbep-635'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bf9bc373d3b6ap-8'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5a7eb976bebc9p-643'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f30cb8865a4cap-404'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.260a1032d6e76p-523'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.711a0c1707935p-89'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6fb5de51a20d3p-913'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.7067ca28e31ecp-501'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fb0bbea33b076p-363'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d963b34894158p-573'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.e9edc1fa624afp-468'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8676eab7a4d0dp+24'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.75a58231ba7a5p+513'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0e16aebe203b3p+269'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_sqrts'
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
            },
            right: {
              kind: 'unop',
              type: 'f32',
              operator: 'sqrt',
              expr: {
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
            value: 'f32.no_fold_div_sqrts'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_div_sqrts'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_sqrts'
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
              kind: 'unop',
              type: 'f64',
              operator: 'sqrt',
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'x'
                }
              }
            },
            right: {
              kind: 'unop',
              type: 'f64',
              operator: 'sqrt',
              expr: {
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
            value: 'f64.no_fold_div_sqrts'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_div_sqrts'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.bea9bap+25'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.db776ep-58'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b983b6p+32'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.901f1ep+27'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7c4df6p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d45e72p-120'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ab49ccp+15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7b0b04p-68'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.b2e444p+59'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.5b8b16p-30'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.94fca8p+44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.835aa6p-112'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d17128p-103'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.4a468p-5'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.509fc16411167p-711'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9c4255f5d6517p-187'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b6897bddac76p-587'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.104578b4c91f3p+541'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.44e4f21f26cc9p-564'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ac83451b08989p+523'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8da575c6d12b8p-109'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.09c003991ce17p+316'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bab7836456417p-810'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1ff60d03ba607p+291'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c0e6c833bf657p-551'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_div_sqrts',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a957816ad9515p-789'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8c18a3a222ab1p+945'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0948539781e92p-867'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_sqrt_div'
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
                kind: 'unop',
                type: 'f32',
                operator: 'sqrt',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
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
            value: 'f32.no_fold_mul_sqrt_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_fold_mul_sqrt_div'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_sqrt_div'
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
                kind: 'unop',
                type: 'f64',
                operator: 'sqrt',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'y'
                  }
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
            value: 'f64.no_fold_mul_sqrt_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_fold_mul_sqrt_div'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.f4a7cap+81'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c09adep+92'
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
        name: 'f32.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.90bf1cp-120'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8dbe88p-97'
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
        name: 'f32.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8570e8p+29'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.217d3p-128'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6e391ap+93'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5b4652p+43'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a9d71cp+112'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0d423ap-13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.910604p+8'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.0ca912p+7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.14cdecp+5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1dcdeb857305fp+698'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.a066171c40eb9p+758'
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
        name: 'f64.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8b4f1c218e2abp-827'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5e1ee65953b0bp-669'
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
        name: 'f64.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.74ee531ddba38p-425'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f370f758857f3p+560'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0aff34269583ep-705'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.27f216b0da6c5p+352'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8e0b4e0b9fd7ep-483'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.4fa558aad514ep+593'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_fold_mul_sqrt_div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4c6955df9912bp+104'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0cca42c9d371ep+842'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4468072f54294p-317'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.no_flush_intermediate_subnormal'
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
            value: 'f32.no_flush_intermediate_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f32.no_flush_intermediate_subnormal'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.no_flush_intermediate_subnormal'
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
            value: 'f64.no_flush_intermediate_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f64.no_flush_intermediate_subnormal'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.no_flush_intermediate_subnormal',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p23'
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
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.no_flush_intermediate_subnormal',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-52'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p52'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-1022'
      }
    }
  ]
}
