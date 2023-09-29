import "./Content.css";
import logo from "../../assets/images.jpeg";
const Content = () => {
    return (
        <div className="cards">
            <div className="outer">
                <div className="w-full h-[100vh]  text-white flex justify-center items-center ">
                    <div>
                         <h1 className="text-5xl font-bold">Thank you</h1>
                    <p>~~~~~~~~~~<span className="text-[5px]">Developed By Rahul</span>~~~~~~~~~~</p>
                   </div>
            </div>
                <div className="card shadow-md" style={{ '--delay': '-1' }} >
                    <div className="header">
                        <img src={logo} alt="" className="mx-auto" />
                        <h3 className="text-3xl md:text-3xl lg:text-5xl text-gray-600 font-bold">Deluxe Single Room </h3>
                        <p> <span className="font-bold text-lg lg:text-2xl text-blue-500">Explanation:</span> One Queen Bed (5x6.5 ft) for one person. 1.5  Ton Air Condition.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Furniture:</span>  TV, Dressing Table, Cabinet, Tea Table, Chair.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Amenities:</span> Slipper, Bed Side Place Mate, Tooth Paste, Tooth Brush, Soap, Shampoo.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Complimentary:</span>  Pick up & Drop from Airport, Airport Railway Station, Breakfast, Bottle Water, Wi-Fi Internet.</p>
                    </div>
                </div>
                <div className="card" style={{ '--delay': '0' }} >
                    <div className="header">
                        <img src={logo} alt="" className="mx-auto" />
                        <h3 className="text-3xl md:text-3xl lg:text-5xl text-gray-600 font-bold">Deluxe Double Room</h3>
                        <p> <span className="font-bold text-lg lg:text-2xl text-blue-500">Explanation:</span> One King Size Bed (6x6.5 ft) for Couple with a Baby below 10 years. 1.5 Ton Air Condition.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Furniture:</span>  TV, Dressing Table, Cabinet, Tea Table, Chair.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Amenities:</span> Slipper, Bed Side Place Mate, Tooth Paste, Tooth Brush, Soap, Shampoo.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Complimentary:</span> Pick up & Drop from Airport, Airport Railway Station, Breakfast, Bottle Water, Wi-Fi Internet.</p>
                    </div>
                </div>
                <div className="card" style={{ '--delay': '1' }} >
                    <div className="header">
                        <img src={logo} alt="" className="mx-auto" />
                        <h3 className="text-3xl md:text-3xl lg:text-5xl text-gray-600 font-bold">Deluxe Twin Room </h3>
                        <p> <span className="font-bold text-lg lg:text-2xl text-blue-500">Explanation:</span> Two Single Bed (4x6.5 ft) for Two person. 1.5 Ton Air Condition.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Furniture:</span>  TV, Dressing Table, Cabinet, Tea Table, Chair.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Amenities:</span> Slipper, Bed Side Place Mate, Tooth Paste, Tooth Brush, Soap, Shampoo.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Complimentary:</span>  Pick up & Drop from Airport, Airport Railway Station, Breakfast, Bottle Water, Wi-Fi Internet.</p>
                    </div>
                </div>
                <div className="card" style={{ '--delay': '2' }} >
                    <div className="header">
                        <img src={logo} alt="" className="mx-auto" />
                        <h3 className="text-3xl md:text-3xl lg:text-5xl text-gray-600 font-bold">Deluxe Family Room </h3>
                        <p> <span className="font-bold text-lg lg:text-2xl text-blue-500">Explanation:</span> One King Size Bed (6x6.5 ft), One Single Bed (4x6.5 ft) for Two Person with a Kid above 12 years. 2 Ton Air Condition.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Furniture:</span>  TV, Dressing Table, Cabinet, Tea Table, Chair.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Amenities:</span> Slipper, Bed Side Place Mate, Tooth Paste, Tooth Brush, Soap, Shampoo.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Complimentary:</span>  Pick up & Drop from Airport, Airport Railway Station, Breakfast, Bottle Water, Wi-Fi Internet.</p>
                    </div>
                </div>
                <div className="card" style={{ '--delay': '2' }} >
                    <div className="header">
                        <img src={logo} alt="" className="mx-auto" />
                        <h3 className="text-3xl md:text-3xl lg:text-5xl text-gray-600 font-bold">Progati Inn Suite Room </h3>
                        <p> <span className="font-bold text-lg lg:text-2xl text-blue-500">Explanation:</span> One King Size Bed (6x6.5 ft), One Queen Bed (5x6.5 ft) for Three Person with a Kid above 12 years. 2.5 Ton Air Condition</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Furniture:</span>  TV, Dressing Table, Cabinet, Tea Table, Chair.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Amenities:</span> Slipper, Bed Side Place Mate, Tooth Paste, Tooth Brush, Soap, Shampoo.</p>
                        <p><span className="font-bold text-lg lg:text-2xl text-blue-500">Complimentary:</span>  Pick up & Drop from Airport, Airport Railway Station, Breakfast, Bottle Water, Wi-Fi Internet.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Content;