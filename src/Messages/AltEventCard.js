import React,{Component} from 'react'
import {Card,Image, Menu} from 'semantic-ui-react'
// import Fetches from './Fetches';
import {connect} from 'react-redux';
import {eventCommentsAction, selectedChatEventAction} from '../actions';
let url ="http://localhost:3001/api/v1/events/comments"

class AltEventCard extends Component {
  constructor(props){
    super(props);
    this.state = { activeItem: `${this.props.activeItem}` }

  }


  // handleClick = (e, { name }) => {
  //   console.log(name);
  //   this.setState({ activeItem: name },() => {console.log(this.state)
  //   })
  //
  //   const URL= url + `?id=${this.props.id}`
  //   fetch(URL)
  //   .then(res=>res.json())
  //   .then(json=>{
  //     this.props.saveEventComments(json.comments)
  //     this.props.selectedChatEvent(json)
  //   })
  // }
// onClick={this.handleItemClick}
  render(){
    const props = this.props

    return(
      <Menu.Item active={this.props.active} name={props.id.toString()}
        onClick={this.props.handleClick.bind(this)}
          >

      <Card key={props.id} id={props.id} >
        <Card.Content id="CardMessage">
        <Image floated="left" size="tiny" src={props.yelp_image}/>
          <Card.Header>{props.event_name}</Card.Header>
       <Card.Meta>{props.location_name}</Card.Meta>
       <Card.Description>Time: {props.time} Date:{props.date}</Card.Description>
       <Card.Meta>{props.address} </Card.Meta>
      </Card.Content>
      </Card>
      </Menu.Item>
    )
  }
}

function mapStateToProps(state){
  return{
    loadComments: state.eventComments,
    defaultEvent: state.selectedChatEvent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveEventComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    selectedChatEvent: (event) => {
      dispatch(selectedChatEventAction(event))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(AltEventCard)
