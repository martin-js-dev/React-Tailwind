import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import product from './img/product.jpg';
import bottle from './img/bottle.png';
import bottle1 from './img/bottle1.png';
import bottle2 from './img/bottle2.png';
import bottle3 from './img/bottle3.png';

export default function Index() {
    return (
      
        <div className="font-poppins bg-light mx-auto container px-6 xl:px-40 py-12">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden sm:block w-full h-96" src={product} alt="sofa" />
                        <img className="sm:hidden w-full" src={product} alt="sofa" />
                       
                    </div>
                </div>
                <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8 items-center">
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle} alt="sofa-2" />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Chardonnay</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5  font-semibold leading-5 text-gray-800">$900</p>
                            </div>
                            <button className="bg-primary uppercase rounded mt-5 text-sm text-light p-2.5" >buy now</button>
                        </div>
                        
                        
                    </div>
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle3} alt="sofa-3" />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Alexandria</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5 font-semibold leading-5 text-gray-800">$750</p>
                            </div>
                            <button className="bg-primary uppercase rounded  text-sm text-light p-2.5" >buy now</button>
                        </div>
                        
                        
                    </div>
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle1} alt="sofa-4" />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Red wine Vitac</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5 font-semibold leading-5 text-gray-800">$450</p>
                            </div>
                            <button className="bg-primary uppercase rounded mt-5 text-sm text-light p-2.5" >buy now</button>
                        </div>
                     
                        
                    </div>
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle2} alt="sofa-5" />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Zilavka</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5 font-semibold leading-5 text-gray-800">$780</p>
                            </div>
                            <button className="bg-primary uppercase rounded mt-5 text-sm text-light p-2.5" >buy now</button>
                        </div>
                        
                        
                        <div className="absolute top-4 right-6">
                            <p className="text-base leading-4 pb-0.5 text-gray-600 border-b-2 border-gray-600">New</p>
                        </div>
                    </div>
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle3} alt="sofa-6" />
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Traminec</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5 font-semibold leading-5 text-gray-800">$1900</p>
                            </div>
                            <button className="bg-primary uppercase rounded mt-5 text-sm text-light p-2.5" >buy now</button>
                        </div>
                       
                        
                    </div>
                    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
                        <img className="group-hover:opacity-60 transition duration-500" src={bottle} alt="sofa-7" />
                        
                        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">Sauvignon Blanc</p>
                            </div>
                            <div>
                                <p className="group-hover:opacity-60 transition duration-500 text-xl mb-5 font-semibold leading-5 text-gray-800">$2400</p>
                            </div>
                            <button className="bg-primary uppercase rounded mt-5 text-sm text-light p-2.5" >buy now</button>
                        </div>
                        
                        
                        
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-end items-end mt-12">
                    <div className="flex flex-row items-center justify-center space-x-8">
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>1</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>2</p>
                        </button>
                        <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                            <p>3</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    );}