import Botao from '../Botao'
import {
  Check,
  DivFrase,
  DivInput,
  DivTermo,
  Espaco,
  Frase,
  Input,
  Input1,
  Termos,
  Titulo
} from './styles'

const Cadastro = () => (
  <Espaco>
    <DivFrase>
      <Titulo>Inscreva-se na nossa newsletter</Titulo>
      <div>
        <Frase>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          <br />
          da Econverse.
        </Frase>
      </div>
    </DivFrase>
    <DivInput>
      <Termos>
        <Input1 type="text" placeholder="Digite seu nome" />
        <DivTermo>
          <Check type="checkbox" />
          <span>aceito os termos e condições</span>
        </DivTermo>
      </Termos>
      <Input type="text" placeholder="Digite seu e-mail" />
      <Botao type={'button'} title={'inscrever'} size="medio">
        INSCREVER
      </Botao>
    </DivInput>
  </Espaco>
)

export default Cadastro
