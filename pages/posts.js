import Head from "next/head";
import Link from "next/link";
import Post from "../components/post";

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1"
  );
  const postList = await response.json();
  return {
    props: {
      postList
    }
  };
}

export default function Posts({postList}) {
  return (
    <main>
      <Head>
        <title>Post page</title>
      </Head>
      {
        // Topbar    #  NOTICE this is a comment
      }
      <header>
        <div>
          <Link href="/">
            <a>Menubar Section: </a>
          </Link>
          <Link href="/">
            <a> &#x25c0;Home</a>
          </Link>
        </div>
        <hr
          style={{
            color: "#063970",
            backgroundColor: "#063970",
            height: 0.1,
            borderColor: "#063970"
          }}
        />
      </header>
      {
        // end Topbar    #  NOTICE this is a comment
      }

      <h1>List of posts</h1>

      <Link href="/">
        <a> &#x25c0;Back</a>
      </Link>

      <section>
        {postList.map(post => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  );
}
