//this will be: our-domain.com/news

import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJs is great</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}
