'use client'

import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contacts() {
    return (
        <>
            <div className='flex flex-row items-center space-x-3'>
                <FontAwesomeIcon icon={faPhone} size='s' />
                <a href="tel:+380983620329">+380983620329</a>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <FontAwesomeIcon icon={faMailBulk} size='s' />
                <a href="mailto:oleksandr.poberezhniak@gmail.com">oleksandr.poberezhniak@gmail.com</a>
            </div>
        </>
    );
}