import { Box, Flex } from "@chakra-ui/react";
import { useViewStore } from "../../useViewStore";
import output from "../../output.json";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Related() {
  const viewId = useViewStore((state) => state.viewId);
  const { setViewId } = useViewStore();
  const bookId = viewId.split("-")[0];
  const storyId = parseInt(viewId.split("-")[1]);
  const bookLength = output.filter((item) => {
    return item.id === parseInt(bookId);
  })[0].chapterNames.length;
  const handlePrev = () => {
    if (storyId > 1) {
      setViewId(`${bookId}-${storyId - 1}`);
    }
  };
  const handleNext = () => {
    if (storyId < bookLength - 1) {
      setViewId(`${bookId}-${storyId + 1}`);
    }
  };
  return (
    <Flex maxW={"800px"} m="0 auto" mb={100} color="white">
      <Box
        flex={1}
        onClick={handlePrev}
        backgroundColor="gray.900"
        p={8}
        display="flex"
        justifyContent={"flex-start"}
        alignItems={"center"}
        borderRadius={"16px 0 0 16px"}
        _hover={{
          backgroundColor: "gray.700",
          color: "brand.main",
          cursor: "pointer",
        }}
      >
        <MdArrowBack style={{ marginRight: "8px" }} />
        Prev
      </Box>
      <Box
        flex={1}
        onClick={handleNext}
        p={8}
        textAlign={"right"}
        display="flex"
        justifyContent={"flex-end"}
        alignItems={"center"}
        backgroundColor="gray.900"
        _hover={{
          backgroundColor: "gray.700",
          color: "brand.main",
          cursor: "pointer",
        }}
        borderRadius={"0 16px 16px 0"}
      >
        Next <MdArrowForward style={{ marginLeft: "8px" }} />
      </Box>
    </Flex>
  );
}
