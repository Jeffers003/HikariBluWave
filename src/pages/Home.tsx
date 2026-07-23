import { Box } from "@chakra-ui/react";
import "../index.css";
// import { Section } from "../components/Section";
import { Hero } from "../components/Hero";
import { Section } from "@/components/Section";

export function Home() {
  return (
    <Box>
      <Hero />
      <Section />
    </Box>
  );
}
