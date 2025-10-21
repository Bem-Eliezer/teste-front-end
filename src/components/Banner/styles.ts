import styled from 'styled-components'
import { cores } from '../../styles'
import { BotaoContainer } from '../Botao/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 390px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 78px;
  opacity: ${cores.preto} 80%;

  ${BotaoContainer} {
    margin-left: 87px;
    margin-top: 41px;
    margin-bottom: 55px;
  }


  @media (max-width: 1024px) {
    ${BotaoContainer} {
    max-width: 210px;
    margin-left: 87px;
    margin-top: 41px;
    margin-bottom: 55px;
  }
`

export const Titulo = styled.h2`
  color: ${cores.branco};
  font-size: 48px;
  font-weight: 600;
  width: 822px;
  margin-left: 81px;
  line-height: 50px;
  height: 128px;
  padding-bottom: 3px;
`

export const SubTitulo = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 400;
  padding-left: 81px;

  span {
    font-weight: 700;
    color: ${cores.amarelo};
  }
`
