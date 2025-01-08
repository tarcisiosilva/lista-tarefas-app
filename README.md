

# APP Sistema de Lista de Tarefas

Descrição

Lista de Tarefas é um sistema moderno para controle de tarefas , desenvolvido com vue / Quasar  no frontend e PHP com Laravel no backend. O sistema permite que os usuários gerencie suas tarefa 


Tecnologias

Frontend:
Vue
Quasar
Axios (para comunicação com o backend)
Backend:
Laravel (PHP)
Banco de Dados:
Postgre
Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado:

Node.js versão 20 ou superior
PHP versão 8.1 ou superior
Postgre
Composer (para o Laravel)


Frontend (vue)

Clone o repositório do frontend:
git clone https://github.com/tarcisiosilva/lista-tarefa-app.git
cd lista-tarefa-app

Instale as dependências do vue:
npm install

Inicie o servidor de desenvolvimento do vue:

npm run dev

O frontend estará rodando em http://localhost:9000


Como Usar

configure a URL da Api no arquivo src/services/api.js


src/
├── assets/             # Arquivos complementares 
├── Boot/               
├── components/         # Componentes reutilizáveis
├── css/                # Arquivos css 
├── layouts/            # Arquivos de layouts
├── pages/              # Páginas do sistema 
├── router/             # Rotas  do sistema 
├── services/           # serviços do sistema  ( api )
├── App.vue            # Arquivo de entrada



# JSON de envio

# GET 
/tasks/

# POST 
/tasks/

{		"user_id":1,
    "title": "Comprar leite",
    "description": "Comprar leite no supermercado",
    "category_id": 1
 		"data":"2025-01-08",
 		"status": "completed"
}

# PUT 
/tasks/1

{		"user_id":1,
    "title": "Comprar leite",
    "description": "Comprar leite no supermercado",
    "category_id": 1
 		"data":"2025-01-08",
 		"status": "completed"
}

# DELETE 
/tasks/1



📞 Suporte

Autor: Tarcisio Silva
E-mail: tarcisio@saconsulting.com.br
LinkedIn: [Tarcisio Silva](https://www.linkedin.com/in/taarcisiosilva/)
