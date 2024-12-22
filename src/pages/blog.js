import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="mb-4">
          <Link href={`/blog/${id}`} className="text-xl font-medium text-red-600 hover:underline">
            {title}
          </Link>
            <p className="text-sm text-gray-500">{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

  