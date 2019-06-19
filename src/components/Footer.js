import React from 'react'
import FilterLink from '../containers/FilterLink'
import { Visible } from '../actions'

const Footer = () => (
  <div>
    <span>Visa: </span>
    <FilterLink filter={Visible.SHOW_ALL}>Alla</FilterLink>
    <FilterLink filter={Visible.SHOW_ACTIVE}>Att göra</FilterLink>
    <FilterLink filter={Visible.SHOW_COMPLETED}>Klara</FilterLink>
  </div>
)

export default Footer