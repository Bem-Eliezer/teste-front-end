import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Rodape1 = styled.div`
  background-color: ${cores.FundoCinza};
  max-width: 1440px;
  height: 282px;
  display: flex;
`
export const DivLogo = styled.div`
  display: block;
  margin-left: 80px;
`

export const Logo = styled.img`
  width: 164px;
  height: 48px;
  display: block;
  margin-top: 61.5px;
  margin-bottom: 18px;
`

export const Frase = styled.p`
  font-weight: 300;
  font-size: 14px;
  color: ${cores.corDaDescricao};
  width: 354px;
  max-width: 43ch;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-bottom: 27px;
`

export const Links = styled.div`
  display: flex;
  width: 124px;
  gap: 26px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const LinhaVertical = styled.div`
  border-left: 1px solid ${cores.corDaLinhaDivisoria};
  height: 198px;
  margin-top: 42px;
  margin-bottom: 42px;
  margin-left: 90px;
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 121px);
  column-gap: 100px;
  margin-top: 83px;
  margin-bottom: 83px;
  margin-left: 90px;
`

export const Titulo = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${cores.corLetraRodape};
  margin-bottom: 20px;
  align-items: center;
`

export const Item = styled.p`
  font-family: Work Sans;
  font-weight: 400;
  font-size: 14px;
  color: ${cores.corLetraRodape};
  margin-bottom: 16px;
  align-items: center;
  white-space: nowrap;
`
