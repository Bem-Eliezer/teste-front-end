import { Imagem, Titulo, SubTitulo } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Botao from '../Botao'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>
        Venha conhecer nossas promoções <br />
      </Titulo>
      <SubTitulo>
        <span> 50% Off</span> nos produtos
      </SubTitulo>
      <Botao size="grande" title="Clique aqui" type={'button'}>
        Ver produto
      </Botao>
    </div>
  </Imagem>
)

export default Banner
