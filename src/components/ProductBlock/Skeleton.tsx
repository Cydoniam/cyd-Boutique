import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={200}
    height={410}
    viewBox="0 0 200 410"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="0" rx="0" ry="0" width="180" height="280" />
    <rect x="30" y="285" rx="0" ry="0" width="140" height="35" />
    <rect x="0" y="325" rx="0" ry="0" width="200" height="36" />
    <rect x="120" y="365" rx="0" ry="0" width="80" height="30" />
    <rect x="0" y="365" rx="0" ry="0" width="80" height="30" />
  </ContentLoader>
);

export default Skeleton;
