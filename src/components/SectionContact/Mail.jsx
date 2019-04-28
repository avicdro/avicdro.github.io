import React, { Component } from 'react'
import styles from './Mail.module.css'

export default class Mail extends Component {

  render() {
    return (
      <form className={styles.formContent} action="https://formspree.io/avicdro@gmail.com" method="POST">
        <label htmlFor="nombre">Nombre
        <input type="text" name="nombre" required/>
        </label>
        <label htmlFor="direccion">Email
        <input type="email" name="direccion" id="email" required/>
        </label>
        <label htmlFor="asunto">Asunto
        <input type="text" name="asunto" required/>
        </label>
        <label htmlFor="msj">Mensaje
        <textarea name="msj" id="msj" cols="30" rows="10" required></textarea>
        </label>
        <input className={styles.buttonSubmit} type="submit" value="Enviar mensaje"/>
      </form>
    )
  }
}
