import React from 'react'
import Layout from '../components/Layout'

class Videos extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <p> lovely videos</p>
      </Layout>
    )
  }
}

export default Videos
