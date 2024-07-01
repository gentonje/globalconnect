"use client";
import ChapterContent from "@/app/components/main/Content/ReadingContent/ChapterContent";
import { Sidebar } from "@/app/components/main/MainPage/Sidebar";
import { LSidebarNav } from "@/app/components/main/MainPage/LSidebarNav";


export function ContentPage() {
  return (
    <div className=" flex lg:mx-auto  md:mx-2 rounded-md ">
      <div className="flex flex-row md:flex">
        <LSidebarNav />
        <main className="flex flex-row ">
          <Sidebar />
          {/* <Link href={"/"}>
            <Button className="m-2 bg-green-800">Home</Button>
          </Link> */}
          <div className="flex md:min-w-[vw] space-y-2">
            <div className="flex flex-col py-2 rounded-md md:mx-2 md:flex md:gap-6  lg:gap-8">
              <ChapterContent />
             
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
