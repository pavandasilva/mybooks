import React from 'react';

import { Container, LeftContent, RightContent, Label } from './styles';

const BookCard: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <div>
          <img
            src="http://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000"
            alt="O pequeno Príncipe"
          />
        </div>
        <button type="button">MAIS INFOS</button>
      </LeftContent>
      <RightContent>
        <h1>O pequeno Príncipe</h1>
        <p>
          O autor do livro é o personagem principal da história, que assume
          também o papel de narrador, contando sobre o fatídico dia em que o seu
          avião teria caído no meio do deserto do Saara. ...
        </p>

        <Label>
          <span>desejo</span>
        </Label>
      </RightContent>
    </Container>
  );
};

export default BookCard;
