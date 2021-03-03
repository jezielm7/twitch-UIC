import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-right: 14px;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 26px;
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-family: roboto_500;
`;

export const Info = styled.Text`
  margin-top: 1px;
  font-size: 13px;
  color: ${colors.gray};
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  opacity: 0.85;
  background: ${colors.black};
`;
