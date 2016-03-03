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
            name: 'empty'
          },
          type: null,
          param: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'block',
              id: null,
              body: []
            },
            {
              kind: 'block',
              id: {
                kind: 'identifier',
                id: 'l'
              },
              body: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'singular'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [{
              kind: 'const',
              type: 'i32',
              init: '7'
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'multi'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'const',
                type: 'i32',
                init: '5'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '6'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'effects'
          },
          type: null,
          param: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          body: [
            {
              kind: 'block',
              id: null,
              body: [
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '3'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '5'
                    }
                  }
                },
                {
                  kind: 'set_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  },
                  init: {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'mul',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '7'
                    }
                  }
                }
              ]
            },
            {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }
          ]
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'empty'
          },
          name: 'empty'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'singular'
          },
          name: 'singular'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'multi'
          },
          name: 'multi'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: 'effects'
          },
          name: 'effects'
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'empty',
      body: []
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'singular',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '7'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'multi',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'effects',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-14'
      }
    }
  ]
}
