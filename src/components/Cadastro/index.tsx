import Botao from '../Botao'
import {
  Check,
  ContainerTexto,
  GrupoInput,
  TermosContainer,
  Espaco,
  Frase,
  Input,
  Termos,
  Titulo
} from './styles'

// Componente Cadastro que exibe um formulário de inscrição para a newsletter

const Cadastro = () => (
  <Espaco>
    <ContainerTexto>
      <Titulo>Inscreva-se na nossa newsletter</Titulo>
      <div>
        <Frase>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          <br />
          da Econverse.
        </Frase>
      </div>
    </ContainerTexto>
    <GrupoInput>
      <Termos>
        <Input type="text" placeholder="Digite seu nome" />
        <TermosContainer>
          <Check type="checkbox" />
          <span>aceito os termos e condições</span>
        </TermosContainer>
      </Termos>
      <Input type="text" placeholder="Digite seu e-mail" />
      <Botao type={'button'} title={'inscrever'} size="medio">
        INSCREVER
      </Botao>
    </GrupoInput>
  </Espaco>
)

export default Cadastro
