import React from "react";

function Question({data,selectedOption}) {
  return (
    <div className="card">
      <div className="card-header">{data.text}</div>
      <ul className="list-group list-group-flush">
            {data?.options?.map((option) => {
              return (
                <li className="list-group-item" key={option.id}>
                  <input type="radio" id={option.id} value={option.text} name={data.id} onClick={selectedOption}/>
                  {/* {error?:<>} */}
                  {option.text}
                  <br/>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Question;