import instagran from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/face.svg'
import linkedin from '../../assets/images/linkedin.svg'
import logo from '../../assets/images/logo.svg'
import {
  DivLogo,
  Frase,
  Item,
  LinhaVertical,
  Links,
  Lista,
  Logo,
  Rodape1,
  Titulo
} from './styles'

const Rodape = () => (
  // Rodapé do site com logo, frase e links sociais
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <Rodape1>
    // Divisão do rodapé em duas partes: a primeira com o logo, frase e links
    sociais, e a segunda com uma lista de links institucionais, de ajuda e
    termos
    <DivLogo>
      <Logo src={logo} alt="" />
      <Frase>Lorem ipsum dolor sit amet, consectetur bradipiscing elit.</Frase>
      <Links>
        <img src={instagran} alt="instagran" />
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkedin" />
      </Links>
    </DivLogo>
    <LinhaVertical></LinhaVertical>
    <Lista>
      <ul>
        <Titulo>Institucional</Titulo>
        <Item>Sobre Nós</Item>
        <Item>Movimento</Item>
        <Item>Trabalhe conosco</Item>
      </ul>
      <ul>
        <Titulo>Ajuda</Titulo>
        <Item>Suporte</Item>
        <Item>Fale Conosco</Item>
        <Item>Perguntas Frequentes</Item>
      </ul>
      <ul>
        <Titulo>Termos</Titulo>
        <Item>Termos e Condições</Item>
        <Item>Política de Privacidade</Item>
        <Item>Troca e Devolução</Item>
      </ul>
    </Lista>
  </Rodape1>
)

export default Rodape
