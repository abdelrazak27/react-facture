import { useForm } from "react-hook-form";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function FormCompany(props) {
    // state & data
    const {handleSubmit, register, setValue, resetField, formState : {errors}} = useForm();

    //comportement
    const onSubmitProduct = (data) => {
        const produitsCopy = [...props.produits];
        produitsCopy.push(data);
        props.setProduits(produitsCopy);

        resetField("produit_nom");
        resetField("produit_quantite");
        resetField("produit_prix");

        notificationProduits();
        props.newTotalPriceHT('ajout', props.totalPriceHT, (Number(data.produit_prix) * Number(data.produit_quantite)));
    }

    const notificationProduits = () => {
        return NotificationManager.success('Produit ajouté avec succès', 'Produits', 3000);
    }


    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Ajouter un produit</h1>
        <div className="App-content">
            <form onSubmit={handleSubmit(onSubmitProduct)}>
            <div className="input">
                <input id="form_produit_nom"
                    type='text'
                    autoComplete='off'
                    {...register("produit_nom", {required : true})}
                />
                <label>Produit</label>
                {errors.produit_nom && <span className="errorInput"></span>}
            </div>
            
            <div className="input">
                <input id="form_produit_quantite"
                    type='number'
                    min={1}
                    autoComplete='off'
                    {...register("produit_quantite", {required : true, min: 1})}
                />
                <label>Quantité</label>
                {errors.produit_quantite && <span className="errorInput"></span>}
            </div>

            <div className="input input_price">
                <input id="form_produit_prix"
                    type='number'
                    step='0.01'
                    min={0}
                    autoComplete='off'
                    {...register("produit_prix", {required : true})}
                />
                <label>Prix unitaire</label>
                {errors.produit_prix && <span className="errorInput"></span>}
            </div>

            {(errors.produit_nom || errors.produit_quantite || errors.produit_prix) && <p className="errorFields">Il manque des informations</p>}

            <button className="App-bouton" type="submit" onClick={() => setValue("produit_id", new Date().getTime())}>Ajouter un produit</button>
            <NotificationContainer/>
        </form>
        </div>
    </div>);
}

export default FormCompany;