import { useContext } from 'react';
import { StyleContext } from '../App';

const Footer = () => {
  let { theme } = useContext(StyleContext);

  return (
    <>
      <div className={theme === 'light' ? 'footer' : 'footer darkFooter'}>
        <div>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">Email: <a href="">mcarri355@west-mec.org</a></span> 
          </p>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">GitHub: <a href="github.com">mcarri355</a> </span>
          </p>
          </div>
          <div>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">LinkedIn: <a href="linkedin.com">N/A</a></span>
          </p>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">Twitter:  <a href="twitter.com">N/A</a></span>
          </p>
          </div>
      </div>
      
    </>
  );
};

export default Footer;
