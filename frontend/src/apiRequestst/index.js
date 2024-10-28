import axios from 'axios';

async function fetchAllBooks() {
    const url = "/books";
    const res = await axios.get(url);
    return res.data;
}


const apiRequests = {
    fetchAllBooks
};

export default apiRequests;
