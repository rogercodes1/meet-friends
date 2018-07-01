import React,{Component} from 'react'
// import PropTypes from 'prop-types'
import { Card, Icon, Image, Button, Rating } from 'semantic-ui-react'
let maps = "https://www.google.com/maps/place/"
class PlaceCard extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  handleEvent = (e) => {
    console.log(e.target);
  }
  render(){
    const props = this.props;
    // console.log("display", props.location.display_address);
    let fullAddress = (typeof(props.location)==="undefined") ? "loading" : props.location.display_address.join(' ')
    return (
    <div className="PlaceCard">
        <Card  key={props.id} id={props.id}>
          <Image className="PlaceCardImage" src={props.image_url} />
          <Card.Content>
            <Card.Header>{props.name} </Card.Header>

          <Card.Description>
            <a href={maps+fullAddress} target="_blank">{fullAddress}</a>
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>  Rating: </span>
            <Rating icon='star' defaultRating={props.rating} maxRating={5} />
            <br />
            <span>  Price: {props.price}</span>
            <br />
            <a href={props.url} target="_blank">
              <Button color='red'>
               <Icon name='yelp' /> Yelp
             </Button> </a>

           <Button onClick={this.handleEvent} color='facebook'>
                 <Icon name='add circle' /> Event
               </Button>



          </Card.Content>
        </Card>
    </div>
  )}

}

export default PlaceCard

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
