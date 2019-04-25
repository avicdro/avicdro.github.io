import React, { Component } from 'react'

import styles from './Practices.module.css'
import IconsLoad from "../InconsLoad/IconsLoad";


const CardPractice = (props) => {
  return (
    <div className="containerCard">

      <div className="title"> <h2> {props.title} </h2> </div>
    <div className="containerIframe">
        <iframe className={styles.iframe} scrolling="no"
          title={props.title}
          src={`//codepen.io/avicdro/embed/${props.direc}/?height=300&theme-id=34539&default-tab=result`}
          frameBorder="no" allowFullScreen={true}>

          See the Pen
          <a href={`https://codepen.io/avicdro/pen/${props.direc}/`}>
            {props.title}
          </a>
          by avicdro (<a href='https://codepen.io/avicdro'>@avicdro</a>) on
          <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>
    </div>
  )
}


export default class Practices extends Component {
  constructor(props){
    super(props);
    this.handleClickAgrup = this.handleClickAgrup.bind(this)
  }

  handleClickAgrup(target){
    const cont = document.getElementsByClassName(styles.containerSection)[0];
    const btn = document.getElementsByClassName(styles.button);
    console.log(cont, target, btn)
    if (target === 'List') {
      btn[0].classList.add(styles.buttonActive);
      btn[1].classList.remove(styles.buttonActive);
      cont.classList.add(styles.practicesList);
      cont.classList.remove(styles.practicesGrid);      
    } else if (target === 'Grid') {
      btn[1].classList.add(styles.buttonActive);
      btn[0].classList.remove(styles.buttonActive);
      cont.classList.add(styles.practicesGrid);
      cont.classList.remove(styles.practicesList);
    }
  }
  render() {
    return (
      <div >
        <IconsLoad icons='<svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="menu" viewBox="0 0 231 231"><title>menu</title><rect width="181" x="50" y="164.5" height="33"/><rect width="181" x="50" y="99.5" height="33"/><rect width="181" x="50" y="32.5" height="33"/><rect width="33" y="165.5" height="33"/><rect width="33" y="99.5" height="33"/><rect width="33" y="32.5" height="33"/></symbol><symbol id="horizontal-grid-layout-interface-symbol" viewBox="0 0 35 35"><title>horizontal-grid-layout-interface-symbol</title><rect y="25.818" width="15.5" height="9.182"/><rect x="19.5" y="25.818" width="15.5" height="9.182"/><rect x="19.5" y="12.898" width="15.5" height="9.202"/><rect y="12.898" width="15.5" height="9.202"/><rect width="15.5" height="9.18"/><rect x="19.5" width="15.5" height="9.18"/></symbol></svg>'/>

        <div className={styles.buttonGroup}>
          <div className={styles.button} onClick={()=>this.handleClickAgrup('List')}>
            <svg className={styles.icon}>
              <use xlinkHref="#menu" />
            </svg> 
          </div>
          <div className={styles.button} onClick={()=>this.handleClickAgrup('Grid')}>
            <svg className={styles.icon}>
              <use xlinkHref="#horizontal-grid-layout-interface-symbol" />
            </svg> 
          </div>
        </div>
        <div className={styles.containerSection}  >
          <CardPractice title="Practica 1 / css challenge - day 1" direc="zJREOa" />
          <CardPractice title="Practica 2 / css challenge - day 2" direc="vzRywL" />
          <CardPractice title="Practica 3 / css challenge - day 3" direc="jvxraK" />
          <CardPractice title="Practica 4 / css challenge - day 4" direc="bxKaEM" />
          <CardPractice title="Practica 5 / Menu adaptable" direc="wRQMwz" />
        </div>
      </div>
    )
  }
}
