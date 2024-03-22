import React, { useState } from "react";

import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <Link to={`/profiles/${profile.id}`}> {/* Link to the profile page */}
        <h2>{profile.name}</h2> {/* Display profile name or relevant information */}
      </Link>
    </div>
  );
};

export default ProfileCard;
