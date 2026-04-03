import styled from 'styled-components'
import { cores } from '../../styles'
import { BotaoContainer } from '../Botao/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border-radius: 10px;
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.2);
  flex: 0 0 304px;
  padding: 0 13px;

  display: flex;
  flex-direction: column;

  ${BotaoContainer} {
    background-color: ${cores.azul};
    color: ${cores.branco};
    width: 278px;
    margin-bottom: 16px;
    cursor: pointer;
  }
`

export const Imagem = styled.img`
  width: 278px;
  height: 228px;
  margin-top: 17px;
`

export const Texto = styled.p`
  color: ${cores.corDaDescricao};
  font-size: 15px;
  font-weight: 300;
  display: block;
`

export const Valor = styled.p`
  color: ${cores.corDaDescricao};
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 2px;
`
export const PrecoAntigo = styled.span`
  color: ${cores.codDoPrecoRiscado};
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
  display: block;
  margin-top: 2px;
`

export const Parcelamento = styled.p`
  color: ${cores.corDaDescricao};
  font-size: 12px;
  font-weight: 400;
`

export const Frete = styled.p`
  color: ${cores.azul};
  font-size: 12px;
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: 12px;
`
