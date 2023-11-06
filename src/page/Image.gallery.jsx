import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import data from '../data/data.json'
import Gallery from "../components/Gallery";

const ImageGallery = () => {
    const [selected, setSelected] = useState([])
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data);
    }, []);

    return (
        <div className="main-layout">
            <div className="mt-5 mb-5 container-xl rounded p-4">
                <Navigation items={items} setItems={setItems} selected={selected} setSelected={setSelected} />
                <hr />
                <Gallery items={items} setItems={setItems} selected={selected} setSelected={setSelected} />
            </div>
        </div>
    );
}

export default ImageGallery;