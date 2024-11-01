import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Divider,
} from '@mantine/core';
import styles from './authentication.module.css';
import { useNavigate } from 'react-router-dom';

const Authentication = (props) => {
  const navigate = useNavigate();
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    // validate: {
    //   email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    //   password: (val) =>
    //     val.length <= 6
    //       ? 'Password should include at least 6 characters'
    //       : null,
    // },
  });

  const handleSubmit = () => {
    navigate('/admin-dashboard');
    // form.onSubmit(() => {});
  };

  return (
    <Paper
      radius={0}
      padding="xl"
      {...props}
      className={styles['auth-container']}
    >
      <Text size="lg" weight={500} className={styles['welcome-text']}>
        Welcome to <span>I-ABIDE,</span> <span>{type} with</span>
      </Text>

      <Divider my="lg" />

      <form onSubmit={handleSubmit}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
              radius={0}
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="yahoo@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius={0}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
            radius={0}
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group className={styles['btn-group']}>
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default Authentication;
