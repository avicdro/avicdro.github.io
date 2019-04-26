import React, { Component } from 'react'
import styles from './aboutMy.module.css'

import perfilImg from '../../images/cvImgPerfil.jpg';

export default class AboutMy extends Component {
  render() {
    return (
      <div className={styles.containerPerfil}>

        <div className={styles.photo}>
          <img src={perfilImg}
            alt="imagen de perfil victor alvarez" />
        </div>
        <div className={styles.containerPerfilTex}>
          <div className={styles.titleName}>
            <h1>Victor Alvarez Tallada</h1>
            <hr className={styles.barName} />
            <h3>Desarrollador Front-end</h3>
          </div>
          <div className={styles.buttons}>

            <a className={styles.buttonCV} href="https://drive.google.com/file/d/1yNyi6QwYYesoIhT8RbHRU31I2HJFO8zM/view" target="_blank" rel="noopener noreferrer">
              CV
            </a>
            <a className={`${styles.buttonCV} ${styles.buttonCVvirtual}`} href="https://drive.google.com/open?id=1cYqFtIeVd0EYbJkACb4bXffDERTb6SBY" target="_blank" rel="noopener noreferrer">
              CV - EuroPass
            </a>
          </div>

          <hr id="about" className={styles.arrowDown} />
        </div>

        <div className={styles.descLarge}>
          <h3>Acerca de mí</h3>
          <p>
          Hola, me llamo Victor Alvarez Tallada, nací en el 98, desde temprano le tome un gran gusto a las tecnologías, así como a los videojuegos, principal motivador para que me adentrará en la programación, y que más tarde estudiará en la UCV (Universidad Central de Venezuela) ciencias de la computación. En el proceso conocí muy buenas personas, y aprendí mucho.

De manera autodidacta y con el apoyo de mi hermano (ya TSU en informática), continué enfocado ahora en el desarrollo web profundizando en las bases (html/css/js), y con el tiempo aprendiendo Frameworks y librerías, como Angular, react, Nodejs, webpack entre otras cosas.
<br/><br/>
Aun me falta mucho por aprender pero cada día espero ser mejor. 
<br/><br/>
      <strong>
      "A la cama no te irás sin saber una cosa más"  
      </strong> 
          </p>
        </div>
      </div>
    )
  }
}
