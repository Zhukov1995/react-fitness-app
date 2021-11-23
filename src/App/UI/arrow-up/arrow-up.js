import './arrow-up.css'
import { animateScroll as scroll } from "react-scroll";

const ArrowUp = () => {

    const backTop= () => {
        scroll.scrollToTop();
    }

    return (
        <div className="arrow-up-wraper" onClick={() => backTop()}>
            <div className="arrow-up"></div>
        </div>
    )
}

export default ArrowUp;