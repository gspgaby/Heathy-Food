import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Background, Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationError';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('A senha deve ser preenchida'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <h1>HEALTHY FOODS</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Log in</Button>
          <a href="#senha">Forgot password</a>
        </Form>
        <Link to="signup">Register</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
