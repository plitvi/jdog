import React from 'react'


export default class Section extends React.Component {
  render() {
    return (
      <div className={ this.props.sectionClass } id={ this.props.sectiondID } >
        { this.props.sectionContent }
      </div>
    )
  }
}
