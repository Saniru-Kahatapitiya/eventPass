import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserPortal = ({ navigation }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const userData = await AsyncStorage.getItem('user');
            if (userData) setUser(JSON.parse(userData));
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        navigation.replace('Landing');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.greeting}>Hello,</Text>
                <Text style={styles.name}>{user?.name || 'User'}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Your Experience Starts Here</Text>
                    <Text style={styles.cardSubtitle}>Explore the latest events and book your tickets with EventPass.</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000', padding: 25 },
    header: { marginTop: 40, marginBottom: 40 },
    greeting: { fontSize: 20, color: '#A0A0A0' },
    name: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF' },
    content: { flex: 1 },
    card: { 
        backgroundColor: '#1A1A1A', 
        padding: 25, 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#333' 
    },
    cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFD301', marginBottom: 10 },
    cardSubtitle: { fontSize: 16, color: '#FFFFFF', lineHeight: 24 },
    footer: { marginBottom: 20 },
    logoutButton: { 
        backgroundColor: '#333', 
        height: 55, 
        borderRadius: 15, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    logoutText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});

export default UserPortal;
