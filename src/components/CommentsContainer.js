import React from "react";
import userIcon from "../assets/images/user-profile-icon.png";
const commentsData = [
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Tapish Verma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
      {
        name: "Tapish Verma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "Tapish Verma",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
              {
                name: "Tapish Verma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
                  {
                    name: "Tapish Verma",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    replies: [],
                  },
                  {
                    name: "Tapish Verma",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    replies: [
                      {
                        name: "Tapish Verma",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Tapish Verma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="bg-gray-100 my-2">
      <div className="flex fle-row mb-1">
        <img className="h-8 w-8 mr-2" alt="user" src={userIcon} />
        <span className="font-bold text-xl">{name}</span>
      </div>
      <div>{text}</div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((cmt, idx) => (
        <div key={idx}>
          <Comment data={cmt} />

          {cmt.replies.length > 0 && (
            <div className="mx-4 p-2 border border-l-red-900">
              <CommentList comments={cmt.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="m-4">
      <div className="text-2xl font-bold mb-4">Comments</div>
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;
