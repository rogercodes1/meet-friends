import React,{Component} from 'react'
import {Button, Card, Image} from 'semantic-ui-react';


export function displayUserEvents(events){
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
