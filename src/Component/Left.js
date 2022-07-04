import React from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {Link} from 'react-router-dom'

import Axios from 'axios'


class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Massive: [],
        };
    }
componentDidMount = () => {
    this.getUser()
}
getUser(){
    Axios.get('http://myjson.dit.upm.es/api/bins/3hnd')
    .then((response) => {
        console.log(response)
        this.setState({Massive: response.data})
    })        
    }
    render() {
        const {Massive} = this.state
        return (
            <div className='d-flex'>
                <div className='Card col-4 top_margine'>
                    {/* <div className='col-6 row'>
                        <div className='d-flex'>
                              <img className='avatar w-25 mirziyoyeva' src="./imges/hamidullo.jpg" alt="" />  
                            <div className='a'>
                           <Link to="/single_user">
                               <div className='d-flex'>
                                    <p className='ms-2 mt-2'>Nematilloyev_Hamidullo</p>
                                    <p className='point mt-2'>...</p>               
                               </div>

                            </Link>                                 
                            </div>

                        </div>
                        <div>
                            <img className=' shoes' src="./imges/image-product-1.jpg" alt="" />
                            <FavoriteBorderIcon className='me-2'/>
                            <ChatBubbleOutlineIcon className='me-2'/>
                            <TelegramIcon/>
                        </div>                                                           
                    </div> */}
                </div>
                <div className='col-4 fixed medialeft'>
                <div className='d-flex'>
                           <img className='avatar2 mirziyoyeva' src="./imges/hamidullo.jpg" alt="" />
                           <p className='mt-2 ms-2'>Nematilloyev_hamidullo</p>
                            {/* <p className='point'>...</p> */}
                </div>
                <div className='text-secondary mb-2 recomon'>Recommendations for you <span className='text-primary ms-5'>all</span></div>
                {
                    (Massive.length > 0)?

                    this.state.Massive.map(element => {
                        
                        return(
                            <>                         
                            <div className='d-flex '>
                                    <img className='avatar3 mirziyoyeva' src={element.profile_img_src} alt="" />
                                    <p className=' ms-2 full_name ms-5'>
                                        {element.full_name}
                                        <br/>
                                       <span className='nick_Name'>follow:{element.nickName}</span>  
                                    </p>
                                    {/* <p className='text-secondary'>{element.nickName}</p> */}
                                    {/* <p className='mt-2 ms-2'>Hamidullo</p> */}
                                    <p className='follow  ms-5  text-primary'>follow</p>
                            </div>
                            {/* <p className='nick_Name'>{element.nickName}</p>                             */}
                            </>

                                                
                        )
                  
                    })
                    :
                    <h4>Looding...</h4>
                }
                 <p className='text-secondary w-50 recomon4 ms-2'>
                    InformationHelp
                    PressAPIJobsPrivacy
                    TermsPlacesPopular 
                    accountsHashtags 
                    LanguageEnglish
                 </p>
                 <p className='text-secondary recomon4 w-50'>
                 © 2022 INSTAGRAM FROM META
                 </p>
                </div>

            </div>
            
        );
    }
}

Left.propTypes = {};

export default Left;
