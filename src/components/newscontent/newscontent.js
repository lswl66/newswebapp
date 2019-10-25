import React from 'react'
import './newscontent.less'
import {Link} from 'react-router-dom'
import PicturOne from '@components/picturone/picturone'
import PicturZero from '@components/picturzero/picturzero'
import PicturThree from '@components/picturthree/picturthree'

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
        let listAbout = [
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
            {
                list:[{
                    title:'谁有比较好的项目 或者好的产品 可以一起在不同区域推广的',
                    img1:'',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'靓泛创作',
                    comment:'111条评论',
                    label:'',
                    time:''   
                }],
                type:0
            },
            {
                list:[{
                    title:'38岁小伙报恩48岁老板娘，大姐上台，涂磊直呼-好漂亮啊！有气质',
                    img1:'http://p3.pstatp.com/list/p1901/gs69uoigir8h6obsmamb00002e40020v02002b9005',
                    img2:'',
                    img3:'',
                    app:'打开APP',
                    author:'乐乐娱乐18',
                    comment:'23条评论',
                    label:'',
                    time:''   
                }],
                type:1
            },
            {
                list:[{
                    title:'秋冬穿什么鞋既保暖又时髦？学会这几种技巧，帅气还是淑女都不难',
                    img1:'http://p3.pstatp.com/list/pgc-image/3874c14794cd4c279f4fa66e02812d24',
                    img2:'http://p1.pstatp.com/list/pgc-image/d7f314814ac2428db0f4d3cde03726d5',
                    img3:'http://p3.pstatp.com/list/pgc-image/1efe15fae2fe4d7fb9d733e472c3a83b',
                    app:'打开APP',
                    author:'时尚扒褂',
                    comment:'11条评论',
                    label:'',
                    time:''   
                }],
                type:3
            },
        ];
        let arrAbout = listAbout.map((item,index)=>{
            if(item['type'] == 0){
                return(
                    <PicturZero listitem={item['list']} key={index}></PicturZero>
                )
            }else if(item['type'] == 1){
                return(
                    <PicturOne listitem={item['list']} key={index}></PicturOne>
                )
            }else{
                return(
                    <PicturThree listitem={item['list']} key={index}></PicturThree>
                )
            }
        });
        let searchList = [
            '宇宙神式运载火箭价格',
            '卫星运载火箭介绍',
            '土星5号运载火箭介绍',
            '银河3号运载火箭介绍',
            '土星1号运载火箭介绍',
            '银河3号运载火箭价格',
            '卫星运载火箭是什么',
            '宇宙二号运载火箭价格',
            '猎鹰5号运载火箭介绍',
            '土星5号运载火箭价格',
        ]
        let searchArr = searchList.map((item,index)=>{
            return(
                <span className='search_item'>{item}</span>
            )
        });
        return(
            <div className='news_content'>
                <div className='top'>
                    <div className='top_appIcon'></div>
                    <span>今日头条</span>
                    <Link to='/extension'>
                        <div className='top_toApp'>打开</div>
                    </Link>
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
                        <Link to='/extension'>
                            <div className='app_extension1'>
                                打开今日头条，查看更多图片
                                <i></i>
                            </div>
                        </Link>
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
                        <Link to='/extension'>
                            <div className='app_extension2_bottom'>
                                <span>打开APP</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='about'>
                    <div className='willlike'>
                        <div className='about_title'>
                            <i></i>
                            猜你喜欢
                        </div>
                        {arrAbout}
                    </div>
                    <div className='search_about'>
                        <div className='about_title'>
                            <i></i>
                            搜索
                        </div>
                        <div className='search_about_inner'>
                            {searchArr}
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <div className='foot_appIcon'></div>
                    <span>今日头条</span>
                    <Link to='/extension'>
                        <div className='foot_toApp'>打开</div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default NewsContent
