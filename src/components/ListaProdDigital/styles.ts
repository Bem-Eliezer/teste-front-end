import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
`

export const Linha = styled.hr`
  max-width: 360px;
  margin-top: 108px;
  margin-bottom: 31px;
  flex: 1;
  border: none;
  height: 2px;
  background-color: ${cores.corDaLinha};
`

export const Titulo = styled.h3`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
  height: 45px;
  font-size: 30px;
  color: ${cores.azul};
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListaProduto = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 214px);
  grid-template-rows: repeat(1, 40px);
  gap: 0;
  padding: 0;
`

export const ItemDif = styled.li`
  font-weight: 700;
  font-size: 16px;
  border: 1px solid ${cores.bordaDaLista};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.azul};
`

export const Item = styled.li`
  font-weight: 400;
  font-size: 16px;
  border: 1px solid ${cores.bordaDaLista};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.grafiteProdutos};
`
