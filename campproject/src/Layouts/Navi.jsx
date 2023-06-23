import React, { useState } from 'react';
import CartSummary from './CartSummary';
import { Container, Menu } from 'semantic-ui-react';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate('/');
  }

  async function handleSignIn() {
    try {
      const response = await axios.post('https://localhost:23578/api/Products/login', {
        // Kullanıcı giriş verilerini buraya sağlayın
        username: 'fleizean',
        password: '12345'
      });
  
      // Yanıtı kontrol edin ve kimlik doğrulama durumunu buna göre ayarlayın
      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        console.error('Giriş başarısız:', response.data.title);
      }
    } catch (error) {
      console.error('Giriş sırasında hata:', error);
    }
  }

  function goMenu() {
    navigate('/');
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item onClick={goMenu} name='Ana Sayfa' />
          <Menu.Item name='messages' />

          <Menu.Menu position='right'>
            <Menu.Item>
              {cartItems.length > 0 && <CartSummary />}
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} bisey="1" />
              ) : (
                
                <SignedOut signIn={handleSignIn} bisey="1" />
              )}
              
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}