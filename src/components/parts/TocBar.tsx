import { useRef } from "react";
import Toc from "./Toc";
import {
  Drawer,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { MdMenuBook } from "react-icons/md";
export default function TocBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let btnRef = useRef<any>();
  return (
    <>
      <IconButton
        isRound
        ref={btnRef}
        onClick={onOpen}
        position="fixed"
        right={2}
        top={2}
        aria-label="Open"
        backgroundColor="brand.main"
        color="white"
        _hover={{
          backgroundColor: "black",
        }}
      >
        <MdMenuBook size="24px"></MdMenuBook>
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
            <Toc onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
