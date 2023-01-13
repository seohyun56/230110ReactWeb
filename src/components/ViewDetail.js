import { ViewDetailStyle } from "./Style";
import { Link } from "react-router-dom";

function ViewDetail() {
    return (
        <ViewDetailStyle>
            <h2>The Special Design Group</h2>
            <p>파이브스톤은 오랫동안 쌓은 전문지식과 노하우를 바탕으로 고객과 함께하겠습니다.</p>
            <Link to="/" className="ghost_btn">view detail</Link>
        </ViewDetailStyle>
    );
}

export default ViewDetail;