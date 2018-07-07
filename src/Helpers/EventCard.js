import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react';


export function CardDetails(image, event_name, location, description){
  return (
    <Card.Content>
        <Image id="HomeCardImg"floated="left" size="small" src={image}/>
      <Card.Header>{event_name}</Card.Header>
       <Card.Meta>{location}</Card.Meta>
     <Card.Description>
    {description}
     </Card.Description>
    </Card.Content>
  )

}

export function CardContentButtons(url, maps, time, date, address, text){
  return (
    <Card.Content extra>
      <Card.Description>Time: {time} Date:{date}</Card.Description>
        <Card.Meta>{address} </Card.Meta>
    <div className='ui three buttons'>
    <Button href={url} target="_blank" basic color='red'>
      Yelp
    </Button>
    <Button basic color='blue'>
      {text }
    </Button>
    <Button  href={maps} target="_blank" basic color='red'>
      Google Maps
    </Button>
  </div>
</Card.Content>

)
}

export function displayUserEvents(events){
  return events.map(event=>{

    return(
      <Card key={event.id} >
        {CardDetails(event.yelp_image,
          event.event_name,
          event.location,
          event.description)}

        {CardContentButtons(
          event.yelp_url,
          event.maps_link,
          event.time,
          event.date,
          event.address,
          "Mesesage Friends"
        )}
      </Card>
    )
  })
}

export function displayNearbyEvents(events) {
  return events.map(event=>{
    return(
      <Card key={event.id} >
        {CardDetails(event.yelp_image,
          event.event_name,
          event.location,
          event.description)}

        {CardContentButtons(
          event.yelp_url,
          event.maps_link,
          event.time,
          event.date,
          event.address,
          "Join Event"
        )}
      </Card>
    )
  })

}

export function displayMessageEvents(events){
  return events.map(event=>{

    return(
      <Card key={event.id} >
        <Card.Content>
          <a href={event.yelp_url} target="_blank">
            <Image id="HomeCardImg" floated="left"  size="small" src={event.yelp_image}/>
          </a>
          <Card.Header>{event.event_name}</Card.Header>
       <Card.Meta>{event.location_name}</Card.Meta>
     </Card.Content>
       <Card.Meta>{event.address} </Card.Meta>
       <Card.Description>
        {event.description}
       </Card.Description>
        <Card.Content extra>
          <Card.Description>Time: {event.time} Date:{event.date}</Card.Description>
          <div className='ui three buttons'>
            <Button href={event.yelp_url} target="_blank" basic color='red'>
              Yelp
            </Button>
            <Button basic color='blue'>
              Message Friends
            </Button>
            <Button  href={event.maps_link} target="_blank" basic color='red'>
              Google Maps
            </Button>
          </div>
      </Card.Content>
      </Card>
    )
  })
}
