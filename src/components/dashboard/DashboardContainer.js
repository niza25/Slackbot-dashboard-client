import React from 'react'
import { connect } from 'react-redux'
import HeaderContainer from './header/HeaderContainer'
import ChartsContainer from './header/ChartsContainer'

class DashboardContainer extends React.Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <div>
        <HeaderContainer/>
        <ChartsContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(DashboardContainer)