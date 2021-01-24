import React ,{Component} from 'react'
import './Home.css'

import Combo from '../../assets/combo.jpg'
import Vida from '../../assets/vida.jpg'
import TumbleVida from '../../assets/tumblevida.jpg'
import Imagem from '../../assets/im.jpg'
import TumbleImagem from '../../assets/tumbleim.jpg'
import Toph from '../../assets/toph.jpg'
import TumbleToph from '../../assets/tumbletoph.jpg'
import squeeze_timol from '../../assets/squeeze_timol.jpeg'
import sylocimol_mini from '../../assets/sylocimol_mini.png'
import toph_mineralizador from '../../assets/toph_mineralizador.png'
import combo_mini from '../../assets/combo_mini.png'
import Mail from '../../assets/mail-2.png'
import faceProf from '../../assets/faceProf.png'
import InstaProf from '../../assets/instaProf.png'
import Perfil from '../../assets/perfil.jpg'

import  'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'




/* npm i react-image-gallery*/



 const images = [
    {
                        original: Vida,
                        thumbnail:TumbleVida,
    },
    {
                        original: Imagem ,
                        thumbnail:TumbleImagem,
    },
    {
                        original: Toph,
                        thumbnail:TumbleToph,
    },

  ];


export default class Home extends Component {

      state = {
                        showPlayButton: false,
                        showGalleryPlayButton: false,
                        showNav: true,
                        showFullscreenButton: false,
                        showGalleryFullscreenButton: false,
                        showVideo: {}
                }
   

        render()    {
            return(
                <div className="componentHome">
                            
                    <ImageGallery 
                        items={images}
                        showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                        showNav={this.state.showNav}
                        showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton} 
                     /> 

                     <div className="componentHomeContent">
                        <div className="componentHomeContentCard-1">
                               <div className="componentHomeContentElementCard-1">
                                    
                                    <a href="https://www.timol.com.br/prodLista.aspx" target="blank">
                                        <h3 className="componentHomeContentElementCardTitle-1">Ter uma boa saúde requer trabalho e muito
                                            cuidado!<br /> <div className="destaq">MAS!</div> <br /> <br />
                                            temos o produto certo para você!
                                        </h3>
                                        <img className="componentImgSqueezeTimol" src={squeeze_timol} />
                                    </a>
                                    <hr/>
                               </div>
                        </div>

                        <div className="componentHomeContentCard-2">
                            <div className="componentHomeContentElementCard-2">
                                <a href="https://www.timol.com.br/prodLista.aspx" target="blank">
                                        <h5 className="ComponentHomeProductDescription-1">
                                            Sylocimol-Mini
                                        </h5>
                                        <div className="ComponentInternal-1">
                                            <img className="componentSylocimolMini" src={sylocimol_mini} />
                                            <p className="componetInternalPromotion-1">não perca esta <strong>promoção!</strong></p>
                                        </div>
                                </a>
                            </div>

                            <div className="componentHomeContentElementCard-3">
                                <a href="https://www.timol.com.br/prodLista.aspx" target="blank">
                                        <h5 className="ComponentHomeProductDescription-2">
                                            Top H+ Mineralizador Mini
                                        </h5>
                                        <div className="ComponentInternal-2">
                                            <img className="componentTophMineralizador" src={toph_mineralizador } />
                                            <p className="componetInternalPromotion-2">não perca esta <strong>promoção!</strong></p>
                                        </div>
                                </a>
                            </div>

                            <div className="componentHomeContentElementCard-4">
                                <a href="https://www.timol.com.br/prodLista.aspx" target="blank">
                                        <h5 className="ComponentHomeProductDescription-3">
                                             Combo Mini
                                        </h5>
                                        <div className="ComponentInternal-3">
                                            <img className="componentComboMini" src={combo_mini } />
                                            <p className="componetInternalPromotion-3">não perca esta <strong>promoção!</strong></p>
                                        </div>
                                </a>
                            </div>
                               
                        </div>
                     </div>
                     
                     <div className="ComponentHomeFooter">
                            <div className="ComponentHomeFooterLinks">
                                    <strong>Contato: (xx)xxxxx-xxxx</strong>   
                                    <strong>Contato: (xx)xxxxx-xxxx</strong> 
                                    <strong>Email: java@eu.com</strong> 
                                 <a href="https://www.facebook.com/javan.santos.5" target="blank">
                                    <img className="componentHomeFace"  src={faceProf} />
                                 </a>
                                 <a href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6" target="blank">
                                    <img className="componentHomeInstagram" src={InstaProf} /> 
                                 </a>
                                 
                            </div>

                            <div className="componentToReceiveEmail">
                                 <div className="componentHomeName">
                                       <img className="componentImgHomePerson" src={Perfil} />
                                       <input type="text" className="componentInputHomeName" placeholder="insira seu nome:"/>
                                   </div>
                                   <div className="componentHomeEmail">
                                       <img className="componentImgHomeEmail" src={Mail} />
                                       <input type="email" className="componentInputHomeEmail" placeholder="insira seu Email:  * "/>
                                       <button className="componentButonHomeEmail">enviar</button>
                                   </div> 
                                   <p className="componentObligation">campo obrigatório *</p>

                                    <p className="componentHomePromocionalTextArgumentation"> 
                                    <strong>Receba um pdf Educativo!</strong> <hr/>
                                    Preencha os campos acima e receba um <i>pdf&copy;</i>                                    educativo contendo o que há de mais atual em pesquisas
                                    cientifícas a respeito dos vastos tratamentos de água com
                                    magnetismo e também emails com promoções!
                                    </p>
                            </div>
                     </div>

                     <div className="componentSobreCopy">
                   <strong className="copyrightSobre">copyright&copy; Maravilhas do Século e todos os seus direitos reservados.</strong>
               </div>
                </div>
            )
        }
}