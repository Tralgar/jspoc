import React, {useState} from 'react';
import {FilePond, registerPlugin} from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
const Filepond = () => {
  const [files, setFiles] = useState([
    {
      source: "index.html",
      options: {
        type: "local"
      }
    }
  ]);

  return (
    <FilePond
      files={files}
      allowMultiple={true}
      maxFiles={3}
      onupdatefiles={fileItems => {
        setFiles(fileItems.map(fileItem => fileItem.file))
      }}
    />
  );
};

export default Filepond;
