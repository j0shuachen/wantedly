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
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({check: true}));
    this.props.fetchSkills(this.props.match.params);
  }

  componentWillMount(){
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({check: true}));
    this.props.fetchSkills(this.props.match.params);
  }


  componentWillReceiveProps(nextProps) {

    // note to self: when the same component is not rerendering new props when
    // clicking on link, it is most likely because of a typo, in this case,
    // this.props.match.params.id instead of nextProps.match.params.id

    if(nextProps.match.params.id !== this.props.match.params.id){

      this.props.fetchUser(nextProps.match.params.id).then(() => this.setState({check: true}));
      this.props.fetchSkills(nextProps.match.params);

    }


}

  createEndorsement(e){
    const skill = e.target.id;
    this.props.createEndorsement({endorsement: {user_id: 15, skill_id: skill}}).then(()=> this.props.fetchSkills({id: this.props.match.params.id}));
  }


  endorsementMapper(endorsements){
    if(!endorsements){
      return null;
    }
    const ar = [];
    const counter = endorsements.length > 10 ? 10 : endorsements.length;
    for(var i = 0; i < counter; i ++){
      var profilelink = `/users/${endorsements[i].user_id}`;
      console.log(profilelink);
      ar.push(
        <Link key={i} to={profilelink} className='endorsementlink'>
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
    const skills = this.props.skills;
    const ar = [];
    console.log(skills, 'skiler');
    skills.forEach((skill, idx) => {
      const endorsements = skill.endorsements ? skill.endorsements.length : null;
      ar.push(

        <div key={idx} className='skillholder'>
            <div className='endorsementnum'>{endorsements}</div>
            <div id={skill.id} className='createendorsement' onClick={this.createEndorsement}>+</div>
            <div className='skill' >
            <div className='skillname'>{skill.skill}</div>
            </div>
            <div className='endorsementholder'>{this.endorsementMapper(skill.endorsements)}</div>
        </div>


      );
    });
    return (
      ar
    );
  }

  render(){
    // console.log(this.props);
    const user = this.props.user;

    if(this.state.check === false || !user){
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
          <div className='userprofilepic'></div>
          <div className='usershowprofile'>
            {user.username ?  <div className='profileline'>{user.username}</div> : null }
            {user.f_name ? <div className='profileline'>{name}</div> : null }
          </div>
        </div>

        <div className='userrightpanel'>
          <div className='skillsheader'>S &nbsp; K &nbsp; I &nbsp; L &nbsp; L &nbsp; S </div>
          <div className='skillscontainer'>
            {user.skills ? this.skillsMapper() : null}
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
