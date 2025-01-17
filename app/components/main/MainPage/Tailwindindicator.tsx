
export function TailwindIndicator() {
    //if (process.env.NODE_ENV === "production") return null
  
    return (
      <div className="fixed bottom-0 left-0 right-2 z-50 flex h-12 w-12 items-center text-slate-900 bg-yellow-500 justify-center rounded-full p-3 font-mono text-xs">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    )
  }