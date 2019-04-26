import React from 'react'
import PropTypes from 'prop-types'

import Header from './header/header'
import NavBarMobile from './navBar/NavBarMovile';
import Footer from '../components/footer/Footer'

import {
  footerCss,
  navCss,
  positionFooter,
  positionFooterFinal,
  positionNav,
  positionNavFinal,
  contain
} from './layout.module.css'



class Layout extends React.Component {
  // Event control scroll
  scrollControl = () => {
    const footer = document.getElementsByClassName(footerCss)[0];
    const Nav = document.getElementsByClassName(navCss)[0];

    setInterval(() => {
      // Botton
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add(positionFooterFinal);
        Nav.classList.add(positionNavFinal);
      } else if (footer.classList.contains(positionFooterFinal) && Nav.classList.contains(positionNavFinal)) {
        footer.classList.remove(positionFooterFinal);
        Nav.classList.remove(positionNavFinal);
      }
    }, 500);
    
  }



  componentDidMount() {
    this.scrollControl();
  }


  // componet
  render() {
    
 return (
      <div >
        <Header siteTitle={`Victor AT`} />

        <div className={contain}>
          {this.props.children}
        </div>

        <div className={`${navCss} ${positionNav}`}>
          <NavBarMobile />
        </div>

        <div className={`${footerCss} ${positionFooter}`}>
          <Footer />
        </div>

      </div>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
