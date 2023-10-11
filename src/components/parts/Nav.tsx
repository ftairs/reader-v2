import { useRef } from "react";

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
  Link,
  List,
  ListItem,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
export default function Nav() {
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
        left={2}
        top={2}
        aria-label="Open"
      >
        <Icon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader background="gray.100" paddingY={20}>
            E.A. Poe Reader{" "}
            <Text opacity="0.5" fontSize="xs">
              v2.0
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <List>
              <ListItem>
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="/view">view</Link>
              </ListItem>
              <ListItem>
                <Link href="/toc">toc</Link>
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter fontSize="xs" opacity="0.5">
            &copy; 2023 Victor Fuentes
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
