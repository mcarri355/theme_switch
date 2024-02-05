import { useContext } from 'react';
import { StyleContext } from '../App';

const Footer = () => {
  let { theme } = useContext(StyleContext);

  return (
    <>
      {/* determines whether or not to load the light or dark mode */}
      <div className={theme === 'light' ? 'footerCont' : 'footerCont darkFooter'}>
        <div className="contact">
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">Email: </span> mcarri355@west-mec.org
          </p>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">GitHub: </span>mcarri355
          </p>
          {/* Additional Content */}
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">LinkedIn: </span>N/A
          </p>
          <p className={theme === 'light' ? 'contactSection' : 'contactSection darkContact'}>
            <span className="contactTitle">Twitter: </span>N/A
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
