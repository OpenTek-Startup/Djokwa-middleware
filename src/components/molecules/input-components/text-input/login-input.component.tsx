/* eslint-disable @typescript-eslint/no-empty-function */
import { IconRepository } from '../../../../repository/icons/icon.repository';
import TextInput from './text-input.component';
import style from './textInput.module.css';
// type Props = {
//   placeholder: string;
//   type: string;
//   name: string;
// };

const LoginInput = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <div id={style.login_container}>
      <TextInput
        height={200}
        label="email"
        width="100%"
        icon={<IconRepository.UserIcon />}
        type="email"
        name="name"
        onChange={() => {}}
      />{' '}
      <TextInput
        height={200}
        label="Password"
        width="100%"
        icon={<IconRepository.EyeopenIcon />}
        type="password"
        name="password"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    </div>
  );
};
export default LoginInput;
