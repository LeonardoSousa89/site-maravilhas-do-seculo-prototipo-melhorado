import React,{Component} from 'react'
import firebase from 'firebase'

import './Crud.css'





export default class Crud extends Component {





    constructor(props){
      super(props)

          this.state = {
            token: '...carregando',
            name: '...nome aqui',
            age: 12,
            novoInput:'',
            tokenInput: '',
            nameInput:'',
            ageInput:'',
            tokenInputAltered: '',
            nameInputAltered:'',
            ageInputAltered:'',
            tokenInputAltered2: '',
            nameInputAltered2:'',
            ageInputAltered2:'',
            novoInputDelete:'',
            tokenInputDelete:'',
            nameInputDelete:'',
            ageInputDelete:'',
            tokenInputCad:'',
            nameInputCad:'',
            ageInputCad:'',
            sexInputCad:''
          }

        
          // Your web app's Firebase configuration
          let firebaseConfig = {
            apiKey: "AIzaSyB-Lygv2OoqG2-zGf4U7OcqqLSDX4Mjlow",
            authDomain: "crud-react-bdfde.firebaseapp.com",
            projectId: "crud-react-bdfde",
            storageBucket: "crud-react-bdfde.appspot.com",
            messagingSenderId: "951291156549",
            appId: "1:951291156549:web:2709a4893006ff254beb2c"
          }; 

          this.altera = this.altera.bind(this);
          this.alteraCondicionado = this.alteraCondicionado.bind(this);
          this.alteraCondicionado2 = this.alteraCondicionado2.bind(this);
          //this.inseriNovo = this.inseriNovo.bind(this);
          this.limpaAlteraCondicionado2 =  this.limpaAlteraCondicionado2.bind(this);
          this. deleteElementToken = this.deleteElementToken.bind(this);
          this. limpaDeleteElement = this. limpaDeleteElement.bind(this);
          this.cadastro = this.cadastro.bind(this); 
          this.limpaCadastro = this.limpaCadastro.bind(this);


          //initialize firebase  
            if(!firebase.apps.length){
              firebase.initializeApp(firebaseConfig);
          }     








       
         /**  olheiro  em tempo real*/
         /*
         
          firebase.database().ref('token').on('value', (snapshot)  =>{
            let state = this.state
            state.token = snapshot.val()
            this.setState(state)
          })
         
         */

           
         /**  olheiro  de uma única mudança */
          firebase.database().ref('token').once('value').then((snapshot)=>{
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state);
          })

         /*
          firebase.database().ref('usuarios').on('value',(snapshot)=>{
            let state = this.state
            state.name = snapshot.val()
            this.setState(state)
          })

          firebase.database().ref('usuarios').on('value',(snapshot)=>{
            let state = this.state
            state.age = snapshot.val()
            this.setState(state)
          })
        */    
    }
 



    altera = (e) =>{
        firebase.database().ref('token').set(this.state.tokenInput);
        firebase.database().ref('name').set(this.state.nameInput);
        firebase.database().ref('age').set(this.state.ageInput);
        
        e.preventDefault();
    }





    alteraCondicionado = (e) =>{
      firebase.database().ref('usuarios').child(1).child('token').set(this.state.tokenInputAltered);
      firebase.database().ref('usuarios').child(1).child('name').set(this.state.nameInputAltered);
      firebase.database().ref('usuarios').child(1).child('age').set(this.state.ageInputAltered);

      e.preventDefault();
    }





   limpaAlteraCondicionado = () =>{

   }






    alteraCondicionado2 = (e) =>{
      firebase.database().ref('clientes').child(1).child('token').set(this.state.tokenInputAltered2);
      firebase.database().ref('clientes').child(1).child('name').set(this.state.nameInputAltered2);
      firebase.database().ref('clientes').child(1).child('age').set(this.state.ageInputAltered2);
      firebase.database().ref('clientes').child(1).child('sex').set(this.state.novoInput);

      e.preventDefault();
    }





    limpaAlteraCondicionado2 = (e) => {
      this.setState({
        novoInput:'',
        tokenInputAltered2: '',
        nameInputAltered2:'',
        ageInputAltered2:'',
      })
      e.preventDefault();
    }





    deleteElementToken = (e) =>   {
      firebase.database().ref('clientes2').child(4).child('token').remove();

      e.preventDefault();
    }
    deleteElementName = (e) =>{
        firebase.database().ref('clientes2').child(4).child('name').remove();

        e.preventDefault();
    }
    deleteElementAge = (e) => {
      firebase.database().ref('clientes2').child('4').child('age').remove();

      e.preventDefault();
    }
    deleteElementNovoInput = (e) =>{
      firebase.database().ref('clientes2').child('4').child('sex').remove();

      e.preventDefault();
    }







    limpaDeleteElement = (e) =>{
      this.setState({
        novoInputDelete:'',
        tokenInputDelete: '',
        nameInputDelete:'',
        ageInputDelete:'',
      })

      e.preventDefault();
    } 





    cadastro = (e) => {
      let cadastro = firebase.database().ref('cadastro');
      let chave = cadastro.push().key;

      cadastro.child(chave).set({
        token:this.state.tokenInputCad,
        name:this.state.nameInputCad,
        age:this.state.ageInputCad,
        sex:this.state.ageInputCad
      });

      e.preventDefault();
    }

    limpaCadastro = (e) =>{
      this.setState({
        tokenInputCad:'',
        nameInputCad:'',
        ageInputCad:'',
        sexInputCad:''
      })

      e.preventDefault();
    }



    render(){

      
        const { token, name , age,  
          tokenInput,
          nameInput,
          ageInput,
          tokenInputAltered,
          nameInputAltered,
          ageInputAltered ,
          tokenInputAltered2,
          nameInputAltered2,
          ageInputAltered2,
          tokenInputDelete,
          nameInputDelete,
          ageInputDelete,
          tokenInputCad,
          nameInputCad,
          ageInputCad,
          sexInputCad
         } = this.state;
        
        



        return (



          <div className="crud">

              <h1>Exercicio de CRUD em REACT.JS&copy; + FIREBASE&trade;</h1>
              <h1> inseri e altera </h1>

            <form onSubmit={this.altera}>
                <input 
                 placeholder="token"
                  type="text"
                  value={this.state.tokenInput}
                  onChange={(e) => this.setState({tokenInput: e.target.value})}
                 />
                  
                  <input 
                  placeholder="nome"
                  type="text"
                  value={this.state.nameInput}
                  onChange={(e) => this.setState({nameInput: e.target.value})}
                 />

                 <input 
                  placeholder="idade"
                  type="number"
                  value={this.state.ageInput}
                  onChange={(e) => this.setState({ageInput: e.target.value})}
                 />

                 <button type="submit">altera</button>
            </form>

            <h3>token:  { tokenInput }</h3>
            <h3>nome:   { nameInput}</h3>
            <h3>idade:  { ageInput }</h3>
            <hr/>











              
            <h1>inseri e altera condicionado + inseri novo atributo </h1>

            <form onSubmit={this.alteraCondicionado}>
                <input 
                  placeholder="token"
                  type="text"
                  value={this.state.tokenInputAltered}
                  onChange={(e) => this.setState({tokenInputAltered: e.target.value})}
                 />
                  
                  <input 
                  placeholder="nome"
                  type="text"
                  value={this.state.nameInputAltered}
                  onChange={(e) => this.setState({nameInputAltered: e.target.value})}
                 />

                 <input 
                  placeholder="idade"
                  type="number"
                  value={this.state.ageInputAltered}
                  onChange={(e) => this.setState({ageInputAltered: e.target.value})}
                 />

                 <button type="submit">altera condicionado</button>
            </form>

            <h3>token:  { tokenInputAltered }</h3>
            <h3>nome:   { nameInputAltered }</h3>
            <h3>idade:  { ageInputAltered  }</h3>
          
            <hr/>
          









          
            <h1>inseri e altera condicionado2</h1>

          <form onSubmit={this.alteraCondicionado2}>
              <input 
                placeholder="token"
                type="text"
                value={this.state.tokenInputAltered2}
                onChange={(e) => this.setState({tokenInputAltered2: e.target.value})}
              />
                
                <input 
                placeholder="nome"
                type="text"
                value={this.state.nameInputAltered2}
                onChange={(e) => this.setState({nameInputAltered2: e.target.value})}
              />

              <input 
                placeholder="idade"
                type="number"
                value={this.state.ageInputAltered2}
                onChange={(e) => this.setState({ageInputAltered2: e.target.value})}
              />

              <input 
                  placeholder="sexo"
                  type="text"
                  value={this.state.novoInput}
                  onChange={(e) => this.setState({novoInput: e.target.value})}
                 />
              
              <button type="submit">altera condicionado</button>
          </form>

          <button onClick={this.limpaAlteraCondicionado2}>limpar</button>

          <h3>token:  { tokenInputAltered2 }</h3>
          <h3>nome:   { nameInputAltered2 }</h3>
          <h3>idade:  { ageInputAltered2  }</h3>

          <hr/>









          <h1>delete</h1>

            <form
            className="flex">
                <input 
                  placeholder="será deletado o elemento token 'se houver'"
                  type="text"
                  value={this.state.tokenInputDelete}
                  onChange={(e) => this.setState({tokenInputDelete: e.target.value})}
                />
                <button onClick={this.deleteElementToken}>deletar</button>
                  
                  <input 
                  placeholder="será deletado o elemento name"
                  type="text"
                  value={this.state.nameInputDelete}
                  onChange={(e) => this.setState({nameInputDelete: e.target.value})}
                />
                 <button onClick={this.deleteElementName}>deletar</button>

                <input 
                  placeholder="será deletado o elemento age"
                  type="number"
                  value={this.state.ageInputDelete}
                  onChange={(e) => this.setState({ageInputDelete: e.target.value})}
                />
                 <button onClick={this.deleteElementAge}>deletar</button>

                <input 
                    placeholder="será deletado o elemento sex 'se houver'"
                    type="text"
                    value={this.state.novoInputDelete}
                    onChange={(e) => this.setState({novoInputDelete: e.target.value})}
                  />
                   <button onClick={this.deleteElementNovoInput}>deletar</button>
                
                   <button onClick={this.limpaDeleteElement}>limpar</button>
              </form>

              <h3>token:  { tokenInputDelete }</h3>
              <h3>nome:   { nameInputDelete }</h3>
              <h3>idade:  { ageInputDelete  }</h3>
              <hr/>





              <h1>Cadastro</h1>

              <form onSubmit={this.cadastro}
              className="flex">
                  <input 
                    placeholder="token"
                    type="text"
                    value={this.state.tokenInputCad}
                    onChange={(e) => this.setState({tokenInputCad: e.target.value})}
                  />

                    <input 
                    placeholder="nome"
                    type="text"
                    value={this.state.nameInputCad}
                    onChange={(e) => this.setState({nameInputCad: e.target.value})}
                  />

                  <input 
                    placeholder="idade"
                    type="number"
                    value={this.state.ageInputCad}
                    onChange={(e) => this.setState({ageInputCad: e.target.value})}
                  />

                  <input 
                      placeholder="sex"
                      type="text"
                      value={this.state.sexInputCad}
                      onChange={(e) => this.setState({sexInputCad: e.target.value})}
                    />
                    <button type="submit">cadastrar</button>
                </form>

                <button className="flex" onClick={this.limpaCadastro}>limpar</button>
               

                <h3>token:  { tokenInputCad }</h3>
                <h3>nome:   { nameInputCad }</h3>
                <h3>idade:  { ageInputCad  }</h3>
                <h3>sex:    { sexInputCad  }</h3>



          </div>
       );
   }
}


