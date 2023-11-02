import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { LegacyRef, useRef } from "react";
import {
  MdLightbulb,
  MdOutlineZoomInMap,
  MdOutlineZoomOutMap,
  MdArrowDownward,
  MdArrowUpward,
  MdLightbulbOutline,
} from "react-icons/md";

export default function Controls({
  fontTrack,
  setFontTrack,
}: {
  fontTrack: any;
  setFontTrack: any;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const containerRef = useRef() as LegacyRef<HTMLDivElement> | undefined;
  const textColor = useColorModeValue("gray.900", "white");
  const buttonBg = useColorModeValue("gray.200", "gray.900");
  const barBg = useColorModeValue("white", "gray.800");

  const controls = [
    {
      label: "Zoom-Out",
      icon: <MdOutlineZoomOutMap />,
      action: () => {
        setFontTrack(Math.floor(fontTrack - fontTrack * 0.1));
      },
    },
    {
      label: "Zoom-In",
      icon: <MdOutlineZoomInMap />,
      action: () => {
        setFontTrack(Math.floor(fontTrack + fontTrack * 0.1));
      },
    },
    {
      label: "Page Up",
      icon: <MdArrowUpward />,
      action: (ref: any) => {
        let amountToScroll = window.scrollY - window.innerHeight;
        window.scrollTo({
          top: amountToScroll,
          behavior: "smooth",
        });
      },
    },
    {
      label: "Page Down",
      icon: <MdArrowDownward />,
      action: (ref: any) => {
        let amountToScroll = window.scrollY + window.innerHeight;
        window.scrollTo({
          top: amountToScroll - ref.current.clientHeight - 24,
          behavior: "smooth",
        });
      },
    },
    {
      label: `Switch Theme`,
      icon: colorMode === "dark" ? <MdLightbulbOutline /> : <MdLightbulb />,
      action: () => {
        toggleColorMode();
      },
    },
  ];

  return (
    <Flex
      ref={containerRef}
      position="fixed"
      bottom="0"
      left="0"
      right={0}
      p={2}
      justifyContent={"space-around"}
      background={barBg}
    >
      {controls.map((item) => {
        return (
          <Box textAlign="center" key={item.label}>
            <Button
              fontSize={14}
              onClick={() => {
                item.action(containerRef);
              }}
              background={buttonBg}
              _hover={{
                backgroundColor: buttonBg,
              }}
            >
              <Box marginRight={2} color={"brand.main"}>
                {item.icon}
              </Box>
              <Box color={textColor}> {item.label}</Box>
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
}
