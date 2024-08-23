import React, { useState } from 'react';

import {

StyleSheet,

Text,

View,

TouchableOpacity,

ScrollView,

TextInput,

Alert,

Image,

} from 'react-native';

export default function App() {

const [category, setCategory] = useState('all');

const [highlightColor, setHighlightColor] = useState('#e67e22');

const [animatedSpanColor, setAnimatedSpanColor] =

useState('#e67e22');
  const images = [

{ src:

'https://fotografiamais.com.br/wp-content/uploads/2019/04/fotos-da-natu

reza-amazonica-1.jpg', category: 'nature' },

{ src:

'https://img.freepik.com/fotos-premium/uma-foto-em-preto-e-branco-de-um

a-paisagem-urbana-com-uma-paisagem-urbana-ao-fundo_670382-10223.jpg',

category: 'urban' },

{ src:

'https://blog.depositphotos.com/wp-content/uploads/2022/05/28-Creative-

Portrait-Photography-Ideas-1.jpg.webp', category: 'portraits' },

{ src:

'https://viajantecoobmais.com.br/wp-content/uploads/2023/03/Coob_Nature

za_Pura_03.jpg', category: 'nature' },

{ src:

'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/01/1012342

1/campo-grande-drone-silasismael.com-49-.jpg', category: 'urban' },

{ src:

'https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-relaxando-em

-casa_23-2150307065.jpg', category: 'portraits' },

{ src:

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LgLNVlWkLtlNly

gUnqPcvOY37CJ3ICbavg&s', category: 'nature' },

{ src:

'https://blog.emania.com.br/wp-content/uploads/2016/02/Cityscapes-night

-view-lighting-wallpaper.jpg', category: 'urban' },

{ src:

'https://blog.depositphotos.com/wp-content/uploads/2022/05/Creative-Por

trait-Photography-Ideas-3.jpg.webp', category: 'portraits' },

];

const filteredImages = category === 'all' ? images :

images.filter(img => img.category === category);

const handleContactSubmit = () => {

Alert.alert(

"Sucesso",

"Mensagem enviada com sucesso!",

[

{ text: "OK", onPress: () => console.log("OK Pressed") }

]

);
};

const handlePressIn = (setter, color) => {

setter(color);

};

const handlePressOut = (setter, color) => {

setter(color);

};

return (

<ScrollView style={styles.container}>

<View style={styles.header}>

<Text style={styles.headerText}>Portfólio de Fotografia</Text>

<View style={styles.nav}>

<TouchableOpacity><Text

style={styles.navLink}>Início</Text></TouchableOpacity>

<TouchableOpacity><Text

style={styles.navLink}>Portfólio</Text></TouchableOpacity>

<TouchableOpacity><Text

style={styles.navLink}>Contato</Text></TouchableOpacity>

</View>

</View>

<View style={styles.section}>

<Text style={styles.title}>Bem-vindo ao meu Portfólio de

Fotografia</Text>

<Text style={styles.paragraph}>

<TouchableOpacity

onPressIn={() => handlePressIn(setHighlightColor,

'#3498db')}

onPressOut={() => handlePressOut(setHighlightColor,

'#f1c40f')}

>

<Text style={[styles.highlight, { backgroundColor:

highlightColor }]}>

Explore

</Text>

</TouchableOpacity>

{' '}as minhas melhores obras!

</Text>
<Text style={styles.paragraph}>

Confira mais detalhes sobre{' '}

<TouchableOpacity

onPressIn={() => handlePressIn(setAnimatedSpanColor,

'#3498db')}

onPressOut={() => handlePressOut(setAnimatedSpanColor,

'#e67e22')}

>

<Text style={[styles.animatedSpan, { color:

animatedSpanColor }]}>

cada imagem

</Text>

</TouchableOpacity>

{' '}e entre em contato para{' '}

<TouchableOpacity

onPressIn={() => handlePressIn(setAnimatedSpanColor,

'#3498db')}

onPressOut={() => handlePressOut(setAnimatedSpanColor,

'#e67e22')}

>

<Text style={[styles.animatedSpan, { color:

animatedSpanColor }]}>

colaborações

</Text>

</TouchableOpacity>.

</Text>

</View>

<View style={styles.section}>

<Text style={styles.subtitle}>Portfólio</Text>

<View style={styles.filters}>

<TouchableOpacity style={styles.filterButton} onPress={() =>

setCategory('all')}>

<Text style={styles.filterButtonText}>Todos</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.filterButton} onPress={() =>

setCategory('nature')}>

<Text style={styles.filterButtonText}>Natureza</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.filterButton} onPress={() =>

setCategory('urban')}>

<Text style={styles.filterButtonText}>Urbano</Text>
 </TouchableOpacity>

<TouchableOpacity style={styles.filterButton} onPress={() =>

setCategory('portraits')}>

<Text style={styles.filterButtonText}>Retratos</Text>

</TouchableOpacity>

</View>

<View style={styles.gallery}>

{filteredImages.map((img, index) => (

<Image key={index} source={{ uri: img.src }}

style={styles.image} />

))}

</View>

</View>

<View style={styles.section}>

<Text style={styles.subtitle}>Contato</Text>

<TextInput style={styles.input} placeholder="Nome" />

<TextInput style={styles.input} placeholder="Email"

keyboardType="email-address" />

<TextInput

style={[styles.input, styles.textArea]}

placeholder="Mensagem"

multiline

numberOfLines={4}

/>

<TouchableOpacity style={styles.submitButton}

onPress={handleContactSubmit}>

<Text style={styles.submitButtonText}>Enviar</Text>

</TouchableOpacity>

</View>

{/* Rodapé */}

<View style={styles.footer}>

<Text style={styles.footerText}>© 2024 Portfólio de Fotografia.

Todos os direitos reservados.</Text>

<Text style={styles.footerText}>Desenvolvido por Kauany

Gomes</Text>

<View style={styles.socialLinks}>

<TouchableOpacity><Text

style={styles.footerLink}>Twitter</Text></TouchableOpacity>

<TouchableOpacity><Text

style={styles.footerLink}>Instagram</Text></TouchableOpacity>

  </View

>

</View

>

</ScrollView

>

);

}

const styles

= StyleSheet.create({

container:

{

flex:

1

,

backgroundColor: '#f4f4f4'

,

},

header:

{

backgroundColor: '#2c3e50'

,

padding: 20

,

alignItems: 'center'

,

},

headerText:

{

color: '#ecf0f1'

,

fontSize: 24

,

fontWeight: 'bold'

,

},

nav:

{

flexDirection: 'row'

,

marginTop: 10

,

},

navLink:

{

color: '#ecf0f1'

,

fontSize: 16

,

marginHorizontal: 10

,

},

section:

{

padding: 20

,

},

title:

{

fontSize: 28

,

color: '#2c3e50'

,

marginBottom: 10

,

textAlign: 'center'

,

},

paragraph:

{

fontSize: 16

,

color: '#333'

,

marginBottom: 10

,

textAlign: 'center'

,

},

highlight:

{

backgroundColor: '#f1c40f'

,

color: '#2c3e50'

,

fontWeight: 'bold'

,

paddingHorizontal:

4

,

},

animatedSpan:

{

color: '#e67e22'

,

textDecorationLine: 'underline'

,

},

subtitle:

{

fontSize: 24

,

color: '#2c3e50'

,

marginBottom: 20

,

textAlign: 'center'

,

},

filters:

{

flexDirection: 'row'

,

justifyContent: 'center'

,

marginBottom: 20

,

},

filterButton:

{

backgroundColor: '#3498db'

,

padding: 10

,

marginHorizontal:

5

,

borderRadius:

5

,

},

filterButtonText:

{

color: '#fff'

,

fontSize: 14

,

},

gallery:

{

flexDirection: 'row'

,

flexWrap: 'wrap'

,

justifyContent: 'center'

,

},

image:

{

width: 100

,

height: 100

,

margin:

5

,

borderRadius:

8

,

  },

input:

{

backgroundColor: '#fff'

,

padding: 10

,

marginBottom: 10

,

borderRadius:

5

,

borderWidth:

1

,

borderColor: '#ccc'

,

},

textArea:

{

height: 100

,

},

submitButton:

{

backgroundColor: '#2c3e50'

,

padding: 15

,

borderRadius:

5

,

alignItems: 'center'

,

},

submitButtonText:

{

color: '#fff'

,

fontSize: 16

,

},

footer:

{

backgroundColor: '#2c3e50'

,

padding: 20

,

alignItems: 'center'

,

},

footerText:

{

color: '#ecf0f1'

,

fontSize: 14

,

marginBottom:

5

,

},

socialLinks:

{

flexDirection: 'row'

,

marginTop: 10

,

},

footerLink:

{

color: '#3498db'

,

fontSize: 14

,

marginHorizontal: 10

,

},

});
