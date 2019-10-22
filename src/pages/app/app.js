/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : app.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-30 10:30:00
 * Description         : 默认路由试图对应的组件 '/'
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import './app.less'
import Demo from '@components/demo/demo'
import Nav from '@components/nav/nav'
import { Link } from 'react-router-dom'


class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    let navList = [
      {title:'推荐'},
      {title:'热点'},
      {title:'社会'},
      {title:'娱乐'},
      {title:'科技'},
      {title:'体育'},
      {title:'财经'},
      {title:'军事'},
      {title:'时尚'}
    ]
    return (
      <div className="app">
        <div className="head">
          <div className="title">
            <i className="icon_mail"></i>
            <i className="icon_name"></i>
            <i className="icon_update"></i>
            <i className="icon_search"></i>
          </div>
          <div>
            <Nav navList={navList}></Nav>
            <div className="nav_more">
              <span className="nav_more_horizontal"></span>
              <span className="nav_more_virtical"></span>
            </div>
          </div>
        </div>
        <Demo></Demo>
      </div>
    )
  }
}


export default App
