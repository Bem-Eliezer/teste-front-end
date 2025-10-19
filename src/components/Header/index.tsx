import {
  BarraDePesquisa,
  HeaderBar1,
  HeaderBar2,
  Icone,
  Item,
  Lista,
  ListaIcones,
  ListaLink,
  Menu,
  TextoAzul
} from './styles'

import protecao from '../../assets/images/protecao.svg'
import caminhao from '../../assets/images/caminhao.svg'
import cartao from '../../assets/images/cartao.svg'
import logo from '../../assets/images/logo.svg'
import lupa from '../../assets/images/lupa.svg'
import caixa from '../../assets/images/caixa.svg'
import coracao from '../../assets/images/coracao.svg'
import login from '../../assets/images/login.svg'
import carrinho from '../../assets/images/carrinho.svg'
import coroa from '../../assets/images/coroa.svg'

const Header = () => (
  <>
    <HeaderBar1>
      <Lista>
        <Item>
          <Icone src={protecao} alt="cartao" /> Compra&nbsp;
          <TextoAzul>100% segura </TextoAzul>
        </Item>
        <Item>
          <Icone src={caminhao} alt="caminhao" />{' '}
          <TextoAzul>Frete grátis&nbsp;</TextoAzul>
          acima de R$ 200
        </Item>
        <Item>
          <Icone src={cartao} alt="escudo" />{' '}
          <TextoAzul>Parcele&nbsp; </TextoAzul> suas compras
        </Item>
      </Lista>
    </HeaderBar1>
    <HeaderBar2>
      <div>
        <img src={logo} alt="logotipo" />
        <BarraDePesquisa>
          <input type="text" placeholder="O que você esta buscando?" />
          <button>
            <img src={lupa} alt="lupa" />
          </button>
        </BarraDePesquisa>
        <ListaIcones>
          <li>
            <img src={caixa} alt="caixa" />
          </li>
          <li>
            <img src={coracao} alt="coracao" />
          </li>
          <li>
            <img src={login} alt="" />
          </li>
          <li>
            <img src={carrinho} alt="" />
          </li>
        </ListaIcones>
      </div>
    </HeaderBar2>
    <Menu>
      <ListaLink>
        <li>TODAS CATEGORIAS</li>
        <li>SUPERMERCADO</li>
        <li>LIVROS</li>
        <li>MODA</li>
        <li>LANÇAMENTOS</li>
        <TextoAzul className="textoOferta">OFERTA DO DIA</TextoAzul>
        <li>
          <img src={coroa} alt="" />
          ASSINATURA
        </li>
      </ListaLink>
    </Menu>
  </>
)

export default Header
