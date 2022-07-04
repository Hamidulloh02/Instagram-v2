import React from 'react';
import Axios from 'axios'
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Likes from './Like';
import Comment from '../Component/Comment'
import { Like } from 'react-router-dom'


class Left_test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Massive: []
        };
    }
    componentDidMount(){
        Axios.get('http://myjson.dit.upm.es/api/bins/3m4h')
        .then((response) => {
            console.log(response)
            this.setState({ Massive: response.data})
            

        })
        // console.log(this.state.usersData)
    }
    render() {
         return(
            this.state.Massive.map((element, index) => {   
                return(
                   <>
                <div className='Card col-4'>
                    <div className='col-6 row'>
                        {/* <Like > */}
                        <div className='d-flex'>
                           <img className='avatar w-25 mirziyoyeva' src={element.profile_img_src} alt="" />
                           <p className='mt-2 ms-2'>{element.nickName}</p>
                            <p className='point'>...</p>
                        </div>                            
                        {/* </Like> */}

                        <div>
                            <img className=' shoes' src={element.profile_img_src} alt="" />
                            <p>{element.last_post.full_text}</p>            
                            <div className="d-flex ms-1 mt-4">
                            <Likes/>
                            <ChatBubbleOutlineIcon className='mt-2 me-2'/>
                            <TelegramIcon className="mt-2 "/>                                
                            </div>
                            <span className="views">Views:9 452</span>
                            <br/>
                            {/* <span className='text-secondary tex '>1 hour ago</span> */}
                            

                        </div>                                                           
                    </div>
                    <Comment className="w-100"/>
                </div>
                   </>
                )
            })                           
         )            


        }
}



export default Left_test;

