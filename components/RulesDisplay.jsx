import React from "react";

function RulesDisplay({ rules = [], title = null, pagesLinks = [] }) {
  console.log(rules);
  return (
    <React.Fragment>
      <ul className="list-outside list-disc">
        {title ? <h2 className="font-semibold">{title}</h2> : null}
        {rules.map((rule) => {
          return <li key={rule.id}>{rule.body}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}

export default RulesDisplay;
