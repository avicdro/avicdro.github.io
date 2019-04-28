import React, { Component } from 'react'

import styles from './Contact.module.css'
import Mail from './Mail';

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
          <p>
            Si quieres comunicarte conmigo, siéntete libre de hacerlo a través 
            de alguna de mis redes sociales. 
          </p>
        </div>
        <div className={styles.containerRed}>
          <SocialNetwork name="Linkedin" href="https://www.linkedin.com/in/victor-alvarez-tallada-152563141/" />
          <SocialNetwork name="twitter" href="https://twitter.com/avicdro" />          
          <SocialNetwork name="GitHub" href="https://github.com/avicdro" />
        </div>
        <h1 className={styles.titleMail}>Mandar un mail</h1> 
        <div className={styles.formContent}>
          <Mail />
        </div>
      </div>
    )
  }
}
