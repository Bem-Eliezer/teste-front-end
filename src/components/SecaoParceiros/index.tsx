import loja from '../../assets/images/loja.png'
import { Div } from './styles'

// Componente SecaoParceiro que exibe uma seção de parceiros comerciais
const SecaoParceiro = () => (
  <>
    <Div className="container">
      <ul>
        <li>
          <img src={loja} alt="loja" />
        </li>
        <li>
          <img src={loja} alt="loja" />
        </li>
      </ul>
    </Div>
  </>
)

export default SecaoParceiro
