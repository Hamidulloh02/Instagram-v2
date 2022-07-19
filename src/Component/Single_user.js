import React from 'react';
// import "./single_user.css"

class Single_user extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='col-3'>
                            <img className='single_photo' src="./imges/hamidullo.jpg" alt="" />
                        </div>
                        <div className='col-9 usr_info'>
                            <div className='d-flex '>
                                  <p className='me-2 italy'>Nematilloyev_hamidullo</p>
                                  {/* <p className='me-2 btnn h6'></p> */}
                                  <input type="submit" className=' h6 me-2 btnn' value={"send message"}/>
                                  <input type="submit" className=' h6 me-2 btnn' value={"user"}/>
                                  <input type="submit" className=' h6 me-2 btnn' value={">"}/>
                                  <h6>...</h6>
                            </div>
                            <div className='d-flex '>
                                  <p className='me-4 mb-5 h6'>8 publications</p>
                                  <p className='me-4 mb-5 h6'>150 subscribers</p>
                                  <p className='me-4 mb-5 h6'>185 подписок</p>
                                  <h6>...</h6>
                            </div>
                            <div className='d-flex '>
                                  <p className='me-2'>Nematilloyev_hamidullo</p>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex text-center category'>
                             <p className='me-5'>PUBLICATIONS</p>
                             <p className='me-5'>VIDEO</p>
                             <p className='me-5'>MARKS</p>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4 mb-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                            <div className='col-4'>
                                <img src="./imges/hamidullo.jpg" />
                            </div>
                        </div>
                        <p className='m-2 h6 text-secondary mt-5'> Meta
                            Информация
                            Блог
                            Вакансии
                            Помощь
                            API
                            Конфиденциальность
                            Условия
                            Популярные аккаунты
                            Хэштеги
                            Места
                            Instagram Lite
                        </p>
                        <p className='text-secondary '>
                            © 2022 Instagram from Meta
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Single_user;
