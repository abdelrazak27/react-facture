import "./styles/App.css";
import { useState } from "react";

import CompanyForm from './components/CompanyForm';
import ProduitForm from "./components/ProduitForm";
import CustomerForm from "./components/CustomerForm";
import FactureForm from "./components/FactureForm";
import ProduitList from "./components/ProduitsList";
import PDFForm from "./components/PDFForm";



function App() {

  //state
  const current = new Date();

  const [produits, setProduits] = useState([]);
  const [totalPriceHT, setTotalPriceHT] = useState(0);
  const [updatedFactureInfos, setUpdatedFactureInfos] = useState(false);
  const [numeroFacture, setNumeroFacture] = useState('');
  const [nomFichier, setNomFichier] = useState(`facture_${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`);
  const [dateFacture, setDateFacture] = useState('');
  const [tvaFacture, setTvaFacture] = useState(0);
  
  const [updatedCompanyInfos, setUpdatedCompanyInfos] = useState(false);
  const [prenomCompany, setPrenomCompany] = useState('');
  const [nomCompany, setNomCompany] = useState('');
  const [entrepriseCompany, setEntrepriseCompany] = useState('');
  const [adresseCompany, setAdresseCompany] = useState('');
  const [telephoneCompany, setTelephoneCompany] = useState('');
  const [siretCompany, setSiretCompany] = useState('');
  const [numeroTVACompany, setNumeroTVACompany] = useState('');
  
  const [updatedCustomerInfos, setUpdatedCustomerInfos] = useState(false);
  const [prenomCustomer, setPrenomCustomer] = useState('');
  const [nomCustomer, setNomCustomer] = useState('');
  const [adresseCustomer, setAdresseCustomer] = useState('');

  
  //comportement
  const newTotalPriceHT = (option, totalPrice, produitPrix) => {
    let resultat = 0;
    switch (option) {
      case 'diminution':
        resultat = (totalPrice - produitPrix);
        break;

      case 'ajout':
        resultat = (totalPrice + produitPrix);
        break;
      
      default:
        break;
    }
    setTotalPriceHT(resultat);
  }
  
  //render
  return (
    <div className="App">
      <div className="left-side">
        <CompanyForm
          updatedCompanyInfos={updatedCompanyInfos}
          prenomCompany={prenomCompany}
          nomCompany={nomCompany}
          entrepriseCompany={entrepriseCompany}
          adresseCompany={adresseCompany}
          telephoneCompany={telephoneCompany}
          siretCompany={siretCompany}
          numeroTVACompany={numeroTVACompany}

          setUpdatedCompanyInfos={setUpdatedCompanyInfos}
          setPrenomCompany={setPrenomCompany}
          setNomCompany={setNomCompany}
          setEntrepriseCompany={setEntrepriseCompany}
          setAdresseCompany={setAdresseCompany}
          setTelephoneCompany={setTelephoneCompany}
          setSiretCompany={setSiretCompany}
          setNumeroTVACompany={setNumeroTVACompany}
        />
        <CustomerForm 
          updatedCustomerInfos={updatedCustomerInfos}
          prenomCustomer={prenomCustomer}
          nomCustomer={nomCustomer}
          adresseCustomer={adresseCustomer}

          setUpdatedCustomerInfos={setUpdatedCustomerInfos}
          setPrenomCustomer={setPrenomCustomer}
          setNomCustomer={setNomCustomer}
          setAdresseCustomer={setAdresseCustomer}
        />
        <FactureForm 
          updatedFactureInfos={updatedFactureInfos}
          numeroFacture={numeroFacture}
          dateFacture={dateFacture}
          tvaFacture={tvaFacture}

          setUpdatedFactureInfos={setUpdatedFactureInfos}
          setNumeroFacture={setNumeroFacture}
          setDateFacture={setDateFacture}
          setTvaFacture={setTvaFacture}

          setNomFichier={setNomFichier}
        />
      </div>
      <div className="right-side">
        <div>
          <ProduitForm
            produits={produits}
            totalPriceHT={totalPriceHT}

            setProduits={setProduits}
            setTotalPriceHT={setTotalPriceHT}
            newTotalPriceHT={newTotalPriceHT}
          />
          <ProduitList
            produits={produits}
            totalPriceHT={totalPriceHT}
            tvaFacture={tvaFacture}
            
            setProduits={setProduits}
            setTotalPriceHT={setTotalPriceHT}
            newTotalPriceHT={newTotalPriceHT}
          />
        </div>
        <PDFForm
          produits={produits}
          nomFichier={nomFichier}
          setNomFichier={setNomFichier}

          prenomCompany={prenomCompany}
          nomCompany={nomCompany}
          entrepriseCompany={entrepriseCompany}
          adresseCompany={adresseCompany}
          telephoneCompany={telephoneCompany}
          siretCompany={siretCompany}
          numeroTVACompany={numeroTVACompany}
          updatedCompanyInfos={updatedCompanyInfos}
          
          prenomCustomer={prenomCustomer}
          nomCustomer={nomCustomer}
          adresseCustomer={adresseCustomer}
          updatedCustomerInfos={updatedCustomerInfos}

          numeroFacture={numeroFacture}
          dateFacture={dateFacture}
          tvaFacture={tvaFacture}
          updatedFactureInfos={updatedFactureInfos}
          totalPriceHT={totalPriceHT}
        />
      </div>
    </div>
  );
};

export default App;