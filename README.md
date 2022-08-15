# Todo App API

## Como rodar o projeto localmente.

### 1 - Clonar o repositório
```
git clone git@github.com:Mveryy/todo-postgres-api.git
```

### 2 - Instalar dependências
```
npm install
```

### 3 - Rodar o projeto
```
npm run dev
```

### Rodar visualização do Banco de Dados pela interface do Prisma (https://localhost:5555)
```
npx prisma studio
```

<br>

# Rotas API

O projeto irá rodar em http://localhost:3333/

## Get
### Todas as tasks : /task
Exemplo de resposta :
```
[
  {
    "id": 1,
    "description": "Task 1",
    "done": false
  },
  {
    "id": 2,
    "description": "Task 2",
    "done": true
  },
  {
    "id": 3,
    "description": "Task 3",
    "done": false
  }
]
```
### Única task por ID : /task/:id
Exemplo de resposta :
```
  {
    "id": 1,
    "description": "Task 1",
    "done": true
  }
```

<br>

## Post
### Criar task : /task
Exemplo Schema :
```
{
  description*  string
  done*         boolean
}
```

<br>

## Patch
### Editar task : /task/:id
Exemplo Schema :
```
{
  done*     boolean
}
```

<br>

## Delete
### Deletar task : /task/:id

<br>

# Stack usada
- NodeJS
- Typescript
- Express
- Prisma
- Dotenv
- Cors
- Nodemon

## Autores

-   [@Mveryy](https://github.com/Mveryy)
