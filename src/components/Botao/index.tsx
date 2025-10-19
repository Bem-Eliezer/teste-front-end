import { BotaoContainer, BotaoLink } from './styles'
import { title } from 'process'

export type Props = {
  size?: 'pequeno' | 'medio' | 'grande'
  children: string
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
}

const Botao = ({ type, children, size = 'pequeno', onClick }: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer size={size} type="button" title={title} onClick={onClick}>
        {children}
      </BotaoContainer>
    )
  }

  return (
    <BotaoLink to="/" title={title} type="button">
      {children}
    </BotaoLink>
  )
}

export default Botao
