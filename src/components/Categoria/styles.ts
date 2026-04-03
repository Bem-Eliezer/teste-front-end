import styled from 'styled-components'
import { cores } from '../../styles'

export const Variedades = styled.div`
  margin-top: 39px;
`

type FundoProps = {
  variante?: 'branco' | 'cinza'
}

export const Fundo = styled.div<FundoProps>`
  background-color: ${({ variante }) =>
    variante === 'cinza' ? cores.FundoCinza : cores.branco};

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

type DescricaoProps = {
  selecionado?: boolean
}

export const Descricao = styled.p<DescricaoProps>`
  font-weight: ${({ selecionado }) => (selecionado ? 600 : 500)};
  font-size: 14px;
  height: 21px;
  color: ${({ selecionado }) =>
    selecionado ? cores.roxoLista : cores.grafite};

  padding-top: 22px;
  white-space: nowrap;
`
