import banner_1 from "../assets/banner-1.png"
const Itemlistcontainer = ({subtitulos}) => 
{
    return (
        <div>
            <img className="banner_1" src={banner_1} alt="logo" />
            <h2>{subtitulos}</h2>
        </div>
    )
}
export default Itemlistcontainer