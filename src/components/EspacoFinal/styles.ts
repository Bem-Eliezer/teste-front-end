import styles, { styled } from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: ${cores.branco};
  height: 46.84px;
  max-width: 1441px;
`

export const Frase = styled.span`
  font-size: 13px;
  color: ${cores.corDaDescricao};
  display: flex;
  justify-content: center;
  margin-top: 13px;
`
