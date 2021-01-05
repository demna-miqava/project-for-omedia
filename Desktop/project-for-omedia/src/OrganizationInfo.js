import React, { useState, useEffect } from "react";
const url = "https://github.com/";
const OrganizationInfo = ({ organizations_url }) => {
  const [organisationInfo, setOrganisationInfo] = useState([]);
  const getInfo = async () => {
    const response = await fetch(organizations_url);
    const info = await response.json();
    setOrganisationInfo(info);
  };
  useEffect(() => {
    getInfo();
  }, [organizations_url]);
  return (
    <div>
      <h3>Organizations:</h3>
      {organisationInfo.length>0
        ? organisationInfo.map((info) => {
            const { avatar_url, login } = info;
            return (
              <div>
                <div className="info">
                  <a href={`${url}/${login}`} target="blank">
                    {login}
                  </a>
                </div>
                <img src={avatar_url} className="avatar" />
              </div>
            );
          })
        : <h5>no organization</h5> }
    </div>
  );
};
export default OrganizationInfo;
