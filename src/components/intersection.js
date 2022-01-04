import exp from "constants";
import React, {useState, useEffect, useRef} from "react";
function useInteract() {
    const [entry, updateEntry] = useState({})
    const [node, setNode]= useState(null)
    // create the constructor for the intersectionObserver
    let options={
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    // intersection observer returns true when the element is in the viewport
    let observer = useRef(
        new IntersectionObserver(([entry]) => updateEntry(entry), options));

    useEffect(()=>{
        const {current: currentObserver} = observer;
        currentObserver.disconnect();

        if (node)    currentObserver.observe(node.current);
        return () => currentObserver.current.disconnect();
    }, [node])
    

    return [setnode, entry]
}

export default useInteract