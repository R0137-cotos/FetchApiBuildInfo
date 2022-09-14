const headerInfo = {
  name: 'name',
  buildTime: 'buildTime',
  commitTime: 'commitTime',
  commitId: 'commitId',
  tags: 'tags',
  branch: 'branch',
};

function decorate(buildInfo, maxLengthMap) {
  const getPadStrings = propName => {
    if (!buildInfo[propName]) return ''.padStart(maxLengthMap[propName]);
    return buildInfo[propName].padStart(maxLengthMap[propName]);
  };
  const nameCol = getPadStrings('name');
  const buildTimeCol = getPadStrings('buildTime');
  const commitTimeCol = getPadStrings('commitTime');
  const commitIdCol = getPadStrings('commitId');
  const tagsCol = getPadStrings('tags');
  const branchCol = getPadStrings('branch');
  return `# ${nameCol} # ${buildTimeCol} # ${commitTimeCol} # ${commitIdCol} # ${tagsCol} # ${branchCol} #`;
};

function output(results) {
  const resultTable = [headerInfo].concat(results);

  const maxLengthMap = resultTable.reduce((prev, next) => {
    const getBiggerLength = (prevNumber, nextString) => {
      if (!prevNumber) return nextString.length;
      return nextString.length > prevNumber ? nextString.length : prevNumber;
    };

    return {
      name: getBiggerLength(prev.name, next.name),
      buildTime: getBiggerLength(prev.buildTime, next.buildTime),
      commitTime: getBiggerLength(prev.commitTime, next.commitTime),
      commitId: getBiggerLength(prev.commitId, next.commitId),
      tags: getBiggerLength(prev.tags, next.tags),
      branch: getBiggerLength(prev.branch, next.branch),
    };
  }, {});

  resultTable.forEach(buildInfo => {
    const row = decorate(buildInfo, maxLengthMap);
    console.log(row);
  });
};

export {output};
