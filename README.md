# SRE-INTERN-TEST

## Descrição do Projeto

Este software foi pensado para agrupar as taxas de sucesso e erro de um site especifico para que assim, por exemplo, haja maior visibilidade das métricas de saúde de uma aplicação que receba diferentes fluxos de usuários em diferentes paths

## Status do Projeto
:warning: Em progresso

## Nivel 1

### Tecnologias utilizadas 
Para realizar o nivel 1, é necessário apenas o uso do Node
  - Node 14

### Como executar o projeto
Para executar o projeto basta ir na raiz do diretorio e executar o seguinte comando:

```
node index.js
```

### Demonstração de saida
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
