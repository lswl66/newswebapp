import React from 'react'
import {Link} from 'react-router-dom'

class PicturZero extends React.Component{
    render(){
        let itemlist = this.props.listitem.map((item,index)=>{
            return(
                <div key={index} className="pictur_zero_news">
                    <div className="news_title">
                        {item['title']}
                    </div>
                    <div className="news_about">
                        <span className={item['label'] == '' ? '':'news_label'}>{item['label']}</span>
                        <span className="news_author">{item['author']}</span>
                        <span className="news_comment">{item['comment']}</span>
                        <span className="news_time">{item['time']}</span>
                    </div>
                </div>
            )
        });
        return(
            <Link to="/newscontent" className="tocontent">
                <div className="news_item">{itemlist}</div>
            </Link>

        )
    }
}
export default PicturZero
