import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';

const LoaderWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const Loader = () => (
  <LoaderWrapper>
    <Loading animating={true} color="#2182BD" size={50} />
  </LoaderWrapper>
);
