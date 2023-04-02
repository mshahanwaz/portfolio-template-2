import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();
  const [currentRoutes, setCurrentRoutes] = React.useState<any>([]);

  React.useEffect(() => {
    const allRoutes = router.pathname.split('/').filter((path) => path !== '');
    if (allRoutes.length > 0) {
      const linksList = [{ name: 'Home', href: '/' }];
      allRoutes.forEach((path) => {
        linksList.push({
          name: path.charAt(0).toUpperCase() + path.slice(1),
          href: path
        });
      });
      setCurrentRoutes(linksList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-gray-100/80 px-6 backdrop-blur-md">
      {currentRoutes.length > 0 && (
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:bg-gray-200">
          {currentRoutes.map((route: any, index: number) => (
            <React.Fragment key={index}>
              <Link href={route.href} className="hover:text-gray-900">
                {route.name}
              </Link>
              {index !== currentRoutes.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
}
