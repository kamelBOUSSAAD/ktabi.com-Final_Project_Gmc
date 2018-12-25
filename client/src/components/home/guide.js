import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../home/guide.css'
import Icon from '../../images/Icon-inscription.png'
import IconBiblio from '../../images/bibliotheque.jpg'
import Search from '../../images/search.jpg'
import Contact from '../../images/contact.jpg'

const Guide=()=>{
    return (
        <div className="guideBody">
        <div className="guideTitle"><h1>Pour Commencer</h1></div>
        <div className="row guide-section">
        <div className="col-lg-3 col-sm-12 steps">
        <img alt="Profil" class="img-responsive" src={Icon}></img>
        <div className="textGuide">1- Inscrivez-vous puis remplissez votre profil.</div>
        </div>
        <div className="col-lg-3 col-sm-12 steps">
        <img alt="Profil" class="img-responsive" src={IconBiblio}></img>
        <div className="textGuide">2- Renseignez dans votre bibliothèque (sur votre profil) les livres 
        que vous possédez et que vous souhaitez échanger ou mettre comme gratuit.</div>
        </div>
        <div className="col-lg-3 col-sm-12 steps">
        <img alt="Profil" class="img-responsive" src={Search}></img>
        <div className="textGuide">3-En utilisant notre moteur de recherche (classique ou avancé) et trouvez le livre qu'il vous faut.</div>
        </div>
        <div className="col-lg-3 col-sm-12 steps">
        <img alt="Profil" class="img-responsive" src={Contact}></img>
        <div  className="textGuide">4-Demandez-le au membre qui l'a déposé via un contact soit par mail soit par teléléphone</div>
        </div>

        </div>
    </div>
    )
}

export default Guide