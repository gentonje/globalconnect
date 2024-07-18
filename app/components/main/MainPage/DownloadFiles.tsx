

import React from 'react';
import downloadroutes from '@/app/(routes)/downloadroutes';
import Link from 'next/link';

const DownloadFiles = () => {
  return (
    <div className="flex flex-col mx-2 gap-1 ml-2 min-w-[200px]">
      {downloadroutes.map((route) => (
        <Link
          key={route.label}
          href={route.path}
          className="download-link"
        >
          <div className="flex flex-row items-center hover:bg-yellow-200 hover:border-r-4">
            {route.icon}
            <div className="flex-1 ml-1 py-1 text-sm">{route.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DownloadFiles;