import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};

  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  background: ${colors.green};
  
  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${colors.primary};

  right: 0;
  bottom: 0;
  position: absolute;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;