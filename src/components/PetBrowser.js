import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE
    {
      this.props.pets.map(petObj =>{
        return <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet}/>
      })
    }
    </div>
  }
}

export default PetBrowser
