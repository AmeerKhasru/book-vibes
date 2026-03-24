// utility/addToDB.js

/**
 * Retrieves the list of read book IDs from localStorage.
 */
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        try {
            const storedBookData = JSON.parse(storedBookSTR);
            // Ensure the parsed data is actually an array
            return Array.isArray(storedBookData) ? storedBookData : [];
        } catch (error) {
            console.error("Error parsing readList from localStorage:", error);
            return [];
        }
    }
    return [];
}

/**
 * Adds a book ID to the localStorage read list.
 */
const addToStoredDB = (id) => {
    // Safety check: ensure id exists
    if (!id) return;

    const storedBookData = getStoredBook();
    const idStr = id.toString();

    if (storedBookData.includes(idStr)) {
        alert("This book is already in your Read List!");
    } else {
        // Push the string version for consistency
        storedBookData.push(idStr);
        localStorage.setItem("readList", JSON.stringify(storedBookData));
        alert("Book added to Read List successfully!");
    }
}

export { addToStoredDB, getStoredBook };