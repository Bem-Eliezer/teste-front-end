import {
  Container,
  Div,
  Item,
  ItemDif,
  Linha,
  ListaProduto,
  Titulo
} from './styles'

const ListaProdDigital = () => (
  <>
    <Container>
      <Linha />
      <Titulo>Produtos relacionados</Titulo>
      <Linha />
    </Container>
    <Div>
      <ListaProduto>
        <ItemDif>CELULAR</ItemDif>
        <Item>ACESSÓRIOS</Item>
        <Item>TABLETS</Item>
        <Item>NOTEBOOKS</Item>
        <Item>TVS</Item>
        <Item>VER TODOS</Item>
      </ListaProduto>
    </Div>
  </>
)

export default ListaProdDigital
