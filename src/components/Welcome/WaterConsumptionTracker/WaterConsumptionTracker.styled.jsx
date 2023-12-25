import styled from '@emotion/styled';

export const HiddenTitle = styled.h1`
  display: none;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Parag = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tracker = styled.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 439px;
  }
`;

export const Image = styled.svg`
  color: ${({ theme }) => theme.color.accent};
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export const BenefitsTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.color.accent};
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.activeButton};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 280px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 384px;
  }
`;
