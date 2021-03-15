# bemol-challenge-api

- Recomendo a utilização do yarn na máquina da pessoa que está verificando o código, o yarn é um gerenciador de pacotes mais rápido e que não dá muitos problemas.

- Comando para Instalar o banco de dados postgres

```
docker run --name bemol_postgres -e POSTGRES_PASSWORD=bemol -d postgres
```


- Logo após execute o comando abaixo e guarde o IP do container

```
docker inspect bemol_postgres
```

- Após rodar o comando do docker, verifique o ormconfig.json, e altere a opção host e coloque o IP que você guardou do container acima

```
{
  "type": "postgres",
  "host": "172.17.0.3",
  "port": 5432,
  "username": "postgres",
  "password": "bemol",
  "database": "bemol_relation",
  "entities": [
    "./src/database/entities/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}

```

- Abra um GUI de banco de dados, o Dbeaver é um programa bom, open source e vai servir para a nossa realização das tarefas

* [Dbeaver](https://dbeaver.io/download/) para download.

- Instale o Dbeaver, siga as instruções para acesso ao banco, e logo após se conectar com a conexão padrão, crie um banco de dados com o nome "bemol_relation"

- Nesse momento vamos rodar o comando para gerar nossas migrations

```
se estiver usando o yarn
yarn typeorm migration:run

se estiver usando o npm
npm run typeorm migration:run

```

- Agora vamos roda o comando que vai colocar nosso container no ar.

```
docker build -t node-postgres-bemol .
```


- Logo após execute o comando abaixo e guarde o IP do container

```
docker inspect id_do_container
```


- com tudo rodando vamos verificar na url, lebrando que você guardou o IP do container digite assim no navegador

```
ip_do_container:porta_qualquer
```

🏂 - Se tudo deu certo colocamos nosso backend no ar.


