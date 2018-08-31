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
            value: 'add'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'sub'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'mul'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'div_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'div_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'div_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'rem_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'rem_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rem_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'and'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'and',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'or'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'or',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'xor'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'xor',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'shl'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shl',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'shr_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'shr_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'shr_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'rotl'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rotl',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'rotr'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'rotr',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'clz'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
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
            kind: 'unop',
            type: 'i64',
            operator: 'clz',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ctz'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
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
            kind: 'unop',
            type: 'i64',
            operator: 'ctz',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'popcnt'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
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
            kind: 'unop',
            type: 'i64',
            operator: 'popcnt',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'eqz'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i64',
            operator: 'eqz',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'eq'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
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
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ne'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
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
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'lt_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'lt_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'lt_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'le_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'le_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'le_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'gt_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'gt_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'gt_u',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ge_s'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_s',
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
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ge_u'
          }],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'x'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            },
            {
              kind: 'param',
              id: {
                kind: 'identifier',
                name: 'y'
              },
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i64',
            operator: 'ge_u',
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
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'add',
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        id: null,
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x3fffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'sub',
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x3fffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'mul',
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x1000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '4096'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x0123456789abcdef'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfedcba9876543210'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2236d88fe5618cf0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
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
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xc000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffdf3b645a1cac09'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
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
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
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
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
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
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8ff00ff00ff00ff0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x100000001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8ff00fef'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x20c49ba5e353f7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ffffffffffffffd'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_s',
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
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '3'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
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
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'integer divide by zero'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8ff00ff00ff00ff0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x100000001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x80000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000001'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '809'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-2'
          }
        ]
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
        id: null,
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '3'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '3'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'and',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xf0f0f0f0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
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
        name: 'or',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
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
        name: 'xor',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0f0f0f0f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shl',
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfffffffffffffffe'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfffffffffffffffe'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'shr_s',
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x3fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xc000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'shr_u',
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x3fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x4000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x4000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x2000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '65'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7fffffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd987602468ace'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x579b30ec048d159d'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xfe000000dc000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xe000000dc000000f'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd1234ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x013579a2469deacf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabd1234ef567809c'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x55e891a77ab3c04e'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd1234ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xf5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x013579a2469deacf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd7294ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffed'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xcf013579ae529dea'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabd1234ef567809c'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x800000000000003f'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x55e891a77ab3c04e'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rotr',
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
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
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
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '64'
          }
        ]
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
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd987602468ace'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x55e6cc3b01234567'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xfe000000dc000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0fe000000dc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd1234ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '53'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6891a77ab3c04d5e'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabd1234ef567809c'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x57a2469deacf0139'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd1234ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xf5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x6891a77ab3c04d5e'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabcd7294ef567809'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0xffffffffffffffed'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x94a77ab3c04d5e6b'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0xabd1234ef567809c'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x800000000000003f'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x57a2469deacf0139'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'rotr',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '63'
          }
        ]
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffffffffffff'
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
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '56'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
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
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7fffffffffffffff'
        }]
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
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
        id: null,
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '15'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00010000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7fffffffffffffff'
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
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'popcnt',
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
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00008000'
        }]
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000800080008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7fffffffffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xAAAAAAAA55555555'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x99999999AAAAAAAA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xDEADBEEFDEADBEEF'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'eqz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
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
        id: null,
        name: 'eqz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
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
        id: null,
        name: 'eqz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
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
        id: null,
        name: 'eqz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7fffffffffffffff'
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
        id: null,
        name: 'eqz',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffffffffffff'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'eq',
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
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'eq',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ne',
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
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ne',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'lt_s',
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
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'lt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'lt_u',
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
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'lt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'le_s',
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
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'le_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'le_u',
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
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'le_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'gt_s',
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
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'gt_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'gt_u',
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
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'gt_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ge_s',
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
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ge_s',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ge_u',
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
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '1'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
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
        id: null,
        name: 'ge_u',
        body: [
          {
            kind: 'const',
            type: 'i64',
            init: '0x7fffffffffffffff'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '0x8000000000000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    }
  ]
}
