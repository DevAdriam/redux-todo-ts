import Items from "./Components/Todo/items";
import Form from "./Elements/Form";
import { Box, Container } from "@mui/material";

const App = () => {
    return (
        <div>
            <Container>
                <Box sx={{ mx: { lg: 20, md: 10 } }}>
                    <h1>Todo App</h1>
                    <Form />
                    <Items />
                </Box>
            </Container>
        </div>
    );
};

export default App;
