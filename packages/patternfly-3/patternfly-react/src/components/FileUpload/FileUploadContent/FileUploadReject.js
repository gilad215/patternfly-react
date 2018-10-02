import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const FileUploadReject = ({ rejectedFiles, reset, text, icon, className, ...props }) => {
  const classes = classNames('upload-file-reject-text-pf', className);

  return (
    <div className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
      </h1>
      <h1>{text}</h1>
      <div>
        <Button bsClass="warning" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
};
FileUploadReject.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string,
  /** Rejected Files */
  rejectedFiles: PropTypes.array,
  /** Reset the dropzone func */
  reset: PropTypes.func
};
FileUploadReject.defaultProps = {
  className: '',
  text: null,
  icon: null,
  rejectedFiles: null,
  reset: null
};
export default FileUploadReject;
