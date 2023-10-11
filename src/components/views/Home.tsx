import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import TocBar from "../parts/TocBar";
import Nav from "../parts/Nav";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let btnRef = useRef<any>();
  const navigate = useNavigate();
  return (
    <>
      <Nav />

      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Stack textAlign="center" spacing={4}>
          <Heading size="3xl">Heading Here</Heading>
          <Text>This is some stuff here</Text>
          <Button
            onClick={() => {
              navigate("/toc");
            }}
          >
            Start Reading
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
