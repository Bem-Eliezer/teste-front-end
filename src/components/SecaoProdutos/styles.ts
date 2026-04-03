import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
`

export const Lista = styled.ul`
  width: 1270px;
  margin-left: 15px;
  margin-right: 15px;
`
export const Carrossel = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 304px);
  column-gap: 18px;
  overflow-x: auto;
  scroll-behavior: smooth;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Seta = styled.div`
  background-color: ${cores.branco};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  cursor: pointer;
`
export const Seta1 = styled.div`
  background-color: ${cores.branco};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  cursor: pointer;
`
