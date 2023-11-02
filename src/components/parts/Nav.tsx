import { useRef } from "react";
import { MdMenu } from "react-icons/md";
import {
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

const navList = [
  {
    label: "Home",
    destination: "/",
  },
  {
    label: "Table of Contents",
    destination: "/toc",
  },
];
export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let btnRef = useRef<any>();
  return (
    <>
      <IconButton
        isRound
        ref={btnRef}
        onClick={onOpen}
        position="fixed"
        left={2}
        top={2}
        aria-label="Open"
        backgroundColor="brand.main"
        color="white"
        _hover={{
          backgroundColor: "black",
        }}
      >
        <MdMenu size="24px" />
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
          <DrawerHeader
            background="brand.main"
            color="white"
            paddingY={20}
            fontSize={32}
          >
            E.A. Poe Reader
            <Text opacity="0.5" fontSize="xs">
              v2.1.0
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <List fontSize={20} mt={4} spacing={4}>
              {navList.map((item) => {
                return (
                  <ListItem key={item.label}>
                    <Link
                      href={item.destination}
                      _hover={{
                        fontWeight: "600",
                        color: "brand.main",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  </ListItem>
                );
              })}
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
