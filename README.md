# Documentation User Register and Manage App for Up Test Task  

## 1. Prerequisites

- Ensure that you have Docker and Docker Compose installed.
- Create a `.env` file in the root of your project with the following variables:


## 2. Installation

### 1. Clone the repository:
```bash
git clone https://github.com/alen-marutyan/user-register-and-manage-app-for-up-test-task.git
```

### 2. Navigate to the project directory:
```bash
cd user-register-and-manage-app-for-up-test-task
```  

### 3. Start the Docker containers:
```bash
docker-compose up -d
```
### 4. Stop the Docker containers(when you want to close the application):
```bash
docker-compose down
```
   

## 3. API Endpoints

### Note: Replace `PORT` with the port you want to use for the application.

### 1. Register User

```bash 
curl -X POST http://localhost:${PORT}/api/auth/register \
-H "Content-Type: application/json" \
-d '{
"name": "John Doe",
"email": "john@example.com",
"password": "password123"
}'
```
#### Expected Response (Successful Registration):

```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

```

#### Expected Response (Duplicate Email):

```json
{
    "message": "User with this email already exists."
}
```


### 2. Login User

```bash
curl -X POST http://localhost:${PORT}/api/auth/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john@example.com",
    "password": "password123"
}'
```

#### Expected Response:

```json
{
  "message": "Login successful",
  "token": "your_jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```


### 3. Get User Profile

```bash
curl -X GET http://localhost:${PORT}/api/user/profile \
-H "Authorization: Bearer your_jwt_token_here"
```

#### Expected Response:

```json
{
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com"
}
```

### 4.Update User Profile

```bash
curl -X PUT http://localhost:${PORT}/api/user/profile \
-H "Content-Type: application/json" \
-H "Authorization: Bearer your_jwt_token_here" \
-d '{
    "name": "John Updated",
    "email": "john_updated@example.com"
}'
```

#### Expected Response:

```json
{
    "message": "Profile updated successfully",
    "user": {
        "_id": "user_id_here",
        "name": "John Updated",
        "email": "john_updated@example.com"
    }
}
```
