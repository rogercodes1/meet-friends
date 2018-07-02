import React,{Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
let maps = "https://www.google.com/maps/place/"
class PlaceCard extends Component {
  constructor(props){
    super(props);

  }
  handleEventClick = (e) => {
    console.log(e.target);
    debugger;
    let yelp_image = "e.target.parentElement.parentElement.children.yelp_image.src"
    let yelp_url = "e.target.parentElement.children.yelp_url.href"
    let location_name = "e.target.parentElement.children.yelp_url.href"
    let address = "e.target.parentElement.children.yelp_url.href"
    let maps_link = "e.target.parentElement.children.yelp_url.href"
    this.props.dispatch( {
      type: "ADD_EVENT",
      payload: {
        yelp_image: yelp_image,
        location_name: "name",
        address: address,
        maps_link: maps_link,
        yelp_url: yelp_url,

      }
    })
  }
  render(){
    const props = this.props;
    // console.log("display", props.location.display_address);
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
    eventDetails: state

  }
}

export default connect(mapStateToProps)(PlaceCard)

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
