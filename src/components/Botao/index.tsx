import { BotaoContainer, BotaoLink } from './styles'

// Tipo de props para o componente Botao, definindo as opções de tamanho, tipo e comportamento

export type Props = {
  size?: 'pequeno' | 'medio' | 'grande'
  children: React.ReactNode
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Botao = ({
  type,
  children,
  size = 'pequeno',
  onClick,
  title,
  to
}: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer size={size} type="button" title={title} onClick={onClick}>
        {children}
      </BotaoContainer>
    )
  }

  return (
    <BotaoLink to={to || '/'} title={title}>
      {children}
    </BotaoLink>
  )
}

export default Botao
