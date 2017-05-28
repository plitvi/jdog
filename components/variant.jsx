import React from 'react'

export default class Variant extends React.Component {
  render() {
    const style = {
      backgroundImage: 'url(' +  this.props.background + ')'
    }
    return (
      <div className="col-lg-4 col-md-6 col-xs-12 variant">
        <div style={ style}>
          <h2> { this.props.title } </h2>

        </div>
      </div>
    )
  }

}
