import PDFFile from './PDFFile';
import { PDFDownloadLink } from "@react-pdf/renderer";

function PDFForm(props) {
    //state
    const current = new Date();

    //comportement
    const handleChangeNameFile = (event) => {
        props.setNomFichier(event.target.value);
    }

    const verificationNomFichier = () => {
        if (props.nomFichier === "") {
            return `facture_${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
        } else {
            return `${props.nomFichier}`;
        }
    }

    //render
    return (
    <div className="App-container">
        <h1 className="App-titre">Génerer le PDF</h1>
        <div className="App-content">
            <div className="input input-medium input-only input_pdf">
                <input id="form_fichier_nom"
                    type='text'
                    autoComplete='off'
                    value={props.nomFichier}
                    onChange={handleChangeNameFile}
                />
                <label>Nom du fichier</label>
            </div>

            {props.updatedCompanyInfos === false
                ?
                <div className="verification-pdf">
                    <i className='bx bxs-x-circle'></i>
                    <p>Entreprise : Informations manquantes.</p>
                </div>
                :
                <div className="verification-pdf">
                    <i className='bx bxs-check-circle'></i>
                    <p>Entreprise : Informations enregsitrées.</p>
                </div>
            }

            {props.updatedCustomerInfos === false
                ?
                <div className="verification-pdf">
                    <i className='bx bxs-x-circle'></i>
                    <p>Client : Informations manquantes.</p>
                </div>
                :
                <div className="verification-pdf">
                    <i className='bx bxs-check-circle'></i>
                    <p>Client : Informations enregsitrées.</p>
                </div>
            }

            {props.updatedFactureInfos === false
                ?
                <div className="verification-pdf">
                    <i className='bx bxs-x-circle'></i>
                    <p>Facture : Informations manquantes.</p>
                </div>
                :
                <div className="verification-pdf">
                    <i className='bx bxs-check-circle'></i>
                    <p>Facture : Informations enregsitrées.</p>
                </div>
            }

            {props.produits.length <= 0
                ?
                <div className="verification-pdf">
                    <i className='bx bxs-x-circle'></i>
                    <p>Liste : vide.</p>
                </div>
                :
                <div className="verification-pdf">
                    <i className='bx bxs-check-circle'></i>
                    <p>Liste : enregistrée.</p>
                </div>
            }

            {props.updatedCompanyInfos === true & props.updatedCustomerInfos & props.produits.length > 0
                ?
                    <PDFDownloadLink document={<PDFFile
                        produits={props.produits}

                        prenomCompany={props.prenomCompany}
                        nomCompany={props.nomCompany}
                        entrepriseCompany={props.entrepriseCompany}
                        adresseCompany={props.adresseCompany}
                        telephoneCompany={props.telephoneCompany}
                        siretCompany={props.siretCompany}
                        numeroTVACompany={props.numeroTVACompany}
                        
                        prenomCustomer={props.prenomCustomer}
                        nomCustomer={props.nomCustomer}
                        adresseCustomer={props.adresseCustomer}

                        numeroFacture={props.numeroFacture}
                        dateFacture={props.dateFacture}
                        tvaFacture={props.tvaFacture}
                        updatedFactureInfos={props.updatedFactureInfos}

                        totalPriceHT={props.totalPriceHT}
                    />}

                    fileName={verificationNomFichier()}>

                    {({loading}) => (loading ? <button className="App-bouton">Rechargement du PDF...</button> : <button className="App-bouton">Télécharger la facture</button> )}
                    </PDFDownloadLink>
                :
                    <button className="App-bouton App-bouton-disabled">Télécharger la facture</button>
                }
            </div>
        </div>);
}


export default PDFForm;