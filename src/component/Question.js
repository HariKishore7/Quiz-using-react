import React from "react";

function Question({ data, selectedOption }) {
  return (
    <div className="card">
      <div className="card-header">{data.text}</div>
      <img src={data.imgUrl} />
      {/* <ul className="list-group list-group-flush"> */}
        {data?.options?.map((option) => {
          return (
            // <li
            //   className="list-group-item p-3 mb-2 bg-light text-dark"
            //   key={option.id}
            // >
              <div className="py-2 form-check bg-light text-dark">
                <input
                  type="radio"
                  className="form-check-input m-2"
                  id={option.id}
                  value={option.text}
                  name={data.id}
                  onClick={selectedOption}
                />
                <label className="form-check-label mx-2" for={option.id}>
                  {option.text}
                </label>
              </div>
              // <br />
            // </li>
          );
        })}
      {/* </ul> */}
    </div>
  );
}

export default Question;
