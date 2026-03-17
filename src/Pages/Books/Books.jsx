import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // If data is just a normal array, we don't need Suspense here. 
    // If data is a PROMISE, we use the 'use' hook inside the Book component.

    return (
        <div className="container mx-auto pb-20">
            <h1 className='text-4xl font-bold text-center p-10'>Books</h1>
            
            {/* Fixed the 'lassName' typo and the extra quote marks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {
                    data && data.map((singleBook) => (
                        <Book key={singleBook.bookId} singleBook={singleBook} />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;