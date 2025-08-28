import React from "react";
import Swal from "sweetalert2";
const Add_Dress = () => {
  const handleAddDress = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const color = form.color.value;
    const price = form.price.value;
    const old_price = form.old_price.value;
    const available = form.available.value;
    const size = form.size.value;

    const new_dress = { name, image, color, price, old_price, available, size };
    // console.log(dress)
    fetch("http://localhost:5000/dress", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(new_dress),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: "success",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto bg-lime-100">
      <div className="justify-center text-center">
        <h1 className="font-semibold md:text-4xl lg:text-6xl sm:text-2xl">
          Add your Own dress.
        </h1>
        <p className="w-3/4 mx-auto mb-5 font-medium lg:text-2xl md:text-xl sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum.
          Quas facere sint ea incidunt animi neque voluptatum voluptates
          voluptatibus. Maiores perferendis maxime cupiditate officiis ipsa
          ratione eius non perspiciatis.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddDress} className=" relative px-5 py-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex flex-col">
              <label className="form-controlflex-col  w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="form-controlflex-col  w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Image</span>
                </div>
                <input
                  type="text"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="form-control flex-col  w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Color</span>
                </div>
                <input
                  type="text"
                  name="color"
                  placeholder="Color"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex flex-col ">
              <label className="form-control flex-col  w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex flex-col ">
              <label className="form-control flex-col  w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Old Price</span>
                </div>
                <input
                  type="text"
                  name="old_price"
                  placeholder="old price"
                  className="input input-bordered line-through"
                />
              </label>
            </div>

            <div className="flex flex-col ">
              <label className="form-control flex-col w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Available ?</span>
                </div>
                <input
                  type="text"
                  name="available"
                  placeholder="Available or Sold Out"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex flex-col ">
              <label className="form-control flex-col w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Sizes.</span>
                </div>
                <input
                  type="text"
                  name="size"
                  placeholder="XL / 2XL /3XL .... "
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          <button className="btn btn-success text-center mt-5 absolute left-1/2 -translate-x-1/2">
            Add the Dress
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_Dress;
