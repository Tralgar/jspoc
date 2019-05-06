import React, { memo } from 'react';

export const FunctionalComponent = props => {
  console.log('FunctionalComponent::\"render\" -> ', "render");

  return (
    <div>
      My functional component is so cool bro !
      <p>
        My name : {props.name}
      </p>
    </div>
  );
};

export default memo(FunctionalComponent);
