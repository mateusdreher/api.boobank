# API BOOBANK

Api em node pra o teste de dev backend da 4cadia.

## Tecnologias utilizadas
 - NodeJS com Typescript
 - Express pra o controle de rotas e servidor
 - JWT como método de autenticação
 - Postgres como banco de dados
 - TypeORM como ORM de banco


## O Desafio
O desafio constituia em contruir uma SPA, juntmente com uma api, pra um Open Banking


## A solução
Para o desafio utilizei um padrão que trabalho a algum tempo no node, seguindo ao máximo os princípios do SOLID.
Utilizei repositories como interfaces, e depois criar suas implementações separadas para cada situação, fazendo assim, as classes não dependentes de implementação. Também optei por utilizar DTO como interfaces de comunicação entre as camadas da aplicação.
Utilizei o padrão de pastas package by feature, focando em use cases.

## Como a api funciona
Toda requisição feita a api irá retornar uma resposta no padrão :
```javascript
{
    res: {
        statusCode: "", // código de retornom baseado na tabela abaixo
        message: "", // mensagem
        data: { // Os dados, caso possua, se não, retorna vazio

        }
    }
}
```

#### Tabela de statusCode: 
 - 200 : Sucesso
 - 1 : username já existe (no registro)
 - 2 : usuário já possui bank-account (no registro)
 - 3 : usuário inválido (no login)
 - 4 : senha inválida (no login)
 - 5 : usuário já possui cadastro (e-mail já cadstrado)
 - 6 : Erro inesperado
 - 7 : Erro no token jwt

### A api está dividida em 8 Casos de uso :

### 1 - Registro 
Refere-se a parte de registro do usuário naaplicação. 
 - Endpoint de acesso: /register
 - Método: POST
 - O que envia: 

 ```javascript
 {
    "username": "",
    "email": "",
    "pass": "",
    "first_name": "",
    "last_name": "",
    "cpf": "",
    "rg": ""
}
```

### 2 - Verificação de username
 - Endpoint de acesso: /register
 - Método: GET
 - O que envia: um parametro na url chamado username
    '/register?username=nome'
 - Caso já exista esse username, retorna um erro (com status code 1). Se não existir retorna sucesso e uma mensagem que o usuário está disponível.

### 3 - Criação de 'conta em banco'
Simula os dados de criação de conta em banco, ag,c/c e digito.
    Não tem endpoint de acesso, é chamada no momento do registro do usuario

### 4 - Login
 - Endpoint de acesso: /login
 - Método: POST
 - O que envia:
 
 ```javascript
 {
     "username": "",
     "password": ""
 }
 ```

 - Em caso de sucesso, retorna um token jwt, que será utilizado nas próximas requisições (que expira em 30 minutos) 

 ### 5 - Listagem do extrato
 - Endpoint de acesso: /transations
 - Método: GET
 - O que envia: Um header chamado 'auth' com o valor do token retornado na tela de login
 - Em caso de sucesso retorna todas as transações para o usuário logado

 ### 6 - Pegar as informações de conta
 - Endpoint de acesso: /account
 - Método: GET
 - O que envia: também só envia o header auth, com o token fornecido no login.
 - Em caso de sucesso retorna as informações da conta do usuario (ag, c/c, dg)

 ### 7 - Calcula saldo
 - Endpoint de acesso: /balance
 - Método: GET
 - O que envia: Novamente, o header 'auth'
 - Retorna tres informações : total de gastos, total de ganhos e saldo atual.


 ### 8 - Simula nova transação
Como havia a necessidade mostrar saldo e extrato,essa funcionalidade foi criada para simular umatransação (compra, tranferencia, etc)
 - Endpoint de acesso: /transations
 - Método: POST
 - O que envia:
 
```javascript
{
    "type": 0, // 0 para entrada de dinheiro, 1 para saida de dinheiro
    "value": "500510", //valor
    "destiny": "conta corrente", //destino (conta corrente, compra mercado, etc)
    "description": "TED teste" // DEscrição livre
}
```
