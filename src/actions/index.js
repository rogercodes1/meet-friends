export function setResultsAction(results) {
  return {
    type: "YELP_RESULTS",
    payload: results
  }
}
export function selectPlaceAction(selectedBusiness) {
  return {
    type: "SELECT_EVENT",
    payload: selectedBusiness
  }
}
export function createEventAction(event) {
  return {
    type: "CREATE_EVENT",
    payload: event
  }
}
export function saveUserEventsAction(userEvents) {
  return {
    type: "USER_EVENTS",
    payload: userEvents
  }
}
export function displayFormAction(boolean) {
  return {
    type: "DISPLAY_FORM",
    payload: boolean
  }
}
export function displayNearbyEventsAction(allEvents) {
  return {
    type: "NEARBY_EVENTS",
    payload: allEvents
  }
}
export function yelpSubmitAction(searchTerm) {
  return {
    type: "YELP_SUBMIT",
    payload: searchTerm
  }
}
export function yelpSearchAction(searchTerm) {
  return {
    type: "YELP_SEARCH",
    payload: searchTerm
  }
}
