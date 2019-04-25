import React, { Component } from 'react'

import styles from './Contact.module.css'

const SocialNetwork = (props) => {
  return(
      <a className={styles.button} href={props.href} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
  )
}


export default class Contact extends Component {
  render() {
    return (
      <div className={styles.containerSection}>
        <div className={styles.titleContact}>
          {/* <h3>¿Trabajamos Juntos?</h3> */}
          <p>
            Si quieres comunicarte conmigo, siéntete libre de hacerlo a través 
            de alguna de mis redes sociales. 
          </p>
        </div>
        <div className={styles.containerRed}>
          <SocialNetwork name="Linkedin" href="https://www.linkedin.com/in/victor-alvarez-tallada-152563141/" />
          <SocialNetwork name="twitter" href="https://twitter.com/@avicdro" />          
          <SocialNetwork name="GitHub" href="https://github.com/avicdro" />
          <SocialNetwork name="Mail" href="https://avicdro@gmail.com" />          
        </div>
      </div>
    )
  }
}
