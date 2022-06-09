import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: lightyellow;
  position: center;
  border-radius: 10px;
  bottom: 0;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 2z000px) {
    padding: 70px 30px;
  }
`;

export const BoxTwo = styled.div`
  padding: 80px 60px;
  background: lightsteelblue;
  position: center;
  border-radius: 10px;
  bottom: 0;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 2z000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(885px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const RowTwo = styled.div`
  display: -ms-grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 70px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0px;
    font-size: 20px;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const BlackBar = styled.p`
  position: auto;
  width: 100%;
  text-align: center;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  /* background: red; */
`;

export const Padding = styled.div`
  margin-top: 20%;
`;
