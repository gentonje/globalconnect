
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

export function ChevronDropdown() {
  return (
    <div className=" bg-white text-teal-950 w-full">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-2">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                Products
                <ChevronRightIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-1 pl-4">
                  <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-green-300" prefetch={false}>
                    Shoes
                  </Link>
                  
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between text-lg font-medium [&[data-state=open]>svg]:rotate-90">
                About
                <ChevronRightIcon className="h-5 w-5 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-1 pl-4">
                  <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-800" prefetch={false}>
                    Our Story
                  </Link>
                  <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-800" prefetch={false}>
                    Our Team
                  </Link>
                  <Link href="#" className="block rounded-md px-3 py-2 text-sm hover:bg-gray-800" prefetch={false}>
                    Careers
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-800"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="py-4 px-4">
          <Button size="lg" className="w-full">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
