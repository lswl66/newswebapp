import React from 'react'
import './nav.less'

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state={selectedIndex:0}
    }
    clickme(navIndex){
        console.log(navIndex)
        this.setState({
            selectedIndex:navIndex
        });
        console.log(this.state.selectedIndex)
    }
    render(){
        console.log(this.state.selectedIndex)
        let listNav = this.props.navList.map((item,index)=>{
            return(
                // <div key={index} className='nav_item'>
                    <span key={index} onClick={this.clickme.bind(this,index)} className={this.state.selectedIndex==index ? 'selected':''}>
                        {item['title']}
                    </span>
                // </div>
            )
        });
        return(
            <div className='nav'>
                {listNav}
            </div>
        )
    }
}

export default Nav
