import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function NavSidebar() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div className="container">
      <div className="stickyMenu" style={{ top: scrolling ? -817 : 0 }}>
        <Link href="/#getAuthToken" scroll={false}>
          <a>getAuthToken</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          flex: 0 0 160px;
          display: flex;
          flex-direction: column;
        }
        .stickyMenu {
          position: sticky;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
