import React, { useRef, useState } from 'react'
import { withTranslation } from 'react-i18next'
import PlayerApi from '../../services/PlayerApi';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import ResuabilityPlayerInput from './ResuabilityPlayerInput';
import { useNavigate } from 'react-router-dom';

function PlayerCreate({ t }) {

  // STATE
  const [isRead, setİsRead] = useState(false);
  const [isActive, setİsActive] = useState(false);
  const [fullName, setFullName] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [team, setTeam] = useState("");
  const [spinner, setSpinner] = useState(false);
  const[multipleRequest, setMultipleRequest] = useState(false);
  const[validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();


  const changeFullName = (event) => {
    setFullName(event.target.value);
  }
  const changeTeam = (event) => {
    setTeam(event.target.value);
  }
  const changeShoeSize = (event) => {
    setShoeSize(event.target.value);
    // const bakendErrorHandling = {...validationErrors};
    // console.log(`Error : ${bakendErrorHandling}`);
  }

  const isReadChecked = (event) => {
    setİsRead(event.target.checked);
    console.log(isRead);
  }

  const isActiveChecked = (event) => {
    setİsActive(event.target.checked);
    console.log(!isActive);
  }

  const reset = () => {
    setFullName("");
    setShoeSize("");
    setTeam("");
    setİsActive(true);
    setİsRead(true)
    setMultipleRequest(false);
    setSpinner(false);
  }

  const addPlayer = async (event) => {

    // Browser sen dur birşey yapma !
    event.preventDefault();
    setSpinner(true);
    setMultipleRequest(true);

    const playerDto = { fullName, team, shoeSize, isActive }
    console.log(playerDto);

    toastr.options = {
      closeButton: true,
      progressBar: true,
    }

    PlayerApi.Create(playerDto)
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          // LOCAL STORAGE
          localStorage.setItem("Player Name", playerDto.fullName);
          localStorage.setItem("Player Shoe Size", playerDto.shoeSize);
          localStorage.setItem("Player Team", playerDto.team);
          localStorage.setItem("Player Status", playerDto.isActive);

          toastr.success('Player is added.', `${playerDto.fullName}`, { timeOut: 2000 })
          setSpinner(false);
          setMultipleRequest(false);
          navigate("/player/list");
        }
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data.errors){
          setValidationErrors(err.response.data.errors);
        }
        // let validattion = document.getElementById("validation");
        // validattion.innerText = `Error Message: ${err}`;
      })
  }

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className='text-center text-primary'>{t(("addplayer"))}</h1><hr />
            <div className='fs-6 text-danger px-3 mb-3' id='validation'></div>
            {
                validationErrors.model ? <p style={{fontSize: "0.8rem"}} className='px-3 mb-3 text-center fw-semibold text-danger'>{validationErrors.model}</p> : ""
              }
            <div className="form-floating mb-3">
              {/* <input
                onChange={changeFullName}
                type="text"
                className="form-control"
                name="fullName"
                id="fullName"
                placeholder=""
                value={fullName}
              />
              <label htmlFor="fullName">{t("playername")}</label> */}
              <ResuabilityPlayerInput
                onChange={changeFullName}
                type="text"
                className="form-control mt-4"
                name="fullName"
                id="fullName"
                placeholder={t("playername")}
                value={fullName}
                autoFocus={true}
                // validation={validationErrors.FullName}
              />
              {
                validationErrors.FullName ? <span style={{fontSize: "0.8rem"}} className='ps-1 fw-semibold text-danger'>{validationErrors.FullName}</span> : ""
              }
            </div>
            <div className="form-floating mb-3">
              {/* <input
                onChange={changeShoeSize}
                value={shoeSize}
                type="text"
                className="form-control"
                name="shoeSize"
                id="shoeSize"
                placeholder=""
              />
              <label htmlFor="shoeSize">{t("playershoesize")}</label> */}
              <ResuabilityPlayerInput
                 onChange={changeShoeSize}
                 type="text"
                 className="form-control"
                 name="shoeSize"
                 id="shoeSize"
                 placeholder={t("playershoesize")}
                 value={shoeSize}
                 autoFocus={false}
                //  validation={validationErrors.ShoeSize}
              />
              {
                validationErrors.ShoeSize ? <span style={{fontSize: "0.8rem"}} className='ps-1 fw-semibold text-danger'>{validationErrors.ShoeSize}</span> : ""
              }
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={changeTeam}
                value={team}
                type="text"
                className="form-control"
                name="team"
                id="team"
                placeholder=""
              />
              <label htmlFor="team">{t("playerteam")}</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue="" id="isActive" onChange={isActiveChecked} />
              <label className="form-check-label" htmlFor="isActive">
                {t("playerisactive")}
              </label>
            </div>
            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" defaultValue="" id="isRead" onChange={isReadChecked} />
              <label className="form-check-label" htmlFor="isRead">
                {t("isread")}
              </label>
            </div>
            <div className='mt-3 text-end'>
              <button onClick={reset} className='btn btn-danger me-2'>{t("reset")}</button>
              <button onClick={addPlayer} disabled={!isRead || multipleRequest} className='btn btn-primary'>{t("addplayer")}</button>
              <span className='ms-2 '>
                {
                  spinner ? <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : ""
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(PlayerCreate);
