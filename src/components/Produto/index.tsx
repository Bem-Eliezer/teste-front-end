import Botao from '../Botao'

import {
  Card,
  Descricao,
  Frete,
  Imagem,
  Layout,
  Nome,
  Parcelamento,
  Valor
} from './styles'
import React from 'react'

interface ProdutoProps {
  nome: string
  descricao: string
  imagem: string
  preco: number
  onClick?: () => void
}

const Produtos: React.FC<ProdutoProps> = ({
  nome,
  descricao,
  imagem,
  preco,
  onClick
}) => {
  return (
    <>
      <Card onClick={onClick}>
        <Layout>
          <Imagem src={imagem} alt="celular" />
          <Nome>{nome}</Nome>
          <Descricao>{descricao}</Descricao>
          <Valor>
            <span>R$ {(preco * 1.1).toFixed(2)}</span>
            R$ {preco.toFixed(2)}
            <br />
          </Valor>
          <Parcelamento>
            ou 2x R$ {(preco / 2).toFixed(2)} sem juros
          </Parcelamento>
          <Frete>Frete grátis</Frete>
          <Botao to="/produto" type={'button'} title={'Comprar'} size="medio">
            COMPRAR
          </Botao>
        </Layout>
      </Card>
    </>
  )
}

export default Produtos
