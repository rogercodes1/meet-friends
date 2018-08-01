export default function randomAvatar() {
let avatars = [
  "alligator",
  "bee",
  "bird",
  "cat",
  "chick",
  "penguin",
  "dog-happy",
  "dog2",
  "monkey",
  "owl",
  "panda",
  "squirrel",
  "whale"
]

    const avatarDropdown = []
    avatars.forEach(pic=>{
      const avaImg = require('./../Assets/Avatars/' + pic +'.png')
      // debugger
      let newAvatar = {
        id:`${pic}`,
        key:`${pic}`,
        text:`${pic}`,
        value:`${pic}`,
        image: {
          avatar: true,
          src: avaImg
        },
      }
       avatarDropdown.push(newAvatar)
    })

  // avatarSelection = [  {id: "other",key: 'o', text: 'Other', value: 'other'},]
    console.log("what are the avatars",avatarDropdown)
    return avatarDropdown
}
