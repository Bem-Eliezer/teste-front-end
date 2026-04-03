import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.branco};
  height: 46.84px;
  max-width: 1440px;
  padding-top: 13px;
  display: flex;
  justify-content: center;
`

export const Frase = styled.p`
  font-size: 13px;
  color: ${cores.corDaDescricao};
`
