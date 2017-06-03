import React from 'react'
const classNames = require('classnames')

export default class Variant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escaped: this.props.escaped
    }
  }
  clickHandler() {
    this.setState({
      escaped: true
    })
    console.log(`State ${ this.state.escaped }`);
  }
  render() {
    var imageHolderClasses = classNames({
      'variant-entity': true,
      'escaped': this.state.escaped
    })
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 variant" >
        <div className={ imageHolderClasses }>
          <h2> { this.props.title } </h2>
          <div className="variant-image-holder">
            <img src={ this.props.background } />
          </div>
        </div>
      </div>
    )
  }

}
