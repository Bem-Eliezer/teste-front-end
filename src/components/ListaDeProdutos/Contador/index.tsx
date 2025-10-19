import { useState } from 'react'
import { BotaoMais, BotaoMenos, Container, Valor } from './styles'

function Contador() {
  const [contador, setContador] = useState(1)

  const formatar = (num: number) => num.toString().padStart(2, '01')
  const decrementar = () => setContador(contador > 1 ? contador - 1 : 1)

  return (
    <Container>
      <BotaoMenos onClick={decrementar}>-</BotaoMenos>
      <Valor>{formatar(contador)}</Valor>
      <BotaoMais onClick={() => setContador(contador + 1)}>+</BotaoMais>
    </Container>
  )
}

export default Contador
