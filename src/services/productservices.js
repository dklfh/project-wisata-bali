import axios from "axios";

export const getDetailWisata = (id, callback) => {
    axios 
        .get(`http://localhost:3000/api/wisata/${id}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};