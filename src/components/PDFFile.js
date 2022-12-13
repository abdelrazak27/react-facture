import React from "react";
import { Page, Text, Document, View, StyleSheet } from "@react-pdf/renderer";







function PDFFile(props) {
  const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '8% 5% 5% 5%',
    },
    bloc: {
      position: 'relative',
      border: '2px solid black',
      padding: '20px 10px 10px 10px',
      entreprise: {
        width: '48%',
      },
      client: {
        width: '100%',
      }
    },
    titre: {
      position: 'absolute',
      top: '-11px',
      left: '20px',
      backgroundColor: 'white',
      padding: '0 10px',
      fontSize: '16px',
    },
    coordonnee: {
      fontSize: '12px',
    },
    rightSide: {
      width: '48%',
    },
    factureNumero: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
      border: '2px solid black',
      intitule: {
        backgroundColor: 'lightgray',
        padding: '4px',
        fontSize: '16px',
      },
      numero: {
        borderLeft: '2px solid black',
        padding: '4px 4px 4px 8px',
        fontSize: '16px',
      },
    },
    date: {
      fontSize: '12px',
      textAlign: 'right',
      margin: '20px 0',
    },
    page: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    footer: {
      margin: '6px 5%',
      fontSize: '10px',
    },
  
  
    textRight: {
      textAlign: 'right',
    },
    tableau: {
      margin: '0 5%',
    },
    tableauHeader: {
      display: 'flex',
      flexDirection: 'row',
    },
    tableauLigne: {
      display: 'flex',
      flexDirection: 'row',
    },
    tableauFooter: {
      display: 'flex',
      flexDirection: 'row',
    },
    hCol1: {
      width: '47%',
      border: '2px solid black',
      padding: '3px 5px',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '13px',
      backgroundColor: 'lightgray',
    },
    hCol2: {
      width: '13%',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      padding: '3px 5px',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '13px',
      backgroundColor: 'lightgray',
    },
    hCol3: {
      width: '20%',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      borderLeft: '2px solid black',
      padding: '3px 5px',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '13px',
      backgroundColor: 'lightgray',
    },
    hCol4: {
      width: '20%',
      border: '2px solid black',
      padding: '3px 5px',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '13px',
      backgroundColor: 'lightgray',
    },
    cCol1: {
      width: '47%',
      borderLeft: '2px solid black',
      borderRight: '2px solid black',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      last: {
        borderBottom: '2px solid black',
      }
    },
    cCol2: {
      width: '13%',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      last: {
        borderBottom: '2px solid black',
      }
    },
    cCol3: {
      width: '20%',
      borderLeft: '2px solid black',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      last: {
        borderBottom: '2px solid black',
      }
    },
    cCol4: {
      width: '20%',
      borderLeft: '2px solid black',
      borderRight: '2px solid black',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      last: {
        borderBottom: '2px solid black',
      }
    },
    fCol1: {
      width: '47%',
      padding: '3px 5px',
      fontSize: '12px',
    },
    fCol2: {
      width: '13%',
      padding: '3px 5px',
      fontSize: '12px',
    },
    fCol3: {
      width: '20%',
      borderLeft: '2px solid black',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      backgroundColor: '#ececec',
      last: {
        borderBottom: '2px solid black',
      }
    },
    fCol4: {
      width: '20%',
      borderLeft: '2px solid black',
      borderRight: '2px solid black',
      borderBottom: '1px solid black',
      padding: '3px 5px',
      fontSize: '12px',
      backgroundColor: '#f5f5f5',
      last: {
        borderBottom: '2px solid black',
      }
    },
  });

  const totalTva = (props.totalPriceHT * props.tvaFacture) / 100;


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.header}>
            <View style={[styles.bloc, styles.bloc.entreprise]}>
              <Text style={styles.titre}>Informations</Text>
              <Text style={styles.coordonnee}>{props.prenomCompany} {props.nomCompany}</Text>
              <Text style={styles.coordonnee}>{props.entrepriseCompany}</Text>
              <Text style={styles.coordonnee}>{props.adresseCompany}</Text>
              <Text style={styles.coordonnee}>PORT. : {props.telephoneCompany}</Text>
              <Text style={styles.coordonnee}>SIRET : {props.siretCompany}</Text>
              <Text style={styles.coordonnee}>N°TVA : {props.numeroTVACompany}</Text>
            </View>
            <View style={styles.rightSide}>
              <View style={styles.factureNumero}>
                <Text style={styles.factureNumero.intitule}>FACTURE N°</Text>
                <Text style={styles.factureNumero.numero}>{props.numeroFacture}</Text>
              </View>
              <Text style={styles.date}>Le {props.dateFacture}</Text>
              <View style={[styles.bloc, styles.bloc.client]}>
                <Text style={styles.titre}>Client</Text>
                <Text style={styles.coordonnee}>{props.prenomCustomer} {props.nomCustomer}</Text>
                <Text style={styles.coordonnee}>{props.adresseCustomer}</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableau}>

            <View style={styles.tableauHeader}>
              <View style={styles.hCol1}>
                <Text>Description</Text>
              </View>
              <View style={styles.hCol2}>
                <Text>Quantité</Text>
              </View>
              <View style={styles.hCol3}>
                <Text>Prix unitaire HT</Text>
              </View>
              <View style={styles.hCol4}>
                <Text>Total HT</Text>
              </View>
            </View>

            {props.produits.map((produit, i) => (
              <View key={produit.produit_id} style={styles.tableauLigne}>
                <View style={(i === props.produits.length - 1) ? [styles.cCol1, styles.cCol1.last] : styles.cCol1}>
                  <Text>{produit.produit_nom}</Text>
                </View>
                <View style={(i === props.produits.length - 1) ? [styles.cCol2, styles.cCol2.last] : styles.cCol2}>
                  <Text>{produit.produit_quantite}</Text>
                </View>
                <View style={(i === props.produits.length - 1) ? [styles.cCol3, styles.cCol3.last] : styles.cCol3}>
                  <Text>{Number(produit.produit_prix).toFixed(2)}€</Text>
                </View>
                <View style={(i === props.produits.length - 1) ? [styles.cCol4, styles.cCol4.last] : styles.cCol4}>
                  <Text>{(produit.produit_quantite * produit.produit_prix).toFixed(2)}€</Text>
                </View>
            </View>
            ))}

            
            <View style={styles.tableauFooter}>
              <View style={styles.fCol1}>
                <Text></Text>
              </View>
              <View style={styles.fCol2}>
                <Text></Text>
              </View>
              <View style={[styles.fCol3, styles.textRight]}>
                <Text>Total HT</Text>
              </View>
              <View style={styles.fCol4}>
                <Text>{props.totalPriceHT.toFixed(2)}€</Text>
              </View>
            </View>
            <View style={styles.tableauFooter}>
              <View style={styles.fCol1}>
                <Text></Text>
              </View>
              <View style={styles.fCol2}>
                <Text></Text>
              </View>
              <View style={[styles.fCol3, styles.textRight]}>
                <Text>TVA : {props.tvaFacture}%</Text>
              </View>
              <View style={styles.fCol4}>
                <Text>{totalTva.toFixed(2)}€</Text>
              </View>
            </View>
            <View style={styles.tableauFooter}>
              <View style={styles.fCol1}>
                <Text></Text>
              </View>
              <View style={styles.fCol2}>
                <Text></Text>
              </View>
              <View style={[styles.fCol3, styles.fCol3.last, styles.textRight]}>
                <Text>Total TTC</Text>
              </View>
              <View style={[styles.fCol4, styles.fCol4.last]}>
                <Text>{(totalTva + props.totalPriceHT).toFixed(2)}€</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>En cas de retard de paiement, il sera appliqué des pénalités égales à trois fois le taux de l'intérêt légal ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40€ (Article L441-10 et D441-5 du Code du commerce.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;