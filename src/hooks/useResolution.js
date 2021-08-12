import {useEffect, useState} from "react";


const useResolution = () => {
    const [resolution, setResolution] = useState();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            const width = window.innerWidth;
            setResolution(width)
            if (width <= 960) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('resize', checkWidth);
        checkWidth()

        return () => window.removeEventListener('resize', checkWidth);
    }, [])

    return {isMobile, resolution};
}

export default useResolution;