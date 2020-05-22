import React from 'react';

import { FaTimes } from 'react-icons/fa';

import {
  Container,
  BasicFields,
  LeftContent,
  RightContent,
  TextArea,
  BottomContent,
  Select,
  Controllers,
} from './styles';

import { ModalOverlay, Close } from '../../styles/styles';

const BookForm: React.FC = () => {
  return (
    <ModalOverlay>
      <Container>
        <Close>
          <FaTimes />
        </Close>
        <h1>Cadastro de livro</h1>
        <form action="">
          <BasicFields>
            <LeftContent>
              <label htmlFor="title">
                Título:
                <input type="text" id="title" placeholder="Informe um título" />
              </label>
              <label htmlFor="author">
                Autor:
                <input
                  type="text"
                  id="author"
                  placeholder="Informe o autor do livro"
                />
              </label>
              <label htmlFor="description">
                Descrição:
                <TextArea>
                  <textarea rows={6} id="description" />
                </TextArea>
              </label>
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
            <label htmlFor="url">
              Url da capa do livro:
              <input
                type="text"
                id="url"
                placeholder="Insira a URL da imagem"
              />
            </label>

            <label htmlFor="category">
              Categoria
              <Select>
                <select id="category">
                  <option value="wanted">Desejado</option>
                  <option value="read">Lido</option>
                  <option value="reading">Lendo</option>
                </select>
              </Select>
            </label>
          </BottomContent>
        </form>

        <Controllers>
          <button type="button">CANCELAR</button>
          <button type="button">SALVAR</button>
        </Controllers>
      </Container>
    </ModalOverlay>
  );
};

export default BookForm;
