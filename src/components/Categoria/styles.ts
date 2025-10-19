import styled from 'styled-components'
import { cores } from '../../styles'

export const Variedades = styled.div`
  margin-top: 39px;
`

export const FundoBranco = styled.div`
  background-color: ${cores.branco};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FundoCinza = styled.div`
  background-color: ${cores.FundoCinza};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Imagem = styled.img`
  width: 61px;
  height: 61px;
  display: flex;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 128px);
  gap: 48px;
  place-items: center;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const DescricaoSelecionado = styled.p`
  font-weight: 600;
  font-size: 14px;
  height: 21px;
  color: ${cores.roxoLista};
  padding-top: 22px;
  white-space: nowrap;
`

export const Descricao = styled.p`
  font-weight: 500;
  font-size: 14px;
  height: 21px;
  color: ${cores.grafite};
  padding-top: 22px;
  white-space: nowrap;
`
