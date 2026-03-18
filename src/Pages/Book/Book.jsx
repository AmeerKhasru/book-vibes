import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ singleBook }) => {
    // Destructure the data for cleaner code
    const { bookName, author,bookId, image, rating, category, tags, yearOfPublishing } = singleBook;

    return (
        <Link to = {`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border border-gray-100 p-6 flex flex-col h-full">
                {/* Image Container with light gray background */}
                <figure className="bg-gray-100 py-8 rounded-2xl h-[230px]">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-full object-contain shadow-md"
                    />
                </figure>

                <div className="flex flex-col flex-grow mt-6">
                    {/* Tags Section */}
                    <div className="flex gap-3 text-success font-medium mb-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-green-50 px-3 py-1 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title, year of publishing, Author and description */}
                    <div className='flex items-baseline gap-3 mb-2'>
                        <h2 className="text-Xl font-extrabold text-gray-800 tracking-tight">
                            {bookName}
                        </h2>
                        <span className="px-2 py-1 bg-pink-500 text-white text-sm font-medium rounded-md border border-gray-200">
                            {yearOfPublishing}
                        </span>
                    </div>
                    <p className="font-medium text-gray-600 mb-4">By : {author}</p>




                    {/* Dotted Divider */}
                    <div className="border-t border-dashed border-gray-300 my-4"></div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center text-gray-600 font-medium">
                        <span>{category}</span>
                        <div className="flex items-center gap-2">
                            {rating}
                            <span className="text-orange-400 text-xl">☆</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;