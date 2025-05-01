
# 🛡️ Backend Express + MongoDB com Autenticação JWT

Este projeto é uma aplicação backend desenvolvida com **Node.js**, **Express** e **MongoDB**, estruturada em camadas e com autenticação de usuários via **JWT (JSON Web Token)**.

---

## 📁 Estrutura do Projeto

```
backend-express-mongodb/
├── api/
│   ├── controller/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── service/
├── requests/
├── .env.example
├── docker-compose.yml
├── package.json
├── README.md
```

---

## 🚀 Funcionalidades

### 🔓 Rotas Públicas

- `POST /register` – Criação de novo usuário.
- `POST /login` – Autenticação e geração de token JWT.

### 🔐 Rotas Protegidas (JWT necessário)

- `GET /protected` – Retorna mensagem de acesso autorizado, disponível apenas com token válido no header `Authorization`.

---

## 👤 Modelo de Usuário

```js
{
  name: String,       // obrigatório
  email: String,      // obrigatório, único
  password: String    // obrigatório, armazenado como hash (não selecionável)
}
```

---

## 🔒 Segurança

- Senhas armazenadas com **bcrypt**
- Tokens gerados com **jsonwebtoken**
- Chaves e informações sensíveis são armazenadas via `.env`

---

## ⚙️ Scripts

```bash
npm run dev                   # Inicia servidor com nodemon
npm run start                 # Inicia com Docker
npm run generate-secret-key  # Gera chave secreta JWT aleatória
```

---

## 🧪 Requisições de Teste

A pasta `requests/` contém scripts `.sh` com comandos `curl` para testar a API. Exemplos incluídos:

### ✅ Registro

- `POST_Register_User.sh` – Registro bem-sucedido
- `POST_Register_User_Error_Email_Repeated.sh` – E-mail já existente
- `POST_Register_User_Error_Invalid_Email.sh` – E-mail inválido
- `POST_Register_User_Error_Invalid_Password.sh` – Senha inválida
- `POST_Register_User_Error_Bad_Request.sh` – Requisição mal formatada

### ✅ Login

- `POST_Login_User.sh` – Login bem-sucedido
- `POST_Login_User_Error_Invalid_Email.sh` – E-mail inválido
- `POST_Login_User_Error_Invalid_Password.sh` – Senha inválida
- `POST_Login_User_Error_Bad_Request.sh` – Requisição mal formatada

### ✅ Rota Protegida

- `GET_Protected_Valid_Token.sh` – Acesso com token válido
- `GET_Protected_No_Token.sh` – Sem token
- `GET_Protected_Invalid_Token.sh` – Token inválido

---

## 🌐 Hospedagem

A aplicação está disponível em ambiente de produção via [Vercel](https://backend-express-mongodb-rc6xdmg9j.vercel.app).

---

## 📽️ Demonstração em Vídeo

Assista à demonstração da aplicação funcionando localmente e em produção, com os testes sendo executados via terminal:

🔗 [Clique aqui para assistir ao vídeo](https://youtu.be/7AEkXUgWPQc) <!-- Substitua com o link real -->

---

## 📦 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **Bcrypt**
- **Dotenv**
- **Docker**
- **Curl**

---

🧑‍💻 Desenvolvido como atividade prática de backend com autenticação e persistência de dados no MongoDB.
