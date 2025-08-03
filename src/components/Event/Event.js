import styled from "styled-components";

export const Item = styled.li`
  border-radius: 40px;
  width: calc((100% - 60px) / 2);
  box-shadow: 10px 10px 0 0 #ffb300ff, -10px -10px 0 0 #ffee00ff;
  padding: 60px 40px;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 10px 10px 0 0 #ffb300ff, -10px -10px 0 0 #ffee00ff,
      10px 10px 10px 0 #ffb300ff, -10px -10px 10px 0 #ffee00ff;
    transform: scale(1.02);
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  margin-bottom: 28px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Detail = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Text = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
`;
