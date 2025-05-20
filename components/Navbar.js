import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className="w-full bg-card shadow-md p-4 flex justify-center gap-10 font-medium sticky top-0 z-50">
      <Link href="/">
        <span className={pathname === '/' ? 'text-primary':'hover:text-primary'}>Home</span>
      </Link>
      <Link href="/project">
        <span className={pathname === '/project' ? 'text-primary':'hover:text-primary'}>Projects</span>
      </Link>
    </nav>
  );
}
