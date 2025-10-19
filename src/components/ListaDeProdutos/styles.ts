import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 90px;
`
export const Container1 = styled.section`
  display: flex;
  justify-content: center;
`
export const Lista = styled.ul`
  width: 1270px;
  margin-left: 15px;
  margin-right: 15px;


  .container {
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
    }
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

export const Vertodos = styled.span`
  color: ${cores.corDaDescricao};
  font-size: 15px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

export const Titulo = styled.h3`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
  height: 45px;
  font-size: 30px;
  color: ${cores.azul};
  margin-left: 34px;
  margin-right: 34px;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.54);
  z-index: 10;
`
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  margin-top: 100px;
  width: 769px;
  height: 299.26px;
  background-color: ${cores.branco};
  align-items: center;
  justify-content: center;
  z-index: 11;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.3s ease;

  &.visivel {
    display: flex;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); /* escala normal */
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
export const Frase = styled.span`
  width: 290px;
  font-family: Work sans;
  font-size: 10px;
  font-weight: 500;
`
export const FraseAzul = styled.span`
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
  height: 36px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  background-color: ${cores.amarelo};
  border-radius: 6px;
  margin-left: 12px;
  cursor: pointer;
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
export const Fechar1 = styled.img`
  position: absolute;
  max-width: 18.38px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${cores.cinzaFecharModal};
`
