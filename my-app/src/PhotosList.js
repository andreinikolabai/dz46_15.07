import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PhotosList = () => {
    const [photos, setPhotos] = useState([]);
    const location = useLocation();
    const albumId = new URLSearchParams(location.search).get('albumId');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, [albumId]);

    return (
        <div>
            <h2>Список фото</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotosList;