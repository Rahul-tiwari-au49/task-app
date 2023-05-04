import { useRef } from "react";

const Comments = () => {
  const commentRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(commentRef.current.value);
  }
  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <textarea
         type="text" name="comment" id="comment" placeholder="type your comments..."
        required
        ref={commentRef}
        
        ></textarea>
        <button className="commentBtn">ADD COMMENT</button>
      </form>
      <div className="comments__section">
        <h2>Existing Comments</h2>
      </div>
    </div>
  )
}

export default Comments