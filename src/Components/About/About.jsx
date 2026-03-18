import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                About BookVibe
            </h1>
            
            <section style={{ marginTop: '20px' }}>
                <p>
                    Welcome to <strong>BookVibe</strong>, your personal digital library assistant. 
                    This platform was designed to help book lovers discover new titles and 
                    effortlessly track their reading progress.
                </p>
            </section>

            <section style={{ marginTop: '30px' }}>
                <h3>How it Works</h3>
                <ul style={{ listStyleType: 'square' }}>
                    <li><strong>Explore:</strong> Browse through a curated list of thousands of books.</li>
                    <li><strong>Mark as Read:</strong> Keep track of your finished books with a single click.</li>
                    <li><strong>Persistent Storage:</strong> Your "Read List" is saved locally in your browser, so you never lose your progress.</li>
                </ul>
            </section>

            <footer style={{ marginTop: '50px', fontSize: '0.9rem', color: '#7f8c8d' }}>
                <p>Built with React + Vite 2026. Happy Reading!</p>
            </footer>
        </div>
    );
};

export default About;