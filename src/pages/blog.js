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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {allPostsData.map(({ id, title, date, description }) => (
      <Link key={id} href={`/blog/${id}`} passHref>
        <div className="border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-500 mb-4">{date}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </Link>
    ))}
  </div>
      </ul>
    </div>
  );
}

  