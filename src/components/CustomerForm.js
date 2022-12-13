import { useForm } from "react-hook-form";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function CustomerForm(props) {
    // state & data
    const {handleSubmit, register, formState : {errors}} = useForm();
    
    //comportement
    const onSubmitCustomer = (data) => {
        props.setPrenomCustomer(data.prenomCustomer);
        props.setNomCustomer((data.nomCustomer).toUpperCase());
        props.setAdresseCustomer(data.adresseCustomer);
        props.setUpdatedCustomerInfos(true);
        notificationInformations();
    }
    
    const afficherInformations = () => {
        if (props.updatedCustomerInfos === true) {
            return <div className="informations-visible">
                <span>Prénom</span>
                <p>{props.prenomCustomer}</p>
                <span>Nom</span>
                <p>{props.nomCustomer}</p>
                <span>Adresse</span>
                <p>{props.adresseCustomer}</p>
            </div>
        }
    }

    const notificationInformations = () => {
        return NotificationManager.success('Données récoltées avec succès', 'Information', 3000);
    }
    
    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Client</h1>
        <div className="App-content">
            <form onSubmit={handleSubmit(onSubmitCustomer)}>
            <div className="input">
                <input id="form_prenom_customer"
                    type='text'
                    autoComplete='off'
                    {...register("prenomCustomer", {required : true})}
                />
                <label>Prénom</label>
                {errors.prenomCustomer && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_nom_customer"
                    type='text'
                    autoComplete='off'
                    {...register("nomCustomer", {required : true})}
                />
                <label>Nom</label>
                {errors.nomCustomer && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_entreprise_customer"
                    type='text'
                    autoComplete='off'
                    {...register("adresseCustomer", {required : true})}
                />
                <label>Adresse</label>
                {errors.adresseCustomer && <span className="errorInput"></span>}
            </div>


            {(errors.prenomCustomer || errors.nomCustomer || errors.adresseCustomer) && <p className="errorFields">Il manque des informations</p>}

            {props.updatedCustomerInfos === false
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

export default CustomerForm;