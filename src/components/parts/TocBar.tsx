import { useRef } from "react";
import Toc from "./Toc";
import {
  Icon,
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
export default function TocBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let btnRef = useRef<any>();
  return (
    <>
      <IconButton
        isRound
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        position="fixed"
        right={2}
        top={2}
        aria-label="Open"
      >
        <Icon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Table of Contents</DrawerHeader>

          <DrawerBody>
            <Toc />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
