import React,{Component} from 'react'
import {Card,Image, Menu} from 'semantic-ui-react'

import {connect} from 'react-redux';
import {eventCommentsAction, activeItemAction,selectedChatEventAction} from '../actions';
// let url ="http://localhost:3001/api/v1/events/comments"

class EventListCard extends Component {

  handleClick = (e) => {

   console.log("name", e);

   this.props.activeItem(e.id.toString())
   this.props.selectedChatEvent(e)
   // this.props.storeComments(this.props.comments)
 }

  render(){
    const props = this.props
    // this.props.storeComments(this.props.)
    // const activeEvent = props.active ? props.id : null
    console.log("ELC", props.activeItem);
    return(

        <Menu.Item active={props.activeItem === props.id.toString()}
        name={props.id.toString()}
        onClick={this.handleClick.bind(this, props)}>
          <Card  id={props.id} >
            <Card.Content >
              {props.id}
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
    defaultEvent: state.selectedChatEvent,
    activeItem: state.activeItem
  }
}
function mapDispatchToProps(dispatch) {
  return {
    storeComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    selectedChatEvent: (event) => {
      dispatch(selectedChatEventAction(event))
    },
    activeItem: (event) => {
      dispatch(activeItemAction(event))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventListCard)
