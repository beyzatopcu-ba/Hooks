import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

type NameSurnameFormatterProps = {
    name: string,
    surname: string,
}

const NameSurnameFormatter = (props: NameSurnameFormatterProps) => {

    const {
        name,
        surname,
    } = props;

    const [formattedFullname, setFormattedFullname] = useState('');

    // Birden fazla dependency varsa,
    // herhangi bir değiştiğinde callback'i çalıştırır.
    // İkisinin de değişmesini beklemez.
    useEffect(() => {
        console.log('name or surname changed', name, surname);
        const formattedName = name.toLowerCase();
        const formattedSurname = surname.toUpperCase();
        setFormattedFullname(formattedName + ' ' + formattedSurname);

        // Dependency array dolu ise,
        // useEffect callback'ini çalıştırmadan hemen önce bu destructor fonksiyonunu çağırır.
        // Ancak ilk çalıştırmadan önce (yani onmountta) girmez.
        return () => {
            console.log('useEffect destructor');
        }
    }, [name, surname]);

    return (
        <Text>{formattedFullname}</Text>
    )
}

const ExampleConceptual = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

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
            <NameSurnameFormatter name={name} surname={surname} />
        </View>
    );
}

export default ExampleConceptual;