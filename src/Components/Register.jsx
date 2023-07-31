import React from "react";
import "./Register.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
function Register() {
    return (
        <>
            <Navbar />
            <section class="bg-white dark:bg-gray-700">
                <div class="flex justify-center min-h-screen">
                    <div class="event-register hidden lg:block lg:w-2/5">
                    </div>

                    <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div class="w-full">
                            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Register for the Event.
                            </h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Lorem Ipsum
                            </p>

                            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" placeholder="Sushant" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                                    <input type="text" placeholder="Bishoi" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                    <input type="text" placeholder="XXX-XX-XXXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Official Email address</label>
                                    <input type="email" placeholder="skb@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Roll No</label>
                                    <input type="text" placeholder="21CSEXXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Year</label>
                                    <input type="text" placeholder="3rd Year" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <button
                                    class="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50">
                                    <span>Register</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register;