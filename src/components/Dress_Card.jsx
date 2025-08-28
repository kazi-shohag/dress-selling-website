import React from "react";

const Dress_Card = ({ dress }) => {
  const { name, image, color, price, old_price, available, size } = dress;

  return (
    
        <div className=" flex">
      <div className=" bg-slate-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex">
            <div className="items-center justify-start gap-2">
              <h2 className="card-title">{name}</h2>
              <p>Available{available}</p>
              <p>Color:{color}</p>
            </div>
            <div>
              <h2 className="card-title">Price:{price}</h2>
              <p>Old Price:{old_price}</p>
              <p>Size:{size}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Dress_Card;
