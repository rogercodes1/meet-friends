
const defaultState= {
  results : [],
  createEvent: [],
  selectEvent: [],
  saveEvent: [],
  userEvents: [],
  boolean: false,
  nearbyEvents:[],
  yelpSearch: {
    searchTerm: "",
    location: "10004"
  },
  yelpSubmit: {
    searchTerm: "Ramen",
    location: "10004"
  },
}

export default function reducer(state=defaultState,action) {

  switch(action.type)
    {
      case "YELP_RESULTS":
        return {
          ...state, results: action.payload
          }
      case "SELECT_EVENT":
        return {
          ...state, selectEvent: action.payload
          }
      case "CREATE_EVENT":
        return {
          ...state, saveEvent: action.payload
          }
      case "USER_EVENTS":
        return {
          ...state, userEvents:action.payload
        }
      case "DISPLAY_FORM":
        return {
          ...state, boolean: action.payload
        }
      case "NEARBY_EVENTS":
        return {
          ...state, nearbyEvents: action.payload
        }
      case "YELP_SEARCH":
        return {
          ...state, yelpSearch: action.payload
        }
      case "YELP_SUBMIT":
        return {
          ...state, yelpSubmit: action.payload
        }

    default:
      return state
  }
}
