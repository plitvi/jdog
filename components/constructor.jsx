import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container.jsx'
import Variant from './variant.jsx'

var variants = [
  { title: 'Выгул собак', text: 'Выгуливаем собак по Москве и Москвоской области', background: '/images/dog1.jpg' },
  { title: 'Дрессировка \"медиум\"', text: 'Дрессировка с профессиональными кинологами', background: '/images/dog1.jpg' },
  { title: 'Дрессировка \"хард\"', text: 'Дрессировка с профессиональными кинологами', background: '/images/dog1.jpg' },
  { title: 'Зоотакси', text: 'Перевозка собак из одного пункта в другой', background: '/images/dog1.jpg' },
  { title: 'Зоодоктор', text: 'Лечим песиков', background: '/images/dog1.jpg' }
]

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        { this.props.vars }
      </div>
    )
  }
}
var setupVariants = () => {
  var retArr = []
  for( var i = 0; i < variants.length; i + 3) {
    var _tmpArr = []
    variants.splice(i, i + 3).forEach( (el) => {
      _tmpArr.push(
        <Variant key={'variant' + parseInt(Math.random() * 1500)} title={ el.title } background={ el.background } />
      )
    })
    retArr.push(
      <Row key={ 'row' + parseInt(Math.random() * 1500)} vars={ _tmpArr } />
    )
  }
  return retArr
}

ReactDOM.render(
  <Container childs={ setupVariants() }/>,
  document.getElementById('services')
)
