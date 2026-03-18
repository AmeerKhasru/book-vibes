import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);

    // Destructure for easy use
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    const handleMarkAsRead = id =>{
        addToStoredDB(id)
    }


    return (
        <div className="container mx-auto my-12 px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* 1. Image Section (Left) */}
                <div className="w-full lg:w-1/2 bg-base-200 rounded-3xl p-12 flex justify-center items-center">
                    <img 
                        src={image} 
                        alt={bookName} 
                        className="rounded-lg shadow-2xl max-h-[560px] object-contain w-full" 
                    />
                </div>

                {/* 2. Content Section (Right) */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-600 mb-4">By : {author}</p>
                    
                    <div className="divider"></div>
                    <p className="text-xl font-medium text-gray-600 py-1">{category}</p>
                    <div className="divider"></div>

                    {/* Review Section */}
                    <p className="mb-6 leading-relaxed">
                        <span className="font-bold">Review : </span>
                        <span className="text-gray-600">{review}</span>
                    </p>

                    {/* Tags Section */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-bold">Tag</span>
                        {tags.map((tag, index) => (
                            <span key={index} className="badge badge-outline text-success py-3 px-4 font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="divider"></div>

                    {/* Table-like Info Section */}
                    <div className="space-y-3 mb-8">
                        <div className="flex gap-16">
                            <p className="text-gray-500 w-32">Number of Pages:</p>
                            <p className="font-bold">{totalPages}</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="text-gray-500 w-32">Publisher:</p>
                            <p className="font-bold">{publisher}</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="text-gray-500 w-32">Year of Publishing:</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                        </div>
                        <div className="flex gap-16">
                            <p className="text-gray-500 w-32">Rating:</p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline px-8 border-gray-300">Mark as Read</button>
                        <button className="btn btn-primary px-8 text-white">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;