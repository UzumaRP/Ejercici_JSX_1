import React from 'react';
import { Text, View } from 'react-native';
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';

const Nom = (textAMostrar, estil) => {
  return <Text style={estil}>{textAMostrar}</Text>;
}

const Dades = (elementos, estilAAplicar) => {

  const estilAplicado = estilAAplicar === 'florida' ? 'white' : 'orange';

  return elementos.map((elem, index) => (
    <TextInput
      key={index}
      defaultValue=""
      style={(estilAAplicar === 'florida') ? styles.florida : styles.upv}
      placeholderTextColor={estilAplicado}
      placeholder={elem}
    />
  ));
}

const Informe = () => {
  return (
    <View style = {{margin: 10}}>
    <Button icon="format-list-bulleted" mode="contained">
      INFORME
    </Button>
    </View>
  );
}


const Inici = () => {
  //const [estil, setEstil] = useState('florida');
  const estil = 'upv';
  const isAdmin = true;
  const moduls2Dam = [
    { nom: 'DIN', professor: 'Manel', hores: 120 },
    { nom: 'ADA', professor: 'Roberto', hores: 120 },
    { nom: 'PMDM', professor: 'Paco', hores: 100 },
    { nom: 'PSP', professor: 'Roberto', hores: 60 },
    { nom: 'SGE', professor: 'Belén', hores: 100 },
    { nom: 'Anglés', professor: 'Caterina', hores: 40 },
    { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];

  return (
    <PaperProvider>
      <View>
        {Nom("Unai Ruesta", { fontSize: 40, fontWeight: 'bold', margin: 20, color: 'black', textAlign: 'center' })}
        {Dades(['Email', 'Nom'], estil)}
        {isAdmin ? <Informe /> : null}

        {moduls2Dam.map((elem, index) => (
          <View
            key={index}
            style={[
              { backgroundColor: index % 2 === 0 ? '#F48FB1' : '#F8BBD0', marginLeft: 10, marginRight: 10 },
            ]}
          >
            <Text>{elem.nom}</Text>
            <Text>Professor: {elem.professor}</Text>
            <Text>Hores: {elem.hores}</Text>
          </View>
        ))}

      </View>
    </PaperProvider>
  );
}

const styles = {
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    margin: 10,
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    margin: 10,
  },

};

export default Inici;
