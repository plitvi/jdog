const classNames = require('classnames')

export default class Variant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escaped: this.props.escaped
    }
  }
  clickHandler() {

  }
  render() {
    var imageHolderClasses = classNames({
      'variant-entity': true,
      'escaped': this.state.escaped
    })
    let blockClassName = classNames({
      'col-lg-6 col-md-6 col-sm-6 col-xs-12 variant': true,
      'selected': this.props.variantClassNames.selected
    })
    return (
      <div className={ blockClassName } >
        <div className={ imageHolderClasses } onClick={ this.clickHandler.bind(this) }>
          <h2> { this.props.title } </h2>
          <div className="variant-image-holder">
            <img src={ this.props.background } />
          </div>
        </div>
      </div>
    )
  }

}
