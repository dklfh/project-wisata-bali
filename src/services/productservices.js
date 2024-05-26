import axios from 'axios';

const API_URL = 'http://localhost:8800';

export const getDetailWisata = async (id, callback) => {
    try {
        const response = await axios.get(`${API_URL}/wisata/${id}`);
        callback(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const getDetailComment = async (id, callback) => {
    try {
        const response = await axios.get(`${API_URL}/comment/${id}`);
        callback(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};