import {Link} from "react-router-dom";

export const Header = () => {
    return(
        <div className={"header"}>
            <Link to={"/"} ><span>¿</span>Dónde La Veo<span>?</span> </Link>

        </div>
    )
}