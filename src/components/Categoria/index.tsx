import computador from '../../assets/images/computador.svg'
import marcado from '../../assets/images/supermercados.svg'
import bebidas from '../../assets/images/bebida.svg'
import ferramenta from '../../assets/images/ferramentas.svg'
import saude from '../../assets/images/cuidados-de-saude.svg'
import esporte from '../../assets/images/corrida.svg'
import moda from '../../assets/images/roupa.svg'

import {
  Descricao,
  DescricaoSelecionado,
  FundoBranco,
  FundoCinza,
  Imagem,
  Lista,
  Variedades
} from './styles'

const Categoria = () => (
  <Variedades>
    <Lista>
      <li>
        <FundoBranco>
          <Imagem src={computador} alt="computador" />
        </FundoBranco>
        <DescricaoSelecionado>Tecnologia</DescricaoSelecionado>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={marcado} alt="SuperMercado" />
        </FundoCinza>
        <Descricao>Supermercado</Descricao>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={bebidas} alt="bebidas" />
        </FundoCinza>
        <Descricao>Bebidas</Descricao>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={ferramenta} alt="ferramenta" />
        </FundoCinza>
        <Descricao>Ferramentas</Descricao>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={saude} alt="saude" />
        </FundoCinza>
        <Descricao>Saúde</Descricao>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={esporte} alt="esporte" />
        </FundoCinza>
        <Descricao>Esporte e Fitness</Descricao>
      </li>
      <li>
        <FundoCinza>
          <Imagem src={moda} alt="moda" />
        </FundoCinza>
        <Descricao>Moda</Descricao>
      </li>
    </Lista>
  </Variedades>
)

export default Categoria
