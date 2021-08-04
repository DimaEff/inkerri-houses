import {useEffect, useState} from "react";


const useResolution = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            const width = window.innerWidth;
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

    return isMobile;
}

export default useResolution;