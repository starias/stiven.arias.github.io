import '../../styles/popupcard.css';
import '../../styles/work.css';

export default function PopUpImage({ image, onClose }) {

    return (
        <div className="popup-image-container">
            <button className="popup-close" onClick={onClose}>
                <i className="fa fa-window-close"></i>
            </button>

            <div className="popup-image">
                <div className="popup-media">
                    {image}
                </div>
            </div>
        </div>
    );
}
