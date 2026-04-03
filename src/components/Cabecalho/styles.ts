import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar1 = styled.header`
  background-color: ${cores.branco};
  height: 32px;
  font-weight: 500;
  font-size: 12px;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 158px 203px 165px;
  grid-template-rows: auto;
  gap: 119px;
  place-items: center;
  white-space: nowrap;
  justify-content: center;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
`
export const Icone = styled.img`
  margin-right: 9px;
`
type TextoAzulProps = {
  oferta?: boolean
}

export const TextoAzul = styled.span<TextoAzulProps>`
  color: ${cores.azul};
  font-weight: 600;
  font-size: 12px;

  margin-top: ${({ oferta }) => (oferta ? '10px' : '0')};
`

export const HeaderBar2 = styled.div`
  background-color: ${cores.branco};
  font-weight: 500;
  display: grid;
  place-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }
`
export const BarraDePesquisa = styled.div`
  background-color: ${cores.gelo};
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  width: 630px;
  padding: 0 24px 0 16px;
  margin: 12px 109px 12px 186px;

  input {
    border: none;
    background-color: ${cores.gelo};
    flex: 1;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  button {
    background-color: ${cores.gelo};
    border: none;
    cursor: pointer;
    height: 32px;
  }
`

export const ListaIcones = styled.ul`
  height: 32px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 24px 32px 32px 32px;
  grid-template-rows: auto;
  gap: 32px;
  place-items: center;
  justify-content: center;
`

export const Menu = styled.div`
  height: 40px;
  font-size: 12px;
  max-width: 1280px;
  margin: 0 auto;
  background-color: ${cores.branco};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 1280px;
  }
`
export const ListaLink = styled.ul`
  height: 18px;
  display: grid;
  grid-template-columns: 121px 91px 42px 38px 91px 97px 108px;
  grid-template-rows: 18px;
  gap: 91px;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;

  li {
    display: flex;
    margin-top: 10px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`
