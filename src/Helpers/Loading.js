import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

// import PropTypes from 'prop-types'

const Loading = (props) => {
  return (
    <div id="Loading">
      <Segment>
      <Dimmer active>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/paragraph.png' />
    </Segment>


    </div>
  )
}

export default Loading
