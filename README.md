**# Restaurante Yokz**

**## Descrição**

O Restaurante Yokz é um projeto de restaurante japonês desenvolvido com Next.js 13, Tailwind, TypeScript e Firebase. O projeto contém 7 páginas: home, sobre, menu, visão do carrinho, checkout, detalhe do item e contato.

A página inicial apresenta uma visão geral do restaurante, com informações como nome, endereço e telefone. A página sobre fornece informações mais detalhadas sobre o restaurante, como história, menu e equipe. A página menu apresenta uma lista de todos os itens do menu, com imagens, descrição e preço.

A página visão do carrinho mostra uma lista de todos os itens que o usuário adicionou ao carrinho. O usuário pode adicionar, excluir ou limpar todos os itens do carrinho a partir desta página.

A página checkout permite ao usuário concluir a compra. O usuário deve fornecer informações de contato e endereço de entrega. O pedido é enviado ao Firebase, que retorna um id único da compra.

A página detalhe do item fornece informações detalhadas sobre um item específico do menu. A página contato fornece informações de contato do restaurante.

**## Funcionalidades**

* Visualização do menu
* Adição e exclusão de itens do carrinho
* Limpeza de todos os itens do carrinho
* Simulação de compra

**## Requisitos**

* Node.js 16.x ou superior
* Yarn ou npm
* Firebase

**## Instalação**

1. Clone o repositório:

```
git clone https://github.com/douglas-yokomizo/restaurante-yokz.git
```

2. Instale as dependências:

```
yarn install
```

3. Configure o Firebase:

* Abra o arquivo `.env.local` e insira as chaves do Firebase.
* Para obter as chaves do Firebase, acesse o console do Firebase e crie um novo projeto.

4. Inicie o servidor:

```
yarn dev
```

**## Uso**

Abra o navegador em `http://localhost:3000`.

**## Exemplos**

* Para visualizar o menu, acesse a página `/menu`.
* Para adicionar um item ao carrinho, clique no botão "Adicionar ao carrinho".
* Para excluir um item do carrinho, clique no botão "Excluir".
* Para limpar todos os itens do carrinho, clique no botão "Limpar".
* Para simular uma compra, clique no botão "Confirmar Pedido" e preencha as informações de contato.

**## Documentação adicional**

* Documentação do Next.js: https://nextjs.org/docs/
* Documentação do Tailwind: https://tailwindcss.com/docs/
* Documentação do TypeScript: https://www.typescriptlang.org/docs/
* Documentação do Firebase: https://firebase.google.com/docs/

**## Contribuições**

Contribuições são bem-vindas. Para contribuir, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua contribuição.
3. Faça as alterações necessárias.
4. Envie um pull request.

**## Agradecimentos**

Agradeço à equipe de educadores da CoderHouse, ![Henrique Suel](https://github.com/HenriqueSuel) e ![Luan Bitar](https://github.com/luanbitar), por sua ajuda neste projeto.
