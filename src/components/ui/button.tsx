import * as React from 'react';
import { cn } from '../../lib/utils';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: ''; // this name here dont mean anything but removing causes me error thats why its here => import Buttons from '../molecules/input-components/buttons/buttons.molecule'
}
// i think this approve for a button it more ok than the one found here
// using forwardRef to extend the button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          // using the cn function here to merge tailwindclasses
          'inline-flex  h-10 px-4 py-2 text-white bg-blue-700 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   ',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'button';
export { Button };
