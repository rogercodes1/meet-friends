
const defaultState= {
  results : [],
  createEvent: [],
  selectEvent: [],
  saveEvent: []
}

export default function reducer(state=defaultState,action) {

  switch(action.type)
    {
      case "YELP_RESULTS":
        return {
          ...state, results: action.payload
          }
      case "SELECT_EVENT":
      console.log("made it SELECT_EVENT");
        return {
          ...state, selectEvent: action.payload
          }
      case "CREATE_EVENT":
        return {
          ...state, saveEvent: action.payload
          }
      case "SHOW_EVENT":
      return {
        ...state
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
