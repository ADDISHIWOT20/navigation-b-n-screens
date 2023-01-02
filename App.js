import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeScreen from './screens/employee';
import TeachersScreen from './screens/teachers';
import StudentScreen from './screens/students';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator>
   <Stack.Screen name='home' component={HomeScreen} options={{title:'Home'}}/>
   <Stack.Screen name='teachers' component={TeachersScreen}/>
   <Stack.Screen name='students' component={StudentScreen}/>
   <Stack.Screen name='employee' component={EmployeeScreen}/>
</Stack.Navigator>


    </NavigationContainer>
  );
}


