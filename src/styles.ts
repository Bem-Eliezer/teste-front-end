import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  azul: '#3442B5',
  amarelo: '#F7CA11',
  violeta: '#271C47',
  cinza: '#9F9F9F',
  cinzaPreto: '#222222B5',
  gelo: '#F6F5F2',
  roxo: '#271C47',
  preto: '#00000000',
  FundoCinza: '#F4F4F4',
  grafite: '#4E4E4E',
  roxoLista: ' #3019B2',
  grafiteProdutos: '#3B3B3B',
  bordaDaLista: '#BDBDBD',
  corDaLinha: '#DEDEDE',
  corDaDescricao: '#3F3F40',
  codDoPrecoRiscado: '#808080',
  corDaLinhaDivisoria: '#2828282E',
  corLetraRodape: '#222222B5',
  bordaDoContador: '#D9D9D9',
  cinzaFecharModal: '#707070'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, Outfit, Work Sans;
  list-style: none;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.cinza};
    padding-top: 6px;
  }

  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
  }
`
