import React,{Component} from 'react'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {selectPlaceAction} from '../actions';

let maps = "https://www.google.com/maps/place/"
class PlaceCard extends Component {

  handleEventClick = (e) => {
    console.log("this.props is ",this.props);
    // console.log("this.props id is ",this.props.id);
    // console.log("this.state is ",this.props.saveEvent);

    // let yelp_image = "e.target.parentElement.parentElement.children.yelp_image.src"
    // let yelp_url = "e.target.parentElement.children.yelp_url.href"
    // let location_name = "e.target.parentElement.children.yelp_url.href"
    // let address = "e.target.parentElement.children.yelp_url.href"
    // let maps_link = "e.target.parentElement.children.yelp_url.href"
    this.props.selectEvent(this.props)
  }
  render(){
    const props = this.props;
    let fullAddress = (typeof(props.location)==="undefined") ? "loading" : props.location.display_address.join(' ')
    return (
    <div className="PlaceCard">
        <Card id={props.id}>
          <Image name="yelp_image" className="PlaceCardImage" src={props.image_url} />
          <Card.Content>
            <Card.Header name="title">{props.name} </Card.Header>

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

           <Button onClick={this.handleEventClick} color='facebook'>
                 <Icon name='add circle' /> Event
               </Button>



          </Card.Content>
        </Card>
    </div>
  )}

}

function mapStateToProps(state){
  return{
    selectEvent: state.selectEvent

  }
}
function mapDispatchToProps(dispatch) {
  return {
    selectEvent: (selectedBusiness) => {
      dispatch(selectPlaceAction(selectedBusiness))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlaceCard)

// <Card.Meta>
//   <span>{props.location.display_address[1]}</span>
// </Card.Meta>


// <div className="ui column">
//   <div
//     className="ui card"
//     key={place.id}
//
//   >
//     <div className="image">
//       <img alt="oh no!"
//           name={place.id}
//           src={place.image_url} />
//     </div>
//     <div className="content">
//       <div className="header">
//         {place.name}
//       </div>
//
//       <div className="meta text-wrap">
//         <small>{place.location.display_address[0]}</small>
//       </div>
//     </div>
//     <div className="extra content">
//       <span>
//         <i className="icon heartbeat" />
//         {place.price}
//       </span>
//
//       <span>
//         <i className="icon lightning" />
//         {place.rating}
//       </span>
//       <span>
//         <i className="icon shield" />
//         {place.categories}
//       </span>
//     </div>
//   </div>
// </div>
