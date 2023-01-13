import { InsideStyle } from "./Style";
import { Link } from "react-router-dom";

function Inside() {
    return (
        <InsideStyle>
            <h2 className="title">fivestone inside</h2>
            <p>파이브스톤과 함께 하세요!</p>
            <ul>
                <li><Link to="/">공지사항</Link></li>
                <li><Link to="/">1:1문의</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">채용안내</Link></li>
            </ul>
        </InsideStyle>
    );
}

export default Inside;