import {Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles }  from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {

   const [participants, setParticipants] = useState<string[]>([])
   const [participantName, setParticipantName] = useState('')


   function handleParticipantAdd(){
      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
   }

   function handleParticipantRemove(name:string){
          Alert.alert("Remover",`Remover o participante ${name} ?`,[
         {
            text: 'Sim',
            onPress: () => { 
                  setParticipants(prevState => prevState.filter(participant => participant !== name))
               },
         },
         {
            text:'Não',
         }
      ])
   }

   return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
         <TextInput style={styles.input} 
            placeholder='Nome do participante'
            placeholderTextColor='#6B6B6B'
            onChangeText={text => setParticipantName(text)}
            value={participantName}
         />

         <TouchableOpacity style={styles.button} 
            onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
               +
            </Text>
         </TouchableOpacity>
      </View>
      <FlatList
         data={participants}
         keyExtractor={item => item} 
         renderItem={({item}) => (
            <Participant 
               key={item} 
               name={item}
               onRemove={() => handleParticipantRemove(item)}
            />
         )}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}