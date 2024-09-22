import React, { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [matchScore, setMatchScore] = useState(null);
  const [loading, setLoading] = useState(false); // Add a loading state

  const isLocal = true; // Set to false for production
  const ngrokurl = 'https://420c-111-125-253-154.ngrok-free.app';
  const vercelbackendurl = 'https://job-matcher-backend.vercel.app';

  const baseURL = isLocal ? ngrokurl : vercelbackendurl;

  const handleDocumentUpload = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
      });

      if (!file.canceled && file.assets && file.assets.length > 0) {
        const fileUri = file.assets[0].uri;
        const formData = new FormData();
        let response = '';

        if (Platform.OS === 'android') {
          console.log('file: ', file);
          const fileName = file.assets[0].name;
          const fileType = file.assets[0].mimeType;

          formData.append('file', {
            uri: fileUri,
            name: fileName,
            type: fileType,
          });
          response = await axios.post(`${baseURL}/api/upload-resume`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

        } else if (Platform.OS === 'web') {
          console.log('web file:', file);
          // Send the file to the backend for processing
          response = await axios.post(`${baseURL}/api/upload-resume`, file.assets[0], {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
        }



        const { resumeText } = response.data;
        setResume(resumeText);
        Alert.alert('File uploaded and processed successfully');
      } else {
        console.log('File selection was canceled.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to upload the document. Please try again.');
      console.error(error);
    }
  };

  const handleMatch = async () => {
    try {
      setLoading(true); // Show the loading spinner
      setMatchScore(null); // Clear the previous match score

      const response = await axios.post(`${baseURL}/api/match`, {
        resume,
        jobDescription,
      });

      const data = response.data;
      setMatchScore(data.matchScore);
      setLoading(false); // Hide the loading spinner
    } catch (error) {
      setLoading(false); // Hide the loading spinner
      Alert.alert('Error', 'Failed to fetch match score. Please try again later.');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Job Matcher App</Text>

        <Button title="Upload Resume (PDF/DOC)" onPress={handleDocumentUpload} />

        <Text style={{ fontSize: 18, marginTop: 20 }}>Or paste your resume:</Text>

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

        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {!loading && matchScore !== null && (
          <Text style={{ fontSize: 18, marginTop: 20 }}>Match Score: {matchScore}</Text>
        )}
      </View>
    </ScrollView>
  );
}
