{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.positive_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.negative_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.plain_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x400000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.informally_known_as_plain_snan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x200000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.all_ones_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0x7fffff'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.misc_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'n0x012345'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.misc_positive_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+0x304050'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.misc_negative_nan'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0x2abcde'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.infinity'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: 'inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.positive_infinity'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.negative_infinity'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.positive_zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.negative_zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.misc'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.921fb6p+2'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.min_positive'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1p-149'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.min_normal'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1p-126'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.max_finite'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.fffffep+127'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.max_subnormal'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.fffffcp-127'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.trailing_dot'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0x1.p10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.positive_zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '+0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.negative_zero'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '-0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.misc'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '6.28318548202514648'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.min_positive'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.4013e-45'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.min_normal'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.1754944e-38'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.max_subnormal'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.1754942e-38'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.max_finite'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '3.4028234e+38'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.trailing_dot'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.e10'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32_dec.root_beer_float'
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
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f32',
              init: '1.000000119'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.positive_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.negative_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-nan'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.plain_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x8000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.informally_known_as_plain_snan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x4000000000000'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.all_ones_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0xfffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.misc_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'n0x0123456789abc'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.misc_positive_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+0x3040506070809'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.misc_negative_nan'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0x2abcdef012345'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.infinity'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: 'inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.positive_infinity'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.negative_infinity'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-inf'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.positive_zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.negative_zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0x0.0p0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.misc'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.921fb54442d18p+2'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.min_positive'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x0.0000000000001p-1022'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.min_normal'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1p-1022'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.max_subnormal'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x0.fffffffffffffp-1022'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.max_finite'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.fffffffffffffp+1023'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.trailing_dot'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0x1.p100'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.positive_zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '+0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.negative_zero'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '-0.0e0'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.misc'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '6.28318530717958623'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.min_positive'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '4.94066e-324'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.min_normal'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '2.2250738585072012e-308'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.max_subnormal'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '2.2250738585072011e-308'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.max_finite'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '1.7976931348623157e+308'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.trailing_dot'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '1.e100'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64_dec.root_beer_float'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'const',
              type: 'f64',
              init: '1.000000119'
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-dec-sep1'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '1_000_000'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-dec-sep2'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '1_0_0_0'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-dec-sep3'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '100_3.141_592'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-dec-sep4'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '99e+1_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-dec-sep5'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '122_000.11_3_54E0_2_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-hex-sep1'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0xa_0f_00_99'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-hex-sep2'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1_a_A_0_f'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-hex-sep3'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0xa0_ff.f141_a59a'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-hex-sep4'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0xf0P+1_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32-hex-sep5'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x2a_f00a.1f_3_eep2_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-dec-sep1'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '1_000_000'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-dec-sep2'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '1_0_0_0'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-dec-sep3'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '100_3.141_592'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-dec-sep4'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '99e-1_23'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-dec-sep5'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '122_000.11_3_54e0_2_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-hex-sep1'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0xa_f00f_0000_9999'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-hex-sep2'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0x1_a_A_0_f'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-hex-sep3'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0xa0_ff.f141_a59a'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-hex-sep4'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0xf0P+1_3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64-hex-sep5'
          }],
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0x2a_f00a.1f_3_eep2_3'
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.plain_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.informally_known_as_plain_snan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.all_ones_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.misc_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f812345'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.misc_positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fb04050'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.misc_negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffaabcde'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.positive_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.negative_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xff800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.zero',
        body: []
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
        id: null,
        name: 'f32.positive_zero',
        body: []
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
        id: null,
        name: 'f32.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.misc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40c90fdb'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.min_positive',
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
        name: 'f32.min_normal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x44800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.zero',
        body: []
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
        id: null,
        name: 'f32_dec.positive_zero',
        body: []
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
        id: null,
        name: 'f32_dec.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.misc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40c90fdb'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.min_positive',
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
        name: 'f32_dec.min_normal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x501502f9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_dec.root_beer_float',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x3f800001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.plain_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.informally_known_as_plain_snan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.all_ones_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.misc_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0123456789abc'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.misc_positive_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff3040506070809'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.misc_negative_nan',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff2abcdef012345'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.positive_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.negative_infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.zero',
        body: []
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
        id: null,
        name: 'f64.positive_zero',
        body: []
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
        id: null,
        name: 'f64.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.misc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x401921fb54442d18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.min_positive',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.min_normal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x10000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fefffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4630000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.zero',
        body: []
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
        id: null,
        name: 'f64_dec.positive_zero',
        body: []
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
        id: null,
        name: 'f64_dec.negative_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.misc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x401921fb54442d18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.min_positive',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.min_normal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x10000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.max_subnormal',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.max_finite',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fefffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x54b249ad2594c37d'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_dec.root_beer_float',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x3ff000001ff19e24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-dec-sep1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-dec-sep2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-dec-sep3',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1003.141592'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-dec-sep4',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '99e+13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-dec-sep5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '122000.11354e23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-hex-sep1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0xa0f0099'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-hex-sep2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1aa0f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-hex-sep3',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0xa0ff.f141a59a'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-hex-sep4',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0xf0P+13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32-hex-sep5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x2af00a.1f3eep23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-dec-sep1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-dec-sep2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-dec-sep3',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1003.141592'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-dec-sep4',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '99e-123'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-dec-sep5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '122000.11354e23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-hex-sep1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0xaf00f00009999'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-hex-sep2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1aa0f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-hex-sep3',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0xa0ff.f141a59a'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-hex-sep4',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0xf0P+13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64-hex-sep5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x2af00a.1f3eep23'
      }
    },
    {
      kind: 'module',
      body: [
        'binary',
        {
          kind: 'literal',
          value: '\\00\\61\\73\\6d\\01\\00\\00\\00\\01\\85\\80\\80\\80\\00\\01\\60'
        },
        {
          kind: 'literal',
          value: '\\00\\01\\7c\\03\\82\\80\\80\\80\\00\\01\\00\\07\\8e\\80\\80\\80'
        },
        {
          kind: 'literal',
          value: '\\00\\01\\0a\\34\\32\\39\\34\\39\\36\\37\\32\\34\\39\\00\\00\\0a'
        },
        {
          kind: 'literal',
          value: '\\91\\80\\80\\80\\00\\01\\8b\\80\\80\\80\\00\\00\\44\\00\\00\\20'
        },
        {
          kind: 'literal',
          value: '\\fa\\ff\\ff\\ef\\41\\0b'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '4294967249',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4294967249'
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
            value: '(global f32 (f32.const _100))'
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
            value: '(global f32 (f32.const +_100))'
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
            value: '(global f32 (f32.const -_100))'
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
            value: '(global f32 (f32.const 99_))'
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
            value: '(global f32 (f32.const 1__000))'
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
            value: '(global f32 (f32.const _1.0))'
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
            value: '(global f32 (f32.const 1.0_))'
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
            value: '(global f32 (f32.const 1_.0))'
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
            value: '(global f32 (f32.const 1._0))'
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
            value: '(global f32 (f32.const _1e1))'
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
            value: '(global f32 (f32.const 1e1_))'
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
            value: '(global f32 (f32.const 1_e1))'
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
            value: '(global f32 (f32.const 1e_1))'
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
            value: '(global f32 (f32.const _1.0e1))'
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
            value: '(global f32 (f32.const 1.0e1_))'
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
            value: '(global f32 (f32.const 1.0_e1))'
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
            value: '(global f32 (f32.const 1.0e_1))'
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
            value: '(global f32 (f32.const 1.0e+_1))'
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
            value: '(global f32 (f32.const 1.0e_+1))'
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
            value: '(global f32 (f32.const _0x100))'
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
            value: '(global f32 (f32.const 0_x100))'
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
            value: '(global f32 (f32.const 0x_100))'
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
            value: '(global f32 (f32.const 0x00_))'
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
            value: '(global f32 (f32.const 0xff__ffff))'
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
            value: '(global f32 (f32.const 0x_1.0))'
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
            value: '(global f32 (f32.const 0x1.0_))'
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
            value: '(global f32 (f32.const 0x1_.0))'
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
            value: '(global f32 (f32.const 0x1._0))'
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
            value: '(global f32 (f32.const 0x_1p1))'
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
            value: '(global f32 (f32.const 0x1p1_))'
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
            value: '(global f32 (f32.const 0x1_p1))'
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
            value: '(global f32 (f32.const 0x1p_1))'
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
            value: '(global f32 (f32.const 0x_1.0p1))'
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
            value: '(global f32 (f32.const 0x1.0p1_))'
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
            value: '(global f32 (f32.const 0x1.0_p1))'
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
            value: '(global f32 (f32.const 0x1.0p_1))'
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
            value: '(global f32 (f32.const 0x1.0p+_1))'
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
            value: '(global f32 (f32.const 0x1.0p_+1))'
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
            value: '(global f64 (f64.const _100))'
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
            value: '(global f64 (f64.const +_100))'
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
            value: '(global f64 (f64.const -_100))'
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
            value: '(global f64 (f64.const 99_))'
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
            value: '(global f64 (f64.const 1__000))'
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
            value: '(global f64 (f64.const _1.0))'
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
            value: '(global f64 (f64.const 1.0_))'
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
            value: '(global f64 (f64.const 1_.0))'
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
            value: '(global f64 (f64.const 1._0))'
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
            value: '(global f64 (f64.const _1e1))'
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
            value: '(global f64 (f64.const 1e1_))'
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
            value: '(global f64 (f64.const 1_e1))'
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
            value: '(global f64 (f64.const 1e_1))'
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
            value: '(global f64 (f64.const _1.0e1))'
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
            value: '(global f64 (f64.const 1.0e1_))'
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
            value: '(global f64 (f64.const 1.0_e1))'
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
            value: '(global f64 (f64.const 1.0e_1))'
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
            value: '(global f64 (f64.const 1.0e+_1))'
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
            value: '(global f64 (f64.const 1.0e_+1))'
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
            value: '(global f64 (f64.const _0x100))'
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
            value: '(global f64 (f64.const 0_x100))'
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
            value: '(global f64 (f64.const 0x_100))'
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
            value: '(global f64 (f64.const 0x00_))'
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
            value: '(global f64 (f64.const 0xff__ffff))'
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
            value: '(global f64 (f64.const 0x_1.0))'
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
            value: '(global f64 (f64.const 0x1.0_))'
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
            value: '(global f64 (f64.const 0x1_.0))'
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
            value: '(global f64 (f64.const 0x1._0))'
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
            value: '(global f64 (f64.const 0x_1p1))'
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
            value: '(global f64 (f64.const 0x1p1_))'
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
            value: '(global f64 (f64.const 0x1_p1))'
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
            value: '(global f64 (f64.const 0x1p_1))'
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
            value: '(global f64 (f64.const 0x_1.0p1))'
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
            value: '(global f64 (f64.const 0x1.0p1_))'
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
            value: '(global f64 (f64.const 0x1.0_p1))'
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
            value: '(global f64 (f64.const 0x1.0p_1))'
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
            value: '(global f64 (f64.const 0x1.0p+_1))'
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
            value: '(global f64 (f64.const 0x1.0p_+1))'
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
