import { Paper } from '@mantine/core';
import Authentication from '../../containers/Authentication/Authentication';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Authentication />
      <div className={styles['bg-image']} />
    </div>
  );
};

export default Login;
