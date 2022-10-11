import React from 'react'
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
   <Menu inverted>
    <Container>
      <Link to="/">
      <Menu.Item name="Home" />
      </Link>
     <Link to="/people">
     <Menu.Item name="people" />
     </Link>
     <Link to="/movie">
     <Menu.Item name="movie" />
     </Link>
      
    </Container>
   </Menu>
  )
}
