import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component{

  render(){


    return(
      <div className='splashcontainer'>
        <div className='splashpagescreener'>
          <div className='splashholder'>
            <div className='splashtitle'>
              W &nbsp; A &nbsp; N &nbsp; T &nbsp; E &nbsp; D &nbsp; L &nbsp; Y
            </div>
            <Link to='/users' className='continue'>browse all users</Link>
          </div>
        </div>
      </div>

    );

  }


}

export default SplashPage;
