import { styled } from 'styled-components'
import { cores } from '../../styles'

type ModalProps = {
  visivel?: boolean
}

export const Modal = styled.div<ModalProps>`
  display: ${({ visivel }) => (visivel ? 'flex' : 'none')};
  opacity: ${({ visivel }) => (visivel ? 1 : 0)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  width: 769px;
  height: 299.26px;
  padding: 16px;
  background-color: ${cores.branco};
  align-items: center;
  justify-content: center;
  z-index: 11;
  transition: opacity 0.3s ease;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.54);
  z-index: 10;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`

export const VitrineItens = styled.div`
  display: flex;

  img {
    display: flex;
    margin-top: 56.48px;
    width: 247px;
    height: 192.2px;
  }
`

export const Itens = styled.div`
  display: block;
  margin-right: 9px;
  margin-left: 87px;
  margin-top: 63px;
  margin-bottom: 38px;

  span {
    display: block;
  }
  width: 328px;
  }
`
export const TituloVitrine = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${cores.corDaDescricao};
`

export const Preco = styled.span`
  margin-bottom: 32px;
  font-size: 20px;
  font-weight: 600;
  color: ${cores.corDaDescricao};
`

export const DescricaoDoProduto = styled.span`
  width: 290px;
  font-family: Work sans;
  font-size: 10px;
  font-weight: 500;
`
export const DetalhesDoProduto = styled.span`
  margin-top: 10px;
  height: 10px;
  font-family: Work sans;
  font-size: 11px;
  font-weight: 600;
  color: ${cores.azul};
  margin-bottom: 32px;
  letter-spacing: 5%;
`
export const Botao = styled.button`
  width: 188px;
  cursor: pointer;
  height: 36px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${cores.amarelo};
  border-radius: 6px;
  margin-left: 12px;
`
export const ContainerModal = styled.div`
  height: 36px;
  width: 310px;
  display: flex;
`

export const Linhas = styled.div`
  position: relative;
  width: 19.85px;
  margin-top: 17px;
  margin-bottom: 269px;
  margin-left: 29px;
  cursor: pointer;
`
export const Fechar = styled.img`
  position: absolute;
  max-width: 19.85px;
  border: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${cores.cinzaFecharModal};
`
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 90px;
`
