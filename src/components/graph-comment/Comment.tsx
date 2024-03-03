import { Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 150px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 5px;
  color: #000;
  border: 1px solid gray;
  box-shadow: 0px 2px 2px #e5eaf2;
  resize: vertical;

  background-color: #fff;
  margin: 10px 0 0 0;

  &:hover {
    border-color: #000;
  }

  &:focus {
    border-color: #737373;
    box-shadow: 0 0 0 3px #daecff;
  }
`;

export default function Comment() {
  const [comment, setComment] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleComment = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <>
      <StyledTextarea
        value={comment}
        onChange={handleChange}
        placeholder="Write Your Observation"
      />
      <Button
        variant="contained"
        sx={{ float: "right", textTransform: "none", mt: "5px" }}
        onClick={handleComment}
      >
        Comment
      </Button>
    </>
  );
}
