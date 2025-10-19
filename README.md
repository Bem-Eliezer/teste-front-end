Titulo:
  Vitrine de Produtos React/TypeScript

Descrição do Projeto:
  Este projeto exibe uma vitrine de produtos em formato de carrossel, onde o usuário pode:
    Visualizar até 4 produtos de cada vex no carrossel;
    Clicar em um produto para abrir um modal com detalhes completos (imagem, nome, preço e descrição);
    Clicar em quantidade de produtos para escolher a partir de 1 produto;
    Navegar pelo carrossel com as setas de navegação;
    Os produtos são carregados de forma dinâmica de um arquivo JSON externo.


Pré requisitos:
 Antes de rodar o projeto, é necessario ter instalado:
  Node.js (versão 18 ou superior recomendada)
  npm (Vem junto com Node.js) ou yarn
  Navegador moderno (Chrome, firefox, edge, etc.)

Instalação:
  Clone do repositorio: https://github.com/Bem-Eliezer/teste-front-end.git
  cd https://github.com/Bem-Eliezer/teste-front-end.git

  Instale as dependencias:
    npm install
    #ou
    yarn install

Estrutura do projeto:
  src/ Código-fonte em React + TypeScript
    Components/ Componentes reutilizáveis, como:
      Produtos/ Card de cada produto
      ListaProdutos/ Componente do carrossel
        Contador/ contador de itens, para escolher a quantidade de itens que deseja comprar
      Modal/ Modal de detalhes do produto
      Botao/ Padronização de botões
      Cadastro/ inserção de cadastro
      Categoria/ Tipos de Categorias
  styles/ Arquivos styled-components para estilização
  public/ Arquivos estáticos, incluindo JSON de produtos

Como rodar o Projeto:
  npm start
  #ou
  yarn start

  O projeto será aberto no navegador automaticamente em http://localhost:3000.
  Qualquer alteração no código será atualizada automaticamente (hot reload).

  Como Buildar/Compilar para produção:
    Para gerar uma versão otimizada para produção:
      npm run build
      #ou
      yarn build
      Os arquivos finais serão criados na pasta build/.
      Essa versão pode ser hospedada em qualquer servidor web.

  Como Testar o Modal e o Carrossel:
    Abra a página principal.
    O carrossel vai mostrar até 4 produtos visíveis por vez.
    Use as setas para navegar pelos produtos.

    Clique em qualquer card de produto:
      O modal será aberto.
      O modal mostrará nome, imagem, preço e descrição do produto clicado.
      Clique fora do modal ou no botão de fechar para fechar.
      Observação: Certifique-se de que o JSON de produtos está carregando corretamente. O URL padrão usado é:
      https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

    Observações Importantes
      Se o carrossel não mostrar os produtos, verifique se o fetch do JSON está funcionando (problemas de CORS podem impedir o carregamento).
      Para centralizar o carrossel, o styled-component Lista deve ter display: flex e justify-content: center.
      Todos os produtos são mapeados dinamicamente do JSON, não é necessário alterar manualmente os cards.

      Autor:
      Bem Eliezer da Silva dos Santos
