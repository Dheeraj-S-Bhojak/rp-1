import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        copyright
        <span className="ms-1">&copy; 2023 Rock Influencer</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
