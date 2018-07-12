
import React from 'react'
import { Image} from 'semantic-ui-react'
const batman = require('./../Assets/BatmanLoading.gif')

const Onboarding = (props) => {
  return (
    <div id="Onboarding">
        <Image centered src={batman} />
    </div>
  )
}

export default Onboarding

// <Loader size='large'>Loading</Loader>
