# pass.in

## 📃 Descrição

O pass.in é uma aplicação de **gestão de participantes de eventos presenciais**, fornecendo uma solução abrangente para gerenciar participantes, inscrições, credenciais e check-in. A plataforma permite que organizadores criem eventos, configurem páginas de inscrição pública e facilitem o processo de entrada no evento por meio de credenciais digitais e QR codes.

## Requisitos

### Requisitos funcionais

- [ ✔ ] O organizador de poder cadastrar um novo evento;
- [ ✔ ] O organizador deve poder visualizar dados de um evento;
- [ ✔ ] O organizador deve poder visualizar a lista de participantes;
- [ ✔ ] O participante deve poder se inscrever em um evento;
- [ ✔ ] O participante de poder visualizar seu crachá de inscrição;
- [ ✔ ] O participante de poder realizar ckeck-in no evento;

### Regras de negócio

- [ ✔ ] O participante só pode se inscrever em um evento uma única vez;
- [ ✔ ] O participante só pode se inscrever um eventos com vagas disponíveis;
- [ ✔ ] O participante só pode só pode realizar ckeck-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ✔ ] O check-in no evento será realizado através de um QRCode;

## 🛠 Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## 🧰 Recursos

Este projeto aborda o uso de algumas ferramentas de desenvolvimento back-end utilizado em conjunto com o Node.js:

- `prisma`: o prisma é um ORM que foi utilizado para simplificar a interação com o banco de dados fornecendo uma interface amigável para consultas e manipulação de dados. Nesta API, o prisma foi utilizado para permitir a interação com o MongoDB, que é um banco de dados não relacional.
- `cors`(Cross-Origin Resource Sharing): é um mecanismo de segurança utilizado pelos navegadores para determinar se scripts de uma origem determinada têm permissão para acessar recursos de outra origem na web. Com isso o projeto Front-end conseguiu realizar as solicitações da API sem violar as políticas de segurança do navegador.
- `zod`: o zod é uma biblioteca TypeScript de validação de esquemas (schema validation) e tipagem de dados. Com esta ferramenta, está aplicação foi desenvolvida aplicando regras de validação para verificar a tipagem dos dados enviados e recebidos por esta API em tempo de compilação, para assim evitar erros de tipo tornando o código mais seguro.
- `@faker-js/faker` é uma biblioteca JavaScript usada para gerar dados falsos de forma realista para diversos fins, como testes de software, preenchimento de bancos de dados de amostra e prototipagem de interfaces de usuário. Ele permite criar dados fictícios em uma ampla gama de formatos, incluindo nomes, endereços, números de telefone, datas, texto de lorem ipsum e muito mais.

## 💻 Executando

- Após clonar o repositório, acesse a pasta do projeto e execute o seguinte comando para instalar todas as dependências:

```

npm install

```

- Após isso, execute o seguinte comando para iniciar o prisma:

```

npx prisma init

```

Na pasta `prisma`, irá conter um arquivo com o nome de `schema.prisma`. Por padrão, este arquivo vem com esta configuração:

![prisma-code](https://imgur.com/7xc0sIX.png)

Você precisa garantir que os dados estejam assim:

![prisma-code2](https://imgur.com/YIzC7qn.png)

Com esta configuração, você informa ao prisma que o banco de dados ao qual ele vai se conectar é o sqlite. E também, este código contém a estrutura das tabelas de eventos, participantes e de check-in que será criada no banco de dados.

- Depois de verificar se as configurações estão corretas, execute no terminal o seguinte script para rodar o servidor:

```

npm run dev

```

- E por fim, execute este script para que o prisma realize a conexão com o sqlite.

```

npm run db:migrate

```

O servidor estará rodando na porta `3333` do seu navegador:`http://localhost:3333`

Para ver esta API funcionando é recomendável utilizar a documentação disponível no swagger fornecido pelo fastify. Assim que a aplicação estiver rodando, acesse o diretório `/docs` para ter acesso.

Uma alternativa ao swagger seria usar o arquivo `api.http` localizado para pasta raiz do projeto. Neste arquivo contém todas as requisições desta API, para utilizá-las é necessário baixar a extensão do VSCode chamada `Rest Client`:

![rest-client-img](https://imgur.com/bFStodZ.png)

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido por mim Wilker Guimarães, com o auxílio do evento NLW-Unite na trilha de Node com o objetivo de desenvolver meus conhecimentos em Node.js abordando os conceitos mais modernos de desenvolvimento back-end utilizando esta tecnologia.
