

import { useEffect, useState } from 'react';
import {View,Text, Button} from 'react-native';
//import { TVEventHandler } from 'react-native-web';
import axios from 'axios';

const StudentsScreen=()=>{
const[data,setData]=useState([])
const fetch=()=>
   axios.get('http://127.0.0.1:8000/student-list/').then((response)=>
setData(response.data)
)


const stuDel=(id)=>{
axios.delete(`http://127.0.0.1:8000/student/${id}`).then(
   fetch()
)
}
useEffect(()=>{fetch()},[])
   return(
   
      <View>
      {data.map((i)=>{
         return <View key={i.id}>
            <Text>{i.firstname}</Text>
            <Text>{i.lastname}</Text>
   
            <Text>{i.grade}</Text>
          <Button title='Delete' onPress={stuDel(i.id)}></Button>
         </View>
      })}
       <Button style={styles.btn}title='student info' onPress={()=>
    navigation.navigate('student')
   }/>
   <Button style={styles.btn}title='teachers info' onPress={()=>
    navigation.navigate('teachers')
   }/>
   
   <Button title='employee info' onPress={()=>
    navigation.navigate('employee')
   }/>
   
   
       
       </View>

   );





   }

export default StudentsScreen