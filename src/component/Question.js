import React from "react";

function Question({ data, selectedOption }) {
  return (
    <div className="card">
      <div className="card-header">{data.text}</div>
      <img src={data.imgUrl}/>
      <ul className="list-group list-group-flush">
        {data?.options?.map((option) => {
          return (
            <li className="list-group-item" key={option.id}>
              <input
                type="radio"
                id={option.id}
                value={option.text}
                name={data.id}
                onClick={selectedOption}
              />
              {option.text}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
