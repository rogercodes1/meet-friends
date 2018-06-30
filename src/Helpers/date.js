const date = {
  LegalAge: function(ageEntered, adultAge) {
    console.log("younger",ageEntered);
    let adult = new Date(adultAge)
    let age = new Date(ageEntered)
    // console.log(("ageTTTTTTTTT", age));
    // console.log(("adultTTTTTTTTT", adult));

    return (age>=adult) ? true : false
  }
}
export default date
