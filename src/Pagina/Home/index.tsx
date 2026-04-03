import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Cadastro from '../../components/Cadastro'
import Categoria from '../../components/Categoria'
import EspacoFinal from '../../components/EspacoFinal'
import Rodape from '../../components/Rodape'
import ListaProdDigital from '../../components/ListaProdutosDigital'
import ListaMarcas from '../../components/ListaMarcas'
import SecaoParceiro from '../../components/SecaoParceiros'
import ProdutoModal from '../../components/ProdutoModal'
import SecaoProdutos from '../../components/SecaoProdutos'
import { VitrineProdutos } from '../../components/VitrineProdutos'
interface Produto {
  id?: number
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    fetch('/produtos.json')
      .then((res) => res.json())
      .then((data) => {
        const produtosComId = data.products.map(
          (item: Produto, index: number) => ({
            id: index,
            ...item
          })
        )
        setProdutos(produtosComId)
      })
  }, [])

  return (
    <>
      <Banner />
      <Categoria />
      <ListaProdDigital />
      <SecaoProdutos produtos={produtos} onSelect={setProdutoSelecionado} />
      <ProdutoModal
        produto={produtoSelecionado}
        aberto={!!produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
      />
      <SecaoParceiro />
      <VitrineProdutos
        title="Produtos relacionados"
        produtos={produtos}
        onSelect={setProdutoSelecionado}
      />
      <SecaoParceiro />
      <ListaMarcas />
      <VitrineProdutos
        title="Produtos relacionados"
        produtos={produtos}
        onSelect={setProdutoSelecionado}
      />
      <Cadastro />
      <Rodape />
      <EspacoFinal />
    </>
  )
}

export default Home
