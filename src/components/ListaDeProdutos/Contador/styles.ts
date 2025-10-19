import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  height: 36px;
  width: 110px;
  display: flex;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${cores.bordaDoContador};
`

export const BotaoMais = styled.button`
  background-color: transparent;
  width: 20.31px;
  height: 19.64px;
  font-size: 24px;
  cursor: pointer;
  color: ${cores.violeta};
  margin-right: 10.15px;
  margin-left: 14.54px;
  top: 8px;
  margin-bottom: 8.36px;
  border: none;
`

export const BotaoMenos = styled.button`
  background-color: transparent;
  width: 20.31px;
  height: 19.64px;
  top: 8px;
  margin-bottom: 8.36px;
  margin-left: 9.31px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  color: ${cores.cinza};
`

export const Valor = styled.h1`
  width: 18px;
  height: 13px;
  margin-top: 11px;
  margin-bottom: 8.36px;
  margin-left: 17.38px;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  text-align: center;
  line-height: 16px;
  color: ${cores.violeta};
`
