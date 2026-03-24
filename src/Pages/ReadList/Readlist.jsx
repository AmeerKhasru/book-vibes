import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../../utility/addToDB';

const ReadList = () => {
    // 1. Get the full books list from the Router Loader
    const allBooks = useLoaderData();
    
    // 2. State to hold the filtered books
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        // 3. Get the list of IDs from LocalStorage (e.g., ["2", "3"])
        const storedIds = getStoredBook();

        if (allBooks && allBooks.length > 0) {
            // 4. Filter allBooks to find the ones matching stored IDs
            const matchedBooks = allBooks.filter(book => 
                storedIds.includes(book.bookId.toString())
            );
            
            setReadBooks(matchedBooks);
        }
    }, [allBooks]); // Re-runs when data is loaded

    return (
        <div className="container mx-auto my-12 px-4">
            <h2 className="text-3xl font-bold mb-8 border-b pb-4">
                Books I've Read ({readBooks.length})
            </h2>

            {/* If list is empty, show a friendly message */}
            {readBooks.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
                    <p className="text-xl text-gray-500 font-medium">
                        Your read list is empty. Start adding some books!
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {/* Map through the filtered books */}
                    {readBooks.map(book => (
                        <div 
                            key={book.bookId} 
                            className="flex flex-col lg:flex-row gap-8 p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow items-center lg:items-start"
                        >
                            {/* Book Image */}
                            <div className="w-48 h-60 bg-gray-100 flex items-center justify-center rounded-xl p-4 shrink-0">
                                <img 
                                    src={book.image} 
                                    alt={book.bookName} 
                                    className="h-full object-contain shadow-sm" 
                                />
                            </div>

                            {/* Book Info */}
                            <div className="flex-grow w-full">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.bookName}</h3>
                                <p className="text-gray-600 font-medium mb-4">By : {book.author}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="font-bold">Tag</span>
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className="badge badge-outline text-success py-3 px-4 font-bold bg-green-50">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Horizontal Row for Stats */}
                                <div className="flex flex-wrap gap-8 text-gray-500 border-t pt-4 mt-4">
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-black">Publisher:</span> {book.publisher}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-black">Year:</span> {book.yearOfPublishing}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-black">Pages:</span> {book.totalPages}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-6">
                                    <button className="btn btn-primary rounded-full px-6 text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReadList;