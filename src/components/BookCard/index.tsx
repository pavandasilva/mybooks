import React from 'react';

import { Label } from '../../styles/styles';
import { Container, LeftContent, RightContent, LinkButton } from './styles';

interface BookCardProps {
  data: {
    title: string;
    author: string;
    description: string;
    cover?: string;
    categoryId?: string;
    categoryName?: string;
    updatedAt: string;
    createdAt: string;
  };
}

const BookCard: React.FC<BookCardProps> = ({ data }) => {
  return (
    <Container>
      <LeftContent>
        <div>{data.cover && <img src={data.cover} alt={data.title} />}</div>
        <LinkButton
          to={{
            pathname: `/detail/${data.title.toLowerCase().replace(' ', '-')}`,
            state: { ...data },
          }}
        >
          MAIS INFOS
        </LinkButton>
      </LeftContent>
      <RightContent>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        {data.categoryName && (
          <Label category={data.categoryName}>
            <span>{data.categoryName}</span>
          </Label>
        )}
      </RightContent>
    </Container>
  );
};

export default BookCard;
