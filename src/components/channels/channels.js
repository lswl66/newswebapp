import React from 'react'
import './channels.less'
import {Link} from 'react-router-dom'
import { changeOne } from '@redux/actions'
import { connect } from 'react-redux'

class Channels extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listChannelsTop : [
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
            ],
            listChannelsBottom : [
                {
                    title:'体育',
                    type:16           
                },
                {
                    title:'养生',
                    type:17         
                },
                {
                    title:'育儿',
                    type:18          
                },
                {
                    title:'汽车',
                    type:19            
                }
            ],
            a : 0
        }
    }
    componentDidMount(){
        if(localStorage.getItem('channelsTop')){
            console.log(localStorage.getItem('channelsTop'))
            this.setState({
                listChannelsTop:
                    JSON.parse(localStorage.getItem('channelsTop'))
            })
        }
        if(localStorage.getItem('channelsBottom')){
            this.setState({
                listChannelsBottom:
                    JSON.parse(localStorage.getItem('channelsBottom'))
            })
        }
    }
    clickmeDel (curIndex){
        if (curIndex!=0){
            console.log(curIndex)
            console.log(this.state.listChannelsTop[curIndex])
            let middleWare = this.state.listChannelsTop.splice(curIndex,1)
            console.log(middleWare[0])
            console.log(this.state.listChannelsTop)
            this.props.changeOne(this.state.listChannelsTop)
            this.state.listChannelsBottom.push(middleWare[0])
            this.setState({
                listChannelsTop:this.state.listChannelsTop,
                listChannelsBottom:this.state.listChannelsBottom,
                a : 0
            })
            localStorage.setItem(
                'channelsTop',
                JSON.stringify(this.state.listChannelsTop) 
            )
            localStorage.setItem(
                'channelsBottom',
                JSON.stringify(this.state.listChannelsBottom)
            )
        }
    }
    clickmeAdd (curIndex){
        console.log(curIndex)
        if (this.state.listChannelsTop.length < 16){
            console.log(curIndex)
            console.log(this.state.listChannelsBottom[curIndex])
            let middleWare = this.state.listChannelsBottom.splice(curIndex,1)
            console.log(middleWare[0])
            console.log(this.state.listChannelsBottom)
            this.state.listChannelsTop.push(middleWare[0])
            console.log(this.state.listChannelsTop)
            this.props.changeOne(this.state.listChannelsTop)
            this.setState({
                listChannelsBottom:this.state.listChannelsBottom,
                listChannelsTop:this.state.listChannelsTop
            })
            console.log(this.state.a)
            localStorage.setItem(
                'channelsTop',
                JSON.stringify(this.state.listChannelsTop) 
            )
            localStorage.setItem(
                'channelsBottom',
                JSON.stringify(this.state.listChannelsBottom)
            )
        }else if(this.state.listChannelsTop.length == 16){
            this.setState({a:1})
        }
    }
    render(){
        // let haveChannels = this.state.listChannelsTop.map((item,index)=>{
        //     if (item['boolean'] == true){
        //         return(item['title'])
        //     }
        // });
        // console.log(haveChannels)
        let listChannelsWillDel = this.state.listChannelsTop.map((item,index)=>{
            return (
                <span key={index} className='channels_item channels_item_top' onClick ={this.clickmeDel.bind(this,index)}>
                    {item['title']}
                </span>
            )
        });
        let listChannelsWillAdd = this.state.listChannelsBottom.map((item,index)=>{
            // if (item['boolean'] == false){
            return (
                <span key={index} className='channels_item' onClick ={this.clickmeAdd.bind(this,index)}>
                    {item['title']}
                </span>
            )
            // }
        });
        return(
            <div className='channels'>
                <div className='channels_head'>
                    <Link to='/'>
                        <span className='backBtn'></span>
                    </Link>
                    <span className='channels_head_title'>频道管理</span>
                </div>
                <div className='channels_main'>
                    <p>点击删除以下频道</p>
                    <div className='channels_main_del'>
                        {listChannelsWillDel}
                    </div>
                    <p>点击添加以下频道</p>
                    <p className={this.state.a == 1 ? 'show':'hide'}>最多16个频道，请先删除一些</p>
                    <div className='channels_main_add'>
                        {listChannelsWillAdd}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null,{changeOne})(Channels)
