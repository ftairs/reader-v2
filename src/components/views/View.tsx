import { Heading, Flex, Box, Container } from "@chakra-ui/react";
import Nav from "../parts/Nav";
import TocBar from "../parts/TocBar";
import Controls from "../parts/Controls";
import { useViewStore } from "../../useViewStore";

import output from "../../output.json";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function View() {
  const viewId = useViewStore((state) => state.viewId);
  const [content, setContent] = useState<any>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (viewId.length) {
      setContent(
        output.filter((item) => item.id === parseInt(viewId.slice(0, 4)))[0]
      );
    }
  }, [viewId, content]);

  if (viewId === "") {
    navigate("/");
  }

  return (
    <>
      <Nav />
      <TocBar />
      <Box background="gray.100" textAlign="center" paddingY={"140px"}>
        <Heading>
          {content && viewId.slice(5) && content.chapterNames[viewId.slice(5)]}
          {/* {viewId.slice(5)} */}
        </Heading>
      </Box>
      <Box maxW={"800px"} margin="0 auto" marginY={8}>
        {content && content.chapters && (
          <Box
            minHeight={"100vh"}
            dangerouslySetInnerHTML={{
              __html: content.chapters[viewId.slice(5)],
            }}
          ></Box>
        )}
      </Box>
      <Flex mb={18 * 4 + "px"}>
        <Flex flex="1">
          <Box flex="1" background="brand.main"></Box>
          <Box
            flex="1"
            paddingY={12}
            paddingX={4}
            background="gray.100"
            maxWidth={"286px"}
          >
            test
          </Box>
        </Flex>
        <Flex flex="1">
          <Box
            flex="1"
            textAlign="right"
            paddingY={12}
            paddingX={4}
            background="gray.100"
            maxWidth={"286px"}
          >
            test
          </Box>
          <Box flex="1" background="brand.main"></Box>
        </Flex>
      </Flex>
      <Controls />
    </>
  );
}
