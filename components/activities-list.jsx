import React from "react";
import { uniqueId } from "lodash";

function ActivitiesView({ activitiesList, setActivitiesList }) {
  const renderList = () => {
    return activitiesList.map((listItem) => {
      return (
        <div key={uniqueId()}>
          {listItem.activity}
          {listItem.duration}
        </div>
      );
    });
  };

  return (
    <div>
      <div>{renderList()}</div>
      <div></div>
    </div>
  );
}

export default ActivitiesView;
