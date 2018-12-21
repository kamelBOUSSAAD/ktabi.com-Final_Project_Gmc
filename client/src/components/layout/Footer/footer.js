import React from 'react'
import '../Footer/footer.css';
import logo from '../../../images/logo.png';
import logogmy from '../../../images/logogCMG.png';


class Footer extends React.Component{
    render(){
        return(
<div>
        <div className="footer">
          {/* block logos */}
          <div className="logos" >
          <img className="logo-footer-ktabi" src={logo} alt="logo"/>
          <img className="logo-footer-gmc" src={logogmy} alt="logoGMC"/>
           </div>   
          
          <div className="about">
          <h1 className="titel-about">About us</h1>
           <p>Some of the footers use Font Awesome, so you have plenty of icons to choose from.
                And as a bonus they are crisp on any resolution, so are retina ready.
            </p>
            </div>
         
            
          </div>  
          <div className="droit">
          <h2>© 2018 Ktabi. Tous droits réservés. Terms of Use / Privacy Policy</h2>
          </div>
    </div>
           )
          }
}

export default Footer;

