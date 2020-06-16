import React from 'react';
import {Link} from 'react-router-dom';
import SideBar from 'react-sidebar';
const mql = window.matchMedia(`(min-width: 800px)`);

class Sider extends React.Component {

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }
     
      componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
      }
      
    render()
    {
        const sidebar = {
            backgroundColor : '#FFFFFF'
        }

        return(
            <>
            <SideBar
                    pullRight = {'true'}
                    styles={{
                            sidebar : sidebar
                        }}
                    open={this.props.open}
                    sidebar={
                        <>
                         <div className="float-right p-3 cursor-pointer">
                            <span onClick={this.props.close}>
                                <img src={require('../image/ei_close.svg')} alt=""/>
                            </span>
                        </div>
                        <div className="flex flex-col mx-24 py-20 text-3xl" style={{color : '#A19F9C'}}>
                        <ul>
                            <li className="my-3"><Link to="">Church</Link></li>
                            <li className="my-3"><Link to="">Music</Link></li>
                            <li className="my-3"><Link to="">Ministries</Link></li>
                            <li className="my-3"><Link to="">Events</Link></li>
                            <li className="my-3"><Link to="">Leaders</Link></li>
                            <li className="my-3"><Link to="">Testimonies</Link></li>
                        </ul>
                        </div>
                    </>
                    }>
                        {this.props.children}
                </SideBar>
            </>
        )
    }
}

export default Sider;