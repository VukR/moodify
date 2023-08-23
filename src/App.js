import SubTitleText from "./components/text/SubTitleText";
import TitleText from "./components/text/TitleText";

import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <TitleText />
        <SubTitleText />
      </Container>
    </div>
  );
}

export default App;
