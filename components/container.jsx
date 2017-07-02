import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Variant from './variant.jsx'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childs: props.childs
    }
  }
  getChildContext() {

  }
  variantClickHandler(data) {
    let notifiedVariants
    if(data.state.selected) {
      notifiedVariants = this.props.childs.map(
        (variant) => {
          variant.title === data.props.title
                            ? variant.variantClassNames = ({ selected: false, unfocused: false })
                            : variant.variantClassNames = ({ selected: false, unfocused: false })
          return variant
        }
      )
      this.setState({
        childs: notifiedVariants
      })
    } else {
      notifiedVariants = this.props.childs.map(
        (variant) => {
          variant.title === data.props.title
                            ? variant.variantClassNames = { selected: true, unfocused: false }
                            : variant.variantClassNames = { selected: false, unfocused: true }
          console.log(`Variant ${variant.variantClassNames.selected}`);
          return variant
        }
      )
      this.setState({
        childs: notifiedVariants
      })
    }

  }
  render() {
    return (
      <ScrollableAnchor id={ this.props.id }>
        <div className="container">
          { this.state.childs.map((variant) => {
            // console.log(`Object ${Object.keys(this)}`);
            return (
              <Variant
                background={variant.background}
                variantClassNames={{ selected: false, unfocused: false }}
                title={variant.title}
                clickHandler={ this.variantClickHandler.bind(this) }>
              </Variant>
            )
          }) }
        </div>
      </ScrollableAnchor>
    )
  }
}

Container.propTypes = {
  childs: React.PropTypes.array
}
