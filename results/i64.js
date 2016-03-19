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
            name: 'add'
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
          id: {
            kind: 'identifier',
            name: 'sub'
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
          id: {
            kind: 'identifier',
            name: 'mul'
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
          id: {
            kind: 'identifier',
            name: 'div_s'
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
          id: {
            kind: 'identifier',
            name: 'div_u'
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
          id: {
            kind: 'identifier',
            name: 'rem_s'
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
          id: {
            kind: 'identifier',
            name: 'rem_u'
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
          id: {
            kind: 'identifier',
            name: 'and'
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
          id: {
            kind: 'identifier',
            name: 'or'
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
          id: {
            kind: 'identifier',
            name: 'xor'
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
          id: {
            kind: 'identifier',
            name: 'shl'
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
          id: {
            kind: 'identifier',
            name: 'shr_s'
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
          id: {
            kind: 'identifier',
            name: 'shr_u'
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
          id: {
            kind: 'identifier',
            name: 'rotl'
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
          id: {
            kind: 'identifier',
            name: 'rotr'
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
          id: {
            kind: 'identifier',
            name: 'clz'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
          id: {
            kind: 'identifier',
            name: 'ctz'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
          id: {
            kind: 'identifier',
            name: 'popcnt'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
          id: {
            kind: 'identifier',
            name: 'eqz'
          },
          type: null,
          param: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
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
          id: {
            kind: 'identifier',
            name: 'eq'
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
          id: {
            kind: 'identifier',
            name: 'ne'
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
          id: {
            kind: 'identifier',
            name: 'lt_s'
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
          id: {
            kind: 'identifier',
            name: 'lt_u'
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
          id: {
            kind: 'identifier',
            name: 'le_s'
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
          id: {
            kind: 'identifier',
            name: 'le_u'
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
          id: {
            kind: 'identifier',
            name: 'gt_s'
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
          id: {
            kind: 'identifier',
            name: 'gt_u'
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
          id: {
            kind: 'identifier',
            name: 'ge_s'
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
          id: {
            kind: 'identifier',
            name: 'ge_u'
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
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'add'
          },
          id: {
            kind: 'identifier',
            name: 'add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'sub'
          },
          id: {
            kind: 'identifier',
            name: 'sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'mul'
          },
          id: {
            kind: 'identifier',
            name: 'mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'div_s'
          },
          id: {
            kind: 'identifier',
            name: 'div_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'div_u'
          },
          id: {
            kind: 'identifier',
            name: 'div_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'rem_s'
          },
          id: {
            kind: 'identifier',
            name: 'rem_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'rem_u'
          },
          id: {
            kind: 'identifier',
            name: 'rem_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'and'
          },
          id: {
            kind: 'identifier',
            name: 'and'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'or'
          },
          id: {
            kind: 'identifier',
            name: 'or'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'xor'
          },
          id: {
            kind: 'identifier',
            name: 'xor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'shl'
          },
          id: {
            kind: 'identifier',
            name: 'shl'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'shr_s'
          },
          id: {
            kind: 'identifier',
            name: 'shr_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'shr_u'
          },
          id: {
            kind: 'identifier',
            name: 'shr_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'rotl'
          },
          id: {
            kind: 'identifier',
            name: 'rotl'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'rotr'
          },
          id: {
            kind: 'identifier',
            name: 'rotr'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'clz'
          },
          id: {
            kind: 'identifier',
            name: 'clz'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ctz'
          },
          id: {
            kind: 'identifier',
            name: 'ctz'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'popcnt'
          },
          id: {
            kind: 'identifier',
            name: 'popcnt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'eqz'
          },
          id: {
            kind: 'identifier',
            name: 'eqz'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'eq'
          },
          id: {
            kind: 'identifier',
            name: 'eq'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ne'
          },
          id: {
            kind: 'identifier',
            name: 'ne'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'lt_s'
          },
          id: {
            kind: 'identifier',
            name: 'lt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'lt_u'
          },
          id: {
            kind: 'identifier',
            name: 'lt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'le_s'
          },
          id: {
            kind: 'identifier',
            name: 'le_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'le_u'
          },
          id: {
            kind: 'identifier',
            name: 'le_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'gt_s'
          },
          id: {
            kind: 'identifier',
            name: 'gt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'gt_u'
          },
          id: {
            kind: 'identifier',
            name: 'gt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ge_s'
          },
          id: {
            kind: 'identifier',
            name: 'ge_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ge_u'
          },
          id: {
            kind: 'identifier',
            name: 'ge_u'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
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
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
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
            init: '0x35'
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
