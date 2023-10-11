import { List, ListItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import output from "../../output.json";
import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useViewStore } from "../../useViewStore";

export default function Toc() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | undefined>(
    output[0].id
  );
  const { viewId, setViewId } = useViewStore();

  return (
    <>
      {viewId}
      <Select
        placeholder="Select option"
        onChange={(val) => {
          console.log(val.target.value);
          setSelectedId(parseInt(val.target.value));
        }}
        value={selectedId}
      >
        {output
          .sort((a, b) => (a.id !== b.id ? (a.id < b.id ? -1 : 1) : 0))
          .map((item) => {
            return <option value={item.id}>{item.title}</option>;
          })}
      </Select>
      <List>
        {output
          .filter((item) => item.id === selectedId)[0]
          .chapterNames.map((name, index) => {
            return (
              <ListItem
                onClick={() => {
                  setViewId(
                    `${
                      output.filter((item) => item.id === selectedId)[0].id
                    }-${index}`
                  );
                  navigate("/view");
                }}
              >
                {name}
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
