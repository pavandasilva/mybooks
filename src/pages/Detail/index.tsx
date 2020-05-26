import React from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

import SubHeader from '../../components/SubHeader';

import { Label } from '../../styles/styles';
import { Container, BookContent, LeftContent, RightContent } from './styles';

interface DetailState {
  state: {
    title: string;
    author: string;
    description: string;
    categoryName: string;
  };
}

interface HomeProps extends RouteComponentProps {
  location: Location & DetailState;
}

const Detail: React.FC<HomeProps> = ({ location }) => {
  const { title, author, description, categoryName } = location.state;

  return (
    <>
      <SubHeader mode="update" />
      <Container>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <BookContent>
          <LeftContent>
            <div>
              <img
                src="https://a-static.mlcdn.com.br/1500x1500/livro-o-pequeno-principe/bookmarket/127036/7ad933c8b51d77690e51fd55b80b0211.jpg"
                alt="title"
              />
            </div>
          </LeftContent>
          <RightContent>
            <span>Descrição do livro</span>
            <p>{description}</p>
            <Label>
              <span>{categoryName}</span>
            </Label>
          </RightContent>
        </BookContent>
      </Container>
    </>
  );
};

export default Detail;
