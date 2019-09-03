import React from "react"
import styles from "./event.module.css"
import { FaChevronRight} from 'react-icons/fa';

export default props => (

        <div className= "col-md-3 p-4">

        <div className={[styles.card,"card"].join(" ")}>
        <div className="text-center">
            <p><img width="100%" height="128px"
                    src={props.image} alt="card image"  />
            </p>
            <b className="card-title">{props.title}</b>

            <p className={[styles.truncate,"card-text"].join(" ")}>{props.about}</p>
            <hr className="m-2" />
            <div className="row">
                <div className="col-md-9"></div>
                <div className="col-md-3">
                    <a href={props.event_link}><FaChevronRight /></a>
                </div>
            </div>

        </div>
    </div>
        </div>
)
