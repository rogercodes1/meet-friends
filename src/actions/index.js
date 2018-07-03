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
