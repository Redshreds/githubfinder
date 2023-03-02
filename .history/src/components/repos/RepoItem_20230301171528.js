import React from "react";
import PropTypes from "prop-types";



export const RepoItem = ({ repo }) => {
  return (
    <div className="card">RepoItem
        <h3>

        </h3>
    </div>
  )
};

RepoItem.propTypes ={
    repo: PropTypes.object.isRequired;
    
};

export default RepoItem;