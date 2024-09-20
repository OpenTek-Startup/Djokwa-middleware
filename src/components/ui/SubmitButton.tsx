import { ReactNode } from 'react';
import { Button, ButtonProps } from './button';
import { useNavigation } from 'react-router-dom';
import { cn } from '../../lib/utils';
interface iSubmitProps extends ButtonProps {
  children: ReactNode;
  isError?: boolean;
  submittingText?: string | ReactNode;
  isLoading?: boolean;
}
const SubmitButton = ({
  children,
  className,
  submittingText,
  isLoading,
  ...props
}: iSubmitProps) => {
  const navigation = useNavigation();
  const isSubmitting = isLoading ?? navigation.state == 'submitting';
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        `
         disabled:bg-gray-800
            `,
        className
      )}
      {...props}
    >
      {isSubmitting ? submittingText || 'loading ...' : children}
    </Button>
  );
};

export default SubmitButton;
