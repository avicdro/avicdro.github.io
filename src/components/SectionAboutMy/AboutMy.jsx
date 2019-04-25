import React, { Component } from 'react'
import styles from './aboutMy.module.css'


export default class AboutMy extends Component {
  render() {
    return (
      <div className={styles.containerPerfil}>

        <div className={styles.photo}>
          <img src="https://lh3.googleusercontent.com/8qfdCjcPEsogHZpQZhZxZZysL1iGF36_Xt_z6uK7vzs6m5LEjKQtsbWYDx3rpTjWDCIqlyEABsaOZyKd361euDJRaAlqhRE70y7rIUJU2cLS1FENCWanakQ_LONQK_vedRttGHhLla78cT7CBn1odNj_2hmqYxri7MR86-Lv1bu_eoNHlQLH3EXjhuswxEAS3qHKBeAaiz8LUA7BfCsqeBmxqpEtxFNrm9NxFB7XqWVtwXCCelEkRYOPOGNfKcdo3aJupk16073AEcS3nM6DHe2I2rgpeelF-bfa5-oC1s-O57ZawoXvSKrQD0T5qmyG8woBMf4GKesdznVL4d03YOr2Z8_bW5rXw8VzhPS3wchrUvxZdz--yrMlELQAyZOErk5Ur-Zh6OpbZLQsyVw1IOffrtApvnAZziu184gGJ3M_j2ygixDehAT6M3TKXh_eu6eKt9t64aQnjdTNwN0b3M3DY5j92CF6xIWPCIJ3TD5Jf1_wVpiCWtRzGLC2apBQjxumTlI76-TqLSqwiJUxcV_x3ZEsqZRkWE3kLS5SpRwFw_DQGbgUZQBQOOgG10vJV1I7wYMD171V1Yj28gVn5qpFRg9CqU9-8liN5D7PpunPZWAyAOWkIR-_pjXOwD-JJk14W2njw5TtkvW-3klpldftQGH_f2SK6DbtvtlrgLKkL453qYfbKkIAyw4PJBdNpgRqChFh9VqNuP1rdxdjbUaW=w522-h695-no"
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
          <h3>¿Un poco más acerca de mí?</h3>
          <p>
          Hola, me llamo Victor Alvarez Tallada, nací en el 98, desde temprano le tome un gran gusto a las tecnologías, así como a los videojuegos, principal motivador para que me adentrará en la programación, y que más tarde estudiará en la UCV (Universidad Central de Venezuela) ciencias de la computación. En el proceso conocí muy buenas personas, y aprendí mucho.

De manera autodidacta y con el apoyo de mi hermano (ya TSU en informática), continué enfocado ahora en el desarrollo web profundizando en las bases (html/css/js), y con el tiempo aprendiendo Frameworks y librerías, como Angular, react, Nodejs, webpack entre otras cosas.
<br/><br/>
Aun me falta mucho por aprender pero cada día espero mejorar.
<br/>
      <strong>
      "A la cama no te irás sin saber una cosa más"  
      </strong> 
          </p>
        </div>
      </div>
    )
  }
}
