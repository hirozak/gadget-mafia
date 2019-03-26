import * as React from 'react';
import ContentLoader from 'react-content-loader';

import './itemLoader.scss';

const contentLoaderColumns = (
  <ContentLoader
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="55%" />
    <rect x="0" y="60%" rx="5" ry="5" width="100%" height="7%" />
    <rect x="0" y="75%" rx="5" ry="5" width="100%" height="5%" />
  </ContentLoader>
);

const contentLoader2Columns = (
  <ContentLoader
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}
  >
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="70%" />
    <rect x="0" y="73%" rx="5" ry="5" width="100%" height="8%" />
    <rect x="0" y="85%" rx="5" ry="5" width="100%" height="5%" />
  </ContentLoader>
);

const itemLoader = () => {
  const items = [];
  if (window.innerWidth < 761) {
    for (let i = 0; i < 8; i++) {
      items.push(
        <div className="loader" key={`loader-${i}`}>
          {contentLoader2Columns}
        </div>
      );
    }
  } else {
    const loaderLength = Math.floor((window.innerWidth - 40) / 260) * 3;
    for (let i = 0; i < loaderLength; i++) {
      items.push(
        <div className="loader" key={`loader-${i}`}>
          {contentLoaderColumns}
        </div>
      );
    }
  }
  return <div className="loaders">{items}</div>;
};

export default itemLoader;
