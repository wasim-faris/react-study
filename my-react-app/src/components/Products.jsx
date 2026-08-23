import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Products(){
    const navigate = useNavigate();
    
    function GoToAbout(){
        navigate("/about")
    }
    return (
        <div>
            <h1>
                helloe go to about click go
            </h1>
            <button onClick={GoToAbout}>
go
            </button>
        </div>
    )
}

export default Products;