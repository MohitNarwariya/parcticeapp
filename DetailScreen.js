import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{product.title}</Text>
            <Text style={styles.price}>{`Price: $${product.price}`}</Text>
            <Text style={styles.category}>{`Category: ${product.category}`}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        marginBottom: 5,
    },
    category: {
        fontSize: 16,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
});

export default DetailScreen;
