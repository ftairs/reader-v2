import { Heading, Box, useColorModeValue } from "@chakra-ui/react";
import Nav from "../parts/Nav";
import TocBar from "../parts/TocBar";
import Controls from "../parts/Controls";
import { useViewStore } from "../../useViewStore";

import output from "../../output.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Related from "../parts/Related";

export default function View() {
  const viewId = useViewStore((state) => state.viewId);
  const [content, setContent] = useState<any>(undefined);
  const navigate = useNavigate();
  const [fontTrack, setFontTrack] = useState<number | undefined>(18);
  const heroTextColor = useColorModeValue("gray.600", "gray.300");
  const heroBgColor = useColorModeValue("gray.100", "gray.900");

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
      <Box
        color={heroTextColor}
        background={heroBgColor}
        textAlign="center"
        paddingY={"140px"}
      >
        <Heading>
          {content && viewId.slice(5) && content.chapterNames[viewId.slice(5)]}
          {/* {viewId.slice(5)} */}
        </Heading>
      </Box>
      <Box maxW={"800px"} margin="0 auto" marginY={8}>
        {content && content.chapters && (
          <Box
            id="js-view"
            minHeight={"100vh"}
            fontSize={fontTrack}
            dangerouslySetInnerHTML={{
              __html: content.chapters[viewId.slice(5)],
            }}
          ></Box>
        )}
      </Box>
      <Related />
      <Controls fontTrack={fontTrack} setFontTrack={setFontTrack} />
    </>
  );
}
