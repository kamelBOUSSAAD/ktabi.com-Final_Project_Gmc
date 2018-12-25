import React from 'react'
import '../Footer/footer.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../../images/logo.png';

class Footer extends React.Component{
    render(){
        return(
<div>
        {/* <div className="footer">
          <div className="logos" >
          <img className="logo-footer-ktabi" src={logo} alt="logo"/>
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
          </div> */}

<div className="row footer">
<div className="col-lg-7 footer-logo" ><img className="" src={logo} alt="logo"/></div>  
<div className="col-lg-5 footer-content"> 
<h1><span class="orange">K</span>tabi <span class="orange">W</span>eb <span class="orange">S</span>ite<span class="orange">.</span></h1>
<p>Ktabi est une plateforme qui permet aux amoureux de lecture de partager des livres entre eux</p>
</div>
<div class="copyright">
<p >Copyright © 2018. Tous droits réservés.</p>
</div>
</div>
 </div>

           )
          }
}

export default Footer;

