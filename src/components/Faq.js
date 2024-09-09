"use client"
import React from "react"
import { Container } from "@/components/Container"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/24/solid"

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark::bg-trueGray-800 dark::text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-red-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark::text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: "What does the platform do?",
    answer:
      "Our platform leverages AI to identify the financial and insurance needs of users based on their demographics and economic cycles, offering personalized services through automation, self-help groups, and mentorship programs."
  },
  {
    question: "How does the automation work?",
    answer:
      "We automate calls and messages to ensure timely communication of essential financial and insurance information, tailored to the user's needs and seasonal demands."
  },
  {
    question: "What assistance is provided via WhatsApp? ",
    answer:
      "We provide real-time support via WhatsApp, answering queries, offering financial advice, and guiding users through their insurance or banking needs."
  },
  {
    question: "How can I join self-help groups?",
    answer:
      "You can join self-help groups by signing up on our platform, where you will be connected to a community of users facing similar challenges and offering mutual support."
  },

  {
    question: "What are the benefits of the mentorship program?",
    answer:
      "Our mentorship program connects users with experienced professionals who provide guidance in financial planning, insurance options, and personal growth, ensuring users make informed decisions."
  }
]
