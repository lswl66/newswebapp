import React from 'react'
import './searchpage.less'
import {Link} from 'react-router-dom'

class SearchPage extends React.Component{
    render(){
        let searchArr = [
            {
                title:'陈思诚名誉权案胜诉',
                label:'https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/tag_rec-3x.6824739a.png'
            },
            {
                title:'优衣库辱韩停播广告',
                label:''
            },
            {
                title:'助兴鹤仙舞音乐',
                label:''
            },
            {
                title:'重庆将取消老年证',
                label:'https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/tag_hot-3x.1ee2cb38.png'
            },
            {
                title:'南昌一医院输错液',
                label:'https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/tag_hot-3x.1ee2cb38.png'
            },
            {
                title:'杨丽萍别墅重新开放',
                label:''
            },
            {
                title:'怎样做发面油条',
                label:''
            },
            {
                title:'海竿串钩怎么制作',
                label:''
            },
            {
                title:'霜降赏红叶地图',
                label:'https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/tag_hot-3x.1ee2cb38.png'
            },
            {
                title:'近在咫尺的爱恋电影',
                label:''
            },
            {
                title:'足球对战小游戏',
                label:''
            },
            {
                title:'哈佛录取潘石屹之子',
                label:''
            },
            {
                title:'灰糯鳗介绍',
                label:''
            },
            {
                title:'香醋和陈醋区别',
                label:''
            }
        ];
        let listSearch = searchArr.map((item,index)=>{
            return(
                <div className='search_page_inner' key={index}>
                    <Link to='/newscontent' className='tocontent'>
                        <span>{item['title']}</span>
                        <img src={item['label']}/>
                    </Link>
                </div>
            )
        });
        return(
            <div className='search_page'>
                <div className='search_page_head'>
                    <img src='https://sf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser//images/search-icon-3x.3d8b4860.png'/>
                    <input placeholder='请输入搜索内容'></input>
                    <Link to="/searchwindow" className='tosearch'>
                        <span>取消</span>
                    </Link>
                </div>
                <p>猜你想看</p>
                <div className='search_page_main'>
                    {listSearch}
                </div>
            </div>
        )
    }
}
export default SearchPage
