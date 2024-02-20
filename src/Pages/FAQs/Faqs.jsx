import React from 'react'

export default function Faqs() {

  const data = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answer: "Mars"
    },
  ]

  return (
    <>
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto">
            <div className="rounded-md bg-gradient-to-tr from-slate-500 to-indigo-400 p-10 h-screen">
              {data.map((item,index) => {
                return (
                  <button className="flex justify-between items-center px-5 py-4 bg-slate-400 w-full rounded-lg mb-8">
                    <span>{item.question}</span>
                    <span className='text-4xl'>+</span>
                  </button>
                )
              })}
            </div>
        </div>
    </>
  )
}
