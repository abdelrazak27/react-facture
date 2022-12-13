import { useForm } from "react-hook-form";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function CompanyForm(props) {
    // state & data
    const {handleSubmit, register, formState : {errors}} = useForm();
    
    //comportement
    const onSubmitCompany = (data) => {
        props.setPrenomCompany(data.prenomCompany);
        props.setNomCompany((data.nomCompany.toUpperCase()));
        props.setEntrepriseCompany(data.entrepriseCompany);
        props.setAdresseCompany(data.adresseCompany);
        props.setTelephoneCompany(data.telephoneCompany);
        props.setSiretCompany(data.siretCompany);
        props.setNumeroTVACompany(data.numeroTVACompany);
        props.setUpdatedCompanyInfos(true);
        notificationInformations();
    }

    //case switch break

    const afficherInformations = () => {
        if (props.updatedCompanyInfos === true) {
            return <div className="informations-visible">
                <span>Prénom</span>
                <p>{props.prenomCompany}</p>
                <span>Nom</span>
                <p>{props.nomCompany}</p>
                <span>Entreprise</span>
                <p>{props.entrepriseCompany}</p>
                <span>Adresse</span>
                <p>{props.adresseCompany}</p>
                <span>Telephone</span>
                <p>{props.telephoneCompany}</p>
                <span>Siret</span>
                <p>{props.siretCompany}</p>
                <span>N° TVA</span>
                <p>{props.numeroTVACompany}</p>
            </div>
        }
    }

    const notificationInformations = () => {
        return NotificationManager.success('Données récoltées avec succès', 'Information', 3000);
    }
    
    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Entreprise</h1>
        <div className="App-content">
            <form onSubmit={handleSubmit(onSubmitCompany)}>
            <div className="input">
                <input id="form_prenom_company"
                    type='text'
                    autoComplete='off'
                    {...register("prenomCompany", {required : true})}
                />
                <label>Prénom</label>
                {errors.prenomCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_nom_company"
                    type='text'
                    autoComplete='off'
                    {...register("nomCompany", {required : true})}
                />
                <label>Nom</label>
                {errors.nomCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_entreprise_company"
                    type='text'
                    autoComplete='off'
                    {...register("entrepriseCompany", {required : true})}
                />
                <label>Entreprise</label>
                {errors.entrepriseCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_adresse_company"
                    type='text'
                    autoComplete='off'
                    {...register("adresseCompany", {required : true})}
                />
                <label>Adresse</label>
                {errors.adresseCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_telephone_company"
                    type='number'
                    autoComplete='off'
                    {...register("telephoneCompany", {required : true})}
                />
                <label>Téléphone</label>
                {errors.telephoneCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_siret_company"
                    type='number'
                    autoComplete='off'
                    {...register("siretCompany", {required : true})}
                />
                <label>Siret</label>
                {errors.siretCompany && <span className="errorInput"></span>}
            </div>

            <div className="input">
                <input id="form_numeroTVA_company"
                    type='number'
                    autoComplete='off'
                    {...register("numeroTVACompany", {required : true})}
                />
                <label>N° TVA</label>
                {errors.numeroTVACompany && <span className="errorInput"></span>}
            </div>

            {(errors.prenomCompany || errors.nomCompany || errors.entrepriseCompany || errors.adresseCompany || errors.telephoneCompany || errors.siretCompany || errors.numeroTVACompany) && <p className="errorFields">Il manque des informations</p>}

            {props.updatedCompanyInfos === false
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

export default CompanyForm;