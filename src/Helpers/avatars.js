export default function randomAvatar() {
  let avatars = [
    "alligator",
    "android-logo",
    "bee",
    "bird",
    "cat",
    "chick",
    "dog",
    "dog2",
    "electric-robot",
    "elephant",
    "fish",
    "horse",
    "monkey",
    "owl",
    "panda"]
    const avatarDropdown = []
    avatars.forEach(avatar=>{
      let newAvatar = {
        id:`${avatar}`,
        key:`${avatar}`,
        text:`${avatar}`,
        value:`${avatar}`
      }
        console.log(newAvatar)
       avatarDropdown.push(newAvatar)
    })

  // avatarSelection = [  {id: "other",key: 'o', text: 'Other', value: 'other'},]
    console.log("what are the avatars",avatarDropdown)
    return avatarDropdown
}
