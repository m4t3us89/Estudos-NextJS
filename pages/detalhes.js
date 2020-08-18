import Link from "next/link";

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}

export default function Detalhe() {
  return (
    <>
      {process.env.customKey} Hello Word
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
