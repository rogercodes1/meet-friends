export function setYelpResultsAction(results) {
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
export function setYelpParamsAction(yelpParams) {
  return {
    type: "YELP_PARAMS",
    payload: yelpParams
  }
}

export function profileAction(profile) {
  return {
    type: "USER_PROFILE",
    payload: profile
  }
}
