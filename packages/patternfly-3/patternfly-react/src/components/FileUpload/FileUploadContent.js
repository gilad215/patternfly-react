import React from 'react';
import PropTypes from 'prop-types';
import FileUploadPassive from './FileUploadContent/FileUploadPassive';
import FileUploadActive from './FileUploadContent/FileUploadActive';
import FileUploadReject from './FileUploadContent/FileUploadReject';
import FileUploadAccept from './FileUploadContent/FileUploadAccept';

const FileUploadContent = ({
  text,
  icons,
  state,
  browseClicked,
  maxAmount,
  maxSize,
  acceptedTypes,
  acceptedFiles,
  rejectedFiles,
  progressDone,
  reset
}) => {
  switch (state) {
    default:
      return null;
    case 'passive':
      return (
        <FileUploadPassive
          text={text.passive}
          icon={icons.passive}
          acceptedTypes={acceptedTypes}
          maxAmount={maxAmount}
          maxSize={maxSize}
          browseClicked={browseClicked}
        />
      );
    case 'active':
      return <FileUploadActive text={text.active} icon={icons.passive} />;
    case 'accept':
      return (
        <FileUploadAccept
          text={text.accept}
          icon={icons.accept}
          acceptedFiles={acceptedFiles}
          rejectedFiles={rejectedFiles}
          progressDone={progressDone}
        />
      );
    case 'reject':
      return <FileUploadReject text={text.reject} icon={icons.reject} rejectedFiles={rejectedFiles} reset={reset} />;
    case 'rejectAmount':
      return (
        <FileUploadReject
          text={text.rejectAmount}
          icon={icons.rejectAmount}
          rejectedFiles={rejectedFiles}
          reset={reset}
        />
      );
  }
};

FileUploadContent.propTypes = {
  /** Accepted and Rejected Files */
  acceptedFiles: PropTypes.array.isRequired,
  rejectedFiles: PropTypes.array.isRequired,
  /** Accepted File Types */
  acceptedTypes: PropTypes.string.isRequired,
  /** Text to show */
  text: PropTypes.objectOf(PropTypes.string),
  /** Icons to show */
  icons: PropTypes.objectOf(PropTypes.string),
  /** State of the Content */
  state: PropTypes.string.isRequired,
  /** Browse click func */
  browseClicked: PropTypes.func,
  /** Max Amount and Max Size of Files in Bytes */
  maxAmount: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  /** Progress Done so far */
  progressDone: PropTypes.number.isRequired,
  /** function() that resets back to initial state */
  reset: PropTypes.func
};

FileUploadContent.defaultProps = {
  reset: null,
  text: null,
  icons: null,
  browseClicked: null
};

export default FileUploadContent;
