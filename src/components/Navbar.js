"use client"
import Link from "next/link"
import ThemeChanger from "./DarkSwitch"
import Image from "next/image"
import { Disclosure } from "@headlessui/react"
import { useRouter } from "next/navigation"
import { useSession,signIn,signOut } from "next-auth/react"
export const Navbar = ({hideSearch}) => {
  const navigation = ["Product", "Features", "Rewards", "Blog"]
  const router = useRouter()

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-2  mx-auto lg:justify-between xl:pl-8
      `">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium  text-red-500 dark::text-red-100">
            <span>
              <Image
                src="/img/logo.svg"
                width="38"
                alt="N"
                height="38"
                className="w-8"
              />
            </span>
            <span>InfoSaathi</span>
          </span>
        </Link>

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/signin"
              className="px-6 py-2 text-white bg-red-600 rounded-full md:ml-5"
            >
              Sign In
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-red-500 rounded-md lg:hidden hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark::text-gray-300 dark::focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>

                    <Link
                      href="//scheme_recommendation"
                      className="w-full px-4 py-2 -ml-4 text-red-500 rounded-md dark::text-red-300 hover:text-red-500 focus:text-red-500 focus:bg-indigo-100 dark::focus:bg-red-800 focus:outline-none"
                    >
                      Recommendation
                    </Link>
                    <Link
                      href="/blogs"
                      className="w-full px-4 py-2 -ml-4 text-red-500 rounded-md dark::text-red-300 hover:text-red-500 focus:text-red-500 focus:bg-indigo-100 dark::focus:bg-red-800 focus:outline-none"
                    >
                      Blog
                    </Link>
                    <Link
                      href= "/rewards"
                      className="w-full px-4 py-2 -ml-4 text-red-500 rounded-md dark::text-red-300 hover:text-red-500 focus:text-red-500 focus:bg-indigo-100 dark::focus:bg-red-800 focus:outline-none"
                    >
                      Rewards
                    </Link>
                    <Link
                      href="/whatsapp"
                      className="w-full px-4 py-2 -ml-4 text-red-500 rounded-md dark::text-red-300 hover:text-red-500 focus:text-red-500 focus:bg-indigo-100 dark::focus:bg-red-800 focus:outline-none"
                    >
                      Whatsapp Assistance
                    </Link>

                  <Link
                    href="/signin"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-red-600 rounded-md lg:ml-5"
                  >
                    Sign In
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            
              <li className="mr-3 nav__item" >
                <Link
                  href="/scheme_recommendation"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark::text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark::focus:bg-gray-800"
                >
                  Recommendation
                </Link>
              </li>

              <li className="mr-3 nav__item">
                <Link
                  href="/blog"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark::text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark::focus:bg-gray-800"
                >
                  Blogs
                </Link>
              </li>

              <li className="mr-3 nav__item">
                <Link
                  href="/rewards"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark::text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark::focus:bg-gray-800"
                >
                  Rewards
                </Link>
              </li> 

              <li className="mr-3 nav__item">
                <Link
                  href="/whatsapp"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark::text-gray-200 hover:text-red-500 focus:text-red-500 focus:bg-red-100 focus:outline-none dark::focus:bg-gray-800"
                >
                  Whatsapp Assistance
                </Link>
              </li>
            
          </ul>
        </div>
      </nav>

      {!hideSearch ? (<div className="flex justify-center">
        <div className="border border-solid border-gray-400 hover:border-red-500 px-8 py-2  m-3 rounded-lg">
          <div
            className="rounded-md px-10"
            onClick={() => router.push("/search")}
          >
            <p>Search schemes and more...</p>
          </div>
        </div>
      </div>) : (null)}
    </div>
  )
}
