module.exports.getJSCode = function() {
    return `(Program
  (Block
    (If
      (Case
        (Condition
          (==
            (IdExpression
              (x)
            )
            (true)
          )
        )
        (Body
          (Block
            (Return
              (true)
            )
          )
        )
      )
      (Else
        (Block
          (Return
            (false)
          )
        )
      )
    )
  )
)`;
}
