import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PlayerApi from '../../services/PlayerApi';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { withTranslation } from 'react-i18next';

function PlayerUpdate({ t }) {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [team, setTeam] = useState("");
  const [isActive, setİsActive] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [validation, setValidation] = useState([]);

  const { id } = useParams();
  console.log(`UpdateId: ${id}`);

  useEffect(() => {
    PlayerApi.ListGetById(id)
      .then((response) => {
        setFullName(response.data.fullName);
        setShoeSize(response.data.shoeSize);
        setTeam(response.data.team);
        setİsActive(response.data.isActive);
        localStorage.setItem("Name", response.data.fullName);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
      })
  }, [id])

  const changeFullName = (event) => {
    setFullName(event.target.value);
  }
  const changeShoeSize = (event) => {
    setShoeSize(event.target.value);
  }
  const changeTeam = (event) => {
    setTeam(event.target.value);
  }

  const changeisActive = (event) => {
    setİsActive(event.target.checked);
  }

  const reset = () => {
    setFullName("");
    setShoeSize("");
    setTeam("");
    setİsActive(false);
    setSpinner(false);
    setValidation([]);
  }

  const updatePlayer = () => {
    setSpinner(true);

    // Model oluşturma
    const updatePlayerDto = { fullName, shoeSize, team, isActive };

    toastr.options = {
      closeButton: true,
      progressBar: true,
    }

    PlayerApi.Edit(id, updatePlayerDto)
      .then((response) => {
        console.log(response.data);
        navigate("/player/list");
        toastr.info("Update this player", `${updatePlayerDto.fullName}`, { timeOut: 3000 });
        setSpinner(false);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
        setValidation(err.response.data.errors);
      })
  }

  // Başlıkta ilk karakterin her zaman büyük gelmesi durumu
  const fully1 = localStorage.getItem("Name").substring(0, 1)
  const fully = localStorage.getItem("Name").substring(1);
  const fully2 = fully1.toUpperCase() + fully;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className='text-center text-primary fw-bolder mb-3'>
              {fully2}
            </h1>
          </div><hr />
          <div className='col-6 offset-3 mt-3'>
            <div id="helpId" className="text-danger fw-semibold mb-3 text-center">
              {validation.model}
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                {t("playername")}
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="form-control"
                placeholder="Please enter player name"
                aria-describedby="helpId"
                value={fullName}
                onChange={changeFullName}
              />
              <small id="helpId" className="text-danger fw-semibold">
                {validation.FullName}
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="shoeSize" className="form-label">
                {t("playershoesize")}
              </label>
              <input
                type="text"
                name="shoeSize"
                id="shoeSize"
                className="form-control"
                placeholder="Please enter player shoe size"
                aria-describedby="helpId"
                value={shoeSize}
                onChange={changeShoeSize}
              />
              <small id="helpId" className="text-danger fw-semibold">
                {validation.ShoeSize}
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="team" className="form-label">
                {t("playerteam")}
              </label>
              <input
                type="text"
                name="team"
                id="team"
                className="form-control"
                placeholder="Please enter player team"
                aria-describedby="helpId"
                value={team}
                onChange={changeTeam}
              />
            </div>
            <div className="mt-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={isActive} id="isActive" onChange={changeisActive} />
                <label className="form-check-label" htmlFor="isActive">
                  {t("playerisactive")}
                </label>
              </div>
            </div>
          </div>
          <div className='col-6 offset-3 text-end mt-4'>
            <button onClick={reset} className='btn btn-danger me-2 px-3'>{t("reset")}</button>
            <button onClick={updatePlayer} className='btn btn-primary'>{t("playerupdate")}</button>
            <span className='ms-3'>
              {spinner ? <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(PlayerUpdate);
