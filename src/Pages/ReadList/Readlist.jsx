import React, { useEffect, useState } from 'react';
import { addToStoredDB } from '../../utility/addToDB'; // Import your utility

const Readlist = ({ allBooks }) => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        // 1. Get the list of IDs from localStorage
        const storedIds = addToStoredDB();

        // 2. Filter your main book list to find the books that match those IDs
        if (allBooks && allBooks.length > 0) {
            const matchedBooks = allBooks.filter(book => storedIds.includes(book.bookId));
            setReadBooks(matchedBooks);
        }
    }, [allBooks]);

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
                Books I've Read ({readBooks.length})
            </h2>

            {readBooks.length === 0 ? (
                <p style={{ marginTop: '20px', color: '#666' }}>
                    Your read list is empty. Start adding some books!
                </p>
            ) : (
                <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                    {readBooks.map(book => (
                        <div key={book.bookId} style={{ 
                            padding: '15px', 
                            border: '1px solid #eee', 
                            borderRadius: '8px',
                            background: '#f9f9f9'
                        }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>{book.bookName}</h3>
                            <p style={{ margin: 0, color: '#555' }}>Author: {book.author}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Readlist;