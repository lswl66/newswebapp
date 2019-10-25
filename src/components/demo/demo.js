/***************************************************************************************
 * Copyright           : 2019 - 2020
 * FileName            : demo.js
 * Author              : Hello 前端俱乐部 https://blog.shuipingguo.com/
 * Version             :
 * Date Of Creation    : 2019-07-29 10:30:00
 * Description         : 这是一个demo组件，包括了一个组件的最基本元素
 *                     :
 *                     :
 * Function List       :
 **************************************************************************************/

import React from 'react'
import { connect } from 'react-redux'
import './demo.less'
// import HttpClient from '../../api/http-client'
import { addOne } from '@redux/actions'
import PicturOne from '@components/picturone/picturone'
import PicturZero from '@components/picturzero/picturzero'
import PicturThree from '@components/picturthree/picturthree'

class Demo extends React.Component {
  /**
   * @desc 不用解释了吧，这是组件的构造函数
   * @param {*} props 
   */
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // HttpClient.getList({}, (rsp) => { console.log(rsp); });
  }

  dispatchReduxAction = () => {
    console.log('[demo] dispatchReduxAction');
    this.props.addOne(6)
  }

  /**
   * @desc 不用解释了吧，render函数
   */
  render() {
    let newsArr = [
      {
        list:[
          {
            title:'当互联网遇上古诗文 听纵论“网事”',
            label:'置顶',
            author:'央视新闻',
            comment:'评论 95',
            time:'3分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'国之大典，高度评价',
            label:'置顶',
            author:'新华网客户端',
            comment:'评论 24',
            time:'5分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'王毅：中美贸易战是美方挑起的，中方被迫做出必要、合理反应',
            label:'热',
            author:'人民日报海外网',
            comment:'评论 32',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/Rd3aFMyH4BxQmi',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
      {
        list:[
          {
            title:'恐龙的足印，为啥能保留一亿年？我们研究了一下，还挺有意思',
            label:'',
            author:'中国经济网',
            comment:'评论 0',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'纽约股市三大股指21日上涨',
            label:'',
            author:'新华网客户端',
            comment:'评论 2',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'现代人经常加班熬夜，要及时补充这7类营养',
            label:'',
            author:'北青网',
            comment:'评论 2',
            time:'12分钟前',
            img1:'https://p3.pstatp.com/list/pgc-image/RRUyWqV6XTTKqE',
            img2:'https://p3.pstatp.com/list/pgc-image/RdKn7Ed54fq3du',
            img3:'https://p3.pstatp.com/list/pgc-image/RfQdvKK9QJC2sB',
            app:''
          },
        ],
        type:3
      },
      {
        list:[
          {
            title:'成功了！马斯克通过SpaceX星链卫星发布首条推特',
            label:'',
            author:'中国新闻网',
            comment:'评论 3780',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/RfcNsYSX72puM',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
      {
        list:[
          {
            title:'当互联网遇上古诗文 听纵论“网事”',
            label:'置顶',
            author:'央视新闻',
            comment:'评论 95',
            time:'3分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'国之大典，高度评价',
            label:'置顶',
            author:'新华网客户端',
            comment:'评论 24',
            time:'5分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'王毅：中美贸易战是美方挑起的，中方被迫做出必要、合理反应',
            label:'热',
            author:'人民日报海外网',
            comment:'评论 32',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/Rd3aFMyH4BxQmi',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
      {
        list:[
          {
            title:'恐龙的足印，为啥能保留一亿年？我们研究了一下，还挺有意思',
            label:'',
            author:'中国经济网',
            comment:'评论 0',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'纽约股市三大股指21日上涨',
            label:'',
            author:'新华网客户端',
            comment:'评论 2',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'现代人经常加班熬夜，要及时补充这7类营养',
            label:'',
            author:'北青网',
            comment:'评论 2',
            time:'12分钟前',
            img1:'https://p3.pstatp.com/list/pgc-image/RRUyWqV6XTTKqE',
            img2:'https://p3.pstatp.com/list/pgc-image/RdKn7Ed54fq3du',
            img3:'https://p3.pstatp.com/list/pgc-image/RfQdvKK9QJC2sB',
            app:''
          },
        ],
        type:3
      },
      {
        list:[
          {
            title:'成功了！马斯克通过SpaceX星链卫星发布首条推特',
            label:'',
            author:'中国新闻网',
            comment:'评论 3780',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/RfcNsYSX72puM',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
      {
        list:[
          {
            title:'当互联网遇上古诗文 听纵论“网事”',
            label:'置顶',
            author:'央视新闻',
            comment:'评论 95',
            time:'3分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'国之大典，高度评价',
            label:'置顶',
            author:'新华网客户端',
            comment:'评论 24',
            time:'5分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'王毅：中美贸易战是美方挑起的，中方被迫做出必要、合理反应',
            label:'热',
            author:'人民日报海外网',
            comment:'评论 32',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/Rd3aFMyH4BxQmi',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
      {
        list:[
          {
            title:'恐龙的足印，为啥能保留一亿年？我们研究了一下，还挺有意思',
            label:'',
            author:'中国经济网',
            comment:'评论 0',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'纽约股市三大股指21日上涨',
            label:'',
            author:'新华网客户端',
            comment:'评论 2',
            time:'10分钟前',
            img1:'',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:0
      },
      {
        list:[
          {
            title:'现代人经常加班熬夜，要及时补充这7类营养',
            label:'',
            author:'北青网',
            comment:'评论 2',
            time:'12分钟前',
            img1:'https://p3.pstatp.com/list/pgc-image/RRUyWqV6XTTKqE',
            img2:'https://p3.pstatp.com/list/pgc-image/RdKn7Ed54fq3du',
            img3:'https://p3.pstatp.com/list/pgc-image/RfQdvKK9QJC2sB',
            app:''
          },
        ],
        type:3
      },
      {
        list:[
          {
            title:'成功了！马斯克通过SpaceX星链卫星发布首条推特',
            label:'',
            author:'中国新闻网',
            comment:'评论 3780',
            time:'',
            img1:'https://p3.pstatp.com/list/pgc-image/RfcNsYSX72puM',
            img2:'',
            img3:'',
            app:''
          },
        ],
        type:1
      },
    ];
    let newslist = newsArr.map((item,index)=>{
      if (item['type'] == 0){
        return(
          <PicturZero listitem={item['list']} key={index}></PicturZero>
        )
      }else if (item['type'] == 1){
        return(
          <PicturOne listitem={item['list']} key={index}></PicturOne>
        )
      }else{
        return(
          <PicturThree listitem={item['list']} key={index}></PicturThree>
        )
      }
    });
    return (
      <div className="demo">
        {newslist}
      </div>
    )
  }
}


export default connect(
  null,
  { addOne }
)(Demo)
