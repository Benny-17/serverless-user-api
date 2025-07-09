resource "aws_lambda_function" "user_api" {
  function_name = "user-api"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "handler.handler"
  runtime       = "nodejs20.x"
  filename      = "lambda.zip"
  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.users.name
    }
  }
}
