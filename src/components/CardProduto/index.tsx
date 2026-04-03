import Botao from '../Botao'

import {
  Card,
  Frete,
  Imagem,
  Parcelamento,
  PrecoAntigo,
  Texto,
  Valor
} from './styles'
import React from 'react'

interface ProdutoProps {
  nome: string
  descricao: string
  imagem: string
  preco: number
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// Componente ProdutoCard que exibe as informações de um produto e um botão de compra

const ProdutoCard: React.FC<ProdutoProps> = ({
  nome,
  descricao,
  imagem,
  preco,
  onClick
}) => {
  return (
    <>
      <Card
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
        }}
      >
        <Imagem src={imagem} alt="celular" />
        <Texto>{nome}</Texto>
        <Texto>{descricao}</Texto>
        <Valor>
          <PrecoAntigo>R$ {(preco * 1.1).toFixed(2)}</PrecoAntigo>
          R$ {preco.toFixed(2)}
          <br />
        </Valor>
        <Parcelamento>ou 2x R$ {(preco / 2).toFixed(2)} sem juros</Parcelamento>
        <Frete>Frete grátis</Frete>
        <Botao
          type={'button'}
          title={'Comprar'}
          size="medio"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()
            onClick?.(e)
          }}
        >
          COMPRAR
        </Botao>
      </Card>
    </>
  )
}

export default ProdutoCard
