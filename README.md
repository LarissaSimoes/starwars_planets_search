# Star Wars Planets Search

Este projeto foi desenvolvido como parte da avaliação do curso de Desenvolvimento Web Full Stack da Trybe, focando na criação de uma lista de planetas do universo de Star Wars com filtros dinâmicos. A aplicação utiliza Context API e Hooks do React para gerenciamento de estado global.

## Funcionalidades

1. **Listagem de Planetas:**
   - Realiza uma requisição para o endpoint `/planets` da API de Star Wars.
   - Preenche uma tabela com os dados retornados.

2. **Filtro de Texto:**
   - Atualiza dinamicamente a tabela conforme o nome do planeta é digitado no campo de texto.

3. **Filtro de Valores Numéricos:**
   - Permite filtrar planetas com base em valores numéricos.
   - Três seletores: coluna, operador de comparação e valor.
   - Botão para acionar o filtro.

4. **Múltiplos Filtros Numéricos:**
   - Possibilita adicionar vários filtros numéricos, funcionando de forma conjunta.

5. **Testes:**
   - Desenvolvimento de testes para atingir 90% de cobertura total da aplicação.

6. **Filtros Não Repetidos:**
   - Evita a inclusão de filtros repetidos.
   - Não carrega novos filtros se todas as colunas já foram selecionadas anteriormente.

7. **Remoção de Filtros:**
   - Ícone 'X' para apagar um filtro individual.
   - Botão 'Remover todas filtragens' para apagar todos os filtros numéricos simultaneamente.

8. **Ordenação de Colunas:**
   - Ordena as colunas de forma ascendente ou descendente.
   - Dropdown para selecionar a coluna de base para ordenação.
   - Radio buttons para determinar a ordem.
   - Botão para submeter a ordenação.

## Como Executar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute a aplicação com `npm start`.

## Como Testar

1. Execute os testes com `npm test`.

## Tecnologias Utilizadas

- React
- Context API
- Hooks (useState, useContext, useEffect)
- Testes (Incluindo Jest)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

