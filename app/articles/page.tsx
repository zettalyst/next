interface Article {
  id: string;
  title: string;
  content: string;
}

async function getData(): Promise<Article[]> {
  const res = await fetch("http://localhost:3000/boards/search?keyword=geek");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      {data.map((article) => (
        <>
          <p>{article.id}</p>
          <p>{article.title}</p>
          <p>{article.content}</p>
          <br />
        </>
      ))}
    </>
  );
}
