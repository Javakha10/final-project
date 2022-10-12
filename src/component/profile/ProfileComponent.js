import React from "react";
import { useLocation } from "react-router-dom";
import { useAxios } from "../../app/hooks/useAxios";

const ProfileComponent = () => {
  const { state } = useLocation();
  const { isLoading, error, data } = useAxios(`/users/${state?.id}`);
  return (
    <div>
      {isLoading && <h1>loading</h1>}
      {data && (
        <>
          <h1>{data.user?.firstName}</h1>
          <h1>{data.user?.lastName}</h1>
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
