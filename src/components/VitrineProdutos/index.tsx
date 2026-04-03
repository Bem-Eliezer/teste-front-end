import { Linha } from '../ListaProdutosDigital/styles'
import { Container1, Titulo, Vertodos } from './styles'
import ProductSection from '../SecaoProdutos'
import { Produto } from '../../types/Product'

// Interface para as props do componente VitrineProdutos
interface Props {
  title?: string
  produtos: Produto[]
  onSelect: (produto: Produto) => void
}

// Componente VitrineProdutos que exibe uma seção de produtos relacionados
export function VitrineProdutos({
  title = 'Produtos relacionados',
  produtos,
  onSelect
}: Props) {
  // Exibe o título da seção e uma linha decorativa
  return (
    <>
      <Container1>
        <Linha />
        <Titulo>{title}</Titulo>
        <Linha />
      </Container1>
      <Vertodos>Ver todos</Vertodos>
      <ProductSection produtos={produtos} onSelect={onSelect} />
    </>
  )
}
