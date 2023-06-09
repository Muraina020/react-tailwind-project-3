import linkedinImage from '../assets/linkedin.png';
import facebookImage from '../assets/facebook.png';
import instagramImage from '../assets/instagram.png';
import twitterImage from '../assets/twitter.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 h-[28px] w-[28px]"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
       <img alt="linkedin-link" src={linkedinImage} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
       <img alt="facebook-link" src={facebookImage}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
       <img alt="instagram-link" src={instagramImage} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
       <img alt="twitter-link" src={twitterImage} />
      </a>

        </div>
    )

}
export default SocialMediaIcons;