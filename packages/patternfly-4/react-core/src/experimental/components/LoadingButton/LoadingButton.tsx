import * as React from 'react';
import { Spinner } from '../Spinner';
import { Button } from '../../../components/Button';
import { Omit } from '../../../helpers/typeUtils';

export interface LoadingButtonProps extends Omit<React.HTMLProps<HTMLSpanElement>, 'size'> {
  /** Additional classes added to the LoadingButton. */
  className?: string;
  /** Adds Spinner near button and disables it */
  isLoading?: boolean;
  /** children to render */
  children?: React.ReactNode;
}

export const LoadingButton: React.FunctionComponent<LoadingButtonProps> = ({
  className = '',
  isLoading = false,
  children
}) => (
  <Button className={className} isDisabled={isLoading}>
    {isLoading && (
      <div className="in-spinner">
        <Spinner size="md" />
      </div>
    )}
    {children}
  </Button>
);
