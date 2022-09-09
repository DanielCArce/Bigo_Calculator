import React from "react";

function RulesDisplay({ rules = [], title = null, pagesLinks = [] }) {
  console.log(rules);
  return (
    <React.Fragment>
      <ul className="list-outside list-decimal">
        {title ? (
          <h2 className="text-2xl font-semibold mb-5">{title}</h2>
        ) : null}
        {rules.map((rule) => {
          return (
            <li className="text-lg mb-2" key={rule.id}>
              {rule.body}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default RulesDisplay;
