import { Produto } from '../../types/Product'
import Contador from './Contador'
import linha from '../../assets/images/Line _13.svg'
import linha1 from '../../assets/images/Line_14.svg'

import {
  Botao,
  Container,
  ContainerModal,
  DescricaoDoProduto,
  DetalhesDoProduto,
  Fechar,
  Itens,
  Linhas,
  Modal,
  Overlay,
  Preco,
  TituloVitrine,
  VitrineItens
} from './styles'

interface Props {
  produto: Produto | null
  aberto: boolean
  onClose: () => void
}

// Componente ModalProduto
// Recebe produto, aberto e onClose como props
// Renderiza uma janela modal com detalhes do produto
export function ModalProduto({ produto, aberto, onClose }: Props) {
  // Se o modal não estiver aberto ou não houver produto, não renderiza nada
  if (!aberto || !produto) return null

  return (
    <>
      {/* Overlay escuro atrás do modal; fecha ao clicar */}
      <Overlay onClick={onClose} />
      {/* Modal em si */}
      <Modal visivel={aberto} onClick={(e) => e.stopPropagation()}>
        <VitrineItens>
          {/* Imagem do produto */}
          <img src={produto.photo} alt={produto.productName} />
          {/* Outros detalhes do produto */}
          <Itens>
            <TituloVitrine>{produto.productName}</TituloVitrine>
            <Preco>R$ {produto.price.toFixed(2)}</Preco>
            <DescricaoDoProduto>
              {produto.descriptionShort}
              <DetalhesDoProduto>
                {' '}
                Veja mais detalhes do produto {'>'}
              </DetalhesDoProduto>
            </DescricaoDoProduto>
            <ContainerModal>
              <Container>
                <Contador />
                <Botao>Comprar</Botao>
              </Container>
            </ContainerModal>
          </Itens>
        </VitrineItens>
        <Linhas onClick={onClose}>
          <Fechar src={linha} alt="fechar" />
          <Fechar src={linha1} alt="fechar" />
        </Linhas>
      </Modal>
    </>
  )
}
export default ModalProduto
