import React, { useEffect, useState } from 'react'
import { withTranslation } from 'react-i18next';
import PlayerApi from '../../services/PlayerApi';
import { Link } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

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
  }, []);

  const updatePlayer = (id) => {
    // alert(`Update ${id}`);
  };

  const viewPlayer = (id) => {
    // alert(`View ${id}`);
  };

  const deletePlayer = (id) => {
    // DB'den gitmeden silmek:
    // setPlayerData(() => playerData.filter((nba) => nba.id != id));

    // Aynı zamanda DB' den silmek:
    PlayerApi.Delete(id)
      .then((response) => {
        console.log(`Deleted data: ${response}`);
        playerData.filter((nba) => nba.id != id);
        window.location.reload();
      })
      .catch(() => {

      })
  };

  const deleteAllPlayer = () => {
    // DB' den veriler gitmeyecek ...
    let result = window.confirm(`Are you sure all this players`);
    if (result) {
      setPlayerData(playerData.filter((nba) => nba.fullName == ""));
    }
    else {
      alert("All Data are not deleted ...");
    }

  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6 offset-3'>
            <h1 className='text-center text-primary'>{t("playerlist")}</h1>
          </div>
          <div className='text-end mt-3'>
            <button onClick={deleteAllPlayer} className='btn btn-danger me-3'><i className="fa-solid fa-trash me-2"></i>{t("playeralldelete")}</button>
            <Link to="/player/create" className='btn btn-primary'><i className="fa-solid fa-user-plus me-2"></i>{t("addplayer")}</Link>
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
                    player.isActive ? <i style={{ color: "green" }} className="fa-solid fa-check"></i> : <i style={{ color: "red" }} className="fa-solid fa-xmark"></i>
                  }
                </th>
                <th>
                  <Link to={`/player/update/${player.id}`} className='text-dark'>
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa-solid fa-pen-to-square"
                    >
                    </i>
                  </Link>
                </th>
                <th>
                  <Link className='text-dark' to={`/player/view/${player.id}`}>
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa-solid fa-eye"
                    >
                    </i>
                  </Link>
                </th>
                <th>
                  <i
                    style={{ cursor: "pointer" }}
                    className="fa-solid fa-user-minus"
                    onClick={() => {
                      let result = window.confirm(`Are you sure delete this player - ${player.fullName}`);
                      if (result) {
                        deletePlayer(player.id);
                        toastr.error('Deleted this player', `${player.fullName}`)
                      }
                      else {
                        alert("Player is not deleted ...");
                      }
                    }}>
                  </i>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default withTranslation()(PlayerList);
