import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAlt,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "../Feed/InputOption";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutlined} color="gray" title="Like" />
        <InputOption Icon={ChatOutlined} color="gray" title="Comment" />
        <InputOption Icon={ShareOutlined} color="gray" title="Share" />
        <InputOption Icon={SendOutlined} color="gray" title="Send" />
      </div>
    </div>
  );
});

export default Post;
