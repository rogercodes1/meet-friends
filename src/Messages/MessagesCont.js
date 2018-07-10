import React,{Component} from 'react'
import EventListCard from './EventListCard';
import AltEventCard from './AltEventCard';

import ChatMessagesCont from './ChatMessagesCont';
import {Card, Grid, Menu, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction, eventCommentsAction, selectedChatEventAction} from '../actions';
const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`


class MessagesCont extends Component {
  state = { activeItem: "4" }


  componentDidMount(){this.fetchData()}

  fetchData = () => {
      fetch(url)
      .then(response=>response.json())
      .then(json=>{
        // debugger
      this.props.saveUserEvents(json.events)
      this.setState({activeItem: json.events[0].id.toString()})
      // this.props.selectedChatEvent(json.events[0])
      })
  }
  displayEventsList = (events, activeItem) => {
    return events.map(event=>{

      return (
        <AltEventCard
          key={event.id}
          {...event}
          active={activeItem===event.id.toString()}
          handleClick={this.handleClick}
          />)
    })
  }

handleClick = (e, { name }) => {
  console.log(name);
  this.setState({ activeItem: name },() => {console.log(this.state)
  })
  // console.log(e.target);
  // console.log(this.props.userEvents);
  // console.log("We clicked the event");
  // const URL= url + `?id=${this.props.id}`
  // fetch(URL)
  // .then(res=>res.json())
  // .then(json=>{
  //   this.props.saveEventComments(json.comments)
  //   this.props.selectedChatEvent(json)
  // })
}

  render () {
    const { activeItem } = this.state

    return(
      <div>
        <div id="MessagesCont">
        <div id="MessageList">
          <Card.Group id="CardMessage">
           {/*display userEvents is in Helpers/EventCard*/}

          </Card.Group>
        </div>
      </div>

      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {this.displayEventsList(this.props.userEvents, activeItem)}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
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
    saveEventComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    // selectedChatEvent: (event) => {
    //   dispatch(selectedChatEventAction(event))
    // }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessagesCont)
