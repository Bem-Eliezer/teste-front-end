import styled from 'styled-components'
export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 634px);
    column-gap: 13px;
  }

  li {
    height: 350px;
    border-radius: 20px;
    border: none;
  }
`
