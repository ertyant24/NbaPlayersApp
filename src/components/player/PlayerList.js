import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next';
import PlayerApi from '../../services/PlayerApi';

function PlayerList({ t }) {

  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    PlayerApi.List()
      .then((response) => {
        // console.log(response.data);
        setPlayerData(response.data);
      })
      .catch(() => {

      })
  })

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6 offset-3'>
            <h1 className='text-center text-primary'>{t("playerlist")}</h1>
          </div> 
        </div><hr />
      </div>
      <table className='table table-hover table-striped text-center'>
        <thead>
          <tr>
            <th>{t("playername")}</th>
            <th>{t("playershoesize")}</th>
            <th>{t("playerteam")}</th>
            <th>{t("playerisactive")}</th>
            <th>{t("playerupdate")}</th>
            <th>{t("playerview")}</th>
            <th>{t("playerdelete")}</th>
          </tr>
        </thead>
        <tbody>
          {
            playerData.map((player) => (
              <tr key={player.id}>
                <th>{player.fullName}</th>
                <th>{player.shoeSize}</th>
                <th>{player.team}</th>
                <th>
                  {
                    player.isActive ? <i style={{color: "green"}} className="fa-solid fa-check"></i> : <i style={{color: "red"}} className="fa-solid fa-xmark"></i>
                  }
                </th>
                <th><i style={{cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i></th>
                <th><i style={{cursor: "pointer"}} className="fa-solid fa-eye"></i></th>
                <th><i style={{cursor: "pointer"}} className="fa-solid fa-trash"></i></th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default withTranslation()(PlayerList);
