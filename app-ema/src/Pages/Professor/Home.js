import "../../app.css";
import { Link } from "react-router-dom";

const HomeDoisProf = () => {
    return (
        <div className="Home">

            <div>
                <Link to="/Boletim" className="active Link boletim">
                    Boletim
                </Link>
            </div>

            <div>
                <Link to="/Atividades" className="active Link atividade">
                    Atividades
                </Link>
            </div>

        </div>


    )
}

export default HomeDoisProf;