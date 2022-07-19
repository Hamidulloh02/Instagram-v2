import React, {useState, useEffect} from 'react'
 import {useLocation} from 'react-router-dom'
 import Axios from 'axios'
 import Navbar from './Component/Navbar'
 import "./Component//CSS/single_media.css"
 import "./Component/CSS/style.css"


function SinglePage() {
    const [count, setcount] = useState([])
    let location = useLocation()
    let k = location.state.index
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
    <div>
        {/* <Navbar/> */}
       {
           count.map((e, index) => {
               if(k === index){
                   return(
                       <>
                       <div className='container'>
                           <div className='main_text'>
                               <img className='singphoto' src={count[k].profile_img_src}/>
                               <h5 className='singname'>{count[k].nickName}</h5>
                               <button className='singbtn'>follower</button>
                           </div>
                           <div className='singfollow'>
                               <span className='me-5 bold'>15 публикаций</span>
                               <span className='me-5'>525 подписчиков</span>
                               <span className='me-5'>300 подписок</span>
                           </div>
                           <div>
                               <h4 className='singfulName'>{count[k].full_name}</h4>
                           </div>
                           <hr/>
                       </div>
                       
                       </>
                   )
               }
           })
       }
    </div>
  )
}

export default SinglePage