import React from 'react';
import Link from "../Text/Link";

const MyComponentWhatsAppContact = ({color}) => {
    return (
        <div>
            <Link to={'#'} >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66997 18.3334L2.79664 14.1934C2.05425 12.9207 1.66422 11.4733 1.66664 10C1.66664 5.39752 5.39747 1.66669 9.99997 1.66669C14.6025 1.66669 18.3333 5.39752 18.3333 10C18.3333 14.6025 14.6025 18.3334 9.99997 18.3334C8.52729 18.3357 7.08052 17.946 5.8083 17.2042L1.66997 18.3334ZM6.99247 6.09002C6.88486 6.0967 6.7797 6.12505 6.6833 6.17335C6.59291 6.22455 6.51038 6.28854 6.4383 6.36335C6.3383 6.45752 6.28164 6.53919 6.2208 6.61835C5.91281 7.01918 5.74715 7.5112 5.74997 8.01669C5.75164 8.42502 5.8583 8.82252 6.02497 9.19419C6.3658 9.94585 6.92664 10.7417 7.66747 11.4792C7.8458 11.6567 8.01997 11.835 8.20747 12.0009C9.12696 12.8104 10.2227 13.3942 11.4075 13.7059L11.8816 13.7784C12.0358 13.7867 12.19 13.775 12.345 13.7675C12.5877 13.755 12.8246 13.6893 13.0391 13.575C13.1483 13.5188 13.2548 13.4576 13.3583 13.3917C13.3583 13.3917 13.3941 13.3684 13.4625 13.3167C13.575 13.2334 13.6441 13.1742 13.7375 13.0767C13.8066 13.005 13.8666 12.9209 13.9125 12.825C13.9775 12.6892 14.0425 12.43 14.0691 12.2142C14.0891 12.0492 14.0833 11.9592 14.0808 11.9034C14.0775 11.8142 14.0033 11.7217 13.9225 11.6825L13.4375 11.465C13.4375 11.465 12.7125 11.1492 12.27 10.9475C12.2233 10.9272 12.1733 10.9156 12.1225 10.9134C12.0655 10.9075 12.0078 10.9139 11.9535 10.9322C11.8992 10.9504 11.8494 10.9801 11.8075 11.0192V11.0175C11.8033 11.0175 11.7475 11.065 11.145 11.795C11.1104 11.8415 11.0628 11.8766 11.0081 11.8959C10.9535 11.9152 10.8944 11.9178 10.8383 11.9034C10.784 11.8888 10.7308 11.8705 10.6791 11.8484C10.5758 11.805 10.54 11.7884 10.4691 11.7575L10.465 11.7559C9.98823 11.5477 9.54682 11.2666 9.15664 10.9225C9.05164 10.8309 8.95414 10.7309 8.85414 10.6342C8.52629 10.3202 8.24057 9.96503 8.00414 9.57752L7.95497 9.49835C7.91966 9.44516 7.8911 9.38777 7.86997 9.32752C7.8383 9.20502 7.9208 9.10669 7.9208 9.10669C7.9208 9.10669 8.1233 8.88502 8.21747 8.76502C8.29588 8.66529 8.36903 8.56154 8.43664 8.45419C8.53497 8.29585 8.5658 8.13335 8.51414 8.00752C8.2808 7.43752 8.03914 6.87002 7.7908 6.30669C7.74164 6.19502 7.5958 6.11502 7.4633 6.09919C7.4183 6.09419 7.3733 6.08919 7.3283 6.08585C7.21639 6.08029 7.10425 6.08141 6.99247 6.08919V6.09002Z" fill={color || "white"}/>
                </svg>
            </Link>
        </div>
    );
};

export default MyComponentWhatsAppContact;