import React from 'react'
// import PropTypes from 'prop-types'
import { Card, Icon, Image } from 'semantic-ui-react'

const PlaceCard = (props) => {
  const { place } = props;

  return (
    <div>
      <h2>{props.name}</h2>
        <Card key={props.id} id={props.id}>
          <Image src={props.image_url} />
          <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
              <span className='date'>props location</span>
            </Card.Meta>
          <Card.Description>props address
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>

              {props.rating}
            </a>
          </Card.Content>
        </Card>
    </div>
  )
}

export default PlaceCard

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
