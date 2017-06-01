import React from 'react'

export default class Variant extends React.Component {
  render() {
    // const style = {
    //   backgroundImage: 'url(' +  this.props.background + ')'
    // }
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 variant">
        <div>
          <h2> { this.props.title } </h2>
          <img src={ this.props.background } />
        </div>
      </div>
    )
  }

}
