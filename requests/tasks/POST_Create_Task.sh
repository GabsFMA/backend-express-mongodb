curl --request POST \
  --url http://localhost:3005/tasks \
  --header 'Content-Type: application/json' \
  --header "Authorization: $TOKEN" \
  --data '{
    "title": "Minha primeira tarefa",
    "description": "Criando tarefa autenticada"
  }'