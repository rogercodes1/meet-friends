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
// const defaultState={
//   first_name:"",
//   last_name: "",
//   password: "",
//   email: "",
// }
// t.string "event_name", null: false
//   t.string "location_name", null: false
//   t.string "address", null: false
//   t.string "description", null: false
//   t.date "date", null: false
//   t.string "time", null: false
//   t.float "duration", null: false
//   t.integer "friends", default: 3, null: false
//   t.datetime "created_at", null: false
//   t.datetime "updated_at", null: false
//   t.integer "host_id", null: false
