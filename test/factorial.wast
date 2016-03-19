(module
  ;; Recursive factorial
  (func (param i64) (result i64)
    (if (i64.eq (get_local 0) (i64.const 0))
      (block
        (i64.const 1)
      )
      (i64.mul (get_local 0) (call 0 (i64.sub (get_local 0) (i64.const 1))))
    )
  )

  (export "fac-rec" 0)
)
