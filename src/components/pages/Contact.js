import React from 'react'

const Contact = () => {
    return (
        <div className="About flex items-center justify-center flex-col">
            <h2 className="text-center text-2xl uppercase my-4"><span className="text-blue-700 border-b-blue-700 font-bold">contact</span> me </h2>
            <div className="mx-24 text-lg">
                <form className="flex items-center justify-center flex-col bg-blue-700 opacity-2 p-8 rounded-md shadow-lg">
                   <div className="my-4">
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder="Enter your name" className="border-black border-solid border-2 w-72 shadow-lg rounded-md ml-2"/>
                    </div>
                    <div className="my-4 flex justify-center items-center">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Enter your Email" className="border-black border-solid border-2 w-72 shadow-lg rounded-md ml-2"/>
                    </div>
                    <div className="my-4 flex justify-center items-center">
                        <label htmlFor="comment">Comment:</label>
                        <input type="comment" placeholder="Enter your comment" className="border-black border-solid border-2 w-72 h-36 shadow-lg rounded-md ml-2"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
