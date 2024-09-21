import React, { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [matchScore, setMatchScore] = useState(null);

  const isLocal = false; // Set to false for production
  const ngrokurl = 'https://29b9-111-125-253-154.ngrok-free.app';
  const vercelbackendurl = 'https://job-matcher-backend-m6n58jpcj-dntrplys-projects.vercel.app';

  const baseURL = isLocal
    ? ngrokurl // Replace with your ngrok URL
    : vercelbackendurl;

  const handleMatch = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/match`, {
        resume,
        jobDescription,
      });

      const data = response.data;
      setMatchScore(data.matchScore);
      Alert.alert(`Match Score: ${data.matchScore}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch match score. Please try again later.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Job Matcher App</Text>

        <TextInput
          style={{ height: 150, width: '100%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10, textAlignVertical: 'top' }}
          multiline
          placeholder="Paste your resume here"
          onChangeText={text => setResume(text)}
          value={resume}
        />

        <TextInput
          style={{ height: 150, width: '100%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10, textAlignVertical: 'top' }}
          multiline
          placeholder="Enter job description here"
          onChangeText={text => setJobDescription(text)}
          value={jobDescription}
        />

        <Button title="Match" onPress={handleMatch} />

        {matchScore !== null && (
          <Text style={{ fontSize: 18, marginTop: 20 }}>Match Score: {matchScore}</Text>
        )}
      </View>
    </ScrollView>
  );
}
