import React from 'react';
import {Link} from 'react-router-dom';
import SideBar from 'react-sidebar';
const mql = window.matchMedia(`(min-width: 800px)`);
class Sider extends React.Component {

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }

      componentWillUnmount(){
          mql.removeEventListener('change', this.mediaQueryChanged);
      }
     
    render()
    {
        return(
            <>
            <SideBar
                    pullRight = {true}
                    styles={{
                            sidebar: {backgroundColor : '#FFFFFF', 
                            position : 'fixed',
                            }
                        }}
                    open={this.props.open}
                    sidebar={
                        <>
                         <div className="float-right p-3 cursor-pointer z-50">
                            <span onClick={this.props.close}>
                                <img src={require('../image/ei_close.svg')} alt=""/>
                            </span>
                        </div>
                        <div className="flex flex-col mx-24 py-20 text-3xl font-segoe-UI" style={{color : '#A19F9C'}}>
                        <ul>
                            <li className="my-3"><Link to="/about">About us</Link></li>
                            <li className="my-3"><Link to="/church">Church</Link></li>
                            <li className="my-3"><Link to="/music">Music</Link></li>
                            <li className="my-3"><Link to="/ministries">Ministries</Link></li>
                            <li className="my-3"><Link to="/events">Events</Link></li>
                            <li className="my-3"><Link to="/leaders">Leaders</Link></li>
                            <li className="my-3"><Link to="/testimonies">Testimonies</Link></li>
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