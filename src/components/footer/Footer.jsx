import React from 'react'
import './footer.module.css'

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear() + `, Echo con ❤ por `}
      <a href="https://twitter.com/avicdro" target="_blank" rel="noopener noreferrer">avicdro</a>
    </footer>
  );
}

export default Footer;