function Produit({ produitInfo, onProduitDelete, nombreArrondi }) {
    //state
    // const voitureInfo = props.voitureInfo;
    // const onVoitureDelete = props.onVoitureDelete;
    // const { voitureInfo, onVoitureDelete } = props;

    //comportement

    //render
    return (
    <li className="App-card">
        <button className="bouton-supprimer" onClick={() => onProduitDelete(produitInfo.produit_id, produitInfo.produit_prix, produitInfo.produit_quantite)}></button>
        <h2>{produitInfo.produit_nom}</h2>
        <p>Quantité : {produitInfo.produit_quantite}</p>
        <div className="space-between">
            <p>Prix unitaire : {nombreArrondi(produitInfo.produit_prix)}€</p>
            <p>={nombreArrondi(produitInfo.produit_quantite * produitInfo.produit_prix)}€</p>
        </div>
    </li>);
}

export default Produit;