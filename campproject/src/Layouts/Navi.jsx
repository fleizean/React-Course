import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux'


export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  function handleSignOut(param) {
    setIsAuthenticated(false)
    navigate("/")
  }
  function handleSignIn(param) {
    setIsAuthenticated(true)
  }
  function goMenu(param) {
    navigate("/")
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item onClick={goMenu} name='Ana Sayfa' />
          <Menu.Item name='messages' />

          <Menu.Menu position='right'>
            <Menu.Item>
              { cartItems.length > 0 &&<CartSummary /> } { /* cartItems.length > 0'dan büyükse CartSummary gelecek */}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} bisey="1" />} {/* If - Else koşulu yapılan yer ve signOut'un handleSignOut'u tetiklediği yer */}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
