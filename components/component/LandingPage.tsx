
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardContent, Card } from "@/components/ui/card"
import { BookIcon, BookOpenIcon, CheckIcon, HomeIcon, MenuIcon, SettingsIcon, UserIcon } from "lucide-react"

export function LandingPage() {



  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <BookIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
            <span className="font-bold text-gray-900 dark:text-gray-100">LMS</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="
               font-medium text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-300"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-md font-medium text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-300"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-md font-medium text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-300"
              href="#"
            >
              Testimonials
            </Link>
            <Link
              className="text-md font-medium text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400 transition-colors duration-300"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <Button>Sign Up</Button>
          <div className="ml-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  <Link
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Features
                  </Link>
                  <Link
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Pricing
                  </Link>
                  <Link
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Testimonials
                  </Link>
                  <Link
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex">
        <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto bg-white p-4 dark:bg-gray-800 md:block hidden transition-colors duration-300">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Navigation
            </h3>
            <nav className="grid gap-2 ">
              <Link
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                href="#"
              >
                <HomeIcon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Home</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                href="#"
              >
                <BookOpenIcon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Courses</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                href="#"
              >
                <UserIcon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Profile</span>
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                href="#"
              >
                <SettingsIcon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
                <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Settings</span>
              </Link>
            </nav>
          </div>
        </aside>
        <div className="flex-1">
          <section className="bg-white py-12 md:py-24 lg:py-32 dark:bg-gray-800 transition-colors duration-300">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  Unlock Your Learning Potential with Our LMS
                </h1>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Our cutting-edge Learning Management System (LMS) empowers organizations to deliver engaging and
                  effective online learning experiences. Streamline your training, boost learner engagement, and drive
                  measurable results.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href={"/learn"}>
                  <Button                  
                  >Log In</Button>
                  </Link>
                  
                 
                  <Link
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-2 text-md font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 duration-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="LMS Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </section>
          <section
            className="py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-gray-900 transition-colors duration-300"
            id="features"
          >
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                  Powerful Features to Elevate Your Learning
                </h2>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Our LMS offers a comprehensive suite of features to streamline your training and development
                  initiatives. From intuitive course creation to advanced analytics, we've got you covered.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                        Intuitive Course Builder
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        Easily create and customize engaging courses with our user-friendly course builder.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                        Adaptive Learning Paths
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        Personalize learning experiences with adaptive paths that cater to individual learner needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                        Advanced Analytics
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        Gain valuable insights into learner progress and course performance with our robust analytics.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                alt="LMS Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </section>
          <section
            className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800 transition-colors duration-300"
            id="benefits"
          >
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="LMS Benefits"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  Unlock the Benefits of Our LMS
                </h2>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  Our LMS is designed to help organizations like yours achieve their learning and development goals.
                  Discover the key benefits that set us apart.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        Improved Learner Engagement
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        Captivate your learners with interactive content and gamification features.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        Streamlined Training Management
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        Effortlessly manage your training programs, track progress, and generate reports.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-colors duration-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        Scalable and Flexible
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        Our LMS scales to accommodate your growing training needs and adapts to your unique
                        requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section
            className="py-12 md:py-24 lg:py-32 bg-indigo-50 dark:bg-gray-900 transition-colors duration-300"
            id="testimonials"
          >
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                  What Our Customers Say
                </h2>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Hear from our satisfied customers about their experience with our LMS.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent>
                    <blockquote className="text-lg font-semibold leading-snug text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}








