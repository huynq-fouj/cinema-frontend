import clsx from "clsx";
import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import "./scroll-to-top.scss";

export default function ScrollToTop() {

    const [visible, setVisible] = useState(false);

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 200) setVisible(true); 
        else setVisible(false);
    });

    return (
        <div
            className={clsx('scroll-to-top-ctm',
            visible ? 'active' : '')}
            onClick={() => scrollTo({top: 0, behavior: 'smooth'})}
            aria-hidden="true">
            <BsChevronUp />
        </div>
    )
}