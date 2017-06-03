import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container.jsx'
import Variant from './variant.jsx'
import Header from './header.jsx'
import Row from './row.jsx'
import { configureAnchors } from 'react-scrollable-anchor'


configureAnchors({offset: -50, scrollDuration: 400})


var variants   = [
  { title: 'Дрессировка щенков', text: 'Выгуливаем собак по Москве и Москвоской области',      background: '/images/labrador.svg' },
  { title: 'Общий курс дрессировки', text: 'Дрессировка с профессиональными кинологами',       background: '/images/labrador.svg' },
  { title: 'Управляемая городская собака', text: 'Дрессировка с профессиональными кинологами', background:  '/images/labrador.svg' },
  { title: 'Коррекция поведения', text: 'Перевозка собак из одного пункта в другой',           background: '/images/labrador.svg' },
  { title: 'Социализация собаки', text: 'Лечим песиков',                                       background: '/images/labrador.svg' },
  { title: 'Выгул собак', text: 'Лечим песиков',                                               background: '/images/labrador.svg' },
  { title: 'Помощь в выборе щенка', text: 'Лечим песиков',                                     background: '/images/labrador.svg' },
  { title: 'Ветеринарная помощь на дом', text: 'Лечим песиков',                                background: '/images/labrador.svg' },
  { title: 'Помощь в перевозке животных (зоотакси)', text: 'Лечим песиков',                    background: '/images/labrador.svg' },
  { title: 'Няня для собаки', text: 'Лечим песиков',                                           background: '/images/labrador.svg' },
  { title: 'Фотосессия с животными', text: 'Лечим песиков',                                    background: '/images/labrador.svg' },
  { title: 'Хэндлинг', text: 'Лечим песиков',                                                  background: '/images/labrador.svg' }
]


class Constructor extends React.Component {
  constructor(props) {
    super(props)
  }
  variantClick() {
    console.log(`Holyluis! ${Object.keys(this)}`);
  }
  render() {
    return (
       this.props.childs
    )
  }
}
var setupVariants = () => {
  var retArr = []
  for( var i = 0; i < variants.length; i + 2) {
    var _tmpArr = []
    variants.splice(i, i + 2).forEach( (el) => {
      _tmpArr.push(
        <Variant key={ 'variant-' + parseInt(Math.random() * 1500) }
                 title={ el.title }
                 background={ el.background }
                 onClick={  }/>
      )
    })
    retArr.push(
      <Row key={ 'row' + parseInt(Math.random() * 1500)} vars={ _tmpArr } />
    )
  }
  return retArr
}

ReactDOM.render(
  <Constructor key="headerConstruct" childs={ <Header key="header" variants={ variants } mainTitle="Joyfuldog" mainDescription="Услуги для собак" /> } />,
  document.getElementById('header')
)
ReactDOM.render(
  <Constructor key="variantsConstruct" childs={ <Container childs={ setupVariants() } id="section1"/> } />,
  document.getElementById('services')
)
