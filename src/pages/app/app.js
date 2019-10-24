/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : app.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-10-23 11:30:00
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
import { connect } from 'react-redux'

class App extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)
    let navInitialList = [
      {
        title:'推荐',
        type:0            
      },
      {
          title:'热点',
          type:1        
      },
      {
          title:'娱乐',
          type:2          
      },
      {
          title:'财经',
          type:3          
      },
      {
          title:'科技',
          type:4           
      },
      {
          title:'军事',
          type:5            
      },
      {
          title:'娱乐',
          type:6            
      },
      {
          title:'游戏',
          type:7           
      },
      {
          title:'社会',
          type:8           
      },
      {
          title:'旅游',
          type:9           
      },
      {
          title:'探索',
          type:10           
      },
      {
          title:'历史',
          type:11          
      },
      {
          title:'故事',
          type:12
      },
      {
          title:'美文',
          type:13
      },
      {
          title:'美食',
          type:14
      },
      {
          title:'时尚',
          type:15
      }
    ]
    if(localStorage.getItem('channelsTop')){
      console.log(JSON.parse(localStorage.getItem('channelsTop')))
      navInitialList = JSON.parse(localStorage.getItem('channelsTop'))
    }
    this.state = {
      judgeBoolean:true,
      navArr:navInitialList
    }
    console.log(this.state.judgeBoolean)
  }
  /**
   * @desc 不用解释了吧，render函数
   */
  clickme(){
    console.log(this.props)
    console.log(this.state.judgeBoolean)
    if(this.state.judgeBoolean == true){
      this.setState({
        judgeBoolean:false
      });
      console.log(this.state.judgeBoolean)
    }else{
      this.setState({
        judgeBoolean:true
      });
      console.log(this.state.judgeBoolean)
    }
  }
  render() {
    console.log(this.state.judgeBoolean)
    console.log(this.props.arr)
    console.log(this.props)
    let navList = this.props.arr || this.state.navArr
    return (
      <div className="app">
        <div className="home_head">
          <div className="title">
            <i className="icon_mail" onClick={this.clickme.bind(this)}></i>
            <i className="icon_name"></i>
            <i className="icon_update"></i>
            <Link to="/searchwindow">
              <i className="icon_search"></i>
            </Link>
          </div>
          <div>
            <Nav navList={navList}></Nav>
            <Link to='/channels'>
              <div className="nav_more">
                <span className="nav_more_horizontal"></span>
                <span className="nav_more_virtical"></span>
              </div>
            </Link>
          </div>
        </div>
        <Demo></Demo>
        <div className={this.state.judgeBoolean == false?'popup':'nopopup'}>
          <div className="popup_box">
            <img src="https://s3a.pstatp.com/growth/mobile_list/image/popup_banner_6006ac97.png"/>
            <p>已加载好您感兴趣的头条</p>
            <div>立即打开</div>
            <i onClick={this.clickme.bind(this)}></i>
          </div>
        </div>
        <div className='foot'>
          <div className='foot_appIcon'></div>
          <span>今日头条</span>
          <div className='foot_toApp'>打开</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps =  state =>{
  console.log(state)
  let id = state.oneReducer.id
  console.log(id)
  return({arr:id})
}

export default connect(mapStateToProps)(App)
