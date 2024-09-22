import React, { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [matchScore, setMatchScore] = useState(null);

  const isLocal = true; // Set to false for production
  const ngrokurl = 'https://29b9-111-125-253-154.ngrok-free.app';
  const vercelbackendurl = 'https://job-matcher-backend-m6n58jpcj-dntrplys-projects.vercel.app';

  const baseURL = isLocal ? ngrokurl : vercelbackendurl;

  // Function to handle document upload
  const handleDocumentUpload = async () => {
    try {
      console.log('handleDocumentUpload entered');
      const file = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
      });

      console.log('APp.js --> file: ', file);


      if (!file.canceled && file.assets && file.assets.length > 0) {
        const selectedFile = file.assets[0].file;
        console.log(`File Name: ${selectedFile.name}`);
        console.log(`File Type: ${selectedFile.type}`);
        console.log(`File URI: ${file.assets[0].uri}`);
        console.log(`File size: ${file.assets[0].size}`);


        setResume(file.assets[0].uri);  // You can set it to base64 or handle it differently based on your backend processing
        Alert.alert('File uploaded successfully');
      } else {
        console.log('File selection was canceled.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to upload the document. Please try again.');
      console.error(error);
    }
  };

const handleDocumentUpload = async () => {
  try {
    const file = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'],
    });

    console.log('App.js --> file: ', file);

    if (!file.canceled && file.assets && file.assets.length > 0) {
      const fileUri = file.assets[0].uri;  // Correct file URI
      const fileName = file.assets[0].file.name;  // Correct file name
      const fileType = file.assets[0].file.type;  // Correct file type

      console.log(`File URI: ${fileUri}`);
      console.log(`File Name: ${fileName}`);
      console.log(`File Type: ${fileType}`);

      const formData = new FormData();
      formData.append('file', {
        uri: fileUri,
        name: fileName,
        type: fileType
      });

      // Send the file to the backend for processing
      const response = await axios.post(`${baseURL}/api/upload-resume`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

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

        {matchScore !== null && (
          <Text style={{ fontSize: 18, marginTop: 20 }}>Match Score: {matchScore}</Text>
        )}
      </View>
    </ScrollView>
  );
}
