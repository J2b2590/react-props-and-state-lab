import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onAdoptPet = (petId) =>{
    // console.log("You're adopted")
    const adoptedPet = this.state.pets.map(obj =>{
      // console.log(obj.id)
      // console.log(obj)
      if(obj.id === petId){
        return {
          ...obj, 
          isAdopted: true
        }
      }else{
        return obj
      }
    })
    
    this.setState({ 
      pets: adoptedPet
       });
       
  }


  getPets=()=>{

    const {type} = this.state.filters

    let url = (type === `all`) ? `/api/pets` : `/api/pets?type=${type}`

    // if(type === "all"){
    //   url = "/api/pets"

    // } else if (type === "cat"){
    //   url = "/api/pets?type=cat"
    // } else if (type === "dog"){
    //   url = "/api/pets?type=dog" 
    // } else if (type === "micropig"){
    //   url = "/api/pets?type=micropig" 
    // }

    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        this.setState({ 
          pets: resp
        });
    })
  }

  onChangeType = (e) => {
    console.log(e.target.value)
    this.setState({ 
      filters: {
        type: e.target.value
      }  });
  }
  


  render() {
    console.log(this.state, "this.state")
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onFindPetsClick={this.getPets}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default App
