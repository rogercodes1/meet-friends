import React,{Component} from 'react'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {selectPlaceAction, displayFormAction} from '../actions';

let maps = "https://www.google.com/maps/place/"
class PlaceCard extends Component {

  handleEventClick = (e) => {
    this.props.displayForm(true)
    this.props.selectEvent(this.props)
    window.scrollTo(0, 0)
  }

  render(){
    const props = this.props;
  let fullAddress = (typeof(props.location)==="undefined") ? "loading" : props.location.display_address.join(' ')
    return (
    <div className="PlaceCard">
        <Card id={props.id}>
          <Image name="yelp_image" className="PlaceCardImage" src={props.image_url} />
          <Card.Content>
            <Card.Header className="PlaceCardTitle" name="title">{props.name} </Card.Header>

          <Card.Description>
            <a href={maps+fullAddress} name="map_link" target="_blank">{fullAddress}</a>
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>  Rating: </span>
            <Rating icon='star' defaultRating={props.rating} maxRating={5} />
            <br />
            <span>  Price: {props.price}</span>
            <br />
            <a href={props.url} name="yelp_url" target="_blank">
              <Button color='red'>
               <Icon name='yelp' /> Yelp
             </Button> </a>

           <Button onClick={this.handleEventClick.bind(this)} color='facebook'>
                 <Icon name='add circle' /> Event
               </Button>



          </Card.Content>
        </Card>
    </div>
  )}

}

function mapStateToProps(state){
  return{
    selectEvent: state.selectEvent,
    displayForm: state.boolean,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    selectEvent: (selectedBusiness) => {
      dispatch(selectPlaceAction(selectedBusiness))
    },
    displayForm: (toggleDisplay) => {
      dispatch(displayFormAction(toggleDisplay))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlaceCard)
