import {Link} from "react-router-dom";
 



export default function WelcomePage(){

    return(
        <>
        <h1 className="bg-red-600">Welcome to My Site</h1>
        <Link to="/project"><button>New Game</button></Link>
        <ul className="pl-5 list-disc">
            <li>test</li>
        </ul>
        </>
    )
}