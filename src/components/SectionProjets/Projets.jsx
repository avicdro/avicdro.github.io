import React, { Component } from 'react'

import styles from './Projets.module.css'

const Projet = (props) => {
  return (
    <div>
      <div className={styles.titleProjet}>
        <h4>
          {props.title}
        </h4>
      </div>
      <div className={styles.descProjet}>
        {props.desc}
      </div>
      <div className={styles.button}>
        <a  href={props.hrefMore}>More</a>
      </div>
    </div>
  )
}


export default class Projets extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inicio}>
          <div className={styles.title}>
            <h2>
             Proyectos  
            </h2>
          </div>
          <div className={styles.desc}>
            Descripcion
          </div>
        </div>

        <div className={styles.containerProjets}>
          <Projet 
          title="Pro 1" 
          desc="Loreasdad adad adasda asdasd adad adad adasdaqweqweaswew qweqweqwqw qweqwe qwe qwe"
          hrefMore="https//" />
        </div>

      </div>
    )
  }
}
