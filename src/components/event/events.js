import Event from "./event";
import React from "react";


export default ({data}) => {

    return (
        <div className="container">
            <div className="row">
                {data.edges.map(({node}) => (
                    <Event image={node.image}
                    title={node.title}
                    about={node.about}
                    event_link={node.event_link}></Event>
                ))}
            </div>

        </div>
    )
}





