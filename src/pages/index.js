import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <p>a lovely page</p>
      </Layout>
    )
  }
}

export default RootIndex

export const contentfulQuery = graphql`
query ContentfulQuery {
  allContentfulAboutDummy {
    edges {
      node {
        aboutTitle
        aboutText
      }
    }
  }
}
`