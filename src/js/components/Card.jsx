import React from "react";

function Card(props) {
    return(
    <div className="card" style={{ width: "10rem;" }}>
        <img src={props.img} />
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.Comentario}</p>
            <a href="#" className="btn btn-success">{props.button} {">>"}</a>

        </div>
    </div>
    );
}
export default Card;