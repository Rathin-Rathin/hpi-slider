import logo from '../../assets/images.jpeg'
const Header = () => {
    return (
        <div className='flex justify-center items-center gap-2 my-2'>
            <img src={logo} alt="" className='w-[50px] rounded-full' />
            <h1 className='text-5xl  font-serif text-amber-50  my-2 font-bold'>Welcome to Hotel ProgatiInn</h1>
        </div>
    );
};

export default Header;