import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminPortal = ({ navigation }) => {
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
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>ADMIN PANEL</Text>
                    </View>
                    <Text style={styles.name}>Welcome, {user?.name.split(' ')[0] || 'Admin'}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Events</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>154</Text>
                        <Text style={styles.statLabel}>Tickets</Text>
                    </View>
                </View>

                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Create New Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Manage Reservations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>User Management</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>System Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },
    scrollContent: { padding: 25 },
    header: { marginTop: 20, marginBottom: 40 },
    badge: { 
        backgroundColor: '#FFD301', 
        alignSelf: 'flex-start', 
        paddingHorizontal: 10, 
        paddingVertical: 4, 
        borderRadius: 5,
        marginBottom: 10
    },
    badgeText: { color: '#000', fontSize: 12, fontWeight: 'bold' },
    name: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF' },
    statsContainer: { flexDirection: 'row', gap: 15, marginBottom: 30 },
    statBox: { 
        flex: 1, 
        backgroundColor: '#1A1A1A', 
        padding: 20, 
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: '#333',
        alignItems: 'center'
    },
    statValue: { fontSize: 24, fontWeight: 'bold', color: '#FFD301', marginBottom: 5 },
    statLabel: { fontSize: 14, color: '#A0A0A0' },
    actionContainer: { gap: 15, marginBottom: 40 },
    actionButton: { 
        backgroundColor: '#1A1A1A', 
        height: 65, 
        borderRadius: 15, 
        justifyContent: 'center', 
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#333'
    },
    actionButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
    logoutButton: { 
        backgroundColor: '#333', 
        height: 60, 
        borderRadius: 15, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    logoutText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});

export default AdminPortal;
