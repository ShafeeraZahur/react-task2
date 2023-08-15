
import React from 'react';

import { imgdata } from "./imgdata";

function Card(props) {
  return (
    <div className="card flex-row col-5 m-3 shadow-lg d-inline-block">
      <img
        className="card-img-top"
        src={imgdata[props.items.id]}
        alt="banner none"
      />
      <div className="card-img-overlay h-25 text-end ">
        <span className="badge bg-dark">{props.items.available}</span>
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.items.name}</h4>
        <p className="card-text">
          <span className="text-decoration-line-through text-muted">
            {props.items.price}
          </span>
          {props.items.discount}
        </p>
        <p>{props.items.rating}</p>
        {props.items.view?(<a
          href="#blank"
          onClick={props.handleCart}
          className="btn btn-outline-dark"
        > 
          
          {(props.items.added ? "Add to Cart" : "Remove from Cart")}
        </a>):
        (<a
          href="#blank"
          onClick={()=>{}}
          className="btn btn-outline-dark"
        > View Options
          </a>)
        }
      </div>
    </div>
  );
}

export default Card;
