module.exports.getAst = function() {
    return `(Program
  (Block
    (If
      (Case
        (Condition
          (==
            (IdExpression
              (IdVariable
                (x)
              )
            )
            (2)
          )
        )
        (Body
          (Block
            (-=
              (IdExpression
                (IdVariable
                  (x)
                )
              )
              (1)
            )
          )
        )
      )
      (Else
        (Block
          (+=
            (IdExpression
              (IdVariable
                (x)
              )
            )
            (1)
          )
        )
      )
    )
  )
)`;
};
