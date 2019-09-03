import React from "react";
import styles from "./show_images.module.css"
export default ({data}) => {

    return (
        <div className="container">
            <div className="row">


                {data.edges.map(({node}) => (
                    <div className={[styles.gallery_small_images,"m-4"].join(" ")}>
                    <img  src={node.src} className={styles.fit_in_div}/>
                    </div>
                ))}
            </div>

        </div>
    )
}





