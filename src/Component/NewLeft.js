import React, {useState, useEffect, Children} from 'react';
import Axios from 'axios'
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Like from './Like';
import Comment from '../Component/Comment'
import { Link } from 'react-router-dom'


function NewLeft(props) {
    const [count, setcount] = useState([])
    let data  = 'Hamidullo'
    useEffect(() => {
        Axios
          .get("http://myjson.dit.upm.es/api/bins/3m4h")
          .then((response) => {
            const data = response.data;
            setcount(data);
            console.log(response.data)
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <>
     {/* <Carusel/> */}
    {
            count.map((element, index) => {   
                        return(
                           <>
                           
                        <div className='Card col-4 '>
                            <div className='col-6 row'>
                                {/* <Like to='/singlepage'> */}
                                <Link className='a' to='/singlepage' state={{index:index}}>
                                 <div className='d-flex'>
                                   <img className='avatar w-25 mirziyoyeva' src={element.profile_img_src} alt="" />
                                   <p className='mt-2 ms-2'>{element.nickName}</p>
                                    <p className='point'>...</p>
                                </div>                                 
                                </Link>
                          
                                {/* </Like> */}
                                

                                <div>
                                    <img className=' shoes' src={element.profile_img_src} alt="" />                            
                                    <div className="d-flex ms-1 mt-4">
                                    <Like/>
                                    <ChatBubbleOutlineIcon className='mt-2 me-2'/>
                                    <TelegramIcon className="mt-2 "/>                                
                                    </div>
                                    <p>{element.last_post.full_text}</p> 
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
    }
    
    </>
  )
}

export default NewLeft