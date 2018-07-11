import React,{Component} from 'react'
import EventListCard from './EventListCard';
import MessageCard from './MessageCard';
import {Card, Grid, Menu, Segment, Comment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction, eventCommentsAction} from '../actions';
const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`


class MessagesCont extends Component {
  state = { activeItem: 1 }


componentDidMount(){this.fetchData()}

fetchData = () => {
  fetch(url)
  .then(response=>response.json())
  .then(json=>{
  this.setState({activeItem: json.events[0].id})
  this.props.saveUserEvents(json.events)
  this.props.storeComments(json.events[0].comments)
  })
}
displayEventsList = (events, activeItem) => {
  return events.map(event=>{
    return (
      <EventListCard key={event.id} {...event}
        active={activeItem===event.id.toString()}
        handleClick={this.handleClick}/>)
  })
}

displayEventComments = (events, activeItem) => {
  const num = parseInt(activeItem, 10)
  console.log("active item", activeItem, " num", this.state);
  if (events.length === 0){return null}
  const event = events.find(event=>{
    return (event.id.toString() === activeItem && event.comments.length > 0)
    })
  console.log("event.comments",event);
  if (typeof event !== "undefined"){
    return event.comments.map(comment=>{
        return (<MessageCard
            key={comment.id}
            {...comment} />)
          })
  } else { return null}
}

handleClick = (e, { name }) => {
  console.log("new state", name);
  // console.log("what is props id".this.props.id);
  this.setState({ activeItem: name })
  // this.props.storeComments(this.props.comments)

}
  render () {
    const { activeItem } = this.state
    const props = this.props
    const {userEvents} = this.props
    return(
      <div>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular id="CardMessage">
            {this.displayEventsList(this.props.userEvents, activeItem)}
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>
            <Comment.Group id='MessageCardCont'>
            {this.displayEventComments(userEvents, activeItem)}
          </Comment.Group>
        </Segment>
        </Grid.Column>

      </Grid>

    </div>
    )

  }
}

function mapStateToProps(state){
  return{
    loadComments: state.eventComments,
    userEvents: state.userEvents
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveUserEvents: (userEvents) => {
      dispatch(saveUserEventsAction(userEvents))
    },
    storeComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    }

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessagesCont)

// <div id="MessagesCont">
// <div id="MessageList">
//   <Card.Group >
//    {/*display userEvents is in Helpers/EventCard*/}
//
//   </Card.Group>
// </div>
// </div>
