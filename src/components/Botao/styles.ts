import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

import { Props } from '.'

export const BotaoContainer = styled.button<Props>`
  background-color: ${cores.amarelo};
  cursor: pointer;
  color: ${cores.roxo};
  font-size: ${(props) =>
    props.size === 'grande'
      ? '16px'
      : props.size === 'medio'
      ? '14px'
      : '16px'};
  font-weight: 700;
  padding: ${(props) =>
    props.size === 'grande'
      ? '13px 54px'
      : props.size === 'medio'
      ? '14px 74px 12px 74px'
      : ' 12px 26px'};
  border-radius: ${(props) =>
    props.size === 'grande' ? '5px' : props.size === 'medio' ? '4px' : ' 6px'};
  display: inline-block;
  border: none;
`

export const BotaoLink = styled(Link)<Props>`
  background-color: ${cores.amarelo};
  cursor: pointer;
  color: ${cores.roxo};
  font-size: ${(props) =>
    props.size === 'grande'
      ? '16px'
      : props.size === 'medio'
      ? '14px'
      : '16px'};
  font-weight: 700;
  padding: ${(props) =>
    props.size === 'grande'
      ? '13px 54px'
      : props.size === 'medio'
      ? '14px 74px 12px 74px'
      : ' 12px 26px'};
  border-radius: ${(props) =>
    props.size === 'grande' ? '5px' : props.size === 'medio' ? '4px' : ' 6px'};
  display: inline-block;
  border: none;
`
