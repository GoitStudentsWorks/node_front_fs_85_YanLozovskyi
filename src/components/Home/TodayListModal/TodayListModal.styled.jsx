import styled from '@emotion/styled';

export const BoxAddModal = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${props => props.theme.color.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`;

export const PreviousInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 12px;
  border-radius: 10px;
  background-color: ${props => props.theme.color.secondaryWhite};
  width: 254px;
  margin-bottom: 24px;
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${props => props.theme.color.black};
  margin-bottom: 12px;
`;

export const AddWater = styled.div`
  margin-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const InputWater = styled.input`
  border-radius: 40px;
  border: none;
  background: ${props => props.theme.color.secondaryPowderBlue};
  color: ${props => props.theme.color.accent};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 50px;
  height: 36px;
  margin-left: 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${props => props.theme.color.secondaryPowderBlue};
  color: ${props => props.theme.color.accent};
  font-size: 18px;
  font-weight: 700;

  span {
    margin-right: 15px;
  }
`;

export const ButtonMl = styled.button`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.accent};
  border-radius: 30px;
  border: 1px solid ${props => props.theme.color.secondaryLightBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

  &:hover &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.color.accent};
`;

export const AddTime = styled.div`
  margin-bottom: 24px;
`;

export const InputTime = styled.input`
  color: ${props => props.theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};

  &::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }

  &:hover {
    color: ${props => props.theme.color.accent};
    border: 1px solid ${props => props.theme.color.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.accent};
  }

  &:not(:placeholder-shown) {
    color: ${props => props.theme.color.accent};
  }
`;

export const Input = styled.input`
  color: ${props => props.theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }

  &:hover {
    color: ${props => props.theme.color.accent};
    border: 1px solid ${props => props.theme.color.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.color.accent};
  }

  &:not(:placeholder-shown) {
    color: ${props => props.theme.color.accent};
  }
`;

export const FooterModal = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${props => props.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const AddButtonSave = styled.button`
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.white};
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${props => props.theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }
`;
