import React from 'react';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// import { Delete } from '@material-ui/icons';
// import { IconButton, Tooltip } from '@material-ui/core';

const MaterialUIBundleSize = () => (
  <div>
    <Tooltip title="Delete">
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
    </Tooltip>
  </div>
)

export default MaterialUIBundleSize;
