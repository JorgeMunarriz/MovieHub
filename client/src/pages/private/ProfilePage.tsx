import { useAuth0 } from '@auth0/auth0-react'
import { LogOutButton, Profile } from '../../components'


export const ProfilePage = () => {
  const {isAuthenticated} = useAuth0()

  
  return (
    <>
      
            {  isAuthenticated ? (
                <>
                <Profile/>
                </>
              ): (
                <LogOutButton/>
              )}
            

    </>
  )
}
