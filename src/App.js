
import Navbar from './Component/Navbar'
import Left from './Component/Left'
import Left_test from './Component/Left_test';
// import Single_user from './Component/Single_user';
import { BrowserRouter, Route, Routes , Outlet} from 'react-router-dom';
import Right from './Component/Right';
import NewLeft from './Component/NewLeft';
import SinglePage from './SinglePage';
function App() {
  return (
    <div className="container">
       <Navbar />
       {/* <Right/> */}
       <div>
         {/* <Outlet/> */}
       </div>
       <Left/>
       <NewLeft/>
       {/* <Left_test/> */}
       {/* <Single_user/> */}
       {/* <SinglePage /> */}

    </div>
  );
}

export default App;
