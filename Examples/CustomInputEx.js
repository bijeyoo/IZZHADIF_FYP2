// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomInput from './app/screens/CustomInput'; 

const App = () => {
  const [form, setForm] = useState({ email: '', username: '' }); //ubah value apa dia input 

  const handleEmailChange = (email) => {
    setForm({ ...form, email });
  };

  const handleUsernameChange = (username) => {   //this is what dev writes
    setForm({ ...form, username });
  };

  return (
    <View style={styles.container}>
      <CustomInput   // where/how ur function is used
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
