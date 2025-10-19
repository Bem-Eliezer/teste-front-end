import marca from '../../assets/images/marca.svg'
import { Div, Lista, Titulo } from './styles'

const ListaMarcas = () => (
  <>
    <Titulo>Navegue por marcas</Titulo>
    <Div>
      <Lista>
        <li>
          <img src={marca} alt="econverse" />
        </li>
        <li>
          <img src={marca} alt="econverse" />
        </li>
        <li>
          <img src={marca} alt="econverse" />
        </li>
        <li>
          <img src={marca} alt="econverse" />
        </li>
        <li>
          <img src={marca} alt="econverse" />
        </li>
      </Lista>
    </Div>
  </>
)

export default ListaMarcas
