import Image from "next/image"
import React from "react"
import { Container } from "@/components/Container"

import userOneImg from "/public/img/user1.jpg"
import userTwoImg from "/public/img/user2.jpg"
import userThreeImg from "/public/img/user3.jpg"

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark::bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Your platform streamlined our <Mark>postal operations</Mark>
              significantly improving efficiency and customer satisfaction that
              hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image={userOneImg}
              name="Aman Patel"
              title="Customer Relations Manager at PostCorp"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark::bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Utilizing this service has transformed how we handle{" "}
              <Mark>parcel tracking</Mark>, enhancing both speed and accuracy
            </p>

            <Avatar
              image={userTwoImg}
              name="Ujjawal Kumar"
              title="Inspector at Postal Department"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark::bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              With this solution, we’ve seen <Mark> improvements</Mark> in user
              engagement and streamlined our support processes.
            </p>

            <Avatar
              image={userThreeImg}
              name="Vallidevi K"
              title="Faculty at VIT Chennai"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark::text-gray-400">{props.title}</div>
      </div>
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-red-800 bg-red-100 rounded-md ring-red-100 ring-4 dark::ring-red-900 dark::bg-red-900 dark::text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  )
}
