import React from 'react';
import './LoadingLayout.scss';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading">
      <div className="loading__spinner"></div>
    </div>
  );
};

export default Loading;
