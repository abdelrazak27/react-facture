import { useForm } from "react-hook-form";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function FactureForm(props) {
    // state & data
    const {handleSubmit, register, formState : {errors}} = useForm();
    const today = new Date();
    
    //comportement
    const onSubmitFacture = (data) => {
        props.setNumeroFacture(data.numeroFacture);
        props.setDateFacture((data.dateFacture).split("-").reverse().join("/"));
        props.setTvaFacture(Number(data.tvaFacture));
        props.setNomFichier(`facture_${data.numeroFacture}`);
        props.setUpdatedFactureInfos(true);
        notificationInformations();
    }
    
    const afficherInformations = () => {
        if (props.updatedFactureInfos === true) {
            return <div className="informations-visible">
                <span>N°</span>
                <p>{props.numeroFacture}</p>
                <span>Date</span>
                <p>{props.dateFacture}</p>
                <span>TVA</span>
                <p>{props.tvaFacture}%</p>
            </div>
        }
        
    }

    const notificationInformations = () => {
        return NotificationManager.success('Données récoltées avec succès', 'Information', 3000);
    }
    
    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Facture</h1>
        <div className="App-content">
            <form onSubmit={handleSubmit(onSubmitFacture)}>
            <div className="input">
                <input id="form_numero_facture"
                    type='number'
                    autoComplete='off'
                    {...register("numeroFacture", {required : true})}
                />
                <label>N°</label>
                {errors.numeroFacture && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_date_facture"
                    type='date'
                    defaultValue={today.toISOString().split('T')[0]}
                    min={0}
                    autoComplete='off'
                    {...register("dateFacture", {required : true})}
                />
                <label>Date</label>
                {errors.dateFacture && <span className="errorInput"></span>}
            </div>

            <div className="inputRadio">
                <label>TVA</label>
                <div className="inputGroupRadio">
                    <input
                        type="radio"
                        value="2.1"
                        id="2.1"
                        className={errors.tvaFacture ? "radioError" : "radio"}
                        {...register("tvaFacture", {required : true})}/>
                        <label htmlFor="2.1">2,1%</label>
                    <input
                        type="radio"
                        value="5.5"
                        className={errors.tvaFacture ? "radioError" : "radio"}
                        id="5.5"
                        {...register("tvaFacture", {required : true})}/>
                        <label htmlFor="5.5">5,5%</label>
                    <input
                        type="radio"
                        value="10"
                        className={errors.tvaFacture ? "radioError" : "radio"}
                        id="10"
                        {...register("tvaFacture", {required : true})}/>
                        <label htmlFor="10">10%</label>
                    <input
                        type="radio"
                        value="20"
                        className={errors.tvaFacture ? "radioError" : "radio"}
                        id="20"
                        {...register("tvaFacture", {required : true})}/>
                    <label htmlFor="20">20%</label>
                </div>
                
            </div>

            {(errors.numeroFacture || errors.dateFacture || errors.tvaFacture) && <p className="errorFields">Il manque des informations</p>}

            {props.updatedFactureInfos === false
                ?
                <div className="update-info">
                    <i className='bx bxs-x-circle'></i>
                    <p>Pas à jour</p>
                </div>
                :
                <div className="update-info">
                    <i className='bx bxs-check-circle'></i>
                    <p>À jour</p>
                </div>
            }

            {afficherInformations()}

            <button type="submit" className="App-bouton">Mettre à jour</button>
            <NotificationContainer/>
        </form>
        </div>
    </div>);
}

export default FactureForm;