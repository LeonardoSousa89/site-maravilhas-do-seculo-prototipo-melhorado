import React,{Component} from 'react'
import firebase from 'firebase'

import './App.css'



export default class App extends Component {

    constructor(props){
      super(props)

        this.state = {
          token: '...carregando',
          name: '...nome aqui',
          age: 12
        }

        
        let firebaseConfig = {
           apiKey: "myApiKey",
           authDomain: "myAuthDomain",
           databaseURL: "https://teste-de-conexao-57a31-default-rtdb.firebaseio.com/",
           storageBucket: "myStorageBocket",
           messagingSenderId: "idhere"   
          };  


          //initialize firebase  
          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
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
          let state = this.state
          state.token = snapshot.val()
          this.setState(state)
         })

         firebase.database().ref('usuarios').child(1).on('value',(snapshot)=>{
           let state = this.state
           state.name = snapshot.val()  //.name
           this.setState(state)
         })

         firebase.database().ref('usuarios').child(1).on('value',(snapshot)=>{
          let state = this.state
          state.age = snapshot.val()  //.age
          this.setState(state)
        })
         
    }



    render(){

      
      const { name , age} = this.state 
      
      



      return (
        <div className="App">

          <h1>token:  { this.state.token }</h1>
          <h1>nome:   { name }</h1>
          <h1>idade:  { age }</h1>

        </div>
      );
    }
}


