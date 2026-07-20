import { Box } from "@chakra-ui/react";
import "../index.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
export function Home() {
  return (
    <Box>
      <Header />
      <Section />
      <Footer />
    </Box>
  );
}
