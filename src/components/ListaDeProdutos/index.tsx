import Produtos from '../Produto'
import seta from '../../assets/images/seta.svg'
import seta1 from '../../assets/images/seta1.svg'
import linha from '../../assets/images/Line _13.svg'
import linha1 from '../../assets/images/Line_14.svg'

import {
  Container,
  Container1,
  Lista,
  Seta,
  Seta1,
  Titulo,
  Vertodos,
  Botao,
  ContainerModal,
  Fechar,
  Fechar1,
  Frase,
  FraseAzul,
  Itens,
  Linhas,
  Preco,
  TituloVitrine,
  VitrineItens,
  Modal,
  Overlay
} from './styles'
import SecaoParceiro from '../SecaoParceiros'
import ListaMarcas from '../ListaMarcas'
import { Linha } from '../ListaProdDigital/styles'
import { useEffect, useRef, useState } from 'react'
import Contador from './Contador'

interface Produto {
  id?: number
  productName: string
  descriptionShort: string
  photo: string
  price: number
}
const ListaProdutos = () => {
  const [modalAberto, setModalAberto] = useState(false)
  const [produtos, setProdutos] = useState<Produto[]>([])
  const containerRef1 = useRef<HTMLDivElement | null>(null)
  const containerRef2 = useRef<HTMLDivElement | null>(null)
  const containerRef3 = useRef<HTMLDivElement | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    fetch('/produtos.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('Dados do JSON:', data)
        const produtosComId = data.products.map(
          (item: Produto, index: number) => ({
            id: index,
            ...item
          })
        )
        setProdutos(produtosComId)
      })
  }, [])

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({
      left: -304 * 4 - 18 * 3,
      behavior: 'smooth'
    })
  }
  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({
      left: 304 * 4 + 18 * 3,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Container>
        <Seta1 onClick={() => scrollLeft(containerRef1)}>
          <img src={seta1} alt="Anterior" />
        </Seta1>
        <Lista>
          <div
            className="container"
            ref={containerRef1}
            onClick={() => setModalAberto(true)}
          >
            {produtos.map((produto) => {
              return (
                <Produtos
                  key={produto.id}
                  nome={produto.productName}
                  descricao={produto.descriptionShort}
                  imagem={produto.photo}
                  preco={produto.price}
                  onClick={() => {
                    setProdutoSelecionado(produto)
                    setModalAberto(true)
                  }}
                />
              )
            })}
          </div>
        </Lista>
        <Seta onClick={() => scrollRight(containerRef1)}>
          <img src={seta} alt="Próximo" />
        </Seta>
      </Container>
      <SecaoParceiro />
      <Container1>
        <Linha />
        <Titulo>Produtos relacionados</Titulo>
        <Linha />
      </Container1>
      <Vertodos>Ver todos</Vertodos>
      <Container>
        <Seta1 onClick={() => scrollLeft(containerRef2)}>
          <img src={seta1} alt="Anterior" />
        </Seta1>
        <Lista>
          <div
            className="container"
            ref={containerRef2}
            onClick={() => setModalAberto(true)}
          >
            {produtos.map((produto) => {
              return (
                <Produtos
                  key={produto.id}
                  nome={produto.productName}
                  descricao={produto.descriptionShort}
                  imagem={produto.photo}
                  preco={produto.price}
                  onClick={() => {
                    setProdutoSelecionado(produto)
                    setModalAberto(true)
                  }}
                />
              )
            })}
          </div>
        </Lista>
        <Seta onClick={() => scrollRight(containerRef2)}>
          <img src={seta} alt="Próximo" />
        </Seta>
      </Container>
      <SecaoParceiro />
      <ListaMarcas />
      <Container1>
        <Linha />
        <Titulo>Produtos relacionados</Titulo>
        <Linha />
      </Container1>
      <Vertodos>Ver todos</Vertodos>
      <Container>
        <Seta1 onClick={() => scrollLeft(containerRef3)}>
          <img src={seta1} alt="Anterior" />
        </Seta1>
        <Lista>
          <div
            className="container"
            ref={containerRef3}
            onClick={() => setModalAberto(true)}
          >
            {produtos.map((produto) => {
              return (
                <Produtos
                  key={produto.id}
                  nome={produto.productName}
                  descricao={produto.descriptionShort}
                  imagem={produto.photo}
                  preco={produto.price}
                  onClick={() => {
                    setProdutoSelecionado(produto)
                    setModalAberto(true)
                  }}
                />
              )
            })}
          </div>
        </Lista>
        <Seta onClick={() => scrollRight(containerRef3)}>
          <img src={seta} alt="Próximo" />
        </Seta>
      </Container>
      {modalAberto && <Overlay onClick={() => setModalAberto(false)} />}
      <Modal className={modalAberto ? 'visivel' : ''}>
        <VitrineItens className="Container">
          <img
            src={produtoSelecionado?.photo}
            alt={produtoSelecionado?.productName}
          />
          <Itens>
            <TituloVitrine>{produtoSelecionado?.productName}</TituloVitrine>
            <Preco>{produtoSelecionado?.price.toFixed(2)}</Preco>
            <Frase>
              {produtoSelecionado?.descriptionShort}
              <FraseAzul> Veja mais detalhes do produto {'>'}</FraseAzul>
            </Frase>
            <ContainerModal>
              <Container>
                <Contador />
                <Botao>Comprar</Botao>
              </Container>
            </ContainerModal>
          </Itens>
        </VitrineItens>
        <Linhas onClick={() => setModalAberto(false)}>
          <Fechar src={linha} alt="fechar" />
          <Fechar1 src={linha1} alt="fechar" />
        </Linhas>
      </Modal>
    </>
  )
}

export default ListaProdutos
