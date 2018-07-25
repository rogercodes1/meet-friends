import React,{Component} from 'react'
import EventListCard from './EventListCard';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import {Grid, Menu, Segment, Image, Header, Comment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction, onChangeChatMessageAction, activeItemAction,selectedChatEventAction, eventCommentsAction} from '../actions';


class MessagesCont extends Component {
  state = { activeItem: 1 }


componentDidMount(){this.fetchData()}

fetchData = () => {
  const url = `${process.env.REACT_APP_BACKEND_URL}api/v1/users/${localStorage.id}/`

  fetch(url)
  .then(response=>response.json())
  .then(json=>{
    if (json.events.length !== 0){
      let activeItem = json.events[0].id.toString()
    this.props.updateActiveItem(activeItem)
    this.props.saveUserEvents(json.events)
    this.props.currentEvent(json.events[0])
    this.props.storeComments(json.events[0].comments)
  } else {
      this.props.saveUserEvents(json.events)
  }

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
  if (events.length === 0){return null}
  const event = events.find(event=>{
    return (event.id.toString() === activeItem && event.comments.length > 0)
    })
  if (typeof event !== "undefined"){

    return event.comments.map(comment=>{
        return (<MessageCard
            key={comment.id}
            {...comment} />)
          })
  } else { return null}
}

handleInputChange = (e) => {
  this.props.onChangeChatMessage(e.target.value)
}


  render () {

    const {userEvents, activeItem} = this.props
    console.log(activeItem);
    return(
      <div id="MessagesCont">
        {(this.props.userEvents.length > 0) ?
         (<Grid>
            <Grid.Column width={6} id="MessageEventsColumn">
              <Menu fluid vertical tabular >
                {this.displayEventsList(userEvents, activeItem)}
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={10}>
              <Segment id='MessageCardCont'>
                <Comment.Group >
                {this.displayEventComments(userEvents, activeItem)}
              </Comment.Group>
            </Segment>
            <MessageForm
              {...this.props}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}/>
            </Grid.Column>

          </Grid>)
          : (
          <React.Fragment>
            <Header size="huge">It looks like you're new to Meet Friends.</Header>
            <p>Messsaging will become available once you join or create an event.</p>
            <Image id="corgi" src="https://media.giphy.com/media/VFDeGtRSHswfe/giphy.gif"/>
          </React.Fragment>)
          }

    </div>
    )

  }
}

function mapStateToProps(state){
  return{
    loadComments: state.eventComments,
    activeItem: state.activeItem,
    userEvents: state.userEvents,
    loadUpdatedMessage: state.onChangeChatMessage,
    loadCurrentEvent: state.selectedChatEvent

  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveUserEvents: (userEvents) => {
      dispatch(saveUserEventsAction(userEvents))
    },
    storeComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    currentEvent: (defaultEvent) => {
      dispatch(selectedChatEventAction(defaultEvent))
    },
    onChangeChatMessage: (input) => {
      dispatch(onChangeChatMessageAction(input))
    },
    updateActiveItem: (activeEvent) => {
      dispatch(activeItemAction(activeEvent))
    }

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessagesCont)
