import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] rounded-3xl overflow-hidden my-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <img 
                        src={bookImage} 
                        className="max-w-sm rounded-lg shadow-2xl" 
                        alt="Featured Book" 
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-5xl font-bold leading-tight">
                        Unlock Your Next <span className="text-primary">Literary Adventure</span>
                    </h1>
                    <p className="py-6 text-lg opacity-80">
                        Discover thousands of books, track your reading progress, and 
                        connect with a community of book lovers. Your journey starts here.
                    </p>
                    <button className="btn btn-primary btn-lg">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;