import { useState } from 'react'
import Modal_85 from '../components/Modal_85'
import Backdrop_85 from '../components/Backdrop_85'

function Todo_85(props) {
    const [showModal, setshowModal] = useState();

    function showModalHandler() {
        setshowModal(true);
    }

    function closeModalHandler() {
        setshowModal(false);
    }
    return (
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_85 onClose={closeModalHandler} />}
            {showModal && <Modal_85 text='Are you sure?' onClose={closeModalHandler} />}
        </div>
    )
}

export default Todo_85
