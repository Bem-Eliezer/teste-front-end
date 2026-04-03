import computador from '../../assets/images/computador.svg'
import marcado from '../../assets/images/supermercados.svg'
import bebidas from '../../assets/images/bebida.svg'
import ferramenta from '../../assets/images/ferramentas.svg'
import saude from '../../assets/images/cuidados-de-saude.svg'
import esporte from '../../assets/images/corrida.svg'
import moda from '../../assets/images/roupa.svg'

import { Descricao, Fundo, Imagem, Lista, Variedades } from './styles'

// Componente Categoria que exibe uma lista de categorias de produtos

const Categoria = () => (
  <Variedades>
    <Lista>
      <li>
        <Fundo variante="branco">
          <Imagem src={computador} alt="computador" />
        </Fundo>
        <Descricao selecionado>Tecnologia</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={marcado} alt="SuperMercado" />
        </Fundo>
        <Descricao>Supermercado</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={bebidas} alt="bebidas" />
        </Fundo>
        <Descricao>Bebidas</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={ferramenta} alt="ferramenta" />
        </Fundo>
        <Descricao>Ferramentas</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={saude} alt="saude" />
        </Fundo>
        <Descricao>Saúde</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={esporte} alt="esporte" />
        </Fundo>
        <Descricao>Esporte e Fitness</Descricao>
      </li>
      <li>
        <Fundo variante="cinza">
          <Imagem src={moda} alt="moda" />
        </Fundo>
        <Descricao>Moda</Descricao>
      </li>
    </Lista>
  </Variedades>
)

export default Categoria
