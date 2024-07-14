import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
       
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { product: item })}>
            <View style={styles.item}>
                <Image 
                    source={{ uri: item.image }} 
                    style={styles.avatar} 
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>{`$${item.price}`}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    avatar: {
        width: 65,
        height: 70,
        borderRadius: 40,
    },
    textContainer: {
        marginLeft: 20,
    },
    name: {
        fontSize: 20,
    },
    price: {
        fontSize: 16,
        color: '#000',
    },
    category: {
        fontSize: 16,
        color: 'black',
    },
    description: {
        fontSize: 14,
        color: 'green',
    },
});

export default HomeScreen;
