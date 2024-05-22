// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  LockCard,
  Image,
  Heading,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [btnStatus, setBtnStatus] = useState(false)

  const onClickChangeStatus = () => {
    // console.log("Button clicked")
    setBtnStatus(prevState => !prevState)
  }

  const imageUrl = btnStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altProps = btnStatus ? 'unlock' : 'lock'

  return (
    <AppContainer>
      <LockCard>
        <Image src={imageUrl} alt={altProps} />
        <Heading>
          {btnStatus ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Heading>
      </LockCard>
      <Button type="button" onClick={onClickChangeStatus}>
        {btnStatus ? 'Lock' : 'Unlock'}
      </Button>
    </AppContainer>
  )
}
export default Unlock
