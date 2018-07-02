const defaultState={
  event_name: "@gmail.com",
  location_name: "p",
  address: "",
  description:"",
  date:"",
  host_id: "",
  time:"",
  duration: "",
  friends: 3,
}

export default function reducer(state=defaultState,action) {
  switch(action.type)
    {
      case "ADD_EVENT":
        return {
          ...state,
          location_name: action.payload.location_name,
          address: "",
          yelpLink: "",
        }

    default:
      return state
  }

}
