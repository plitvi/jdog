import React from 'react'
import Variant from './variant.jsx'

export default class Row extends React.Component {
  clickHandler() {
    console.log(`Click!`);
  }
  render() {
    return (
      <div className="row">
        { this.props.vars.map((variant) => {
          return ( <Variant
                  background={ variant.background }
                  title={ variant.title }
                  onClick={ this.clickHandler.bind(this) } />
                )
        }) }
      </div>
    )
  }
}
