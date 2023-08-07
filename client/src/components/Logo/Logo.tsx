
import { LogoStyles } from './logo.styles'
import { icon } from '../../assets/img'

export const Logo = () => {
  return (
    <LogoStyles>
        <img src= {icon} alt="icon" className='icon' />
    </LogoStyles>
  )
}
