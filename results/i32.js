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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
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
            type: 'i32'
          },
          local: [],
          body: [{
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'relop',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x3fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'sub',
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x3fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'mul',
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x10000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4096'
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000001'
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
            type: 'i32',
            init: '0x01234567'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x76543210'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x358e7470'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xc0000000'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffdf3b65'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          }
        ]
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
        name: 'div_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40000000'
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
            type: 'i32',
            init: '0x8ff00ff0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x10001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x8fef'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20c49b'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7ffffffd'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'div_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-647'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-3'
          }
        ]
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
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
        name: 'rem_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x8ff00ff0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x10001'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x8001'
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
            type: 'i32',
            init: '0x80000001'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '649'
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
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '2'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '-5'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '7'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '3'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '11'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '5'
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
        name: 'rem_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '17'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '7'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'and',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          }
        ]
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
        name: 'or',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
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
        name: 'or',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
          }
        ]
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
        name: 'xor',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          }
        ]
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
        name: 'xor',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xf0f0ffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xfffff0f0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffff'
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xfffffffe'
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
            type: 'i32',
            init: '0xffffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xfffffffe'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x40000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'shl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shr_s',
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x3fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xc0000000'
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
            type: 'i32',
            init: '0x40000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
          }
        ]
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
        name: 'shr_s',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shr_u',
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x3fffffff'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x40000000'
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
            type: 'i32',
            init: '0x40000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x20000000'
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '31'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '32'
          }
        ]
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '33'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
        name: 'shr_u',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
          }
        ]
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
        name: 'rotl',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0xfe00dc00'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xe00dc00f'
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
            type: 'i32',
            init: '0xabcd9876'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x579b30ed'
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
            type: 'i32',
            init: '0x00008000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '37'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00100000'
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
            type: 'i32',
            init: '0x769abcdf'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x8000000d'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x579beed3'
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
            type: 'i32',
            init: '0xb0c1d2e3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x0005'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1d860e97'
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
            type: 'i32',
            init: '0xb0c1d2e3'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xff05'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x1d860e97'
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
            type: 'i32',
            init: '0xff00cc00'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '1'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f806600'
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
            type: 'i32',
            init: '0x00080000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '4'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00008000'
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
            type: 'i32',
            init: '0x769abcdf'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0xffffffed'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xe6fbb4d5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffffffff'
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '16'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
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
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'clz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
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
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ctz',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
          type: 'i32',
          init: '0x00010000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
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
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'popcnt',
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
        name: 'popcnt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x00008000'
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
          type: 'i32',
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
          type: 'i32',
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
          type: 'i32',
          init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
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
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
            type: 'i32',
            init: '0x80000000'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x7fffffff'
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
            type: 'i32',
            init: '0x7fffffff'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '0x80000000'
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
