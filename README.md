# MeetFriends Social App

Life Budget is a *single-page, full-stack* web application built using **ReactJS** and **Ruby on Rails API**.
Social networking app that allows users to create or join events based on common interests. Enables the ability to chat once a total of 3 friends join the event.

<pre>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
You will also need the [meet-friends-backend](https://github.com/rogercodes1/backend-meet-friends) api located within my repos
* node
* npm
* react

```
npm install
```
## Folder tree
 ┬  
 ├ App
     ┬  
     ├  NavBar
     ├  Home
         ┬  
         ├  UserEvents
             ┬  
             ├  Current
             ├  Past
             └  Saved
         └  NearbyEvents
     ├  Messages/Comments
         ┬  
         ├  EventMessagesCommentsContainer
         ├  EventMessages
         └  ListofEvents
     ├  ExploreEvents
         ┬  
         ├  SearchBarEvents
         ├  GoogleEventsPinMap
         └  ListofEvents
     ├  ExplorePlaces
        ┬  
         ├  SearchYelpPlaces
         ├  GoogleYelpPlacesMap
         └  ListOfPlaces
     └  Settings
         ┬  
         ├  EventForm
         ├  EventsCollection
         └  Event
</pre>

## Built With

* [React](https://reactjs.org/) - The web library used
* [React-Semantic-ui](https://react.semantic-ui.com/) - CSS styling
* [Yelp API](https://rometools.github.io/rome/) - API used to setup meet up locations. 
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) - Provides map to add pins to search by area. 

## Dependencies | Installation Requirements
* npm install && npm start
* npm install react-router-dom
* npm install react-redux or redux-react
