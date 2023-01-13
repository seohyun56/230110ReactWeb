import { ProductStyle } from "./Style";
import { Link } from "react-router-dom";

function Product() {
    return (
        <ProductStyle>
            <h2 className="title">our product</h2>
            <h3 className="sub_title">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</h3>
            <div className="our_product_grid">
                <div className="bg bg1">
                    <div className="filter">
                        <h3>DFSA 101</h3>
                        <Link to="/" className="view_btn">view</Link>
                    </div>
                </div>
                <div className="bg bg2">
                    <div className="filter">
                        <h3>SAFE 102</h3>
                        <Link to="/" className="view_btn">view</Link>
                    </div>
                </div>
                <div className="bg bg3">
                    <div className="filter">
                        <h3>XPYB 103</h3>
                        <Link to="/" className="view_btn">view</Link>
                    </div>
                </div>
                <div className="bg bg4">
                    <div className="filter">
                        <h3>ULQV 104</h3>
                        <Link to="/" className="view_btn">view</Link>
                    </div>
                </div>
                <div className="bg bg5">
                    <div className="filter">
                        <h3>XMEG 105</h3>
                        <Link to="/" className="view_btn">view</Link>
                    </div>
                </div>
            </div>
        </ProductStyle>
    );
}

export default Product;