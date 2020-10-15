import React, { Fragment } from "react";
import {
  CommentsWrapper,
  FirstTitle,
  FirstText,
  CommentsBlockWrapper,
  Item,
  TextWrapper,
  CommentsBoard,
  CommentText,
  CommentAuthor
} from "./style";

export default function CommentsBlock() {
  const comments = [
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
      author: "- Lorem ipsum",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
  ];

  const commentsRender = comments.map((comment) => (
    <Item>
      <CommentText> {comment.text} </CommentText>
      <CommentAuthor> {comment.author} </CommentAuthor>
    </Item>
  ));

  return (
    <CommentsBlockWrapper id="comments">
      <CommentsWrapper>
        <TextWrapper>
          <FirstTitle>Lorem ipsum</FirstTitle>
          <FirstText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </FirstText>
        </TextWrapper>
        <CommentsBoard>{commentsRender}</CommentsBoard>
      </CommentsWrapper>
    </CommentsBlockWrapper>
  );
}
