import React from 'react'
import Layout from '../components/Layout'

class Shows extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <p> lovely shows</p>
      </Layout>
    )
  }
}

export default Shows
