{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'func',
        id: null,
        expos: [{
          kind: 'literal',
          value: 'foo'
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
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'foo',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [{
        kind: 'func',
        id: null,
        expos: [{
          kind: 'literal',
          value: 'foo'
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
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      }]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'foo',
        body: []
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
          id: null,
          expos: [{
            kind: 'literal',
            value: ''
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
            kind: 'const',
            type: 'i32',
            init: '0'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '0'
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
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '-0'
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
            kind: 'const',
            type: 'i32',
            init: '2'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '_'
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
            kind: 'const',
            type: 'i32',
            init: '3'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '$'
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
            kind: 'const',
            type: 'i32',
            init: '4'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '@'
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
            kind: 'const',
            type: 'i32',
            init: '5'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '~!@#$%^&*()_+\`-={}|[]\\\\:\";\'<>?,./ '
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
            kind: 'const',
            type: 'i32',
            init: '6'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'NaN'
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
            kind: 'const',
            type: 'i32',
            init: '7'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Infinity'
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
            kind: 'const',
            type: 'i32',
            init: '8'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'if'
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
            kind: 'const',
            type: 'i32',
            init: '9'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'malloc'
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
            kind: 'const',
            type: 'i32',
            init: '10'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '_malloc'
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
            kind: 'const',
            type: 'i32',
            init: '11'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '__malloc'
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
            kind: 'const',
            type: 'i32',
            init: '12'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'a'
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
            kind: 'const',
            type: 'i32',
            init: '13'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'A'
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
            kind: 'const',
            type: 'i32',
            init: '14'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '﻿'
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
            kind: 'const',
            type: 'i32',
            init: '15'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Å'
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
            kind: 'const',
            type: 'i32',
            init: '16'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Å'
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
            kind: 'const',
            type: 'i32',
            init: '17'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Å'
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
            kind: 'const',
            type: 'i32',
            init: '18'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ﬃ'
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
            kind: 'const',
            type: 'i32',
            init: '19'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'fﬁ'
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
            kind: 'const',
            type: 'i32',
            init: '20'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ffi'
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
            kind: 'const',
            type: 'i32',
            init: '21'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f'
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
            kind: 'const',
            type: 'i32',
            init: '22'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1a\\1b\\1c\\1d\\1e\\1f'
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
            kind: 'const',
            type: 'i32',
            init: '23'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: ' \\7f'
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
            kind: 'const',
            type: 'i32',
            init: '24'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\80\\c2\\81\\c2\\82\\c2\\83\\c2\\84\\c2\\85\\c2\\86\\c2\\87\\c2\\88\\c2\\89\\c2\\8a\\c2\\8b\\c2\\8c\\c2\\8d\\c2\\8e\\c2\\8f'
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
            kind: 'const',
            type: 'i32',
            init: '25'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\90\\c2\\91\\c2\\92\\c2\\93\\c2\\94\\c2\\95\\c2\\96\\c2\\97\\c2\\98\\c2\\99\\c2\\9a\\c2\\9b\\c2\\9c\\c2\\9d\\c2\\9e\\c2\\9f'
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
            kind: 'const',
            type: 'i32',
            init: '26'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\bf\\b0\\ef\\bf\\b1\\ef\\bf\\b2\\ef\\bf\\b3\\ef\\bf\\b4\\ef\\bf\\b5\\ef\\bf\\b6\\ef\\bf\\b7'
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
            kind: 'const',
            type: 'i32',
            init: '27'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\bf\\b8\\ef\\bf\\b9\\ef\\bf\\ba\\ef\\bf\\bb\\ef\\bf\\bc\\ef\\bf\\bd\\ef\\bf\\be\\ef\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '28'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏'
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
            kind: 'const',
            type: 'i32',
            init: '29'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟'
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
            kind: 'const',
            type: 'i32',
            init: '30'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␠␡'
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
            kind: 'const',
            type: 'i32',
            init: '31'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '￰￱￲￳￴￵￶￷￸￹￺￻￼�'
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
            kind: 'const',
            type: 'i32',
            init: '32'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‍'
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
            kind: 'const',
            type: 'i32',
            init: '33'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‌'
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
            kind: 'const',
            type: 'i32',
            init: '34'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '͏'
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
            kind: 'const',
            type: 'i32',
            init: '35'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⁠'
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
            kind: 'const',
            type: 'i32',
            init: '36'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⵿'
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
            kind: 'const',
            type: 'i32',
            init: '37'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑁿'
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
            kind: 'const',
            type: 'i32',
            init: '38'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '᠎'
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
            kind: 'const',
            type: 'i32',
            init: '39'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '￯​ ­⁠ ‮‭'
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
            kind: 'const',
            type: 'i32',
            init: '40'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‎‏‑  ‪‫‬ ⁦⁧⁨⁩'
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
            kind: 'const',
            type: 'i32',
            init: '41'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⁪⁫⁬⁭⁮⁯'
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
            kind: 'const',
            type: 'i32',
            init: '42'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⁡⁢⁣⁤'
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
            kind: 'const',
            type: 'i32',
            init: '43'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐀀󟿿􏿿'
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
            kind: 'const',
            type: 'i32',
            init: '44'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Z̴͇̫̥̪͓͈͔͎̗̞̺̯̱̞̙̱̜̖̠̏͆̆͛͌͘͞ḁ̶̰̳̭͙̲̱̹̝͎̼͗ͨ̎̄̆͗̿̀́͟͡l̶̷͉̩̹̫̝͖̙̲̼͇͚͍̮͎̥̞̈́͊͗ͦ̈́ͫ̇́̚ͅͅg̶͕͔͚̩̓̐̅ͮ̔̐̎̂̏̾͊̍͋͊ͧ́̆ͦ͞o̡͋̔͐ͪͩ͏̢̧̫̙̤̮͖͙͓̺̜̩̼̘̠́'
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
            kind: 'const',
            type: 'i32',
            init: '45'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᅟᅠㅤﾠ'
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
            kind: 'const',
            type: 'i32',
            init: '46'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '︀'
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
            kind: 'const',
            type: 'i32',
            init: '47'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '︄'
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
            kind: 'const',
            type: 'i32',
            init: '48'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '󠄀'
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
            kind: 'const',
            type: 'i32',
            init: '49'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '󠇯'
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
            kind: 'const',
            type: 'i32',
            init: '50'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '̈'
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
            kind: 'const',
            type: 'i32',
            init: '51'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0a'
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
            kind: 'const',
            type: 'i32',
            init: '52'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␤'
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
            kind: 'const',
            type: 'i32',
            init: '53'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: ' '
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
            kind: 'const',
            type: 'i32',
            init: '54'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0d'
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
            kind: 'const',
            type: 'i32',
            init: '55'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0d\\0a'
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
            kind: 'const',
            type: 'i32',
            init: '56'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0a\\0d'
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
            kind: 'const',
            type: 'i32',
            init: '57'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\1e'
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
            kind: 'const',
            type: 'i32',
            init: '58'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0b'
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
            kind: 'const',
            type: 'i32',
            init: '59'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0c'
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
            kind: 'const',
            type: 'i32',
            init: '60'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\85'
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
            kind: 'const',
            type: 'i32',
            init: '61'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: ' '
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
            kind: 'const',
            type: 'i32',
            init: '62'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '…'
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
            kind: 'const',
            type: 'i32',
            init: '63'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⏎'
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
            kind: 'const',
            type: 'i32',
            init: '64'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\8b'
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
            kind: 'const',
            type: 'i32',
            init: '65'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\8c'
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
            kind: 'const',
            type: 'i32',
            init: '66'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\c2\\8d'
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
            kind: 'const',
            type: 'i32',
            init: '67'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '↵'
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
            kind: 'const',
            type: 'i32',
            init: '68'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '↩'
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
            kind: 'const',
            type: 'i32',
            init: '69'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⌤'
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
            kind: 'const',
            type: 'i32',
            init: '70'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⤶'
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
            kind: 'const',
            type: 'i32',
            init: '71'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '↲'
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
            kind: 'const',
            type: 'i32',
            init: '72'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⮨'
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
            kind: 'const',
            type: 'i32',
            init: '73'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⮰'
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
            kind: 'const',
            type: 'i32',
            init: '74'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '�'
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
            kind: 'const',
            type: 'i32',
            init: '75'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\90'
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
            kind: 'const',
            type: 'i32',
            init: '76'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\91'
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
            kind: 'const',
            type: 'i32',
            init: '77'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\92'
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
            kind: 'const',
            type: 'i32',
            init: '78'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\93'
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
            kind: 'const',
            type: 'i32',
            init: '79'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\94'
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
            kind: 'const',
            type: 'i32',
            init: '80'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\95'
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
            kind: 'const',
            type: 'i32',
            init: '81'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\96'
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
            kind: 'const',
            type: 'i32',
            init: '82'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\97'
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
            kind: 'const',
            type: 'i32',
            init: '83'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\98'
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
            kind: 'const',
            type: 'i32',
            init: '84'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\99'
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
            kind: 'const',
            type: 'i32',
            init: '85'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9a'
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
            kind: 'const',
            type: 'i32',
            init: '86'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9b'
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
            kind: 'const',
            type: 'i32',
            init: '87'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9c'
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
            kind: 'const',
            type: 'i32',
            init: '88'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9d'
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
            kind: 'const',
            type: 'i32',
            init: '89'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9e'
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
            kind: 'const',
            type: 'i32',
            init: '90'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\9f'
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
            kind: 'const',
            type: 'i32',
            init: '91'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a0'
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
            kind: 'const',
            type: 'i32',
            init: '92'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a1'
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
            kind: 'const',
            type: 'i32',
            init: '93'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a2'
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
            kind: 'const',
            type: 'i32',
            init: '94'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a3'
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
            kind: 'const',
            type: 'i32',
            init: '95'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a4'
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
            kind: 'const',
            type: 'i32',
            init: '96'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a5'
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
            kind: 'const',
            type: 'i32',
            init: '97'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a6'
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
            kind: 'const',
            type: 'i32',
            init: '98'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a7'
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
            kind: 'const',
            type: 'i32',
            init: '99'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a8'
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
            kind: 'const',
            type: 'i32',
            init: '100'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\a9'
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
            kind: 'const',
            type: 'i32',
            init: '101'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\aa'
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
            kind: 'const',
            type: 'i32',
            init: '102'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\ab'
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
            kind: 'const',
            type: 'i32',
            init: '103'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\ac'
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
            kind: 'const',
            type: 'i32',
            init: '104'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\ad'
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
            kind: 'const',
            type: 'i32',
            init: '105'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\ae'
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
            kind: 'const',
            type: 'i32',
            init: '106'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\b7\\af'
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
            kind: 'const',
            type: 'i32',
            init: '107'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '108'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\ef\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '109'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\9f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '110'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\9f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '111'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\af\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '112'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\af\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '113'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\bf\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '114'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f0\\bf\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '115'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\8f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '116'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\8f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '117'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\9f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '118'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\9f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '119'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\af\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '120'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\af\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '121'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\bf\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '122'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f1\\bf\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '123'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\8f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '124'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\8f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '125'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\9f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '126'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\9f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '127'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\af\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '128'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\af\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '129'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\bf\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '130'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f2\\bf\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '131'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\8f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '132'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\8f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '133'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\9f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '134'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\9f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '135'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\af\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '136'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\af\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '137'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\bf\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '138'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f3\\bf\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '139'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f4\\8f\\bf\\be'
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
            kind: 'const',
            type: 'i32',
            init: '140'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\f4\\8f\\bf\\bf'
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
            kind: 'const',
            type: 'i32',
            init: '141'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '̈‽̈̉'
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
            kind: 'const',
            type: 'i32',
            init: '142'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'abc'
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
            kind: 'const',
            type: 'i32',
            init: '143'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‭abc'
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
            kind: 'const',
            type: 'i32',
            init: '144'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‮cba'
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
            kind: 'const',
            type: 'i32',
            init: '145'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‭abc‮'
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
            kind: 'const',
            type: 'i32',
            init: '146'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '‮cba‭'
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
            kind: 'const',
            type: 'i32',
            init: '147'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝑨'
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
            kind: 'const',
            type: 'i32',
            init: '148'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝐴'
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
            kind: 'const',
            type: 'i32',
            init: '149'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝘈'
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
            kind: 'const',
            type: 'i32',
            init: '150'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝘼'
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
            kind: 'const',
            type: 'i32',
            init: '151'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝐀'
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
            kind: 'const',
            type: 'i32',
            init: '152'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝓐'
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
            kind: 'const',
            type: 'i32',
            init: '153'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝕬'
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
            kind: 'const',
            type: 'i32',
            init: '154'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝗔'
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
            kind: 'const',
            type: 'i32',
            init: '155'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝒜'
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
            kind: 'const',
            type: 'i32',
            init: '156'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝔄'
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
            kind: 'const',
            type: 'i32',
            init: '157'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝔸'
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
            kind: 'const',
            type: 'i32',
            init: '158'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝖠'
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
            kind: 'const',
            type: 'i32',
            init: '159'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝙰'
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
            kind: 'const',
            type: 'i32',
            init: '160'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᴀ'
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
            kind: 'const',
            type: 'i32',
            init: '161'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᴬ'
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
            kind: 'const',
            type: 'i32',
            init: '162'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ⓐ'
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
            kind: 'const',
            type: 'i32',
            init: '163'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ａ'
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
            kind: 'const',
            type: 'i32',
            init: '164'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '🄐'
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
            kind: 'const',
            type: 'i32',
            init: '165'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '🄰'
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
            kind: 'const',
            type: 'i32',
            init: '166'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '󠁁'
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
            kind: 'const',
            type: 'i32',
            init: '167'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'U+0041'
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
            kind: 'const',
            type: 'i32',
            init: '168'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'A​'
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
            kind: 'const',
            type: 'i32',
            init: '169'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'А'
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
            kind: 'const',
            type: 'i32',
            init: '170'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ꙗ'
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
            kind: 'const',
            type: 'i32',
            init: '171'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ⷼ'
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
            kind: 'const',
            type: 'i32',
            init: '172'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ⷶ'
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
            kind: 'const',
            type: 'i32',
            init: '173'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ɐ'
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
            kind: 'const',
            type: 'i32',
            init: '174'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '🅐'
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
            kind: 'const',
            type: 'i32',
            init: '175'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '🅰'
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
            kind: 'const',
            type: 'i32',
            init: '176'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ⱝ'
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
            kind: 'const',
            type: 'i32',
            init: '177'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐐂'
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
            kind: 'const',
            type: 'i32',
            init: '178'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐐈'
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
            kind: 'const',
            type: 'i32',
            init: '179'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐒰'
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
            kind: 'const',
            type: 'i32',
            init: '180'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'À'
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
            kind: 'const',
            type: 'i32',
            init: '181'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Á'
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
            kind: 'const',
            type: 'i32',
            init: '182'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Â'
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
            kind: 'const',
            type: 'i32',
            init: '183'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ã'
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
            kind: 'const',
            type: 'i32',
            init: '184'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ä'
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
            kind: 'const',
            type: 'i32',
            init: '185'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ā'
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
            kind: 'const',
            type: 'i32',
            init: '186'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ă'
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
            kind: 'const',
            type: 'i32',
            init: '187'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ą'
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
            kind: 'const',
            type: 'i32',
            init: '188'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ǎ'
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
            kind: 'const',
            type: 'i32',
            init: '189'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ǟ'
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
            kind: 'const',
            type: 'i32',
            init: '190'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ǡ'
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
            kind: 'const',
            type: 'i32',
            init: '191'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ǻ'
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
            kind: 'const',
            type: 'i32',
            init: '192'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ȁ'
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
            kind: 'const',
            type: 'i32',
            init: '193'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ȃ'
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
            kind: 'const',
            type: 'i32',
            init: '194'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ȧ'
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
            kind: 'const',
            type: 'i32',
            init: '195'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ⱥ'
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
            kind: 'const',
            type: 'i32',
            init: '196'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ӑ'
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
            kind: 'const',
            type: 'i32',
            init: '197'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ӓ'
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
            kind: 'const',
            type: 'i32',
            init: '198'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ߊ'
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
            kind: 'const',
            type: 'i32',
            init: '199'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ࠡ'
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
            kind: 'const',
            type: 'i32',
            init: '200'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ࠢ'
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
            kind: 'const',
            type: 'i32',
            init: '201'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ࠣ'
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
            kind: 'const',
            type: 'i32',
            init: '202'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ࠤ'
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
            kind: 'const',
            type: 'i32',
            init: '203'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ࠥ'
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
            kind: 'const',
            type: 'i32',
            init: '204'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ऄ'
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
            kind: 'const',
            type: 'i32',
            init: '205'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'अ'
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
            kind: 'const',
            type: 'i32',
            init: '206'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ॲ'
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
            kind: 'const',
            type: 'i32',
            init: '207'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'অ'
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
            kind: 'const',
            type: 'i32',
            init: '208'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ਅ'
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
            kind: 'const',
            type: 'i32',
            init: '209'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'અ'
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
            kind: 'const',
            type: 'i32',
            init: '210'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ଅ'
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
            kind: 'const',
            type: 'i32',
            init: '211'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'அ'
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
            kind: 'const',
            type: 'i32',
            init: '212'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'అ'
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
            kind: 'const',
            type: 'i32',
            init: '213'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ಅ'
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
            kind: 'const',
            type: 'i32',
            init: '214'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'അ'
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
            kind: 'const',
            type: 'i32',
            init: '215'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ะ'
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
            kind: 'const',
            type: 'i32',
            init: '216'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ະ'
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
            kind: 'const',
            type: 'i32',
            init: '217'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '༁'
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
            kind: 'const',
            type: 'i32',
            init: '218'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ཨ'
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
            kind: 'const',
            type: 'i32',
            init: '219'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ྸ'
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
            kind: 'const',
            type: 'i32',
            init: '220'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'အ'
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
            kind: 'const',
            type: 'i32',
            init: '221'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ဢ'
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
            kind: 'const',
            type: 'i32',
            init: '222'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ႜ'
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
            kind: 'const',
            type: 'i32',
            init: '223'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᅡ'
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
            kind: 'const',
            type: 'i32',
            init: '224'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'አ'
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
            kind: 'const',
            type: 'i32',
            init: '225'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ዐ'
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
            kind: 'const',
            type: 'i32',
            init: '226'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ꭰ'
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
            kind: 'const',
            type: 'i32',
            init: '227'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᐊ'
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
            kind: 'const',
            type: 'i32',
            init: '228'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᖳ'
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
            kind: 'const',
            type: 'i32',
            init: '229'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᚨ'
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
            kind: 'const',
            type: 'i32',
            init: '230'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᚪ'
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
            kind: 'const',
            type: 'i32',
            init: '231'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᛆ'
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
            kind: 'const',
            type: 'i32',
            init: '232'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᜀ'
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
            kind: 'const',
            type: 'i32',
            init: '233'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᜠ'
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
            kind: 'const',
            type: 'i32',
            init: '234'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᝀ'
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
            kind: 'const',
            type: 'i32',
            init: '235'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᝠ'
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
            kind: 'const',
            type: 'i32',
            init: '236'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᠠ'
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
            kind: 'const',
            type: 'i32',
            init: '237'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᢇ'
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
            kind: 'const',
            type: 'i32',
            init: '238'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᤠ'
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
            kind: 'const',
            type: 'i32',
            init: '239'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᥣ'
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
            kind: 'const',
            type: 'i32',
            init: '240'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᨕ'
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
            kind: 'const',
            type: 'i32',
            init: '241'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᩋ'
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
            kind: 'const',
            type: 'i32',
            init: '242'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᩡ'
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
            kind: 'const',
            type: 'i32',
            init: '243'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᮃ'
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
            kind: 'const',
            type: 'i32',
            init: '244'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᯀ'
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
            kind: 'const',
            type: 'i32',
            init: '245'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᯁ'
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
            kind: 'const',
            type: 'i32',
            init: '246'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᰣ'
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
            kind: 'const',
            type: 'i32',
            init: '247'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ḁ'
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
            kind: 'const',
            type: 'i32',
            init: '248'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ạ'
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
            kind: 'const',
            type: 'i32',
            init: '249'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ả'
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
            kind: 'const',
            type: 'i32',
            init: '250'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ấ'
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
            kind: 'const',
            type: 'i32',
            init: '251'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ầ'
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
            kind: 'const',
            type: 'i32',
            init: '252'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ẩ'
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
            kind: 'const',
            type: 'i32',
            init: '253'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ẫ'
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
            kind: 'const',
            type: 'i32',
            init: '254'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ậ'
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
            kind: 'const',
            type: 'i32',
            init: '255'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ắ'
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
            kind: 'const',
            type: 'i32',
            init: '256'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ằ'
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
            kind: 'const',
            type: 'i32',
            init: '257'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ẳ'
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
            kind: 'const',
            type: 'i32',
            init: '258'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ẵ'
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
            kind: 'const',
            type: 'i32',
            init: '259'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ặ'
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
            kind: 'const',
            type: 'i32',
            init: '260'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'あ'
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
            kind: 'const',
            type: 'i32',
            init: '261'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ア'
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
            kind: 'const',
            type: 'i32',
            init: '262'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ㄚ'
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
            kind: 'const',
            type: 'i32',
            init: '263'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ㅏ'
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
            kind: 'const',
            type: 'i32',
            init: '264'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈎'
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
            kind: 'const',
            type: 'i32',
            init: '265'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈏'
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
            kind: 'const',
            type: 'i32',
            init: '266'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈐'
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
            kind: 'const',
            type: 'i32',
            init: '267'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈑'
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
            kind: 'const',
            type: 'i32',
            init: '268'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈒'
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
            kind: 'const',
            type: 'i32',
            init: '269'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈓'
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
            kind: 'const',
            type: 'i32',
            init: '270'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈔'
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
            kind: 'const',
            type: 'i32',
            init: '271'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈕'
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
            kind: 'const',
            type: 'i32',
            init: '272'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈖'
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
            kind: 'const',
            type: 'i32',
            init: '273'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈗'
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
            kind: 'const',
            type: 'i32',
            init: '274'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈘'
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
            kind: 'const',
            type: 'i32',
            init: '275'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈙'
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
            kind: 'const',
            type: 'i32',
            init: '276'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈚'
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
            kind: 'const',
            type: 'i32',
            init: '277'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㈛'
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
            kind: 'const',
            type: 'i32',
            init: '278'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉮'
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
            kind: 'const',
            type: 'i32',
            init: '279'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉯'
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
            kind: 'const',
            type: 'i32',
            init: '280'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉰'
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
            kind: 'const',
            type: 'i32',
            init: '281'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉱'
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
            kind: 'const',
            type: 'i32',
            init: '282'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉲'
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
            kind: 'const',
            type: 'i32',
            init: '283'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉳'
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
            kind: 'const',
            type: 'i32',
            init: '284'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉴'
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
            kind: 'const',
            type: 'i32',
            init: '285'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉵'
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
            kind: 'const',
            type: 'i32',
            init: '286'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉶'
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
            kind: 'const',
            type: 'i32',
            init: '287'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉷'
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
            kind: 'const',
            type: 'i32',
            init: '288'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉸'
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
            kind: 'const',
            type: 'i32',
            init: '289'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉹'
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
            kind: 'const',
            type: 'i32',
            init: '290'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉺'
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
            kind: 'const',
            type: 'i32',
            init: '291'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉻'
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
            kind: 'const',
            type: 'i32',
            init: '292'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㋐'
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
            kind: 'const',
            type: 'i32',
            init: '293'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꀊ'
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
            kind: 'const',
            type: 'i32',
            init: '294'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꓮ'
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
            kind: 'const',
            type: 'i32',
            init: '295'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꕉ'
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
            kind: 'const',
            type: 'i32',
            init: '296'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꚠ'
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
            kind: 'const',
            type: 'i32',
            init: '297'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꠀ'
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
            kind: 'const',
            type: 'i32',
            init: '298'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꠣ'
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
            kind: 'const',
            type: 'i32',
            init: '299'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꡝ'
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
            kind: 'const',
            type: 'i32',
            init: '300'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꢂ'
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
            kind: 'const',
            type: 'i32',
            init: '301'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '꣪'
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
            kind: 'const',
            type: 'i32',
            init: '302'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꤢ'
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
            kind: 'const',
            type: 'i32',
            init: '303'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꥆ'
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
            kind: 'const',
            type: 'i32',
            init: '304'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꦄ'
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
            kind: 'const',
            type: 'i32',
            init: '305'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꨀ'
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
            kind: 'const',
            type: 'i32',
            init: '306'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ｱ'
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
            kind: 'const',
            type: 'i32',
            init: '307'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ￂ'
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
            kind: 'const',
            type: 'i32',
            init: '308'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐀀'
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
            kind: 'const',
            type: 'i32',
            init: '309'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐊀'
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
            kind: 'const',
            type: 'i32',
            init: '310'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐊠'
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
            kind: 'const',
            type: 'i32',
            init: '311'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐌀'
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
            kind: 'const',
            type: 'i32',
            init: '312'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐎠'
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
            kind: 'const',
            type: 'i32',
            init: '313'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐒖'
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
            kind: 'const',
            type: 'i32',
            init: '314'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐔀'
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
            kind: 'const',
            type: 'i32',
            init: '315'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐝀'
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
            kind: 'const',
            type: 'i32',
            init: '316'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐠀'
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
            kind: 'const',
            type: 'i32',
            init: '317'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐤠'
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
            kind: 'const',
            type: 'i32',
            init: '318'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐦀'
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
            kind: 'const',
            type: 'i32',
            init: '319'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐦠'
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
            kind: 'const',
            type: 'i32',
            init: '320'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐨀'
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
            kind: 'const',
            type: 'i32',
            init: '321'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐬀'
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
            kind: 'const',
            type: 'i32',
            init: '322'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐰀'
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
            kind: 'const',
            type: 'i32',
            init: '323'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐰁'
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
            kind: 'const',
            type: 'i32',
            init: '324'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐲀'
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
            kind: 'const',
            type: 'i32',
            init: '325'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑀅'
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
            kind: 'const',
            type: 'i32',
            init: '326'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑂃'
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
            kind: 'const',
            type: 'i32',
            init: '327'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑄧'
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
            kind: 'const',
            type: 'i32',
            init: '328'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑅐'
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
            kind: 'const',
            type: 'i32',
            init: '329'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑆃'
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
            kind: 'const',
            type: 'i32',
            init: '330'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑈀'
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
            kind: 'const',
            type: 'i32',
            init: '331'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑊀'
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
            kind: 'const',
            type: 'i32',
            init: '332'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑊰'
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
            kind: 'const',
            type: 'i32',
            init: '333'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑌅'
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
            kind: 'const',
            type: 'i32',
            init: '334'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑍰'
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
            kind: 'const',
            type: 'i32',
            init: '335'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑐀'
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
            kind: 'const',
            type: 'i32',
            init: '336'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑒁'
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
            kind: 'const',
            type: 'i32',
            init: '337'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑖀'
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
            kind: 'const',
            type: 'i32',
            init: '338'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑘀'
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
            kind: 'const',
            type: 'i32',
            init: '339'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑚀'
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
            kind: 'const',
            type: 'i32',
            init: '340'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑜒'
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
            kind: 'const',
            type: 'i32',
            init: '341'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑜠'
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
            kind: 'const',
            type: 'i32',
            init: '342'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑢡'
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
            kind: 'const',
            type: 'i32',
            init: '343'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑫕'
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
            kind: 'const',
            type: 'i32',
            init: '344'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑰀'
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
            kind: 'const',
            type: 'i32',
            init: '345'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑲏'
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
            kind: 'const',
            type: 'i32',
            init: '346'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑲯'
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
            kind: 'const',
            type: 'i32',
            init: '347'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𒀀'
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
            kind: 'const',
            type: 'i32',
            init: '348'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𖧕'
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
            kind: 'const',
            type: 'i32',
            init: '349'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𖩆'
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
            kind: 'const',
            type: 'i32',
            init: '350'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𖫧'
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
            kind: 'const',
            type: 'i32',
            init: '351'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𖽔'
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
            kind: 'const',
            type: 'i32',
            init: '352'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𛱁'
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
            kind: 'const',
            type: 'i32',
            init: '353'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𛱤'
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
            kind: 'const',
            type: 'i32',
            init: '354'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𞠣'
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
            kind: 'const',
            type: 'i32',
            init: '355'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '🇦'
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
            kind: 'const',
            type: 'i32',
            init: '356'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ɑ'
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
            kind: 'const',
            type: 'i32',
            init: '357'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Λ'
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
            kind: 'const',
            type: 'i32',
            init: '358'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ɒ'
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
            kind: 'const',
            type: 'i32',
            init: '359'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ª'
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
            kind: 'const',
            type: 'i32',
            init: '360'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '∀'
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
            kind: 'const',
            type: 'i32',
            init: '361'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '₳'
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
            kind: 'const',
            type: 'i32',
            init: '362'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐤀'
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
            kind: 'const',
            type: 'i32',
            init: '363'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ⲁ'
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
            kind: 'const',
            type: 'i32',
            init: '364'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐌰'
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
            kind: 'const',
            type: 'i32',
            init: '365'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ά'
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
            kind: 'const',
            type: 'i32',
            init: '366'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Α'
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
            kind: 'const',
            type: 'i32',
            init: '367'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἀ'
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
            kind: 'const',
            type: 'i32',
            init: '368'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἁ'
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
            kind: 'const',
            type: 'i32',
            init: '369'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἂ'
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
            kind: 'const',
            type: 'i32',
            init: '370'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἃ'
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
            kind: 'const',
            type: 'i32',
            init: '371'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἄ'
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
            kind: 'const',
            type: 'i32',
            init: '372'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἅ'
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
            kind: 'const',
            type: 'i32',
            init: '373'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἆ'
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
            kind: 'const',
            type: 'i32',
            init: '374'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ἇ'
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
            kind: 'const',
            type: 'i32',
            init: '375'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾈ'
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
            kind: 'const',
            type: 'i32',
            init: '376'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾉ'
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
            kind: 'const',
            type: 'i32',
            init: '377'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾊ'
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
            kind: 'const',
            type: 'i32',
            init: '378'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾋ'
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
            kind: 'const',
            type: 'i32',
            init: '379'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾌ'
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
            kind: 'const',
            type: 'i32',
            init: '380'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾍ'
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
            kind: 'const',
            type: 'i32',
            init: '381'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾎ'
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
            kind: 'const',
            type: 'i32',
            init: '382'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾏ'
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
            kind: 'const',
            type: 'i32',
            init: '383'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ᾰ'
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
            kind: 'const',
            type: 'i32',
            init: '384'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ᾱ'
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
            kind: 'const',
            type: 'i32',
            init: '385'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ὰ'
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
            kind: 'const',
            type: 'i32',
            init: '386'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ά'
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
            kind: 'const',
            type: 'i32',
            init: '387'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᾼ'
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
            kind: 'const',
            type: 'i32',
            init: '388'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝚨'
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
            kind: 'const',
            type: 'i32',
            init: '389'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝛢'
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
            kind: 'const',
            type: 'i32',
            init: '390'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝜜'
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
            kind: 'const',
            type: 'i32',
            init: '391'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝝖'
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
            kind: 'const',
            type: 'i32',
            init: '392'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝞐'
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
            kind: 'const',
            type: 'i32',
            init: '393'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍶'
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
            kind: 'const',
            type: 'i32',
            init: '394'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍺'
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
            kind: 'const',
            type: 'i32',
            init: '395'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⩜'
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
            kind: 'const',
            type: 'i32',
            init: '396'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ᗅ'
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
            kind: 'const',
            type: 'i32',
            init: '397'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'Ꭺ'
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
            kind: 'const',
            type: 'i32',
            init: '398'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: ')˺˼𔗏𝅴𝅶𝅸𝅺⁾₎❩❫⟯﴿︶﹚）｠󠀩❳❵⟧⟩⟫⟭⦈⦊⦖⸣⸥︘︸︺︼︾﹀﹂﹄﹈﹜﹞］｝｣󠁝󠁽»’”›❯'
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
            kind: 'const',
            type: 'i32',
            init: '399'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '(˹˻𔗎𝅳𝅵𝅷𝅹⁽₍❨❪⟮﴾︵﹙（｟󠀨❲❴⟦⟨⟪⟬⦇⦉⦕⸢⸤︗︷︹︻︽︿﹁﹃﹇﹛﹝［｛｢󠁛󠁻«‘“‹❮'
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
            kind: 'const',
            type: 'i32',
            init: '400'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝪋𝪤'
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
            kind: 'const',
            type: 'i32',
            init: '401'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𝪋'
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
            kind: 'const',
            type: 'i32',
            init: '402'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '½'
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
            kind: 'const',
            type: 'i32',
            init: '403'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '1⁄2'
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
            kind: 'const',
            type: 'i32',
            init: '404'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '1/2'
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
            kind: 'const',
            type: 'i32',
            init: '405'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '୳'
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
            kind: 'const',
            type: 'i32',
            init: '406'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '൴'
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
            kind: 'const',
            type: 'i32',
            init: '407'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⳽'
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
            kind: 'const',
            type: 'i32',
            init: '408'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '꠱'
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
            kind: 'const',
            type: 'i32',
            init: '409'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐅁'
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
            kind: 'const',
            type: 'i32',
            init: '410'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐅵'
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
            kind: 'const',
            type: 'i32',
            init: '411'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐅶'
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
            kind: 'const',
            type: 'i32',
            init: '412'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐦽'
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
            kind: 'const',
            type: 'i32',
            init: '413'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𐹻'
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
            kind: 'const',
            type: 'i32',
            init: '414'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '＂'
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
            kind: 'const',
            type: 'i32',
            init: '415'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\7f'
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
            kind: 'const',
            type: 'i32',
            init: '416'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\08'
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
            kind: 'const',
            type: 'i32',
            init: '417'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⌫'
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
            kind: 'const',
            type: 'i32',
            init: '418'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⌦'
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
            kind: 'const',
            type: 'i32',
            init: '419'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␈'
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
            kind: 'const',
            type: 'i32',
            init: '420'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␡'
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
            kind: 'const',
            type: 'i32',
            init: '421'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '᷻'
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
            kind: 'const',
            type: 'i32',
            init: '422'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\0f'
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
            kind: 'const',
            type: 'i32',
            init: '423'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '←'
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
            kind: 'const',
            type: 'i32',
            init: '424'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⌧'
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
            kind: 'const',
            type: 'i32',
            init: '425'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍒'
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
            kind: 'const',
            type: 'i32',
            init: '426'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍔'
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
            kind: 'const',
            type: 'i32',
            init: '427'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍢'
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
            kind: 'const',
            type: 'i32',
            init: '428'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍫'
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
            kind: 'const',
            type: 'i32',
            init: '429'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\1a'
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
            kind: 'const',
            type: 'i32',
            init: '430'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␦'
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
            kind: 'const',
            type: 'i32',
            init: '431'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '␚'
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
            kind: 'const',
            type: 'i32',
            init: '432'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '￼'
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
            kind: 'const',
            type: 'i32',
            init: '433'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '?'
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
            kind: 'const',
            type: 'i32',
            init: '434'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '¿'
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
            kind: 'const',
            type: 'i32',
            init: '435'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '᥅'
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
            kind: 'const',
            type: 'i32',
            init: '436'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: ';'
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
            kind: 'const',
            type: 'i32',
            init: '437'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '՞'
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
            kind: 'const',
            type: 'i32',
            init: '438'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '؟'
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
            kind: 'const',
            type: 'i32',
            init: '439'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '፧'
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
            kind: 'const',
            type: 'i32',
            init: '440'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⁇'
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
            kind: 'const',
            type: 'i32',
            init: '441'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⍰'
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
            kind: 'const',
            type: 'i32',
            init: '442'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '❓'
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
            kind: 'const',
            type: 'i32',
            init: '443'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '❔'
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
            kind: 'const',
            type: 'i32',
            init: '444'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⳺'
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
            kind: 'const',
            type: 'i32',
            init: '445'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⳻'
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
            kind: 'const',
            type: 'i32',
            init: '446'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸮'
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
            kind: 'const',
            type: 'i32',
            init: '447'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '㉄'
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
            kind: 'const',
            type: 'i32',
            init: '448'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '꘏'
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
            kind: 'const',
            type: 'i32',
            init: '449'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '꛷'
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
            kind: 'const',
            type: 'i32',
            init: '450'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '︖'
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
            kind: 'const',
            type: 'i32',
            init: '451'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '﹖'
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
            kind: 'const',
            type: 'i32',
            init: '452'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '？'
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
            kind: 'const',
            type: 'i32',
            init: '453'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𑅃'
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
            kind: 'const',
            type: 'i32',
            init: '454'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𞥟'
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
            kind: 'const',
            type: 'i32',
            init: '455'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '󠀿'
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
            kind: 'const',
            type: 'i32',
            init: '456'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '𖡄'
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
            kind: 'const',
            type: 'i32',
            init: '457'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⯑'
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
            kind: 'const',
            type: 'i32',
            init: '458'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '¶'
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
            kind: 'const',
            type: 'i32',
            init: '459'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⁋'
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
            kind: 'const',
            type: 'i32',
            init: '460'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '܀'
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
            kind: 'const',
            type: 'i32',
            init: '461'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '჻'
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
            kind: 'const',
            type: 'i32',
            init: '462'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '፨'
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
            kind: 'const',
            type: 'i32',
            init: '463'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '〷'
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
            kind: 'const',
            type: 'i32',
            init: '464'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '❡'
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
            kind: 'const',
            type: 'i32',
            init: '465'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸏'
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
            kind: 'const',
            type: 'i32',
            init: '466'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸐'
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
            kind: 'const',
            type: 'i32',
            init: '467'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸑'
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
            kind: 'const',
            type: 'i32',
            init: '468'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸎'
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
            kind: 'const',
            type: 'i32',
            init: '469'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '\\14'
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
            kind: 'const',
            type: 'i32',
            init: '470'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '☙'
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
            kind: 'const',
            type: 'i32',
            init: '471'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '⸿'
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
            kind: 'const',
            type: 'i32',
            init: '472'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '〇'
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
            kind: 'const',
            type: 'i32',
            init: '473'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: '๛'
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
            kind: 'const',
            type: 'i32',
            init: '474'
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'ꙮ'
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
            kind: 'const',
            type: 'i32',
            init: '475'
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '',
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
        name: '0',
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
        name: '-0',
        body: []
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
        id: null,
        name: '_',
        body: []
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
        id: null,
        name: '$',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '@',
        body: []
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
        id: null,
        name: '~!@#$%^&*()_+\`-={}|[]\\:\";\'<>?,./ ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '6'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'NaN',
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
        id: null,
        name: 'Infinity',
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
        id: null,
        name: 'if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '10'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '_malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '11'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '__malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '12'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'A',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '﻿',
        body: []
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
        id: null,
        name: 'Å',
        body: []
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
        id: null,
        name: 'Å',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '17'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Å',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '18'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ﬃ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '19'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'fﬁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ffi',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '21'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\00\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '22'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\10\11\12\13\14\15\16\17\18\19\1a\1b\1c\1d\1e\1f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '23'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: ' \7f',
        body: []
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
        id: null,
        name: '\c2\80\c2\81\c2\82\c2\83\c2\84\c2\85\c2\86\c2\87\c2\88\c2\89\c2\8a\c2\8b\c2\8c\c2\8d\c2\8e\c2\8f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '25'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\c2\90\c2\91\c2\92\c2\93\c2\94\c2\95\c2\96\c2\97\c2\98\c2\99\c2\9a\c2\9b\c2\9c\c2\9d\c2\9e\c2\9f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '26'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\bf\b0\ef\bf\b1\ef\bf\b2\ef\bf\b3\ef\bf\b4\ef\bf\b5\ef\bf\b6\ef\bf\b7',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '27'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\bf\b8\ef\bf\b9\ef\bf\ba\ef\bf\bb\ef\bf\bc\ef\bf\bd\ef\bf\be\ef\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '28'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '29'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟',
        body: []
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
        id: null,
        name: '␠␡',
        body: []
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
        id: null,
        name: '￰￱￲￳￴￵￶￷￸￹￺￻￼�',
        body: []
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
        id: null,
        name: '‍',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '33'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‌',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '34'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '͏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '35'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⁠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '36'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⵿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '37'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑁿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '38'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '᠎',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '39'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '￯​ ­⁠ ‮‭',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‎‏‑  ‪‫‬ ⁦⁧⁨⁩',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '41'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⁪⁫⁬⁭⁮⁯',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⁡⁢⁣⁤',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '43'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐀀󟿿􏿿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Z̴͇̫̥̪͓͈͔͎̗̞̺̯̱̞̙̱̜̖̠̏͆̆͛͌͘͞ḁ̶̰̳̭͙̲̱̹̝͎̼͗ͨ̎̄̆͗̿̀́͟͡l̶̷͉̩̹̫̝͖̙̲̼͇͚͍̮͎̥̞̈́͊͗ͦ̈́ͫ̇́̚ͅͅg̶͕͔͚̩̓̐̅ͮ̔̐̎̂̏̾͊̍͋͊ͧ́̆ͦ͞o̡͋̔͐ͪͩ͏̢̧̫̙̤̮͖͙͓̺̜̩̼̘̠́',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '45'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᅟᅠㅤﾠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '46'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '︀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '47'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '︄',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '󠄀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '49'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '󠇯',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '50'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '̈',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '51'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '52'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␤',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '53'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: ' ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '54'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0d',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '55'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0d\0a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '56'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0a\0d',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '57'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\1e',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '58'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0b',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '59'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0c',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '60'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\c2\85',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '61'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: ' ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '62'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '…',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⏎',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\c2\8b',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '65'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\c2\8c',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '66'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\c2\8d',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '67'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '↵',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '68'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '↩',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '69'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⌤',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '70'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⤶',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '71'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '↲',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '72'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⮨',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '73'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⮰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '74'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '�',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '75'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\90',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '76'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\91',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '77'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\92',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '78'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\93',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '79'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\94',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '80'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\95',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '81'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\96',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '82'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\97',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '83'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\98',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '84'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\99',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '85'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '86'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9b',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '87'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9c',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '88'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9d',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '89'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9e',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '90'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\9f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '91'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a0',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '92'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a1',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '93'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '94'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a3',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '95'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a4',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '96'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a5',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '97'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a6',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '98'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a7',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a8',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\a9',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '101'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\aa',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\ab',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '103'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\ac',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '104'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\ad',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '105'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\ae',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '106'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\b7\af',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '107'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '108'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\ef\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '109'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\9f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '110'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\9f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '111'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\af\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '112'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\af\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '113'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\bf\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '114'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f0\bf\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '115'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\8f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '116'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\8f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '117'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\9f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '118'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\9f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\af\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\af\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '121'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\bf\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '122'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f1\bf\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '123'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\8f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '124'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\8f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\9f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\9f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\af\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '128'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\af\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '129'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\bf\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '130'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f2\bf\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '131'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\8f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '132'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\8f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '133'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\9f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '134'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\9f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '135'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\af\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '136'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\af\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '137'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\bf\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '138'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f3\bf\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '139'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f4\8f\bf\be',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '140'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\f4\8f\bf\bf',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '141'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '̈‽̈̉',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '142'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'abc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '143'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‭abc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '144'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‮cba',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '145'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‭abc‮',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '146'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '‮cba‭',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '147'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝑨',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '148'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝐴',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝘈',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '150'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝘼',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '151'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝐀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '152'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝓐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '153'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝕬',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '154'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝗔',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '155'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝒜',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '156'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝔄',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '157'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝔸',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '158'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝖠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '159'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝙰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '160'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᴀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '161'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᴬ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '162'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ⓐ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '163'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ａ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '164'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '🄐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '165'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '🄰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '166'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '󠁁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '167'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'U+0041',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '168'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'A​',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '169'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'А',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '170'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ꙗ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '171'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ⷼ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '172'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ⷶ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '173'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ɐ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '174'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '🅐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '175'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '🅰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '176'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ⱝ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '177'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐐂',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '178'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐐈',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '179'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐒰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '180'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'À',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '181'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Á',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '182'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Â',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '183'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ã',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '184'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ä',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '185'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ā',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '186'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ă',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '187'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ą',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '188'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ǎ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '189'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ǟ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '190'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ǡ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '191'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ǻ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '192'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ȁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '193'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ȃ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '194'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ȧ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '195'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ⱥ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '196'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ӑ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '197'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ӓ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '198'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ߊ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '199'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ࠡ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ࠢ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '201'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ࠣ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '202'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ࠤ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '203'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ࠥ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '204'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ऄ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '205'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'अ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '206'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ॲ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '207'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'অ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '208'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ਅ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '209'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'અ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '210'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ଅ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '211'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'அ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '212'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'అ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '213'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ಅ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '214'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'അ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '215'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ะ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '216'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ະ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '217'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '༁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '218'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ཨ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '219'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ྸ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '220'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'အ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '221'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ဢ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '222'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ႜ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '223'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᅡ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '224'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'አ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '225'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ዐ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '226'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ꭰ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '227'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᐊ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '228'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᖳ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '229'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᚨ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '230'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᚪ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '231'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᛆ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '232'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᜀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '233'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᜠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '234'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᝀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '235'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᝠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '236'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᠠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '237'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᢇ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '238'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᤠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '239'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᥣ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '240'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᨕ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '241'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᩋ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᩡ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '243'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᮃ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '244'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᯀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '245'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᯁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '246'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᰣ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '247'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ḁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '248'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ạ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '249'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ả',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '250'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ấ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '251'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ầ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '252'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ẩ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '253'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ẫ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '254'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ậ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ắ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '256'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ằ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '257'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ẳ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '258'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ẵ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '259'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ặ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '260'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'あ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '261'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ア',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '262'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ㄚ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '263'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ㅏ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '264'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈎',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '265'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '266'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '267'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈑',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '268'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈒',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '269'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈓',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '270'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈔',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '271'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈕',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '272'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈖',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '273'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈗',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '274'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈘',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '275'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈙',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '276'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈚',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '277'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㈛',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '278'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉮',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '279'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉯',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '280'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '281'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉱',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '282'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉲',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '283'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉳',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '284'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉴',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '285'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉵',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '286'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉶',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '287'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉷',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '288'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉸',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '289'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉹',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '290'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉺',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '291'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉻',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '292'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㋐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '293'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꀊ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '294'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꓮ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '295'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꕉ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꚠ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '297'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꠀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '298'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꠣ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '299'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꡝ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '300'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꢂ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '301'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '꣪',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '302'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꤢ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '303'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꥆ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '304'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꦄ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '305'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꨀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '306'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ｱ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '307'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ￂ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '308'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐀀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '309'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐊀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '310'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐊠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '311'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐌀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '312'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐎠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '313'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐒖',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '314'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐔀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '315'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐝀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '316'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐠀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '317'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐤠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '318'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐦀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '319'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐦠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '320'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐨀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '321'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐬀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '322'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐰀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '323'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐰁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '324'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐲀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '325'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑀅',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '326'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑂃',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '327'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑄧',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '328'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑅐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '329'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑆃',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '330'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑈀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '331'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑊀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '332'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑊰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '333'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑌅',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '334'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑍰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '335'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑐀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '336'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑒁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '337'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑖀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '338'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑘀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '339'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑚀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '340'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑜒',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '341'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑜠',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '342'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑢡',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '343'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑫕',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '344'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑰀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '345'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑲏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '346'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑲯',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '347'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𒀀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '348'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𖧕',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '349'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𖩆',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '350'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𖫧',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '351'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𖽔',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '352'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𛱁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '353'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𛱤',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '354'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𞠣',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '355'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '🇦',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '356'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ɑ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '357'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Λ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '358'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ɒ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '359'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ª',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '360'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '∀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '361'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '₳',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '362'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐤀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '363'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ⲁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '364'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐌰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '365'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ά',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '366'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Α',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '367'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἀ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '368'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἁ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '369'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἂ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '370'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἃ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '371'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἄ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '372'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἅ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '373'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἆ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '374'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ἇ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '375'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾈ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '376'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾉ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '377'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾊ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '378'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾋ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '379'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾌ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '380'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾍ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '381'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾎ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '382'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾏ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '383'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ᾰ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '384'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ᾱ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '385'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ὰ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '386'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ά',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '387'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᾼ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '388'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝚨',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '389'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝛢',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '390'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝜜',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '391'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝝖',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '392'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝞐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '393'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍶',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '394'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍺',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '395'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⩜',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '396'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ᗅ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '397'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'Ꭺ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '398'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: ')˺˼𔗏𝅴𝅶𝅸𝅺⁾₎❩❫⟯﴿︶﹚）｠󠀩❳❵⟧⟩⟫⟭⦈⦊⦖⸣⸥︘︸︺︼︾﹀﹂﹄﹈﹜﹞］｝｣󠁝󠁽»’”›❯',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '399'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '(˹˻𔗎𝅳𝅵𝅷𝅹⁽₍❨❪⟮﴾︵﹙（｟󠀨❲❴⟦⟨⟪⟬⦇⦉⦕⸢⸤︗︷︹︻︽︿﹁﹃﹇﹛﹝［｛｢󠁛󠁻«‘“‹❮',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '400'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝪋𝪤',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '401'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𝪋',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '402'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '½',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '403'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '1⁄2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '404'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '1/2',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '405'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '୳',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '406'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '൴',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '407'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⳽',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '408'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '꠱',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '409'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐅁',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '410'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐅵',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '411'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐅶',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '412'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐦽',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '413'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𐹻',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '414'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '＂',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '415'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\7f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '416'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\08',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '417'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⌫',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '418'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⌦',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '419'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␈',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '420'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␡',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '421'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '᷻',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '422'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\0f',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '423'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '←',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '424'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⌧',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '425'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍒',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '426'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍔',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '427'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍢',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '428'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍫',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '429'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\1a',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '430'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␦',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '431'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '␚',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '432'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '￼',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '433'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '?',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '434'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '¿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '435'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '᥅',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '436'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: ';',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '437'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '՞',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '438'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '؟',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '439'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '፧',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '440'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⁇',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '441'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⍰',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '442'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '❓',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '443'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '❔',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '444'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⳺',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '445'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⳻',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '446'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸮',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '447'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '㉄',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '448'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '꘏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '449'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '꛷',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '450'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '︖',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '451'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '﹖',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '452'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '？',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '453'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𑅃',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '454'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𞥟',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '455'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '󠀿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '456'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '𖡄',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '457'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⯑',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '458'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '¶',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '459'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⁋',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '460'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '܀',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '461'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '჻',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '462'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '፨',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '463'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '〷',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '464'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '❡',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '465'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸏',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '466'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸐',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '467'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸑',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '468'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸎',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '469'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '\14',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '470'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '☙',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '471'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '⸿',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '472'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '〇',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '473'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: '๛',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '474'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'ꙮ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '475'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print_i32'
          },
          type: {
            kind: 'func',
            id: null,
            params: [{
              kind: 'param',
              id: null,
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }],
            result: null,
            local: [],
            body: []
          },
          params: [],
          result: null
        },
        {
          kind: 'func',
          id: null,
          expos: [],
          imp: {},
          type: null,
          params: [{
            kind: 'param',
            id: null,
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: null,
          expos: [],
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              id: null,
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              id: null,
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }]
            },
            {
              kind: 'call',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [{
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                }
              }]
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'print32'
          },
          id: {
            kind: 'func',
            id: {
              kind: 'literal',
              value: 2,
              raw: '2'
            },
            expos: [],
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: []
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'print32',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '42'
          },
          {
            kind: 'const',
            type: 'i32',
            init: '123'
          }
        ]
      },
      expr: null
    }
  ]
}
