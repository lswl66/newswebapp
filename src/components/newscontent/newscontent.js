import React from 'react'
import './newscontent.less'

class NewsContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            a:0
        }
    }
    clickme(){
        this.setState({
            a:1
        })
    }
    render(){
        return(
            <div className='news_content'>
                <div className='top'>
                    <div className='top_appIcon'></div>
                    <span>今日头条</span>
                    <div className='top_toApp'>打开</div>
                </div>
                <div className='main'>
                    <div className='news_title'>
                        成功了！马斯克通过SpaceX星链卫星发布首条推特
                    </div>
                    <div className='news_author'>
                        <div className='news_author_left'>
                            <img src='https://p3.pstatp.com/thumb/97d001bf3f3cba72913'/>
                            <span>中国新闻网</span>
                            <i></i>
                        </div>
                        <div className='news_author_right'>
                            2天前 . 1612评论
                        </div>
                    </div>
                    <div className='news_inner'>
                        <p>
                            中新网10月22日电 据外媒报道，当地时间22日，美国太空探索技术公司（SpaceX）首席执行官埃隆·马斯克使用星链(Starlink)卫星，发出了他的第一条推文。
                        </p>
                        <p>
                            据报道，马斯克在社交网站上发文称，“通过Starlink卫星发送了这条推文。”随后，他又发布了一条称，“哇，它成功了。”
                        </p>
                        <img src='https://p3.pstatp.com/large/pgc-image/RfcNsYSX72puM'/>
                        <div className='app_extension1'>
                            打开今日头条，查看更多图片
                            <i></i>
                        </div>
                        <p>
                            图片来源：马斯克社交网站账户截图。
                        </p>
                        <p>
                            据报道，Starlink卫星网络旨在实现全球互联网“无缝覆盖”，它的价格也不会很昂贵。据该公司称，Starlink互联网将是一种低成本、高性能的空基互联网通信解决方案。
                        </p>
                        <p>
                            截至目前，SpaceX已经发射了计划的12000颗卫星中的62颗。SpaceX还申请再发射30000颗卫星，以完成Starlink项目，使卫星总数达到42000颗。
                        </p>
                        <div className={this.state.a == 0 ? 'hide':''}>
                            <p>
                                2018年5月，Starlink的成本已达到100亿美元。
                            </p>
                            <p>
                                部分天文学家担心，当空中“布满”马斯克的卫星，或将阻碍地面望远镜的视野，并影响其他卫星运行。
                            </p>
                        </div>
                    </div>
                    <div onClick={this.clickme.bind(this)} className={this.state.a == 0 ? 'app_extension2' : 'hide'}>
                        <div className='app_extension2_top'>
                            <i className='animation'></i>
                        </div>
                        <div className='app_extension2_bottom'>
                            <span>打开APP</span>
                        </div>
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
export default NewsContent
