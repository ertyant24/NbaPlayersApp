import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import PlayerApi from '../../services/PlayerApi';
import playerPhoto from '../../Images/basketballPlayer.jpg'

function PlayerView({ t }) {

  const [playerViewData, setPlayerViewData] = useState([]);

  const paramsForId = useParams();
  const { id } = paramsForId;
  console.log(`id: ${id}`);

  useEffect(() => {
    PlayerApi.ListGetById(id)
      .then((response) => {
        setPlayerViewData(response.data);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
      })
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 style={{ fontSize: "2.8rem" }} className='text-center text-primary fw-bolder'>{playerViewData.fullName}</h1>
          </div>
          <div className="mt-2 mb-2 text-end">
            <Link to="/player/list" className='btn btn-primary '>Player List</Link>
          </div><hr />
          <div className='col-10 offset-2 mt-3 fs-3 d-flex justify-content-around'>
            <div className='col-6'>
              <div className='mt-4'>
                <span className='fw-semibold text-danger'>{t("playershoesize")}</span>: {playerViewData.shoeSize}
              </div>
              <div className='mt-3'>
                <span className='fw-semibold text-danger'>{t("playerteam")}</span>: {playerViewData.team}
              </div>
              <div className='mt-3'>
                <span className='fw-semibold text-danger'>{t("playerisactive")}</span>: {playerViewData.isActive ? <i className="fa-solid fa-check text-success"></i> : <i class="fa-solid fa-xmark text-danger"></i>}
              </div>
            </div>
            <div className='col-6 d-flex flex-column text-center'>
              <img src={playerPhoto} alt={playerViewData.fullName} width="300px" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(PlayerView);
