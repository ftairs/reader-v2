import { List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import output from "../../output.json";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useViewStore } from "../../useViewStore";

export default function Toc({ onClose }: { onClose?: any }) {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | undefined>(
    output[0].id
  );
  const { setViewId } = useViewStore();

  return (
    <>
      <Select
        placeholder="Select option"
        onChange={(val) => {
          setSelectedId(parseInt(val.target.value));
        }}
        value={selectedId}
        mb={2}
      >
        {output
          .sort((a, b) => (a.id !== b.id ? (a.id < b.id ? -1 : 1) : 0))
          .map((item) => {
            return <option value={item.id}>{item.title}</option>;
          })}
      </Select>
      <List spacing={1}>
        {output
          .filter((item) => item.id === selectedId)[0]
          .chapterNames.map((name, index) => {
            return (
              <ListItem
                key={name}
                onClick={() => {
                  setViewId(
                    `${
                      output.filter((item) => item.id === selectedId)[0].id
                    }-${index}`
                  );
                  navigate("/view");
                  if (onClose) {
                    onClose();
                  }
                }}
                p={2}
                transition="0.3s ease all"
                borderRadius={4}
                _hover={{
                  backgroundColor: "brand.main",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                &bull; {name}
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
