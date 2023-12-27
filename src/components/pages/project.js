import React, { useState, useEffect } from "react";
// import dotenv from "dotenv";
// dotenv.config();
// const backend_url = process.env.BACKEND_URL || "http://localhost:3001";
const backend_url = "http://localhost:3001";
const Project = ({
  title,
  imageUrl,

  DeployedPage,
  projectId
}) => {
  const [comments, setComments] = useState([]);
  const [loadingComment, setLoadingComment] = useState(false);
  const [commentData, setCommentData] = useState({
    author: "",
    comment: ""
  });

  const onHandInputChange = event => {
    setCommentData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleAddComment = async event => {
    event.preventDefault();
    try {
      setLoadingComment(true);
      await fetch(`${backend_url}/api/comment`, {
        method: "post",
        body: JSON.stringify({
          ...commentData,
          projectId
        }),
        headers: {
          "content-type": "application/json"
        }
      });

      setLoadingComment(false);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(
        `${backend_url}/api/comment?projectId=${projectId}`,
        {
          method: "get",
          headers: {
            "content-type": "application/json"
          }
        }
      );

      const data = await response.json();

      setComments(data?.data);
    } catch (error) {
      setLoadingComment(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [loadingComment]);

  return (
    <div className="project">
      <h3>{title}</h3>
      <img
        src={require(`../../assets/${imageUrl}`)}
        alt={title}
        style={{ maxWidth: "450px", height: "500px" }}
      />
      <p>Description here</p>
      <a href={DeployedPage}>
        <h3>Read Here</h3>
      </a>
      {comments.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px"
                  }}
                >
                  <div style={{ marginRight: "10px" }}>
                    <h2>{comment?.author}:</h2>
                  </div>
                  <div>
                    <h2>{comment?.content}</h2>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleAddComment}>
        <div>
          <label htmlFor="userName">Your Name:</label>
          <input
            onChange={onHandInputChange}
            name="author"
            type="text"
            id="userName"
          />
        </div>
        <div>
          <label htmlFor="newComment">Comment:</label>
          <textarea
            onChange={onHandInputChange}
            name="comment"
            id="newComment"
          />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Project;
