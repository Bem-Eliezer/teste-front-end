import styles, { styled } from 'styled-components'
import { cores } from '../../styles'
import Botao from '../Botao'
import { BotaoContainer } from '../Botao/styles'
import { check } from 'prettier'

export const Espaco = styled.div`
  background-color: ${cores.violeta};
  height: 162px;
  width: 1440px;
  margin-top: 90px;
  display: flex;

  ${BotaoContainer} {
    width: 157px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const DivFrase = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 80px;
  margin-right: 124px;

  div {
    width: 515px;
  }
`

export const DivInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 45.5px;
  margin-bottom: 15px;
  height: 42px;
`

export const DivTermo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`

export const Titulo = styled.h3`
  font-family: Outfit;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 600;
  line-height: 120%;
  width: 463px;
`
export const Frase = styled.span`
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 300;
`

export const Termos = styled.div`
  color: ${cores.branco};
  font-size: 14px;
  font-weight: 400;
  display: block;
`

export const Check = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 1px;
  border: 1px;
  align-items: center;
  cursor: pointer;
`

export const Input1 = styled.input`
  display: block;
  height: 42px;
  width: 233px;
  border-radius: 8px;
  border: none;

  &::placeholder {
    padding: 24px;
  }
`

export const Input = styled.input`
  display: flex;
  height: 42px;
  width: 233px;
  border-radius: 8px;
  border: none;

  &::placeholder {
    padding: 24px;
  }
`
