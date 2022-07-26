import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => {
  return (
    <div className="pizza-item">
      <ContentLoader
        speed={2}
        width="100%"
        height={560}
        viewBox="0 0 300 560"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="120" cy="120" r="120" />
        <rect x="0" y="290" rx="9" ry="9" width="300" height="25" />
        <rect x="0" y="370" rx="9" ry="9" width="300" height="80" />
        <rect x="194" y="404" rx="0" ry="0" width="10" height="15" />
        <rect x="128" y="510" rx="10" ry="10" width="168" height="45" />
        <rect x="0" y="510" rx="10" ry="10" width="100" height="45" />
      </ContentLoader>
    </div>
  );
};
