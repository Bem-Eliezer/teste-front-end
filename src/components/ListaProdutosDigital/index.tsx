import {
  Container,
  ListaContainer,
  Item,
  Linha,
  ListaProduto,
  Titulo
} from './styles'

// Componente ListaProdDigital que exibe uma lista de categorias de produtos digitais
const ListaProdDigital = () => (
  <>
    <Container>
      <Linha />
      <Titulo>Produtos relacionados</Titulo>
      <Linha />
    </Container>
    <ListaContainer>
      <ListaProduto>
        <Item destaque>CELULAR</Item>
        <Item>ACESSÓRIOS</Item>
        <Item>TABLETS</Item>
        <Item>NOTEBOOKS</Item>
        <Item>TVS</Item>
        <Item>VER TODOS</Item>
      </ListaProduto>
    </ListaContainer>
  </>
)

export default ListaProdDigital
