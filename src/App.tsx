import { InnerWrapper, Wrapper } from "./Styles/Style";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Wrapper>
      <InnerWrapper>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;
