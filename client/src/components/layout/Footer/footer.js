import React from 'react'
import '../Footer/footer.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../../images/logo.png';

class Footer extends React.Component{
    render(){
        return(
<div>
<div className="row footer">
<div className="col-lg-7 footer-logo" ><img className="" src={logo} alt="logo"/></div>  
<div className="col-lg-5 footer-content"> 
<h1><span className="orange">K</span>tabi <span className="orange">W</span>eb <span className="orange">S</span>ite<span className="orange">.</span></h1>
<p>Ktabi est une plateforme qui permet aux amoureux de lecture de partager des livres entre eux</p>
</div>
<div class="copyright">
<p>Copyright © 2018. Tous droits réservés.</p>
</div>
</div>
 </div>

)
}
}

export default Footer;

