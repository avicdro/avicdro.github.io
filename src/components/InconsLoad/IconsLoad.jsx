import React from 'react';


class IconsLoad extends React.Component {
  constructor(props) {
    super(props);
    this.svgContent = React.createRef();
  }

  
  componentDidMount() {
    this.svgContent.current.innerHTML = this.props.icons;
  }

  render() {
    return (
      <div hidden ref={this.svgContent}>
        {/* se inserta el codigo necesario para cargar los iconos */}
      </div>
    );
  }
}

export default IconsLoad;


/**
|--------------------------------------------------
| Available /
|--------------------------------------------------
*/
// Formato
//<svg className="icon">
//  <use xlinkHref="#{NameIcon}}" />
//</svg> 

