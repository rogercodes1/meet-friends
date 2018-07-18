import React from 'react'
import {Image, Card, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {profileAction} from '../actions';


const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`

class Profile extends React.Component {

  componentDidMount(){
    this.fetchProfile()
  }
  fetchProfile = () => {
    fetch(url)
    .then(response=>response.json())
    .then(json => {
      console.log("json", json)
      this.props.saveProfile(json)
    })
}
  render () {
    console.log("this.profile", this.props.displayProfile);
    const profile = this.props.displayProfile
    return(
      <div>
        <Image src='/images/avatar/large/matthew.png' />
        <Card>

          <Card.Content>
            <Card.Header>{profile.first_name} {profile.last_name}</Card.Header>
            <Card.Meta>
              <span className='date'>DOB:  {profile.birthday}</span>
            </Card.Meta>
            <Card.Description>{profile.email}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return{
    displayProfile : state.profile
  }
}
function mapDispatchToProps(dispatch) {
  return{
    saveProfile: (profile) => {
      dispatch(profileAction(profile))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
