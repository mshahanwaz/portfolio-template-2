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
          href: path,
        });
      });
      setCurrentRoutes(linksList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 shrink-0 h-16 px-6 flex items-center gap-4 bg-gray-100/80 backdrop-blur-md border-b border-gray-200 z-10">
      {currentRoutes.length > 0 && (
        <div className="px-4 py-1 flex gap-2 items-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-sm border border-gray-200">
          {currentRoutes.map((route: any, index: number) => (
            <React.Fragment key={index}>
              <Link href={route.href} className="hover:text-black">
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
