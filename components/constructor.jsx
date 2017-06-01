import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container.jsx'
import Variant from './variant.jsx'
import Header from './header.jsx'
import Row from './row.jsx'
import { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -50, scrollDuration: 400})

var self = this

var variants   = [
  { title: 'Дрессировка щенков', text: 'Выгуливаем собак по Москве и Москвоской области', background: '/images/dog6.jpg' },
  { title: 'Общий курс дрессировки', text: 'Дрессировка с профессиональными кинологами', background: '/images/dog7.jpg' },
  { title: 'Управляемая городская собака', text: 'Дрессировка с профессиональными кинологами', background: '/images/dog8.jpg' },
  { title: 'Коррекция поведения', text: 'Перевозка собак из одного пункта в другой', background: '/images/dog9.jpg' },
  { title: 'Социализация собаки', text: 'Лечим песиков', background: '/images/dog10.jpg' },
  { title: 'Выгул собак', text: 'Лечим песиков', background: '/images/dog11.jpg' },
  { title: 'Помощь в выборе щенка', text: 'Лечим песиков', background: '/images/dog12.jpg' },
  { title: 'Ветеринарная помощь на дом', text: 'Лечим песиков', background: '/images/dog13.jpg' },
  { title: 'Помощь в перевозке животных (зоотакси)', text: 'Лечим песиков', background: '/images/dog14.jpg' },
  { title: 'Няня для собаки', text: 'Лечим песиков', background: '/images/dog15.jpg' },
  { title: 'Фотосессия с животными', text: 'Лечим песиков', background: '/images/dog16.jpg' },
  { title: 'Хэндлинг', text: 'Лечим песиков', background: '/images/dog17.jpg' }
]


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
  <Header key="header" variants={ variants } mainTitle="Joyfuldog" mainDescription="Услуги для собак" />,
  document.getElementById('header')
)
ReactDOM.render(
  <Container childs={ setupVariants() } id="section1"/>,
  document.getElementById('services')
)
