import React from 'react';
import Loading from '../loading/loading';
import {Link} from 'react-router-dom';

class UserIndex extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      check: false
    };
    this.userMapper.bind(this.userMapper);
  }

  componentDidMount(){
    this.props.fetchUsers().then(() => this.setState({check: true}));
  }

  userMapper(){
    const ar = [];
    this.props.users.forEach((user, idx) => {
      const profilelink = `/users/${user.id}`;
      // console.log(user);
      ar.push(

        <Link to={profilelink} key={idx} className='indexprofile'>
          <div className='indexcoverpic'></div>
          <img className='indexprofilepic' src={user.image_url}/>
            <div className='indexprofilename'>{user.f_name + ' ' + user.l_name}</div>
        </Link>

      );
    });
    return (
      ar
    );
  }

  render(){

    if(this.state.check === false){
      return(
        <Loading/>
      );
    }


    return(
      <div className='userindexcontainer'>
        <div className='profileholder'>{this.userMapper()}</div>
      </div>
    );

  }

}

export default UserIndex;
