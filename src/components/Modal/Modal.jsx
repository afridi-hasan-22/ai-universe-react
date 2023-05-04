import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { integrations, image_link, description, features } = props.singleData;
  //  console.log(Object.values(features || {}));
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body border-2 border-error mr-3">
              <h2 className="card-title">
                {description ? description : "Not Found"}
              </h2>

              <div className="flex justify-between ">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map((value, index) => <p>{index + 1}. { value.feature_name ? value.feature_name : "Not Found" }</p>)}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {integrations && 
                    integrations.map((inte,index) => <p>{index + 1}. {inte ? inte : "Not found"}</p>)
                  }
                </div>
              </div>
            </div>
            <figure className="w-full">
              <img
                className="w-full h-64"
                src={image_link ? image_link[0] : null}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
