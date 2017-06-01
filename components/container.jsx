import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Container extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={ this.props.id }>
        <div className="container">
          { this.props.childs }
        </div>
      </ScrollableAnchor>
    )
  }
}
