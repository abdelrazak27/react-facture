import Produit from "./Produit";

function ProduitList(props) {
    //state

    //comportement
    const handleDelete = (id, prix, quantite) => {
        const produitsCopy = [...props.produits];
        const produitsCopyUpdated = produitsCopy.filter((produit) => produit.produit_id !== id)
        props.setProduits(produitsCopyUpdated);
        if (props.produits.length === 1) {
            props.newTotalPriceHT(0);
        } else {
            props.newTotalPriceHT('diminution', props.totalPriceHT, (Number(prix) * Number(quantite)));
        }
    }
    
    const handleDeleteAll = () => {
        props.setProduits([]);
        props.setTotalPriceHT(0);
    }

    const nombreArrondi = (number) => {
        return Number.parseFloat(number).toFixed(2)
    }

    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Liste des produits</h1>
        <div className="App-content">
            <ul className="App-list">
                {props.produits.map((produit) => (
                    <Produit produitInfo={produit} onProduitDelete={handleDelete} key={produit.produit_id} nombreArrondi={nombreArrondi}/>
                ))}
            </ul>
            <div className="total-price">
                <p>Total HT<span>{nombreArrondi(props.totalPriceHT)}€</span></p>
                <p>TVA<span>{props.tvaFacture}%</span></p>
                <p>Total TTC<span>{nombreArrondi((props.totalPriceHT + ((props.totalPriceHT) * (props.tvaFacture) / 100)))}€</span></p>
            </div>
            
            {props.produits.length > 0
                    ?
                    <button className="App-bouton" onClick={handleDeleteAll}>Vider la liste</button>
                    :
                    <button className="App-bouton App-bouton-disabled">Vider la liste</button>
                }
        </div>
    </div>);
}

export default ProduitList;