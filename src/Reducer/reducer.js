
const defaultState= {
  results : [],
  createEvent: [],
  joinEventDetails:[],
  selectEvent: [],
  saveEvent: [],
  userEvents: [],
  profile: [],
  boolean: false,
  nearbyEvents:[],
  yelpParams: {
    searchTerm: "bars",
    location: "10004",
    radius: 3000,
    limit: 20,
  },
  eventComments:[],
  selectedChatEvent: [],
  onChangeChatMessage: "",
  activeItem: "1"
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
      case "CURRENT_CHAT_EVENT":
        return {
          ...state, selectedChatEvent: action.payload
          }
      case "CREATE_EVENT":
        return {
          ...state, saveEvent: action.payload
          }
      case "USER_EVENTS":
        return {
          ...state, userEvents: action.payload
        }
      case "DISPLAY_FORM":
        return {
          ...state, boolean: action.payload
        }
      case "NEARBY_EVENTS":
        return {
          ...state, nearbyEvents: action.payload
        }
      case "YELP_PARAMS":
        return {
          ...state, yelpParams: action.payload
        }
      case "USER_PROFILE":
        return {
          ...state, profile: action.payload
        }
      case "EVENT_DETAILS":
        return {
          ...state, joinEventDetails: action.payload
        }
      case "EVENT_COMMENTS":
        return {
          ...state, eventComments: action.payload
        }
      case "ON_CHANGE_MESSAGE":
        return {
          ...state, onChangeChatMessage: action.payload
        }
      case "ACTIVE_EVENT":
        return {
          ...state, activeItem: action.payload
        }

      default:
        return state
  }
}
