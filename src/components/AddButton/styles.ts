import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circle = styled(Link)`
  width: 64px;
  height: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
