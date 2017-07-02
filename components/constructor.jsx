import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container.jsx'
import Header from './header.jsx'
import { configureAnchors } from 'react-scrollable-anchor'
import getVariants from '../data/provider'
import Promise from 'bluebird'


configureAnchors({offset: -50, scrollDuration: 400})

let variants
let prepareForAction = new Promise( (resolve, reject) => {
   getVariants.then(
     (data) => { variants = data; resolve(true) },
     (error) => { console.log(`Error ${error}`); reject(new Error('No reply from provider'))}
   )
})


class Constructor extends React.Component {
  constructor(props) {
    super(props)
  }
  variantClick() {
    console.log(`Holyluis! ${Object.keys(this)}`);
  }
  getChildContext() {
    if (this.state) console.log(`State ${Object.keys(this.state)}`);
  }
  render() {
    return (
       this.props.childs
    )
  }
}

ReactDOM.render(
  <Constructor key="headerConstruct" childs={ <Header key="header" variants={ variants } mainTitle="Joyfuldog" mainDescription="Услуги для собак" /> } />,
  document.getElementById('header')
)
prepareForAction.then(
  (success) => {
    ReactDOM.render(
      <Constructor
        key="variantsConstruct"
        childs={
          <Container childs= { variants }
        id="section1"/> } />,
      document.getElementById('services')
    )
  },
  (error) => {
    ReactDOM.render(
      <div style= {{ color: 'red', fontSize: '36px', textAlign: 'center', padding: '10vh' }}>
        Something gone wrong <br/>Come back soon!
      </div>,
      document.getElementById('services')
    )
  }
)
