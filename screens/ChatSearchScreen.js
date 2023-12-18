import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ChatListItem from '../components/ChatListItem';

const ChatSearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allChats, setAllChats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Поиск",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
    });
  }, [navigation]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const q = query(collection(db, "chats"));
        const querySnapshot = await getDocs(q);

        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setAllChats(results);
      } catch (error) {
        console.error("Error loading chats:", error);
      }
    };

    loadChats();
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      try {
        let results = allChats;

        if (searchTerm.trim() !== '') {
          results = allChats.filter(({ data: { chatName } }) =>
            chatName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        setSearchResults(results);
      } catch (error) {
        console.error("Error searching chats:", error);
      }
    };

    performSearch();
  }, [searchTerm, allChats]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Введите название чата"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => setSearchTerm('')}>
            <Ionicons name='search' size={24} color="black" />
          </TouchableOpacity>
        </View>

        {searchResults.map(({ id, data: { chatName } }) => (
          <ChatListItem key={id} id={id} chatName={chatName} enterChat={(id, chatName) => navigation.navigate("Chat", { id, chatName })} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSearchScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
});
