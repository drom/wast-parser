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
            name: 'f32.add'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.sub'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.mul'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.div'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.sqrt'
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
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.abs'
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
            operator: 'abs',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.neg'
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
            operator: 'neg',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.copysign'
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
            operator: 'copysign',
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.ceil'
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
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.floor'
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
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.trunc'
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
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.nearest'
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
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.min'
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
            operator: 'min',
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.max'
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
            operator: 'max',
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.add'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.sub'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.mul'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.div'
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.sqrt'
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
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.abs'
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
            operator: 'abs',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.neg'
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
            operator: 'neg',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.copysign'
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
            operator: 'copysign',
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.ceil'
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
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.floor'
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
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.trunc'
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
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.nearest'
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
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.min'
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
            operator: 'min',
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
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.max'
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
            operator: 'max',
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
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.add'
          },
          id: {
            kind: 'identifier',
            name: 'f32.add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32.sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32.mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.div'
          },
          id: {
            kind: 'identifier',
            name: 'f32.div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.sqrt'
          },
          id: {
            kind: 'identifier',
            name: 'f32.sqrt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.abs'
          },
          id: {
            kind: 'identifier',
            name: 'f32.abs'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.neg'
          },
          id: {
            kind: 'identifier',
            name: 'f32.neg'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.copysign'
          },
          id: {
            kind: 'identifier',
            name: 'f32.copysign'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.ceil'
          },
          id: {
            kind: 'identifier',
            name: 'f32.ceil'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.floor'
          },
          id: {
            kind: 'identifier',
            name: 'f32.floor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.trunc'
          },
          id: {
            kind: 'identifier',
            name: 'f32.trunc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.nearest'
          },
          id: {
            kind: 'identifier',
            name: 'f32.nearest'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.min'
          },
          id: {
            kind: 'identifier',
            name: 'f32.min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.max'
          },
          id: {
            kind: 'identifier',
            name: 'f32.max'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.add'
          },
          id: {
            kind: 'identifier',
            name: 'f64.add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64.sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64.mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.div'
          },
          id: {
            kind: 'identifier',
            name: 'f64.div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.sqrt'
          },
          id: {
            kind: 'identifier',
            name: 'f64.sqrt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.abs'
          },
          id: {
            kind: 'identifier',
            name: 'f64.abs'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.neg'
          },
          id: {
            kind: 'identifier',
            name: 'f64.neg'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.copysign'
          },
          id: {
            kind: 'identifier',
            name: 'f64.copysign'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.ceil'
          },
          id: {
            kind: 'identifier',
            name: 'f64.ceil'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.floor'
          },
          id: {
            kind: 'identifier',
            name: 'f64.floor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.trunc'
          },
          id: {
            kind: 'identifier',
            name: 'f64.trunc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.nearest'
          },
          id: {
            kind: 'identifier',
            name: 'f64.nearest'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.min'
          },
          id: {
            kind: 'identifier',
            name: 'f64.min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.max'
          },
          id: {
            kind: 'identifier',
            name: 'f64.max'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.1234567890'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1.2345e-10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.123456789'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p+23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000004p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          }
        ]
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
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.1234567890'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1.2345e-10'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1f9add37c11f7p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p+63'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1024.25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p-1008'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000001716p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffffffffffp-1009'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p-53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p52'
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
        init: '0x1p52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p+52'
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
        init: '0x1.0000000000002p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.39675ap+102'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.76c94cp-99'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.39675ap+102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6c0f24p+67'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2b92dp+52'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.6c0cccp+67'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e62318p-83'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f74abep-125'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.e62318p-83'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2a71d4p+39'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c9f10cp+55'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.c9efe2p+55'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f8f736p-15'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7bd45ep+106'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7bd45ep+106'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f33e1fbca27aap-413'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6b192891ed61p+249'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6b192891ed61p+249'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.46f75d130eeb1p+76'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.25275d6f7a4acp-184'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.46f75d130eeb1p+76'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.04dec9265a731p-148'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.11eed4e8c127cp-12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.11eed4e8c127cp-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.05773b7166b0ap+497'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.134022f2da37bp+66'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.05773b7166b0ap+497'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ef4f794282a82p+321'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.14a82266badep+394'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.14a82266badep+394'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.1bf976p+72'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.7f5868p+20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1bf976p+72'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7f9c6cp-45'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b9bb0ep-78'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.7f9c6cp-45'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.32d1bcp-42'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.f7d214p+125'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f7d214p+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.8e5c0ep-44'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3afa4cp-106'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.8e5c0ep-44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.13cd78p-10'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3af316p-107'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.13cd78p-10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f8dd15ca97d4ap+179'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.367317d1fe8bfp-527'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f8dd15ca97d4ap+179'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5db08d739228cp+155'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fb316fa147dcbp-61'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5db08d739228cp+155'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bbb403cb85c07p-404'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7e44046b8bbf3p-979'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.bbb403cb85c07p-404'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.34d38af291831p+147'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9890b47439953p+139'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.366c1ba705bcap+147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b61dedf4e0306p+3'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.09e2f31773c4ap+290'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.09e2f31773c4ap+290'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.129bd8p-117'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c75012p-43'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.c75012p-43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c204a2p-16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.80b132p-27'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.c1d48cp-16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.decc1cp+36'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c688dap-109'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.decc1cp+36'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.61ce6ap-118'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.772892p+30'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.772892p+30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3dc826p-120'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fc3f66p+95'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fc3f66p+95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bf68acc263a0fp-777'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5f9352965e5a6p+1004'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.5f9352965e5a6p+1004'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.76eaa70911f51p+516'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2d746324ce47ap+493'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.76eaa963fabb6p+516'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b637d82c15a7ap-967'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cc654ccab4152p-283'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cc654ccab4152p-283'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a5b1fb66e846ep-509'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4bdd36f0bb5ccp-860'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.a5b1fb66e846ep-509'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.14108da880f9ep+966'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.417f35701e89fp+800'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.14108da880f9ep+966'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.fa0caf21ffebcp+804'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4ca8fdcff89f9p+826'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4ca8f5e7c5e31p+826'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.016f1fcbdfd38p+784'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.375dffcbc9a2cp+746'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.016f1fcbe4b0fp+784'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dffda6d5bff3ap+624'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f9e8cc2dff782p+674'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f9e8cc2dff77bp+674'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fff4b43687dfbp+463'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0fd5617c4a809p+517'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0fd5617c4a809p+517'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.535d380035da2p-995'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cce37dddbb73bp-963'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cce37ddf0ed0fp-963'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d91cd3fc0c66fp+752'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4e18c80229734p+952'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.4e18c80229734p+952'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.afc70fd36e372p+193'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd10a9b377b46p+273'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.bd10a9b377b46p+273'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2abd570b078b2p+302'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b3c1ad759cb5bp-423'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.2abd570b078b2p+302'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5b2ae84c0686cp-317'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dba7a1c022823p+466'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.dba7a1c022823p+466'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ac627bd7cbf38p-198'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.2312e265b8d59p-990'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.ac627bd7cbf38p-198'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.397be95d10fddp+719'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e13909d198d32p+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e13909d198d32p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.234a5a0412f41p+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.53e9106c9367p+161'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.234a5a0412f41p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a86bdb66cbb32p+562'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d10ff29e1d6e8p+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d10ff29e1d6e8p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.dc295727a06e2p+1023'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5e6979d7b24fp+485'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.dc295727a06e2p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.3ff7dee2861c6p-557'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.84a2c18238b4cp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.84a2c18238b4cp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.2d2c9b631ae47p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.8e173a51d11a7p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.bb43d5b4ebfeep-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.ce7d534f2c7ep-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.32f94dc4b7ee5p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.0176a113e46c5p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.44d9fb78bf5d3p-1021'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.02766a20d263fp-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.46153089288f2p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.89e17f0fdc567p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d9a93a01fd27dp-1021'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.94b87a7a0efcap-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0.3f3d1a052fa2bp-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4b78292c7d2adp-1021'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6b16b62f14fc2p-1021'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '65536.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
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
        init: '0x1.0p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0000000000001p-54'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ee2466p-106'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.16277ep+119'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.16277ep+119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.446f9ep+119'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4396a4p+43'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.446f9ep+119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.74773cp+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a25512p-82'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.74773cp+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.9345c4p-117'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6792c2p-76'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.6792c2p-76'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.9ecfa4p-18'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.864b44p-107'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.9ecfa4p-18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5b798875e7845p-333'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b5147117452fep-903'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.5b798875e7845p-333'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6c87baeb6d72dp+552'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.64fb35d4b5571p-158'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6c87baeb6d72dp+552'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b3d369fcf74bp-461'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ea1668c0dec93p-837'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b3d369fcf74bp-461'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0abd449353eadp-1005'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0422ea3e82ee9p+154'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0422ea3e82ee9p+154'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.aadbc6b43cc3dp-143'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e7f922ef1ee58p-539'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.aadbc6b43cc3dp-143'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.61e262p+108'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.baf3e4p+112'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a4d5bep+112'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.62c2f6p+109'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6e514ap+6'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.62c2f6p+109'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.287c94p-83'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.0f2f9cp-24'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0f2f9cp-24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c8825cp-77'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.4aead6p-12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.4aead6p-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2976a4p+99'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c6e3b8p-59'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.2976a4p+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.76cb28ae6c045p+202'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0611f2af4e9b9p+901'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0611f2af4e9b9p+901'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.baf35eff22e9ep-368'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5c3e08ecf73ecp-451'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.baf35eff22e9ep-368'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8fd354b376f1fp-200'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.513c860f386ffp-508'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8fd354b376f1fp-200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.760d447230ae6p-992'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.16f788438ae3ep-328'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.16f788438ae3ep-328'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.73aab4fcfc7ap+112'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7c589f990b884p+171'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.7c589f990b884p+171'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ea264cp+95'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.852988p-15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.ea264cp+95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.14ec7cp+19'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.0ad3fep-35'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.14ec7cp+19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3251dap-36'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.49c97ep-56'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.3251c6p-36'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.13565ep-14'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.2f89a8p-13'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.b934d8p-13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.6032b6p-33'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.bb5196p-104'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.6032b6p-33'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b5b0797af491p-157'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.694b8348189e8p+722'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.694b8348189e8p+722'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.72b142826ed73p+759'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.010477bc9afbdp+903'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.010477bc9afbdp+903'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.83273b6bb94cfp-796'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1a93f948a2abbp+181'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.1a93f948a2abbp+181'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.207e7156cbf2p-573'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cf3f12fd3814dp-544'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.cf3f13063c086p-544'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.837e6844f1718p-559'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1c29b757f98abp-14'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1c29b757f98abp-14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c21151a709b6cp-78'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0a12fff8910f6p-115'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c21151a701663p-78'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c57912aae2f64p-982'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dbfbd4800b7cfp-1010'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c579128d2338fp-982'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ffef4399af9c6p-254'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.edb96dfaea8b1p-200'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.edb96dfaea8b1p-200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.363eee391cde2p-39'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a65462000265fp-69'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.363eee32838c9p-39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.59016dba002a1p-25'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5d4374f124cccp-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.5d436f8d1f15dp-3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.18196bca005cfp-814'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.db7b01ce3f52fp-766'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.db7b01ce3f51dp-766'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d17b3528d219p+33'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fd739d4ea220ap+367'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fd739d4ea220ap+367'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dea46994de319p+114'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b5b19cd55c7d3p-590'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.dea46994de319p+114'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b60f9b2fbd9ecp-489'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6f81c59ec5b8ep-694'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b60f9b2fbd9ecp-489'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5e423fe8571f4p-57'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.9624ed7c162dfp-618'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5e423fe8571f4p-57'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e15'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.93e592p+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e20'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e20'
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
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1e25'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '1e25'
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
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1848874880.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '19954563072.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+65'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '77.1'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '850'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e15'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.93e5939a08ceap+99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e20'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e20'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d6329f1c35ca5p+132'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1e25'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '1e25'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.11b0ec57e649bp+166'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1848874847.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '19954562207.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '3.6893488147419111424e+19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '77.1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '850'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '65534.99999999999272404'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.14df2ep+61'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.748878p-36'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.92e7e8p+25'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5629e2p+102'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c33012p-102'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.2d8604p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b17694p+92'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e4b56ap-97'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.9a5baep-4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.1626a6p+79'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c57d7p-75'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.ecbaaep+4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7acf72p+53'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6c89acp+5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0db556p+59'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.25c293f6f37e4p+425'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f5fd4fa41c6d8p+945'
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
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.cc1ae79fffc5bp-986'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c36ccc2861ca6p-219'
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
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c0232b3e64b56p+606'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f6939cf3affaap+106'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b7e3aedf190d3p+713'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.60f289966b271p-313'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.28a5497f0c259p+583'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.98fc50bcec259p+270'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.37dab12d3afa2p+795'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.81e156bd393f1p-858'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d6126554b8298p-63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3f57a2p-89'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.041d68p+92'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.4479bp+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.4d0582p+73'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6e043ap+19'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.dc236p+92'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.2fdap-32'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e1731cp+74'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1db89ep+43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.7bc8fep+67'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.3ad592p+15'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.d3115ep+82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.936742p+30'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.a7a19p+66'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.4dc71ap+97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ba737b4ca3b13p-639'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8923309857438p-314'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.53bc0d07baa37p-952'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7c1932e610219p-276'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2605db646489fp-635'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b48da2b0d2ae3p-911'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e43cdf3b2108p+329'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.99d96abbd61d1p+835'
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
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4c19466551da3p+947'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0bdcd6c7646e9p-439'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5b7cd8c3f638ap+508'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ff1da1726e3dfp+339'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.043c44f52b158p+169'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.03c9364bb585cp+509'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.907e8ap+46'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5d3668p+95'
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
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.8c9f74p-3'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e2b452p-99'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.75edccp-101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.cc605ap-19'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.ec321ap+105'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.ba91a4p+87'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5fbb7ap+56'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.a8965ep-96'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.23ae8ep-39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.fb7f12p+16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.3a701ap-119'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.37ac0cp-102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.5b0266454c26bp-496'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.af5787e3e0399p+433'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.2457d81949e0bp-62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0d54a82393d45p+478'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.425760807ceaep-764'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.532068c8d0d5dp-286'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b532af981786p+172'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ada95085ba36fp+359'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.6ee38c1e01864p+532'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e132f4d49d1cep+768'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.a75afe9a7d864p+374'
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
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.68bbf1cfff90ap+81'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.09cd17d652c5p+70'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.768b8d67d794p+151'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f99fb602c89b7p-341'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6caab46a31a2ep-575'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.68201f986e9d7p-915'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.86999c5eee379p-9'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6e3b9e0d53e0dp+723'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.17654a0ef35f5p+715'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.069571b176f9p+367'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e248b6ab0a0e3p-652'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.eeaff575cae1dp-285'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c217645777dd2p+775'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d93f5715dd646p+60'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a0064aa1d920dp+836'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.848981b6e694ap-276'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.f5aacb64a0d19p+896'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.7cb2296e6c2e5p+621'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.db3bd2a286944p-599'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ce910af1d55cap-425'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.d6accdd538a39p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.aca223916012p-57'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2b2b4958dd228p-966'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.fa74eccae5615p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bd062def16cffp-488'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7ddd91a0c4c0ep-536'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.a5f4d7769d90dp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c6a56169e9cep-772'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.517d55a474122p-255'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.12baf260afb77p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.08951b0b41705p-516'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.102dc27168d09p-507'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.8ca6dbf3f592bp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.8d0dea50c8c9bp+852'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.21cac31d87a24p-881'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.c177311f7cd73p-29'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.98049118e3063p-7'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6362525151b58p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1b358514103f9p-155'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.ea65cb0631323p+1'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fce683201a19bp-41'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e76dc8c223667p-39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e4d235961d543p-373'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.bc56f20ef9a48p-205'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a4c09efcb71d6p-577'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b9612e66faba8p+77'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e2bc6aa782273p-348'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.a026ea4f81db1p-270'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-75'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-75'
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
        name: 'f32.mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-75'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000002p-75'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6a09e667f3bccp-538'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6a09e667f3bccp-538'
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
        name: 'f64.mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6a09e667f3bcdp-538'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6a09e667f3bcdp-538'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.mul',
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.mul',
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
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.123456789'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.702264p-7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '8391667.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '12582905.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.55754p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+53'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.dcbf6ap+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.dcbf68p-128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '4'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.555556p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '4195835'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '3145727'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.557542p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.123456789'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '100'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.01123456789'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '8391667.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '12582905.0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.55753f1d9ba27p-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '65536.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+53'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '4'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5555555555555p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '4195835'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '3145727'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.557541c7c6b43p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.6a6c5ap-48'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fa0b7p+127'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.616fb2p-87'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.332172p+68'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.96e778p+16'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.eb0c56p-80'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.a8440ap+95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e2624p-76'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.ed236ep-122'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.f4d584p+45'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.e2374ep+41'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.71fcdcp-80'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.4da706p+121'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.163c09d0c38c1p+147'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e04cc737348e6p+223'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.289921caeed23p-77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d6867e741e0a9p-626'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.335eb19a9aae4p-972'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.87e342d11f519p+346'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d5edf648aeb98p+298'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0dda15b079355p+640'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.bdceaf9734b5cp-342'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.b683e3934aedap+691'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c364e1df00dffp+246'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.f16456e7afe3bp+444'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.44ca7539cc851p+540'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.58501bccc58fep+453'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.e2f8657e0924ep+86'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c2c54ap+69'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.00d142p-86'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e35abep-46'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.c69dfp+44'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.102eb4p-90'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.45ff2ap+0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.1e8754p+89'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.23434ep-89'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.8db18ap-51'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.47c678p-128'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.369b96p+77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.78599p+90'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.534144p+87'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1bfddcp+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.f331c4f47eb51p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c7ff45bf6f03ap+362'
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
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0fc8707b9d19cp-987'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.77524d5f4a563p-536'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.72c1a937d231p-452'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.edb3aa64bb338p-403'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.1c7c164320e4p+45'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.bc44cc1c5ae63p-448'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6534b34e8686bp+80'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.c34a7fc59e3c3p-791'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.95421bf291b66p+870'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.91f58d7ed1237p+236'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f190d808383c8p+55'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.9d9eb0836f906p+180'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.64b2a4p+26'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.e95752p-119'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.53c9b6p+77'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.d689ap+27'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.71baa4p+49'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.664a8ap+38'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.59dba2p+96'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.0933f4p-58'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.99e0fap+111'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.c2b5a8p+9'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.d19de6p+101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.5a815ap+92'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1.b5820ap+13'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.9580b8p+78'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.81fd1e2af7bebp-655'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.edefc4eae536cp-691'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.901abdd91b661p+35'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.47cf932953c43p+782'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.bc40496b1f2a1p-553'
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
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2bd2e8fbdcad7p-746'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b115674cc476ep-65'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.62752bf19fa81p-682'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.f923e3fea9efep+317'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8044c74d27a39p-588'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5086518cc7186p+905'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.516ed2051d6bbp+181'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.c9f455eb9c2eep+214'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.79414d67f2889p-34'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.9c52726aed366p+585'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7d0568c75660fp+195'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1507ca2a65f23p+390'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.522672f461667p+546'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.36d36572c9f71p+330'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.1681369370619p+216'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.01051b4e8cd61p+185'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2cbb5ca3d33ebp+965'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.b59471598a2f3p-781'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.5f93bb80fc2cbp+217'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7e051aae9f0edp+427'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.d732fa926ba4fp-211'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.e251d762163ccp+825'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.3ee63581e1796p+349'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.8330077d90a07p+476'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dcbf69f10006dp+0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.772fda7c4001bp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.e14169442fbcap-1011'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.505451d62ff7dp+12'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.b727e85f38b39p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.d3ebe726ec964p-144'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4a7bfc0b83608p+880'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.5a9d8c50cbf87p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6c3def770aee1p-393'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8b84724347598p+631'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.3af0707fcd0c7p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.16abda1bb3cb3p-856'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.6c9c7198eb1e6p+166'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.c3a8fd6741649p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.7057d6ab553cap-1005'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.2abf1e98660ebp+23'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.04ee8d8ec01cdp-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.b2348a1c81899p+61'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.4a58aad903dd3p-861'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.507c1e2a41b35p+922'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.23fa5137a918ap-130'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.7268db1951263p-521'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.93965e0d896bep+390'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.dcb3915d82deep+669'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.50caaa1dc6b19p+638'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.6a58ec814b09dp+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.046e378c0cc46p+182'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.ac925009a922bp+773'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.3720aa94dab18p-592'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.8945fd69d8e11p-871'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.0a37870af809ap-646'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.7a2e286c62382p-225'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.82002af0ea1f3p-57'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.d0a9b0c2fa339p+0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a952fbd1fc17cp-58'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.1e12b515db471p-102'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.41fc3c94fba5p-42'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.c6e50cccb7cb6p-61'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.aba5adcd6f583p-41'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.17dfac639ce0fp-112'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.872b0a008c326p+71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.cf82510d0ae6bp+89'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.0207d86498053p+97'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.cbdc804e2cf14p-8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.4c82cbb508e21p-11'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1.6b57208c2d5d5p+52'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.d48e8b369129ap-64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffcp-127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffcp-127'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.fffffffffffffp-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.fffffffffffffp-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.ffffffffffffep-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep-23'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-22'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.fffffep+127'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp-52'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
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
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-51'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1.fffffffffffffp+1023'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-128'
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
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1.000008p-128'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffp+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.4p-1022'
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
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '1.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.4000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.ffffffffffff8p+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-126'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p-149'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p-1022'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x0.0000000000001p-1022'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.56p+7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a2744cp+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.594dfcp-23'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a4789cp-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0263fcc94f259p-164'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0131485de579fp-82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.352dfa278c43dp+338'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.195607dac5417p+169'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.b15daa23924fap+402'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4d143db561493p+201'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.518c8e68cb753p-37'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.9fb8ef1ad5bfdp-19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.86d8b6518078ep-370'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.3c5142a48fcadp-185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.56p+7'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a2744ce9674f5p+3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.594dfc70aa105p-23'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a4789c0e37f99p-12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.098064p-3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.70b23p-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.d9befp+100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.5c4052p+50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.42b5b6p-4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1f6d0ep-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.3684dp-71'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8ebae2p-36'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.d8bc4ep-11'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.ebf9eap-6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.5c39f220d5704p-924'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.2a92bc24ceae9p-462'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.53521a635745cp+727'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.a0cfdc4ef8ff1p+363'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.dfd5bbc9f4678p+385'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.efa817117c94cp+192'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.33f9640811cd4p+105'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8d17c9243baa3p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.6c0ef0267ff45p+999'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.afbcfae3f2b4p+499'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.26a62ep+27'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.84685p+13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.166002p-113'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.798762p-57'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.3dfb5p-15'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.937e38p-8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.30eb2cp-120'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.176406p-60'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.cb705cp-123'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.e5020ap-62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.edae8aea0543p+695'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.f6c1ea4fc8dd2p+347'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.f7ee4bda5c9c3p-763'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fbf30bdaf11c5p-382'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.a48f348266ad1p-30'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.481ee7540baf7p-15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.feb5a1ce3ed9cp-242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.6995060c20d46p-121'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.957d9796e3834p+930'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.42305213157bap+465'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.65787cp+118'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.2e82a4p+59'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.736044p+15'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b40e4p+7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.a00edp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.cd8aecp-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.7a4c8p-87'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b819e4p-44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.5d24d4p-94'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.2af75ep-47'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.a008948ead274p+738'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4659b37c39b19p+369'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.70f6199ed21f5p-381'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.b2a2bddf3300dp-191'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.35c1d49f2a352p+965'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.8e3d9f01a9716p+482'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.3fbdcfb2b2a15p-45'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.949ba4feca42ap-23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.c201b94757145p-492'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.5369ee6bf2967p-246'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.360e8d0032adp-963'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.d9a6f5eef0503p+103'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.ec73f56c166f6p+51'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.aa051a5c4ec27p-760'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.4a3e771ff5149p-380'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.e5522a741babep-276'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.607ae2b6feb7dp-138'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.4832badc0c061p+567'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.99ec7934139b2p+283'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.abs',
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
        name: 'f32.abs',
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
        name: 'f32.abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.abs',
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
        name: 'f64.abs',
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
        name: 'f64.abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
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
        name: 'f32.neg',
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
        name: 'f32.neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x0f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
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
        name: 'f64.neg',
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
        name: 'f64.neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0f1e27a6b'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
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
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
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
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
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
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
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
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x0f1e2'
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
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x0f1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0f1e2'
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
        init: 'n0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0x0f1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x0f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
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
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
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
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
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
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
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
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x0f1e27a6b'
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
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x0f1e27a6b'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0f1e27a6b'
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
        init: 'n0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0x0f1e27a6b'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-nan'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0f1e27a6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep-1'
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
        name: 'f32.ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-126'
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
        name: 'f64.ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp-1'
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
        name: 'f64.ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1022'
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
        name: 'f32.floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep-1'
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
        name: 'f32.floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-126'
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
        name: 'f64.floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp-1'
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
        name: 'f64.floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1022'
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
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.000002p+23'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.000004p+23'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000004p+23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep-2'
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
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+47'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+47'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000000000001p+52'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000000000002p+52'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000002p+52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp-2'
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
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+105'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+105'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-3.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-4.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-3.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-4.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
          }
        ]
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
        name: 'f32.min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
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
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
          }
        ]
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
        name: 'f32.max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0x200000'
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
        init: 'n0x600000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
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
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0.0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xc000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0x4000000000000'
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
        init: 'n0xc000000000000'
      }
    }
  ]
}
