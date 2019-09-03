import React from "react"
import {graphql} from "gatsby";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Navigation from "../components/navigation/navigation"


export default ({data,location}) => (
  <div>
     <Navigation data={data.allSitePage}/>
    <div className="p-lg-4">
    <Breadcrumb location={location} crumbLabel={data.allSitePage.edges[0].node.context.heading} />
    <h2>{data.allSitePage.edges[0].node.context.heading}</h2>
    <h5>{data.allSitePage.edges[0].node.context.sub_heading}</h5>
    <div className="p-lg-4">
    {data.allSitePage.edges[0].node.context.content.map((item, key) =>
        <div className="m-4">
        <img src={item.image} ></img>
          <br />
        <div> {item.text} </div>
        </div>

    )   }
    </div>
  </div>
      </div>
)

export const query = graphql`
query($path: String!){
  allSitePage(filter: {path: {eq: $path}}) {
    edges {
      node {
        context {
          heading
          sub_heading
          content {
            image
            text
          }
        }
      }
    }
  }
}



`
