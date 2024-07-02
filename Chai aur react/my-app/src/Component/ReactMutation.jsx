import React, { useState } from "react";
import { useMutation } from "react-query";

function ReactMutation() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation(
    async (newPost) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    
      });
      return response.json(); // Parse the response as JSON
    },
    {
      onSuccess: (data) => {
        console.log("Success:", data);
        setTitle("");
        setBody("");
      },
      onError: (error) => {
        alert(`Error: ${error.message}`);
      },
    }
  );

  const submitData = () => {
    mutation.mutate({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      ></textarea>
      <br />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default ReactMutation;
