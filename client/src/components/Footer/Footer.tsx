
import { FooterStyles } from './footer.styles'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'

export const Footer = () => {
  return (
    <FooterStyles>
        <div className='footer__header'>
          <ul className='footer__header-socialmedia'>
            <li className='footer__header-socialmedia-list'><a href="https://www.facebook.com/"  className='footer__header-socialmedia-list-link' target='_blanck'><BsFacebook/></a></li>
            <li className='footer__header-socialmedia-list'><a href="https://www.github.com/"  className='footer__header-socialmedia-list-link' ><BsGithub/></a></li>
            <li className='footer__header-socialmedia-list'><a href="https://www.instagram.com/" className='footer__header-socialmedia-list-link'  ><BsInstagram/></a></li>
            <li className='footer__header-socialmedia-list'><a href="https://www.twitter.com/"  className='footer__header-socialmedia-list-link' ><BsTwitter/></a></li>
            <li className='footer__header-socialmedia-list'><a href="https://www.youtube.com/"  className='footer__header-socialmedia-list-link' ><BsYoutube/></a></li>
          </ul>

        </div>
        <div className='footer__main'>
          <ul className='footer__main-terms'>
            <li className='footer__main-terms-list'>Conditions of use</li>
            <li className='footer__main-terms-list'>Privacy & Policy</li>
            <li className='footer__main-terms-list'>Press Room</li>
            </ul>

        </div>
        <div className='footer__footer'>
          <p className='footer__footer-copyright'>© 2023 Copyright JorgeMunarrizdev</p>
        </div>
    </FooterStyles>
  )
}
