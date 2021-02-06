import React,{Component} from 'react'
import firebase from 'firebase'





export default class Crud extends Component {

    constructor(props){
      super(props)

          this.state = {
            token: '...carregando',
            name: '...nome aqui',
            age: 12,
            tokenInput: '',
            nameInput:'',
            ageInput:'',
            tokenInputAltered: '',
            nameInputAltered:'',
            ageInputAltered:'',
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
          this.alteraCondicionado = this.alteraCondicionado.bind(this)

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
        firebase.database().ref('age').set(this.state.ageInput)
        
        e.preventDefault();
    }

    alteraCondicionado = (e) =>{
      firebase.database().ref('usuarios').child(1).child('token').set(this.state.tokenInputAltered);
      firebase.database().ref('usuarios').child(1).child('name').set(this.state.nameInputAltered);
      firebase.database().ref('usuarios').child(1).child('age').set(this.state.ageInputAltered)

      e.preventDefault();
    }


    render(){

      
        const { token, name , age,  tokenInput, nameInput, ageInput, tokenInputAltered, nameInputAltered, ageInputAltered} = this.state;
        
        



        return (
          <div className="crud">

              <h1>altera</h1>

            <form onSubmit={this.altera}>
                <input 
                  type="text"
                  value={this.state.tokenInput}
                  onChange={(e) => this.setState({tokenInput: e.target.value})}
                 />
                  
                  <input 
                  type="text"
                  value={this.state.nameInput}
                  onChange={(e) => this.setState({nameInput: e.target.value})}
                 />

                 <input 
                  type="number"
                  value={this.state.ageInput}
                  onChange={(e) => this.setState({ageInput: e.target.value})}
                 />

                 <button type="submit">altera</button>
            </form>

            <h3>token:  { tokenInput }</h3>
            <h3>nome:   { nameInput}</h3>
            <h3>idade:  { ageInput }</h3>




              
            <h1>altera condicionado</h1>

            <form onSubmit={this.alteraCondicionado}>
                <input 
                  type="text"
                  value={this.state.tokenInputAltered}
                  onChange={(e) => this.setState({tokenInputAltered: e.target.value})}
                 />
                  
                  <input 
                  type="text"
                  value={this.state.nameInputAltered}
                  onChange={(e) => this.setState({nameInputAltered: e.target.value})}
                 />

                 <input 
                  type="number"
                  value={this.state.ageInputAltered}
                  onChange={(e) => this.setState({ageInputAltered: e.target.value})}
                 />

                 <button type="submit">altera condicionado</button>
            </form>

            <h3>token:  { tokenInputAltered }</h3>
            <h3>nome:   { nameInputAltered }</h3>
            <h3>idade:  { ageInputAltered  }</h3>
          </div>
      );
    }
}


