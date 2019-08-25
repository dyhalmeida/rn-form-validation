import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  enabled: Platform.OS === 'ios',
})`
  flex: 1;
  background: #adce89;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  padding: 50px;
  background: #fff;
  border-radius: 4px;
`;

export const Label = styled.Text`
  color: #676767;
  font-weight: 500;
  margin: 5px 0;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 240px;
  border: 1px solid #eee;
  border-radius: 4px;
  color: #333;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  background: #adce88;
  margin: 10px 0;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #f5f5f5;
  font-weight: bold;
  font-size: 16px;
`;

export const Error = styled.Text`
  color: #ff8788;
  font-weight: 500;
  margin: 5px 0;
`;

export const Title = styled.Text`
  color: #f5f5f5;
  font-weight: bold;
  margin: 20px 0;
  font-size: 32px;
`;
