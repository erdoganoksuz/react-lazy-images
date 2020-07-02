import React, { useState, useRef } from 'react';

function Lazy(props: { placeholder: string; src: string; ratio: number; className?: string; force?: boolean; onVisible?: Function }) {
    const [currentSrc, setCurrentSrc] = useState(props.force ? props.src : props.placeholder);
    const el = useRef(null);

    const handleChange = ([root]: any, ) => {
        if (root.intersectionRatio > Number(props.ratio) && root.isIntersecting === true) {
            setCurrentSrc(props.src);
            observer.disconnect();
            if (props.onVisible) props.onVisible();
        }
    }

    const observer = new IntersectionObserver(handleChange, { threshold: props.ratio });

    const handleObserve = () => {
        observer.observe(el.current as any);
    }

    return (<img
        className={props.className}
        data-src={props.src}
        onLoad={handleObserve}
        ref={el}
        src={currentSrc} />);
}

export default Lazy;


