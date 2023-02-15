
import Heart from '../../assets/images/heart-icon.png'
import Hands from '../../assets/images/hands.png'
import { useState } from 'react';
import Polygon from '../snippets/PolygonShape';
import MiddleIcon from '../../assets/images/middle-icon.png';
import { Modal } from 'react-bootstrap';

function Home() {
    const [heartLinks, setHeartLinks] = useState(false);
    const [handLinks, setHandLinks] = useState(false);
    const [brightCircle, setBrightCircle] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <div className='home-landing'>
            <div className="planet-app">
                <div className="container">
                    <div className="planet-polygon">
                        <Polygon />
                        <div className="planet-circle">
                            <div className="middle-line middle-line-left" style={{ backgroundColor: heartLinks ? '#2c9585' : '#999' }} />
                            <div className="middle-line middle-line-right" style={{ backgroundColor: handLinks ? '#2c9585' : '#999' }} />
                            <div className="bottom-line bottom-line-1" style={{ backgroundColor: heartLinks ? '#2c9585' : '#999' }} />
                            <div className="bottom-line bottom-line-2" style={{ backgroundColor: handLinks ? '#2c9585' : '#999' }} />
                            <img src={MiddleIcon} onClick={() => {setBrightCircle(true);}} alt="Middle" className={`middle-icon ${brightCircle ? 'active' : ''}`} />
                            <img src={Heart} onClick={() => {setHeartLinks(true); setHandLinks(false)}} alt="Heart" className='heart-icon' />
                            <img src={Hands} onClick={() => {setHeartLinks(false); setHandLinks(true)}} alt="Hands" className='hands-icon' />

                            {heartLinks && (
                                <div className='heart-links'>
                                    <button onClick={handleShow} style={{backgroundColor: '#047bfe'}}><span>Take</span></button>
                                    <button onClick={handleShow} style={{backgroundColor: '#fb0302'}}><span>Give</span></button>
                                </div>
                            )}
                            {handLinks && (
                                <div className='heart-links heart-links-revert'>
                                    <button onClick={handleShow} style={{backgroundColor: '#047bfe'}}><span>Find</span></button>
                                    <button onClick={handleShow} style={{backgroundColor: '#fb0302'}}><span>Add</span></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='py-3 px-4'>
                    <h4 className='mb-4'>Fund raising to make planets a resource available to everyone</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Modal.Body>
            </Modal>
        </div>
     );
}

export default Home;