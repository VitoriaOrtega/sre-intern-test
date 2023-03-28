# SRE-INTERN-TEST

## Descrição do Projeto

Este software foi pensado para agrupar as taxas de sucesso e erro de um site especifico para que assim, por exemplo, haja maior visibilidade das métricas de saúde de uma aplicação que receba diferentes fluxos de usuários em diferentes paths

## Status do Projeto
:warning: Em progresso

## Tecnologias utilizadas 
Para realizar o nivel 1, é necessário apenas o uso do Node
  - Node 14
  - Docker

## Como executar o projeto
Para executar o projeto basta executar os seguintes passos:

- Primeiro, na raiz do projeto (`/`), build o novo container:

```
docker build -t sre-intern-test .
```

- O proximo passo, executar o seguinte comando para rodar o container buildado

```
docker run --rm -it -v ~/host/caminho/absoluto:/app sre-intern-test
```

:warning: Lembre-se de substituir o path `~/host/caminho/absoluto` 

## Demonstração de saida
No arquivo `output.json` na raiz do projeto (`sre-intern-test`):
```
[
  {
    "path": "/path1",
    "countSuccess": 0,
    "countError": 248
  },
 ...
]
```



