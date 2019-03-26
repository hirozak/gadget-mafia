import * as React from 'react';
import ContentLoader from 'react-content-loader';

const contentLoader = () => {
  return (
    <ContentLoader
      primaryColor="rgb(0,0,0)"
      secondaryColor="rgb(0,0,0)"
      primaryOpacity={0.06}
      secondaryOpacity={0.12}
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="70%" />
      <rect x="0" y="72%" rx="5" ry="5" width="100%" height="8%" />
      <rect x="0" y="82%" rx="5" ry="5" width="100%" height="8%" />
    </ContentLoader>
  );
};

export default contentLoader;
