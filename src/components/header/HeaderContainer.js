import React from 'react'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <div>
      This is the HEader Container
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(HeaderContainer)