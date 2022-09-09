import React from "react";

function RulesDisplay({ rules = [], title = null, pagesLinks = [] }) {
  console.log(rules);
  return (
    <React.Fragment>
      {title ? (
        <h2 className="text-center sm:text-xl lg:text-2xl md:text-2xl font-semibold mb-5">
          {title}
        </h2>
      ) : null}
      <ol className="list-inside list-decimal w-1/2 container mx-auto">
        {rules.map((rule) => {
          return (
            <li className="text-lg mb-2" key={rule.id}>
              {rule.body}
            </li>
          );
        })}
      </ol>
    </React.Fragment>
  );
}

export default RulesDisplay;
