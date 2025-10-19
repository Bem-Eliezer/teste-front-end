import Banner from '../../components/Banner'
import Cadastro from '../../components/Cadastro'
import Categoria from '../../components/Categoria'
import EspacoFinal from '../../components/EspacoFinal'
import ListaProdutos from '../../components/ListaDeProdutos'
import ListaProdDigital from '../../components/ListaProdDigital'
import Rodape from '../../components/Rodape'

const Home = () => (
  <>
    <Banner />
    <Categoria />
    <ListaProdDigital />
    <ListaProdutos />
    <Cadastro />
    <Rodape />
    <EspacoFinal />
  </>
)
export default Home
