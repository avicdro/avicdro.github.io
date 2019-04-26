import React, { Component } from 'react'

import styles from './study.module.css'

export default class SectionEstudio extends Component {
  mostrarCursos = (action) => {
    let boxCursos = document.getElementsByClassName(styles.boxCursos)[0];
    if (action === 'show') {
      boxCursos.classList.add(styles.boxCursosActivo)
    } else {
      boxCursos.classList.remove(styles.boxCursosActivo)
    }
  }

  scroll = () => {
    let scrollCurses = setInterval(() => {
      if(window.location.pathname !== '/study'){
        clearInterval(scrollCurses);
        return;
      }
      if (window.scrollY > 600) {
        this.mostrarCursos('show');
      } else {
        this.mostrarCursos('hide');
      }
    }, 1000);   
  }

  render() {
  this.scroll();
  return (
    <div className={styles.container}>
      <div className={styles.gout}> 2016 </div>
        <div className={styles.study}>
          <h2>Bachiller en ciencias</h2>
          <h3>Unidad Educativa Madre Isabel</h3>
        </div>
    
        <div  className={styles.gout}> 2016 - 2018 </div>
        <div className={styles.study}>
          <h2>Universidad Central de Venezuela</h2>
          <h3>(4 semestres)</h3>
        </div>
    
        <div  className={styles.gout}> 2018 - 2019 </div>
          <div className={styles.study}>
        <h2>Cursos</h2>
        <h3>Online en plataformas como freecodecamp, Udemy y platzy </h3>
        <ul>
            <li>
              <a href="https://platzi.com/@avicdro/" target="_blank" rel="noopener noreferrer">Cursos de platzi</a>
            </li>
              <li>
              <a href="https://www.freecodecamp.org/avicdro" target="_blank" rel="noopener noreferrer">Curso de freecodecamp</a>
          </li>
          </ul>
        </div> 
    <div  className={styles.boxCursos}>

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
            <center>
          <sub>"Así es como se ve el árbol de directorios donde tengo los certificados <spam>😄</spam>"
              <br /><br />
          *Se saca en el cmd de windows con el comando THREE*</sub>
            </center>
        </div>
      </div>
    )
  }
}
      