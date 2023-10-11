import { Box, HStack, Flex, Icon, Button } from "@chakra-ui/react";

export default function Controls() {
  const controls = [
    {
      label: "Zoom-Out",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "Zoom-In",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "Page Up",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "Page Down",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "Switch Theme",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "autoScroll",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
    {
      label: "scrollspeed",
      icon: <Icon />,
      action: () => {
        console.log("clicked");
      },
    },
  ];
  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right={0}
      background={"gray.200"}
      p={4}
      justifyContent={"space-around"}
    >
      {controls.map((item) => {
        return (
          <Box textAlign="center">
            <Button>
              <Icon marginRight={4} />
              {item.label}
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
}
