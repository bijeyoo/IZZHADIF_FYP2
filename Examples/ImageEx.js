// App.js
import React, { useState } from 'react';
import CustomInput from './app/screens/CustomInput'; 
import ImageField from './app/screens/ImageField';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

const App = () => {
  const [form, setForm] = useState({ email: '', username: '' }); //dev set value value

  const handleEmailChange = (email) => {
    setForm({ ...form, email });
  };

  const handleUsernameChange = (username) => {
    setForm({ ...form, username });
  };

  return (
    <View style={styles.container}>
      
      <ImageField
        source={require('./app/assets/logo-red.jpg')} //dev use assets image
        style={styles.customImageStyle}//dev use default size
        containerStyle={styles.customContainerStyle} 
      />
      <ImageField
        source={{ uri: 'https://static.wikia.nocookie.net/megamitensei/images/1/17/Gekkoukan_Emblem.png/revision/latest?cb=20150702014019' }}//dev use url image
        style={{ width: 100, height: 150 }} //dev can set any image size
      />

      <CustomInput // where/how ur function is used
        label="Insert Email address"
        placeholder="izzhadif@example.com"
        keyboardType="email-address"
        value={form.email}
        onChangeText={handleEmailChange}
      />
      <CustomInput
        label="Insert Username"
        placeholder="Username"
        keyboardType="default"
        value={form.username}
        onChangeText={handleUsernameChange}
      />
<Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>Campus System</Text>
            
          </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;
