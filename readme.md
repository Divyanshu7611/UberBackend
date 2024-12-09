# User Registration API Documentation

## Register User
Register a new user in the system.

### Endpoint

### Request Body
| Field | Type | Description |
|-------|------|-------------|
| fullName | Object | User's full name containing firstName and lastName |
| email | String | User's email address |
| password | String | User's password |

### Request Body Example
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourSecurePassword123"
}

{
  "message": "User created successfully",
  "token": "jwt_token_here",
  "user": {
    "password": "",
    "user": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
}

{
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}


{
  "message": "User already exists"
}


