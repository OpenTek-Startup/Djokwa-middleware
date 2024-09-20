import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HttpCommon } from '../hooks/httpCommon/httpCommon';
import wait from '../utils/wait';
import { Button } from './ui/button';

const Logout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();
  const handleLogout = async () => {
    try {
      await wait(5000); // for testing
      await HttpCommon.get('/auth/logout');
      navigate('/auth');
      await queryClient.invalidateQueries();
    } catch (err) {
      toast.error('fail to logout user');
    }
  };
  return (
    <form onSubmit={handleSubmit(handleLogout)}>
      <Button disabled={isSubmitting} className="bg-red-500">
        {isSubmitting ? 'logging out ...' : 'log out'}
      </Button>
    </form>
  );
};

export default Logout;
