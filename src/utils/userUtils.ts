import { useSelector } from 'react-redux';
import { rootState } from '../redux/store';
// import { RootState } from '../store/store';
const useGetLoginUser = () => {
  // if the user is login get the user information when s/he logins action will trigger and sotre the user information to redux-toolkit
  const user = useSelector((state: rootState) => state.user.user);
  console.log('user in utils', user);
  return user;
};
export default useGetLoginUser;
