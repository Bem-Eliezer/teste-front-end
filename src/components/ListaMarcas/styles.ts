import styled from 'styled-components'
import { cores } from '../../styles'

export const Titulo = styled.h3`
  margin-top: 90px;
  height: 45px;
  font-size: 30px;
  color: ${cores.azul};
  text-align: center;
`
export const ListaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 211px);
  column-gap: 42px;
  justify-content: center;
`
