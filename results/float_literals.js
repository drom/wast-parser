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
            name: 'f32.nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.positive_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.negative_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.plain_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.informally_known_as_plain_snan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.allones_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.misc_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.misc_positive_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.misc_negative_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.infinity'
          },
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
              init: 'infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.positive_infinity'
          },
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
              init: '+infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.negative_infinity'
          },
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
              init: '-infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.positive_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.negative_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.misc'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.min_positive'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.min_normal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.max_finite'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.max_subnormal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32.trailing_dot'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.positive_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.negative_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.misc'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.min_positive'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.min_normal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.max_subnormal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.max_finite'
          },
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
          id: {
            kind: 'identifier',
            name: 'f32_dec.trailing_dot'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.positive_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.negative_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.plain_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.informally_known_as_plain_snan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.allones_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.misc_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.misc_positive_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.misc_negative_nan'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.infinity'
          },
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
              init: 'infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.positive_infinity'
          },
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
              init: '+infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.negative_infinity'
          },
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
              init: '-infinity'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.positive_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.negative_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.misc'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.min_positive'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.min_normal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.max_subnormal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.max_finite'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64.trailing_dot'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.positive_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.negative_zero'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.misc'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.min_positive'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.min_normal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.max_subnormal'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.max_finite'
          },
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
          id: {
            kind: 'identifier',
            name: 'f64_dec.trailing_dot'
          },
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
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.positive_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.positive_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.negative_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.negative_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.plain_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.plain_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.informally_known_as_plain_snan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.informally_known_as_plain_snan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.allones_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.allones_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.misc_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.misc_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.misc_positive_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.misc_positive_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.misc_negative_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f32.misc_negative_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f32.infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.positive_infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f32.positive_infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.negative_infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f32.negative_infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.positive_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.positive_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.negative_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32.negative_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.misc'
          },
          id: {
            kind: 'identifier',
            name: 'f32.misc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.min_positive'
          },
          id: {
            kind: 'identifier',
            name: 'f32.min_positive'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.min_normal'
          },
          id: {
            kind: 'identifier',
            name: 'f32.min_normal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.max_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f32.max_subnormal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.max_finite'
          },
          id: {
            kind: 'identifier',
            name: 'f32.max_finite'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.trailing_dot'
          },
          id: {
            kind: 'identifier',
            name: 'f32.trailing_dot'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.positive_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.positive_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.negative_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.negative_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.misc'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.misc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.min_positive'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.min_positive'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.min_normal'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.min_normal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.max_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.max_subnormal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.max_finite'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.max_finite'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_dec.trailing_dot'
          },
          id: {
            kind: 'identifier',
            name: 'f32_dec.trailing_dot'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.positive_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.positive_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.negative_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.negative_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.plain_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.plain_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.informally_known_as_plain_snan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.informally_known_as_plain_snan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.allones_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.allones_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.misc_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.misc_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.misc_positive_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.misc_positive_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.misc_negative_nan'
          },
          id: {
            kind: 'identifier',
            name: 'f64.misc_negative_nan'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f64.infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.positive_infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f64.positive_infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.negative_infinity'
          },
          id: {
            kind: 'identifier',
            name: 'f64.negative_infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.positive_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.positive_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.negative_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64.negative_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.misc'
          },
          id: {
            kind: 'identifier',
            name: 'f64.misc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.min_positive'
          },
          id: {
            kind: 'identifier',
            name: 'f64.min_positive'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.min_normal'
          },
          id: {
            kind: 'identifier',
            name: 'f64.min_normal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.max_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f64.max_subnormal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.max_finite'
          },
          id: {
            kind: 'identifier',
            name: 'f64.max_finite'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.trailing_dot'
          },
          id: {
            kind: 'identifier',
            name: 'f64.trailing_dot'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.positive_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.positive_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.negative_zero'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.negative_zero'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.misc'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.misc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.min_positive'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.min_positive'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.min_normal'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.min_normal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.max_subnormal'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.max_subnormal'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.max_finite'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.max_finite'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_dec.trailing_dot'
          },
          id: {
            kind: 'identifier',
            name: 'f64_dec.trailing_dot'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
        name: 'f32.allones_nan',
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
        name: 'f64.allones_nan',
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
        name: 'f64_dec.trailing_dot',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x54b249ad2594c37d'
      }
    }
  ]
}
