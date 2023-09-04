import { useAuth0 } from '@auth0/auth0-react';
import { ProfileStyles } from './profile.styles';
import { LogOutButton } from '..';



export const Profile = () => {
    const {user, isAuthenticated, isLoading}= useAuth0();
    if(isLoading) {
        return <div>Loading...</div>
    }
    
  return (
    isAuthenticated && (
      <ProfileStyles>

      
        <div className='profileDiv'>
          <div className='profileDiv__div'>
            <img className='profileDiv__div-img' src={user?.picture} alt={user?.name} />
          </div>
            <h2 className='profileDiv__h2'>Hi, {user?.name}! </h2>
            <p className='profileDiv__paragraph'>Your email: {user?.email}</p>            
        <LogOutButton/>
        </div>
        </ProfileStyles>
    )
    
  )
}
