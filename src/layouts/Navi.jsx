import React, {useState} from "react";
import {MenuMenu,MenuItem,Menu,Container,} from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true) //ilk durumda giriş yapmamış
  
  const navigate = useNavigate() //mesela sepetteyken çıkış yaparsa ana sayfaya dönmeyi sağlayacak
  
  function handleSignedOut() { //çıkış yapma fonksiyonu
    //setIsAuthenticated, isAuthenticated'in durumunu değiştirmeye yarayan fonskiyon
    setIsAuthenticated(false)
    navigate('/')
  }

  function handleSignedIn(){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
           <CartSummary></CartSummary>
           {isAuthenticated?<SignedIn signOut= {handleSignedOut} /> : <SignedOut signIn= {handleSignedIn}/>} {/* burada ilk durum yani false döndüğü için signedout */}
          {/* alt komponente bisey={....} ile data geçiyoruz >> props */}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
