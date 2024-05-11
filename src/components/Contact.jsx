import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
            <h1 className="text-xl font-bold mb-4">Contact Us</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name"
                        className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email"
                        className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4"
                        className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit"
                        className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-indigo-600">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </Container>
  );
};

export default Contact;
