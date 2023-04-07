import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

const ExampleConceptual = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    // Boş dependency array: Sadece comp mount olduğunda çalışır.
    useEffect(() => {
        console.log('component mounted');
    }, []);

    // Dependency array'de name var:
    // Bu effect 1 kere onMount'ta çalışır.
    // Ve sonra name her değiştiğinde çalışır.
    useEffect(() => {
        console.log('name changed', name);
    }, [name]);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="İsim"
            />
            <TextInput
                value={surname}
                onChangeText={setSurname}
                placeholder="Soyisim"
            />
        </View>
    );
}

export default ExampleConceptual;