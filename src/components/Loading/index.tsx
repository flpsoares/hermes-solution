import React from 'react'

import ReactLoading from 'react-loading'

export const Loading = () => {
  return (
    <ReactLoading
      type="spinningBubbles"
      color="var(--primary)"
      width={'50px'}
      height={'50px'}
    />
  )
}
