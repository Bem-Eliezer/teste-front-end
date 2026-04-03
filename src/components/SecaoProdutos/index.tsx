import Produtos from '../CardProduto'
import { Produto } from '../../types/Product'
import { Lista, Seta, Seta1, Container, Carrossel } from './styles'
import seta from '../../assets/images/seta.svg'
import seta1 from '../../assets/images/seta1.svg'
import { useRef } from 'react'

interface Props {
  produtos: Produto[]
  onSelect: (produto: Produto) => void
}

export function SecaoProdutos({ produtos, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -304 * 4 - 18 * 3,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    containerRef.current?.scrollBy({
      left: 304 * 4 + 18 * 3,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <Seta1 onClick={scrollLeft}>
        <img src={seta1} alt="Anterior" />
      </Seta1>

      <Lista>
        <Carrossel ref={containerRef}>
          {produtos?.map((produto) => (
            <Produtos
              key={produto.id}
              nome={produto.productName}
              descricao={produto.descriptionShort}
              imagem={produto.photo}
              preco={produto.price}
              onClick={() => onSelect(produto)}
            />
          ))}
        </Carrossel>
      </Lista>

      <Seta onClick={scrollRight}>
        <img src={seta} alt="Próximo" />
      </Seta>
    </Container>
  )
}
export default SecaoProdutos
