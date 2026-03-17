import React from 'react';

const Book = ({ singleBook }) => {
    // Destructure the data for cleaner code
    const { bookName, author, image, rating, category, tags } = singleBook;

    return (
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

                {/* Title & Author */}
                <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
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
    );
};

export default Book;