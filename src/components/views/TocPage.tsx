import { Flex, Heading, Stack } from "@chakra-ui/react";
import Nav from "../parts/Nav";
import Toc from "../parts/Toc";
export default function TocPage() {
  return (
    <>
      <Flex w="100vw" minH="100vh" alignItems="center" justifyContent="center">
        <Stack textAlign="center" spacing={4}>
          <Heading>Table of Contents</Heading>
          <Toc />
        </Stack>
      </Flex>

      <Nav />
    </>
  );
}
