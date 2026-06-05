# 🛒 Black Store

Aplicação web de e-commerce desenvolvida com JavaScript puro, consumindo uma API REST e utilizando Firebase para autenticação de usuários. O projeto foi estruturado seguindo o padrão arquitetural MVC (Model–View–Controller).

> Projeto desenvolvido para fins de aprendizado e portfólio.

---

## 🔗 Demo

👉 [Acessar o projeto online](https://joabcoelh0.github.io/Black-Store/dashboard.html)

---

## 📸 Preview

> <img width="1907" height="930" alt="image" src="https://github.com/user-attachments/assets/f7901ffd-4f06-4ab9-be30-15f7c7a11c42" />


---

## 🎯 Objetivo

Praticar e demonstrar os seguintes conceitos:

- Consumo de APIs REST com JavaScript assíncrono
- Arquitetura MVC em projetos front-end
- Autenticação de usuários com Firebase Auth
- Organização e modularização de código
- Responsividade com CSS puro

---

## ✨ Funcionalidades

- [x] Cadastro e login de usuários via Firebase Authentication
- [x] Listagem dinâmica de produtos consumidos da Fake Store API
- [x] Filtragem de produtos por categoria
- [x] Slider de banners na página principal
- [x] Interface responsiva (mobile e desktop)
- [x] Código organizado no padrão MVC

---

## 🏗️ Arquitetura MVC

O projeto separa as responsabilidades em três camadas:

| Camada | Responsabilidade |
|--------|-----------------|
| **Model** | Comunicação com a API e regras de negócio |
| **View** | Renderização dos dados e manipulação do DOM |
| **Controller** | Intermediação entre Model e View |

---

## 🗂️ Estrutura de Pastas

```
📦 Black Store
├── 📁 assets
│   └── 📁 img
├── 📁 js
│   ├── 📁 config
│   │   └── 📄 firebaseConfig.js
│   ├── 📁 controller
│   │   ├── 📄 authController.js
│   │   └── 📄 productController.js
│   ├── 📁 model
│   │   ├── 📄 localStorageModel.js
│   │   └── 📄 productModel.js
│   ├── 📁 service
│   │   └── 📄 authService.js
│   └── 📁 view
│       ├── 📄 authLogin.js
│       ├── 📄 cadastro.js
│       ├── 📄 produtosView.js
│       └── 📄 renderProdutos.js
├── 📁 style
│   ├── 📄 globais.css
│   ├── 📄 dashboard.css
│   ├── 📄 cadastro.css
│   ├── 📄 responsividadeDashboard.css
│   └── 📄 responsividadeLoginECadastro.css
├── 📄 index.html
├── 📄 cadastro.html
├── 📄 dashboard.html
└── 📄 README.md
```

---

## 🛠️ Tecnologias

- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização e responsividade
- **JavaScript ES6+** — Lógica da aplicação
- **Firebase Authentication** — Cadastro e login de usuários
- **Fetch API** — Requisições HTTP
- **[Fake Store API](https://fakestoreapi.com)** — Dados de produtos

### Conceitos aplicados

- `async / await` e `try / catch`
- Padrão MVC
- Manipulação do DOM
- Modularização de código
- LocalStorage

---

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/JoabCoelh0/Black-Store.git

# Acesse a pasta
cd Black-Store

# Abra o arquivo index.html no navegador
# (recomendado usar a extensão Live Server no VS Code)
```

> ⚠️ Para que a autenticação funcione, é necessário configurar suas próprias credenciais do Firebase no arquivo `js/config/firebaseConfig.js`.

---

## 👨‍💻 Autor

**Joab Coelho**

[![GitHub](https://img.shields.io/badge/GitHub-JoabCoelh0-black?style=flat&logo=github)](https://github.com/JoabCoelh0)
[![Email](https://img.shields.io/badge/Email-Joabcoelho033@gmail.com-red?style=flat&logo=gmail)](mailto:Joabcoelho033@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
