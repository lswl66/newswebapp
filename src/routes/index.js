/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : index.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019/08/27 12:30:00
 * Description         : 路由配置
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '@pages/app/app'
import RoutePage from '@pages/route-page/route-page'
import NewsContent from '@components/newscontent/newscontent'
import SearchWindow from '@components/searchwindow/searchwindow'
import SearchPage from '@components/searchpage/searchpage'
import Channels from '@components/channels/channels'
import Extension from '@components/extension/extension'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={ App }></Route>
        <Route path="/route-page" component={ RoutePage }></Route>
        <Route path="/newscontent" component={ NewsContent }></Route>
        <Route path="/searchwindow" component={ SearchWindow }></Route>
        <Route path="/searchpage" component={ SearchPage }></Route>
        <Route path="/channels" component={ Channels }></Route>
        <Route path="/extension" component={ Extension }></Route>
      </Router>
    )
  }
}

export default Routes
