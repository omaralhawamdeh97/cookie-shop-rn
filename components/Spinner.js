import React from "react";
import {
  Spinner,
  HStack,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";
const Spinnerr = () => {
  return (
    <NativeBaseProvider>
      <HStack space={2}>
        <Heading color="primary.800">Loading</Heading>
        <Spinner accessibilityLabel="Loading posts" />
      </HStack>
      <Center flex={1}></Center>
    </NativeBaseProvider>
  );
};

export default Spinnerr;
