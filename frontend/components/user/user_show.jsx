import React from 'react';
import Loading from '../loading/loading';
import {Link, withRouter} from 'react-router-dom';
class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      check: false,
      newSkill: ''
    };
    this.skillsMapper = this.skillsMapper.bind(this);
    this.endorsementMapper = this.endorsementMapper.bind(this);
    this.updateSkill = this.updateSkill.bind(this);
    this.createSkill = this.createSkill.bind(this);
    this.createEndorsement = this.createEndorsement.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id).then(
      () => this.props.fetchSkills(this.props.match.params), this.setState({check: true}));

  }

  componentWillMount(){
    this.props.fetchUser(this.props.match.params.id).then(
      () => this.props.fetchSkills(this.props.match.params), this.setState({check: true}));

  }


  componentWillReceiveProps(nextProps) {

    // note to self: when the same component is not rerendering new props when
    // clicking on link, it is most likely because of a typo, in this case,
    // this.props.match.params.id instead of nextProps.match.params.id

    if(nextProps.match.params.id !== this.props.match.params.id){

      this.props.fetchUser(nextProps.match.params.id).then(
        () => this.props.fetchSkills(nextProps.match.params),
        this.setState({check: true}));

    }


}

  createEndorsement(e){
    const skill = e.target.id;
    const user_id = this.props.currentUser.id;
    const image_url = this.props.currentUser.image_url;
    // console.log(image_url);
    this.props.createEndorsement({endorsement: {user_id: user_id, skill_id: skill, image_url: image_url}}).then(()=> this.props.fetchSkills({id: this.props.match.params.id}));
  }


  endorsementMapper(endorsements){
    if(!endorsements){
      return null;
    }
    const ar = [];
    const counter = endorsements.length > 10 ? 10 : endorsements.length;
    for(var i = 0; i < counter; i ++){
      // console.log(endorsements[i]);
      var profilelink = `/users/${endorsements[i].user_id}`;
      // console.log(profilelink);
      ar.push(
        <Link key={i} to={profilelink} className='endorsementlink'>
          <img className='endorsepic' src={endorsements[i].image_url}/>
          {endorsements[i].user_id}
        </Link>
      );
    }
    return(
      ar
    );
  }

  createSkill(){
    const skill = this.state.newSkill;
    const user = this.props.match.params.id;
    this.props.createSkill({skill: {skill: skill, user_id: user}}).then(() => this.props.fetchSkills(this.props.match.params));

  }

  updateSkill(e){
    this.setState({newSkill: e.target.value}, this.setState({newSkill: e.target.value}));
  }



  skillsMapper(){
    var skills = this.props.skills;
    const ar = [];
    skills = skills.sort((a,b) => {
      return b.len - a.len;
    });
    skills.forEach((skill, idx) => {
      const endorsements = skill.endorsers ? skill.endorsers.length : null;
      ar.push(

        <div key={idx} className='skillholder'>
            <div className='endorsementnum'>{endorsements}</div>
          {this.props.currentUser ? <div id={skill.id} className='createendorsement' onClick={this.createEndorsement}>+</div> : <Link className='createendorsement' to='/login'>+ </Link>}
            <div className='skill' >
            <div className='skillname'>{skill.skill}</div>
            </div>
            <div className='endorsementholder'>{this.endorsementMapper(skill.endorsers)}</div>
        </div>


      );
    });
    return (
      ar
    );
  }

  render(){
    // console.log('props', this.props);
    const user = this.props.user;

    if(this.state.check === false || !this.props.user){
      return(
        <Loading/>
      );
    }

    const name = user.f_name + ' ' + user.l_name;

    // future todos:
    //   create profile component
    //   create skill component
    //   create skill form component

    return(

      <div className='usershowcontainer'>

        <div className='userleftpanel'>
          <img className='userprofilepic' src={user.image_url}/>
          <div className='usershowprofile'>
           <div className='profileline'>username: {user.username}</div>
            <div className='profileline'>name: {name}</div>
            <div className='profileline'>occupation: {user.occupation ? user.occupation : 'unknown'}</div>
            <div className='profileline'>location: {user.location ? user.location : 'unknown'}</div>
            <div className='profileline'>age: {user.age ? user.age : 'unknown'}</div>
            <div className='profileline'>gender: {user.gender ? user.gender : 'unknown'}</div>
          </div>
        </div>

        <div className='userrightpanel'>
          <div className='skillsheader'>S &nbsp; K &nbsp; I &nbsp; L &nbsp; L &nbsp; S </div>
          <div className='skillscontainer'>
            {this.state.check ? this.skillsMapper() : null}
          </div>

          <div className='skillform'>
            <input className='skillinput' onChange={this.updateSkill} value={this.state.newSkill} placeholder='add a new skill?'/>
            <div onClick={this.createSkill} className='skillsubmit'>submit</div>
          </div>
        </div>

      </div>
    );

  }


}

export default withRouter(UserShow);
