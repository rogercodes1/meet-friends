import React,{Component} from 'react'
import {Card,Image, Menu, Grid, Segment, Comment} from 'semantic-ui-react'

import {connect} from 'react-redux';
import {eventCommentsAction, selectedChatEventAction} from '../actions';
let url ="http://localhost:3001/api/v1/events/comments"

class EventListCard extends Component {



  render(){
    const props = this.props
    // this.props.storeComments(this.props.)
    return(

        <Menu.Item active={this.props.active}
        name={props.id.toString()}
        onClick={this.props.handleClick.bind(this)}>
          <Card key={props.id} id={props.id} >
            <Card.Content id="CardMessage">
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
    defaultEvent: state.selectedChatEvent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    storeComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    selectedChatEvent: (event) => {
      dispatch(selectedChatEventAction(event))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(EventListCard)
