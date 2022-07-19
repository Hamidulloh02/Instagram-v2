import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import Search from '../Component/Search'
const Navbar = () => {
    const [uzgar, setuzgar] = useState(false);
    return (
      <div className='fixedd'>
       <div className="row">
        <div className='container mt-3 medianavbar'>
          <div className='row'>
            <div className='col-4 ins'><img className='png_instagramm' src="./imges/instagram.png" alt="instagram" /></div>
            <div className='col-4'>
                <Search/>
                {
                    uzgar? <Search/>:null
                  }
            </div>   
            <div className='col-4 ico'>
              <Link to="/">
                <HomeIcon className='me-2'/>
              </Link>
              <OfflineBoltIcon className='me-2 '/>          
              <HealthAndSafetyIcon className='me-2'/>
              <AssignmentIcon className='me-2'/>
              <avoriteBorderIcon className='me-2'/>
              <FavoriteBorderIcon className='me-2'/>
              < AccountCircleIcon className='me-2'/>
            </div>
          </div>
        </div>
        <hr/>
       </div>
       <div className='mediamenu1'>
       <div className=' ins text-center'><span className='mediainstagramlogo '><i>Instagram</i></span></div>
       </div>
       <div className='mediamenu2'>
         <p className='text-center'>
         <Link to="/">
                <HomeIcon className='mediamenuicon'/>
              </Link>
              {/* <OfflineBoltIcon className='mediamenuicon '/>           */}
              <HealthAndSafetyIcon className='mediamenuicon'/>
              <AssignmentIcon className='mediamenuicon'/>
              <FavoriteBorderIcon className='mediamenuicon'/>
              < AccountCircleIcon className='mediamenuicon'/>
         </p>
       </div>
      </div>
        
    );
};

Navbar.propTypes = {};

export default Navbar;
