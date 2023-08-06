import { Box, Typography, Avatar, Container } from "@mui/material";

const About = () => {
    return (
        <Container>
            <Box sx={{ mx: { lg: 20, md: 10 } }}>
                <Typography variant="h1">About Us</Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iste, ducimus.
                </Typography>
                <Box sx={{ display: "flex", mt: 3 }}>
                    <Avatar>A</Avatar>
                    <Avatar>B</Avatar>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
