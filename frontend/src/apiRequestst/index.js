import axios from 'axios';

async function fetchAllBooks() {
    const url = "http://localhost:5000/books"; // Use the full URL here
    const res = await axios.get(url);
    console.log("API Response:", res.data); // Add this line
    return res.data;
}


const apiRequests = {
    fetchAllBooks
};

export default apiRequests;
