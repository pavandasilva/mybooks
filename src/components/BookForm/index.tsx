import React, { useRef, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

import IsValidImageUrl from '../../helpers/isValidImageUrl';

import { Input, Select, TextArea } from '../Form';
import { useBook } from '../../hooks/book';
import { useBookForm } from '../../hooks/bookForm';
import { useAlert } from '../../hooks/alert';

import {
  Container,
  BasicFields,
  LeftContent,
  RightContent,
  BottomContent,
  Controllers,
  Close,
} from './styles';

import { ModalOverlay } from '../../styles/styles';

interface BookRegisterProps {
  dataToEdit?: BookForm;
}

interface BookForm {
  title: string;
  author: string;
  description: string;
  category?: string;
  cover?: string;
  createdAt?: string;
  updatedAt?: string;
}

const BookForm: React.FC<BookRegisterProps> = ({ dataToEdit }) => {
  /* dataToEdit = {
    title: 'teste',
    author: 'author',
    description: 'description',
    cover: 'flflflflflflf',
    createdAt: 'ssasa',
    updatedAt: 'dsdds',
  }; */

  const selectOptions = [
    { value: 'read', label: 'Lido' },
    { value: 'reading', label: 'Lendo' },
    { value: 'wantToRead', label: 'Quero ler' },
  ];

  const formRef = useRef<FormHandles>(null);
  const { insert } = useBook();
  const { hideBookForm } = useBookForm();
  const { showAlert } = useAlert();

  const handleFormSubmit: SubmitHandler<BookForm> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O título é obrigatório'),
        author: Yup.string().required('O autor é obrigatório'),
        description: Yup.string().required('A descrição é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      /* clear all form errors */
      if (formRef.current) formRef.current.setErrors({});

      try {
        insert(data);
        reset();
        showAlert({
          type: 'success',
          message: 'Livro cadastrado com sucesso.',
        });
      } catch (err) {
        console.log(err);
      }

      /* clear form */
    } catch (err) {
      const validationErrors: any = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        if (formRef.current !== null)
          formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <ModalOverlay>
      <Container>
        <Close onClick={hideBookForm}>
          <FaTimes />
        </Close>
        <h1>
          {dataToEdit ? 'Edição ' : 'Cadastro '}
          de livro
        </h1>
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          initialData={dataToEdit}
        >
          <BasicFields>
            <LeftContent>
              <Input
                name="title"
                label="Título:"
                placeholder="Informe o título do livro"
              />
              <Input
                name="author"
                label="Autor:"
                placeholder="Informe o autor do livro"
              />

              <TextArea name="description" label="Descrição:" rows={4} />
            </LeftContent>
            <RightContent>
              <div>
                <img
                  src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000"
                  alt="Livro"
                />
              </div>
              <span>Cadastro em 25/03/2020</span>
            </RightContent>
          </BasicFields>
          <BottomContent>
            <Input
              name="cover"
              label="URL da capa:"
              placeholder="Insira uma URL de imagem para a capa do livro"
            />
            <Select
              options={selectOptions}
              name="category"
              label="Categoria:"
            />
          </BottomContent>

          <Controllers>
            <button type="button" onClick={hideBookForm}>
              CANCELAR
            </button>
            <button type="submit">SALVAR</button>
          </Controllers>
        </Form>
      </Container>
    </ModalOverlay>
  );
};

export default BookForm;
