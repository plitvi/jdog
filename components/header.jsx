import React from 'react'
import { goToAnchor } from 'react-scrollable-anchor'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      variants: this.props.variants,
      isScrolledDown: false,
      currentBackground: 0
    }
  }
  setTimer () {
    const { variants } = this.state
    const self = this
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.updateBackground.bind(this), 5000)
  }
  updateBackground () {
    const newBackgrounId = parseInt(Math.random() * 11)
    console.log(`New ID = ${newBackgrounId}`);
    this.setState({
      currentBackground: newBackgrounId
    }, this.setTimer)
  }
  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop
    if(scrollTop >= 100 && !this.state.isScrolledDown) {
      goToAnchor('section1')
      this.setState({
        isScrolledDown: true
      })
    }
    if(scrollTop === 0) {
      this.setState({
        isScrolledDown: false
      })
    }
  }
  componentDidMount() {
    this.setTimer()
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  slideDown() {
    goToAnchor('section1')
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const  variants  = [
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
    return (
            <div className="header">
              { variants.map((variant) => {
                return (
                  <img src={ variant.background } className={ variants.indexOf(variant) === this.state.currentBackground ? '' : 'darken' } />
                )
              })}
              <div className="header-title">
                <h1> { this.props.mainTitle } </h1>
                <p> { this.props.mainDescription } </p>
                <span className="glyphicon glyphicon-menu-down" onClick={ this.slideDown }></span>
              </div>
            </div>
      )
  }
}
