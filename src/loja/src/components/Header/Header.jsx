import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Tog from '../../assets/tog.png' 

import './Header.css'


export default class Header extends Component   {

    state = {
        visible: false
    }

    isVisible = (func) =>   {
         
        func.onClickCapture(
            e => e = this.setState({
                visible: true
            })
        )
        console.log(func)
    }

    noVisivleOrVisible = (e) => {
        e.preventDefault()

        const visible = false

        if(!visible)    {
            console.log('visible')
        }else{
            console.log('true')
        }
    } 

    render()    {
        return(
            <div>

                <nav className="componetLargeDevice">
                    <Link className="componentLink" to="/"><h3>Logo</h3></Link>
                    <Link className="componentLink" to="/"><h3>Home</h3></Link>
                    <Link className="componentLink" to="/fale-conosco"><h3>Fale conosco</h3></Link>
                    <Link className="componentLink" to="/sobre"><h3>Sobre</h3></Link>
                    <a className="componentLink" href="https://www.timol.com.br/prodLista.aspx"  target="_blank"><h3>Loja</h3></a>
                </nav>



                <nav className="componentLitleDevice">
                <div className="componentHeader">
                        <img className="componentTog" src={Tog}
                            onClickCapture={this.isVisible}/> 
                </div>
                
                 <ul className="componentPages"> 
                        <ul className="componentLinkHome"> <Link className="LinkHome" to="/"><h3>Home</h3></Link></ul>
                        <ul className="componentLinkFormulario"> <Link className="LinkFaleConosco" to="/fale-conosco"><h3>Fale conosco</h3></Link></ul>
                        <ul className="componentLinkSobre">    <Link className="LinkSobre" to="/sobre"><h3>Sobre</h3></Link></ul>
                        <ul className="componentLinkLoja"> <a className="LinkLoja" href="https://www.timol.com.br/prodLista.aspx" target="_blank"><h3>Loja</h3></a></ul>
                   </ul>
                </nav>  



            </div>
        )
    }
}
