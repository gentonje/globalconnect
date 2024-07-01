import React from 'react'


export default function Loading() {
  return (
    <div className='container flex mx-auto font-sans font-semibold justify-center bg-slate-900 text-3xl p-6 items-center text-white min-h-screen'>Loading ...</div>
  )
}

// import clsx from 'clsx';

// const dots = 'mx-[1px] inline-block h-1 w-1 animate-blink rounded-md';

// const LoadingDots = ({ className }: { className: string }) => {
//   return (
//     <span className="mx-2 inline-flex items-center">
//       <span className={clsx(dots, className)} />
//       <span className={clsx(dots, 'animation-delay-[200ms]', className)} />
//       <span className={clsx(dots, 'animation-delay-[400ms]', className)} />
//     </span>
//   );
// };

// export default LoadingDots;
