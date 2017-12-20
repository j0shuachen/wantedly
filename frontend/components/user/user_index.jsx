import React from 'react';
import Loading from '../loading/loading';
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
      ar.push(

        <div key={idx} className='indexprofile'>
          <div className='indexcoverpic'></div>
          <img className='indexprofilepic' src={user.image_url}/>
            <div className='indexprofilename'>{user.f_name + ' ' + user.l_name}</div>
        </div>

      );
    });
    return (
      ar
    );
  }

  render(){
    console.log(this.props);

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
