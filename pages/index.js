import Head from "next/head";
import Link from "next/link";
const LineColor = "#063970";

export async function getStaticProps(context) {
  const VALUE1 = "Hello";
  const VALUE2 = "World";

  return {
    props: {VALUE1, VALUE2}
  };
}

console.log("foo");
console.log("bar");

export default function Home() {
  const VALUE1 = "Hello";
  const VALUE2 = "World";
  function handleClick() {
    console.log("Knock knock");
    console.log(VALUE1 + " " + VALUE2);
  }

  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>
      {
        // Topbar    #  NOTICE this is a comment
      }
      <header>
        <div>
          <Link href="/">
            <a>Menubar Section: </a>
          </Link>
          <Link href="/posts">
            <a>Posts: &#x25B6;</a>
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
      <div>
        <h1>
          {VALUE1} {VALUE2},
        </h1>

        <p>Welcome!</p>
        <p>Click the button to send me back a &quot;Hello World&quot;</p>
        <button onClick={handleClick}>Click</button>
      </div>
      <section>
        <p>
          <Link href="/posts">
            <a>Posts: &#x25B6;</a>
          </Link>
          This is a section{" "}
        </p>
      </section>

      <footer>
        <hr
          style={{
            color: "#063970",
            backgroundColor: "#063970",
            height: 0.1,
            borderColor: "#063970"
          }}
        />

        <div>Footer Section</div>
        <div>
          {" "}
          <ul>
            <Link href="/posts">
              <a>Posts: &#x25B6;</a>
            </Link>
          </ul>
        </div>
      </footer>
    </main>
  );
}
