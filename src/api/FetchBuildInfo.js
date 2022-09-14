import apiNames from '../constants/apiNames';
import fetch from 'node-fetch';

function mapJson (json) {
  const name = json.buildInfo.app.name;
  const buildTime = json.buildInfo.app.buildTime;
  const commitTime = json.buildInfo.git.commitTime;
  const commitId = json.buildInfo.git.commitId;
  const tags = json.buildInfo.git.tags;
  const branch = json.buildInfo.git.branch;
  return {
    name,
    buildTime,
    commitTime,
    commitId,
    tags,
    branch,
  };
};

function fetchBuildInfo(domainUrl) {
  return apiNames.map(async apiName => {
    const url = `${domainUrl}/${apiName}/info`;
    const response = await fetch(url);
    if (!response.ok) return;
    const json = await response.json();
    return mapJson(json);
  });
};

export {fetchBuildInfo};
