import React from "react";

function Question({ data, selectedOption }) {
  return (
    <div className="card">
      <div className="card-header">{data.text}</div>
      <img alt={data.imgUrl} src={data.imgUrl} />
      {data?.options?.map((option) => {
        return (
          <div key={option.id} className="py-2 form-check bg-light text-dark">
            <input
              type="radio"
              className="form-check-input m-2"
              id={option.id}
              value={option.text}
              name={data.id}
              onClick={selectedOption}
            />
            <label className="form-check-label mx-2" htmlFor={option.id}>
              {option.text}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Question;
