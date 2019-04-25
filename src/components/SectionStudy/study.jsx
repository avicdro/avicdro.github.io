import React, { Component } from 'react'

import styles from './study.module.css'

export default class SectionEstudio extends Component {
  constructor(props) {
    super(props);
    this.mostrarCursos = this.mostrarCursos.bind(this);
  }


  mostrarCursos() {
    let boxCursos = document.getElementsByClassName(styles.boxCursos)[0];
    boxCursos.classList.toggle(styles.boxCursosActivo)
    console.log(boxCursos.classList);
  
  }


  render() {
    return (
      <div className={styles.container}>

        <div className={styles.gout}> 2016 </div>
        <div className={styles.study}>
          <h2>Bachiller en ciencias</h2>
          <h3>Unidad Educativa Madre Isabel</h3>
          <p></p>
        </div>

        <div className={styles.gout}> 2016 - 2018 </div>
        <div className={styles.study}>
          <h2>Universidad Central de Venezuela</h2>
          <h3>(4 semestres)</h3>
        </div>

        <div className={styles.gout}> 2018 - 2019 </div>
        <div className={styles.study}>
          <h2>Cursos</h2>
          <h3>Online en plataformas como freecodecamp, Udemy y platzy </h3>
          <div className={styles.buttonCursos} onClick={this.mostrarCursos} >Ver cuales</div>
        </div>
        <div className={styles.boxCursos}>
          <pre>
            <code>
              {`
      C:. 
      |   cursos 
      |
      \\---Platzi
          +---Arquitecto Frontend
          |       diploma-animaciones-web.pdf
          |       diploma-arquitecto.pdf
          |       diploma-css-grid-layout.pdf
          |       diploma-html5-css3.pdf
          |       diploma-responsive-design.pdf
          |
          +---Fudamentos de programación
          |       diploma-algoritmos-en-c.pdf
          |       diploma-Ingeniería-del-software.pdf
          |       diploma-programacion-basica.pdf
          |
          \\---Adicionales
          diploma-git-github.pdf
          diploma-go-basico.pdf
          diploma-webpack.pdf
          |
          \\---Freecodecamp
          +---Responsive Web Design Certification
              (300 hours)
          responsive-web-design.pdf
          `
              }
            </code>
          </pre>
        </div>
      </div>
    )
  }
}
