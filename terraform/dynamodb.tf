resource "aws_dynamodb_table" "users" {
  name         = "Users"
  billing_mode = "PAY_PER_REQUEST"

  hash_key     = "userId"

  attribute {
    name = "userId"
    type = "S"
  }
}
