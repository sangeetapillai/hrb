import React from "react"
import Events from "../components/event/events"
import Gallery from "../components/gallery/show_images"
import Navigation from "../components/navigation/navigation"
import {graphql} from "gatsby";

export default ({data}) => (
    <div className="main">
        <Navigation data={data.allEventsJson}/>
        <div className="row">
            <div className="col-md-3">
                <Gallery data={data.allImagesJson} />
            </div>
            <div className="col-md-9">
                <h2></h2>
                <Events data={data.allEventsJson}/>
            </div>
        </div>
    </div>
)

export const query = graphql`
  query eventQuery {
  allEventsJson {
    edges {
      node {
        about
        title
        image
        event_link
      }
    }
  }
  allImagesJson {
    edges {
      node {
        src
      }
    }
  }
}`

