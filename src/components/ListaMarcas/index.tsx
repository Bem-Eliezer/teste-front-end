import marca from '../../assets/images/marca.svg'
import { Lista, ListaContainer, Titulo } from './styles'

// Componente ListaMarcas que exibe uma lista de marcas para navegação
const ListaMarcas = () => (
  <>
    <Titulo>Navegue por marcas</Titulo>
    <ListaContainer>
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
    </ListaContainer>
  </>
)

export default ListaMarcas
