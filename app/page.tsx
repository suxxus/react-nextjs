import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main className="w-full">
      <h1>hello next</h1>
      <ul className="p-10 m-5 border border-purple-900">
        <li>
          <a href="/users">users</a>
        </li>
      </ul>
    </main>
  );
}
