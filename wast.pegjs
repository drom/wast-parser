/* WAST Grammar */

start
    = body:( __ cmd )* __ {
        return {
            kind: 'script',
            body: body.map(function (e) { return e[1]; })
        };
    }

white_space "whitespace"
    = [\t\v\f \u00A0\uFEFF]

LineTerminatorSequence "end of line"
    = "\n"
    / "\r\n"
    / "\r"
    / "\u2028" // line separator
    / "\u2029" // paragraph separator

LineTerminator = [\n\r\u2028\u2029]

comment "comment"
    = ";;" ( !LineTerminator . )* { return null; }
    / "(;" ( !";)" . )* ";)" { return null; }

__ = ( white_space / LineTerminatorSequence / comment )*

name = name:[a-zA-Z0-9\-\_\.]+ { return name.join(''); }

type = "i32" / "i64" / "f32" / "f64"

int = node:( "0x" [0-9A-Fa-f]+ / "-"? [0-9]+ ) { return node.join(''); }

float = "-"? [0-9.]+

binop
    = "add" / "sub" / "mul" / "div_s" / "div_u" / "rem_s" / "rem_u"
    / "and" / "or" / "xor" / "shl" / "shr_u" / "shr_s" // int
    / "add" / "sub" / "mul" / "div" / "copysign" / "min" / "max" // float

unop
    = "clz" / "ctz" / "popcnt" // int
    / "neg" / "abs" / "ceil" / "floor" / "trunc" / "nearest" / "sqrt" // float

cvtop = res:[a-z\_]+ { return res.join(''); }

relop
    = "eq" / "ne" / "lt_s" / "lt_u" / "le_s" / "le_u" / "gt_s" / "gt_u" / "ge_s" / "ge_u" // int
    / "eq" / "ne" / "lt" / "le" / "gt" / "ge" // float

value
    = node:( "nan(" "-"? "0x" [0-9A-Fa-f\.\-\+ep]+ ")"
        / "nan"
        / "-nan(" "-"? "0x" [0-9A-Fa-f\.\-\+ep]+ ")"
        / "-nan"
        / "+nan(" "-"? "0x" [0-9A-Fa-f\.\-\+ep]+ ")"
        / "+nan"
        / "infinity"
        / "+infinity"
        / "-infinity"
        / "-"? "0x" [0-9A-Fa-f\.\-\+ep]+
        / "-"? [0-9\.\-\+ep]+
        ) {
            return (typeof node === 'string') ? node : node.join('');
        }

sign = "s" / "u"

align = [0-8]

var
    = int
    / "$" name:name {
        return {
            kind: 'var',
            name: name
        };
    }

case
    = "(" __ "case" __ value ( __ expr )* ( __ "fallthrough")? __ ")"
    / "(" __ "case" __ value __ ")"

expr
    = "(" __
        body:( type:type "." kind:"const" __ init:value {
            return {
                kind: kind,
                type: type,
                init: init
            };
        }

        / "block" ( __ expr )+ {

        }

        // = (label <var> (block <expr>+))
        / "block" __ var ( __ expr )+

        / kind:"if" __ test:expr __ consequent:expr __ alternate:expr {
            return {
                kind: kind,
                test: test,
                consequent: consequent,
                alternate: alternate || null
            };
        }

        // ;; = (if <expr> <expr> (nop))
        / kind:"if" __ test:expr __ consequent:expr {
            return {
                kind: kind,
                test: test,
                consequent: consequent,
                alternate: null
            };
        }

        // = (label <var> (loop (block <var>? <expr>*)))
        / "loop" __ var ( __ var )? ( __ expr )*

        // = (loop (block <expr>*))
        / "loop" ( __ expr )*

        / kind:"label" id:( __ var )? __ body:expr {
            return {
                kind: kind,
                id: id ? id[1] : id,
                body: body
            };
        }

        / kind:"break" __ id:var expr:( __ expr )? {
            return {
                kind: kind,
                id: id,
                expr: expr ? expr[1] : expr
            };
        }

        / type ".switch" __ expr ( __ case )* __ expr

        // = (label <var> (<type>.switch <expr> <case>* <expr>))
        / type ".switch" __ var __ expr ( __ case )* __ expr

        / kind:( "call_import" / "call" ) __ id:var expr:( __ expr )* {
            return {
                kind: kind,
                id: id,
                expr: expr.map(function (e) { return e[1]; })
            };
        }

        / kind:"call_indirect" __ id:var __ expr:( __ expr )+ {
            return {
                kind: kind,
                id: id,
                expr: expr.map(function (e) { return e[1]; })
            }
        }

        / kind:"return" expr:( __ expr )? {
            return {
                kind: kind,
                expr: expr ? expr[1] : expr
            }
        }

        / kind:("get_local" / "get_global") __ id:var {
            return {
                kind: kind,
                id: id
            };
        }

        / kind:"set_local" __ id:var __ expr:expr {
            return {
                kind: kind,
                id: id,
                init: expr
            };
        }

        / type:type "." kind:"load" sufix:( ( "8" / "16" / "32") ( "_" sign )? )? align:( "/" align )? __ expr:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? sufix[0] : null,
                sign: (sufix && sufix[1]) ? sufix[1] : null,
                align: align ? align[1] : 0,
                expr: expr
            };
        }

        / type:type "." kind:"store" sufix:( "8" / "16" / "32")? align:( "/" align )? __ expr1:expr __ expr2:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? sufix[0] : null,
                align: align ? align[1] : 0,
                expr1: expr1,
                expr2: expr2
            };
        }

        / type:type "." operator:binop __ left:expr __ right:expr {
            return {
                kind: 'binop',
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        }

        / type:type "." operator:relop __ left:expr __ right:expr {
            return {
                kind: 'relop',
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        }

        / type:type "." operator:cvtop "/" type1:type __ expr:expr {
            return {
                kind: 'cvtop',
                type: type,
                type1: type1,
                operator: operator,
                expr: expr
            };
        }

        / type:type "." operator:unop __ expr:expr {
            return {
                kind: 'unop',
                type: type,
                operator: operator,
                expr: expr
            };
        }

        / kind:("nop" / "page_size" / "memory_size") {
            return {
                kind: kind
            };
        }

        / kind:("resize_memory" / "grow_memory") __ expr:expr {
            return {
                kind: kind,
                expression: expr
            };
        }
        )
    __ ")" {
        return body;
    }

failure = ["] value:( !["] . )* ["] {
    return {
        kind: 'failure',
        value: value.reduce(function (res, e) { return res + e[1]; }, '')
    };
}

param
    = "(" __ kind:"param" types:( __ type )* __ ")" {
        return {
            kind: kind,
            types: types.map(function (e) { return e[1]; })
        };
    }
    / "(" __ kind:"param" __ "$" name:name __ type:type __ ")" {
        return {
            kind: kind,
            name: name,
            type: type
        };
    }

result = "(" __ kind:"result" __ type:type __ ")" {
    return {
        kind: kind,
        type: type
    };
}

segment = "(" __ "segment" __ int __ ["] [a-zA-Z0-9_\-\\]* ["] __ ")"

local
    = "(" __ kind:"local" body:( __ type )* __ ")" {
        return {
            kind: kind,
            body: body.map(function (e) { return e[1]; })
        };
    }
    / "(" __ kind:"local" __ "$" name:name __ body:type __ ")" {
        return {
            kind: kind,
            name: name,
            body: body
        };
    }

func = kind:"func" name:( __ "$" name )? params:( __ param )* result:( __ result )? local:( __ local )* expr:( __ expr )* {
    return {
        kind: kind,
        name: name ? name[2] : name,
        params: params.map(function (e) { return e[1]; }),
        result: result ? result[1] : result,
        local: local.map(function (e) { return e[1]; }),
        expr: expr.map(function (e) { return e[1]; })
    };
}

global = kind:"global" body:( ( __ type )* / __ name __ type ) {
    return {
        kind: kind,
        body: body
    };
}

import = kind:"import" ( __ "$" name )? __ ["] name1:name ["] __ ["] name2:name ["] ( __ param )* ( __ result )* {
    return {
        kind: kind,
        name1: name1,
        name2: name2
    };
}

export = kind:"export" __ ["] name:name ["] __ var {
    return {
        kind: kind,
        name: name
    };
}

table = kind:"table" __ var

memory = kind:"memory" __ int:int int1:( __ int )? segment:( __ segment )* {
    return {
        kind: kind,
        int: int,
        int1: int1 ? int1[1] : int1,
        segment: segment.map(function (e) { return e[1]; })
    };
}

invoke = "(" __ kind:"invoke" __ ["] name:name ["] body:( __ expr )* __ ")" {
    return {
        kind: kind,
        name: name,
        body: body.map(function (e) { return e[1]; })
    };
}

module = kind:"module" body:( __ "(" __ ( func / global / import / export / table / memory ) __ ")" )* {
    var result = [];
    return {
        kind: kind,
        body: body.map(function (e) { return e[3]; })
    };
}

assert_return = kind:"assert_return" __ invoke:invoke __ expr:( expr )? {
    return {
        kind: kind,
        invoke: invoke,
        expr: expr
    };
}

assert_return_nan = kind:"assert_return_nan" __ invoke:invoke {
    return {
        kind: kind,
        invoke: invoke
    };
}

assert_trap = kind:"assert_trap" __ invoke:invoke __ failure:failure {
    return {
        kind: kind,
        invoke: invoke,
        failure: failure
    };
}

assert_invalid = kind:"assert_invalid" __ "(" __ module:module __ ")" __ failure:failure {
    return {
        kind: kind,
        module: module,
        failure: failure
    };
}

cmd
    = invoke:invoke { return invoke; }
    / "(" __
        node:( module
        / assert_return
        / assert_return_nan
        / assert_trap
        / assert_invalid
        ) __
    ")" { return node; }
