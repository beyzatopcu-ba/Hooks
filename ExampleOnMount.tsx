import { useEffect, useState } from "react";
import { TextInput, View, Keyboard, Dimensions } from "react-native";

const SurnameInput = () => {

    const [surname, setSurname] = useState('');

    // Boş dependency array: Sadece comp mount olduğunda çalışır.
    useEffect(() => {
        const didShow = Keyboard.addListener('keyboardDidShow', () => {
            console.log('keyboard göründü');
        });

        const didHide = Keyboard.addListener('keyboardDidHide', () => {
            console.log('keyboard kapandı');
        });

        Dimensions.addEventListener('change', () => {
            console.log('dimensions changed');
        });


        // Boş dependency array return function:
        // Unmount'ta çalışır.
        // Mesela temizlik işleri için kullanılabilir.
        return () => {
            didShow.remove();
            didHide.remove();
        }

    }, []);

    return (
        <TextInput
            value={surname}
            onChangeText={setSurname}
            placeholder="Soyisim"
        />
    );
};

const ExampleOnMount = () => {

    const [name, setName] = useState('');



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="İsim"
            />
            {
                name.length > 3 ?
                    <SurnameInput />
                    :
                    null
            }
        </View>
    );
}

export default ExampleOnMount;