# SugeCity

Uma plataforma web para coletar e gerenciar **sugestões da comunidade para a cidade**, construída com **Django** (backend) e **React** (frontend).
🌐 Acesse o protótipo em: [Sugestões Cidade](https://hackathon-sugestoescidade.netlify.app/)
## 🚀 Funcionalidades Principais

- Submissão de sugestões pelos cidadão.
- Interface interativa com React para enviar, visualizar e interagir com sugestões.
- API robusta com Django para processamento, armazenagem e recuperação de dados.
- Autenticação de usuários
- Curtir postagens (**likes**)
  
---

### Funcionalidades Futuras

- Rankings de sugestões mais populares
- Visualização das sugestões da cidade em um **mapa interativo**
- Melhorias de UX/UI e integração backend/frontend

## 🛠️ Tecnologias Utilizadas

- **Backend**: Django, Django REST Framework
- **Frontend**: React, TypeScript, Material UI
- **Configuração recomendada**:
  - Python 3.x, virtualenv ou similar
  - Node.js + Yarn ou npm

---

## 📂 Estrutura do Repositório

- `backend/` — código do servidor Django (modelos, APIs, configurações).
- `frontend/` — aplicação React, componentes, estilos, configuração de build.
- `.gitignore`, `.prettierrc`, etc. — arquivos de configuração geral.

---

## ⚡ Como Executar Localmente

### Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou `venv\Scripts\activate` no Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend (React)

```bash
cd frontend
yarn install   # ou npm install
yarn start     # ou npm start
```

Acesse:

- Backend: `http://localhost:5173/`
- Frontend: `http://localhost:3000`

---

