import React from "react";
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';




function Welcome() {
    let nav = useNavigate();
    const toSignUp = () => {
        nav("/signup");
    };
    const toLogin = () => {
        nav("/login");
    };


    return (
        <>
            <section className="relative py-16 lg:py-20 ">
                <div className="lg:max-w-3xl max-w-2xl p-4  mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between rounded-3xl shadow-lg border bg-white border-gray-100">
                    <div className="flex-shrink-0 w-full lg:w-1/2  lg:mb-0">
                        <img className="w-3/4 lg:w-full mx-auto lg:mx-0" src="src/assets/Rehearse1.svg" alt="BotJob Ai Logo" />
                    </div>
                    <div className="text-center lg:text-left lg:w-1/2 ">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Rehearse.AI</h1>
                        <p className="text-gray-500 text-lg mb-6"> Practice  job interviews on the go.</p>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                            <button onClick={toLogin} className="btn bg-[#B80672] hover:bg-[#ac5089] text-white border-none  lg:mr-4  mb-2 lg:mb-0">Login</button>
                            <button onClick={toSignUp} className="btn hover:bg-[#B80672] bg-[#ac5089] text-white hover:text-white border-none  ">Create Account</button>
                        </div>
                    </div>

                </div>
                <section className=" font-[Inter] px-6 md:py-20 md:px-10 rounded-xl mt-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-[Inter]">Why Choose Us</h2>
                        <p className="mt-7 font-[Inter] text-lg text-gray-700">Prepare for Your Next Job Interview with Confidence</p>
                    </div>
                    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="relative p-6 backdrop-blur-sm bg-white border border-gray-200 rounded-xl shadow-lg ">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Expert Interview Feedback</h3>
                            <p className="mb-4 text-sm text-gray-600">Get personalized feedback from industry experts to refine your interview skills.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Mock Interviews</h3>
                            <p className="mb-4 text-sm text-gray-600">Practice with simulated interviews tailored to your target industry and role.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Comprehensive Resources</h3>
                            <p className="mb-4 text-sm text-gray-600">Access a wide range of resources including interview guides, tips, and sample questions.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Real User Experiences</h3>
                            <p className="mb-4 text-sm text-gray-600">Hear success stories and insights from individuals who secured their dream jobs with our platform.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Tailored Learning Paths</h3>
                            <p className="mb-4 text-sm text-gray-600">Receive personalized recommendations and guidance to improve your interview performance.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Save Your Progress</h3>
                            <p className="mb-4 text-sm text-gray-600">Track your interview preparation progress and access your history to monitor your improvement over time.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
                            <p className="mb-4 text-sm text-gray-600">Leverage AI-driven analytics to gain valuable insights into your interview performance and areas for improvement.</p>
                        </div>
                    </div>

                </section>


                <div className="pb-5 font-[Inter]">
                    <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
                        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white font-[Inter]">Hear What Our Users Say</h2>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl font-[Inter]">Discover how our platform has transformed job interview preparation for our users.</p>
                    </div>
                    <div className="container p-6 mx-auto mb-10 xl:px-0">
                        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                            <div className="lg:col-span-2 xl:col-auto">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">"This platform provided me with invaluable insights and feedback that greatly enhanced my interview performance. I landed my dream job at Google thanks to the<mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">preparation</mark>  I received here."</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Sarah Steiner</div>
                                            <div className="text-gray-600 dark:text-gray-400">VP Sales at Google</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal ">“The interview simulations and expert feedback on this platform were instrumental in <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">helping me gain</mark>  confidence and refine my responses. I successfully secured a position at Netflix after using this platform.”</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Dylan Ambrose</div>
                                            <div className="text-gray-600 dark:text-gray-400">Lead Marketer at Netflix</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                                    <p className="text-2xl leading-normal">“Using this platform significantly improved my interview skills  and gave me a competitive edge. The personalized feedback and <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">AI-driven</mark>  insights helped me secure multiple job offers. I highly recommend it!”</p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">Gabrielle Winn</div>
                                            <div className="text-gray-600 dark:text-gray-400">Co-founder of Acme Inc</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="font-[Inter] bg-gray-900 text-white py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg">&copy; 2024 Rehearse team. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}
export default Welcome;