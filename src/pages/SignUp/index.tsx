import React, { FormEvent, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Container, Content, Background, PersonalData } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationError';
import InputMask from '../../components/Input/InputMask';
import { useAuth } from '../../hooks/auth';

interface SignFormData {
  name: string;
  rg: string;
  cpf: string;
  birthdate: string;
  cep: string;
  street: string;
  number?: string;
  state: string;
  city: string;
  neighborhood: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { createUser } = useAuth();
  const history = useHistory();

  const cepValidation = useCallback(async () => {
    const cep = formRef.current
      ?.getFieldValue('cep')
      .replace('-', '')
      .replace('_', '');
    if (cep.length === 8) {
      const response = await api.get(`${cep}/json/`);
      if (response.data) {
        formRef.current?.setFieldValue('city', response.data.localidade);
        formRef.current?.setFieldValue('state', response.data.uf);
        formRef.current?.setFieldValue('neighborhood', response.data.bairro);
        formRef.current?.setFieldValue('street', response.data.logradouro);
      }
    }
  }, []);

  const clearError = useCallback((e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget?.name;
    if (formRef.current?.getFieldError(name)) {
      formRef.current.setFieldError(name, '');
      if (name === 'cep') {
        formRef.current.setFieldError('state', '');
        formRef.current.setFieldError('uf', '');
      }
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: SignFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const dataFormatted = {
          id: uuid(),
          name: data.name,
          rg: data.rg,
          cpf: Number(data.cpf.replaceAll('.', '').replace('-', '')),
          birthdate: Number(data.birthdate.replaceAll('/', '')),
          cep: data.cep.replace('-', ''),
          street: data.street,
          number: Number(data.number),
          state: data.state,
          city: data.city,
          neighborhood: data.neighborhood,
          email: data.email,
          password: data.password,
        };

        const schema = Yup.object().shape({
          name: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please type a valid name')
            .required('Name required'),
          rg: Yup.string(),
          cpf: Yup.number().min(11, 'CPF required'),
          birthdate: Yup.number().min(8, 'Please type a valid bithdate'),
          cep: Yup.string().min(8, 'Please type a valid zipcode'),
          street: Yup.string().required('Please type the street name'),
          number: Yup.number().nullable(),
          state: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please type the state')
            .required('Please type a valid zipcode'),
          city: Yup.string()
            .matches(/^[A-Za-z ]*$/, 'Please type the city')
            .required('Please type a valid zipcode'),
          neighborhood: Yup.string().required('Please type the neighborhood'),
          email: Yup.string()
            .required('Email required')
            .email('Please type a valid email'),
          password: Yup.string().min(
            6,
            'Password must have a list 6 characters',
          ),
        });

        await schema.validate(dataFormatted, {
          abortEarly: false,
        });
        createUser(dataFormatted);
        history.push('/');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [createUser, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <h1>HEALTHY FOODS</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Faça seu Cadastro</h2>
          <PersonalData>
            <Input
              onKeyUp={clearError}
              name="name"
              type="text"
              placeholder="Name"
            />
            <InputMask
              onKeyUp={clearError}
              mask="99.999.999-9"
              name="rg"
              placeholder="ID"
            />
            <InputMask
              onKeyUp={clearError}
              mask="999.999.999-99"
              name="cpf"
              placeholder="CPF"
            />
            <InputMask
              onKeyUp={clearError}
              mask="99/99/9999"
              name="birthdate"
              placeholder="Birthday"
            />
            <InputMask
              onKeyUp={clearError}
              mask="99999-999"
              name="cep"
              onChange={cepValidation}
              placeholder="Zipcode"
            />
            <Input
              onKeyUp={clearError}
              name="street"
              type="string"
              placeholder="Street"
            />
            <Input
              onKeyUp={clearError}
              name="number"
              type="number"
              placeholder="Number"
            />
            <Input
              onKeyUp={clearError}
              name="neighborhood"
              type="string"
              placeholder="Neighborhood"
            />
            <Input
              onKeyUp={clearError}
              name="city"
              type="string"
              placeholder="City"
              disabled
            />
            <Input
              onKeyUp={clearError}
              name="state"
              type="string"
              placeholder="State"
              disabled
            />
            <Input
              onKeyUp={clearError}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Input
              onKeyUp={clearError}
              name="password"
              type="password"
              placeholder="Password"
            />
          </PersonalData>
          <Button type="submit">Register</Button>
          <Link to="signin">Do you have account? Log in</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
