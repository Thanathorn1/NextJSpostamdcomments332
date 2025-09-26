import axios from "axios";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

type Props = {
  params: { postId: string };
};

export default async function CommentsPage({ params }: Props) {
  const { postId } = params;

  const res = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const comments = res.data;

  return (
    <div>
      <h1>Comments for Post ID: {postId}</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.id} style={{ marginBottom: "1rem" }}>
            <h3>{c.name} ({c.email})</h3>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
