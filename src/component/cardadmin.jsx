import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Cardadmin() {
    const [wisata, setWisata] = useState([]);

    useEffect(() => {
        const fetchAllWisata = async () => {
            try {
                const res = await axios.get("http://localhost:8800");
                setWisata(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllWisata();
    }, []);
    return (
        <div class="">
            {wisata.map((wisata) => (
                <tbody>
                    <td className="py-2 px-4 border-b border-grey-light">{wisata.title}</td>
                    <td className="py-2 px-4 border-b border-grey-light">{wisata.lokasi}</td>
                    {/* Sisipkan baris tabel tambahan di sini */}
                </tbody>
            ))}
        </div>

    )
}

export default Cardadmin
