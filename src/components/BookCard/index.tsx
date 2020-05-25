import React from 'react';

import { Container, LeftContent, RightContent, Label } from './styles';

interface BookCardProps {
  data: {
    title: string;
    author: string;
    description: string;
    cover?: string;
    category?: 'read' | 'reading' | 'want_read';
    updatedAt: string;
    createdAt: string;
  };
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
  return (
    <Container>
      <LeftContent>
        <div>{data.cover && <img src={data.cover} alt={data.title} />}</div>
        <button type="button">MAIS INFOS</button>
      </LeftContent>
      <RightContent>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.category && (
          <Label category={data.category}>
            <span>{data.category}</span>
          </Label>
        )}
      </RightContent>
    </Container>
  );
};

export default BookCard;
