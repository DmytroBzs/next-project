import { headers } from 'next/headers';
import Link from 'next/link';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl mb-5">Main Page</h1>
      <Link
        className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded"
        href={'/dashboard'}
      >
        Dashboard
      </Link>
    </main>
  );
}
