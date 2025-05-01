curl --request POST \
  --url 'http://localhost:3005/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "newuser",
    "password": "securepassword",
    "email": "exemple2@email.com"
    }'