import "./App.css";
import React, { useState } from "react";
import {
     MDBContainer,
     MDBNavbar,
     MDBNavbarBrand,
     MDBNavbarToggler,
     MDBNavbarNav,
     MDBNavbarItem,
     MDBNavbarLink,
     MDBCollapse,
     MDBIcon
} from "mdb-react-ui-kit";

function App() {
     return (
          <div >
            <NavbarBoot />
          </div>
     );
}

function NavbarBoot() {
     const [showNav, setShowNav] = useState(false);
     return (
          <MDBNavbar expand="lg" light bgColor="light">
               <MDBContainer fluid>
                    <MDBNavbarBrand href="#">Taco-Aw</MDBNavbarBrand>
                    <MDBNavbarToggler
                         type="button"
                         aria-expanded="false"
                         aria-label="Toggle navigation"
                         onClick={() => setShowNav(!showNav)}
                    >
                         <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                         <MDBNavbarNav>
                              <MDBNavbarItem>
                                   <MDBNavbarLink
                                        active
                                        aria-current="page"
                                        href="#"
                                   >
                                        Home
                                   </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                   <MDBNavbarLink href="#">
                                        Features
                                   </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                   <MDBNavbarLink href="#">
                                        Pricing
                                   </MDBNavbarLink>
                              </MDBNavbarItem>
                         </MDBNavbarNav>
                    </MDBCollapse>
               </MDBContainer>
          </MDBNavbar>
     );
}

export default App;
