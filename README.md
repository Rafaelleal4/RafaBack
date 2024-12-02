# Manga/Anime Finder - Backend  

Este repositório contém o backend do projeto **Manga/Anime Finder**, responsável por gerenciar funcionalidades essenciais como autenticação de usuários, gestão de favoritos e integração com o frontend. Desenvolvido com **Node.js** e **Express**, o backend oferece uma API eficiente e bem documentada.  

---

## 🚀 Funcionalidades  

### 🔒 Autenticação de Usuário  
- Registro de novos usuários.  
- Login e logout.  
- Obtenção dos dados do usuário logado.  

### 🌟 Gestão de Favoritos  
- Adição de mangás/animes aos favoritos.  
- Remoção de mangás/animes dos favoritos.  
- Listagem dos favoritos do usuário logado.  

### 🛠️ Administração  
- Obtenção de todos os usuários cadastrados.  

---

## 📋 Requisitos  

### Dependências Necessárias  
- **Node.js** (v16 ou superior)  
- Gerenciador de pacotes: **NPM** ou **Yarn**  

### Bibliotecas Utilizadas  
- **Express**: Framework para a criação do servidor.  
- **CORS**: Gerenciamento de políticas de compartilhamento de recursos.  
- **Body Parser**: Tratamento de requisições JSON (nativo no Express v4.16+).  

---

## ⚙️ Configuração e Execução  

### Passos para Instalação  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/Rafaelleal4/RafaBack.git  
   cd RafaBack  
   ```  

2. Instale as dependências:  
   ```bash
   npm install  
   ```  

3. Inicie o servidor:  
   ```bash
   npm start  
   ```  
   O servidor estará disponível em [http://localhost:5000](http://localhost:5000).  

---

## 📚 Rotas Disponíveis  

### **Autenticação e Usuário**  
- **POST** `/api/auth/register`  
  Cadastro de um novo usuário.  

- **POST** `/api/auth/login`  
  Login do usuário.  

- **POST** `/api/auth/logout`  
  Logout do usuário atual.  

- **GET** `/api/auth/user`  
  Retorna os dados do usuário logado.  

- **GET** `/api/auth/users`  
  Lista todos os usuários cadastrados.  

### **Gestão de Favoritos**  
- **POST** `/api/favorites`  
  Adiciona um mangá/anime aos favoritos.  

- **GET** `/api/favorites`  
  Lista os favoritos do usuário logado.  

- **DELETE** `/api/favorites/:mangaId`  
  Remove um mangá/anime dos favoritos.  

---

## 📂 Estrutura do Projeto  

```bash
RafaBack/  
├── routes/  
│   ├── index.routes.js    # Rotas principais  
│   └── auth.routes.js     # Rotas de autenticação  
├── index.js               # Arquivo principal do servidor  
├── package.json           # Configuração de dependências  
└── README.md              # Documentação  
```  

---

## 🤝 Contribuição  

1. Faça um fork do repositório.  
2. Crie uma branch para suas alterações:  
   ```bash
   git checkout -b feature/nova-feature  
   ```  

3. Faça commit das suas alterações:  
   ```bash
   git commit -m "Adiciona nova feature"  
   ```  

4. Envie para o repositório remoto:  
   ```bash
   git push origin feature/nova-feature  
   ```  

5. Abra um Pull Request.  

---

## 📜 Licença  

Este projeto está licenciado sob a licença MIT.  
