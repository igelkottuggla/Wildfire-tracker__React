import { useGlobalContext } from '../context';

const LocationInfoBox = ({ info }) => {
    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <div className={`${isModalOpen ? 'location-info' : 'location-info visually-hidden'} `}>
            <h2>Event Location Info</h2>
            <button onClick={closeModal}>x</button>
            <ul>
                <li>
                    ID <strong>{info.id}</strong>{' '}
                </li>
                <li>
                    Title <strong>{info.title}</strong>{' '}
                </li>
            </ul>
        </div>
    );
};

export default LocationInfoBox;
