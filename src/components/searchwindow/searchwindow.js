import React from 'react'
import './searchwindow.less'
import {Link} from 'react-router-dom'

class SearchWindow extends React.Component{
    render(){
        return(
            <div className="search_window">
                <div className="head">
                    <img src='https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/logo-2x.a7b8b9c7.png'/>
                </div>
                <Link to='/searchpage' className='tosearch'>
                    <div className="main">
                        <span>搜你想看</span>
                        <img src='https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/search-icon-3x.3d8b4860.png'/>
                    </div>
                </Link>
            </div>
        )
    }
}
export default SearchWindow
