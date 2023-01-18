import { Image, Pressable, Button, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../constants/colors'
import IconButton from '../UI/IconButton'

function PlaceItem({ place, onSelect, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.item, pressed && styles.pressed]}
        onPress={onSelect.bind(this, place.id)}
      >
        <Image style={styles.image} source={{ uri: place.imageUri }} />
        <View style={styles.info}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
      </Pressable>
      <IconButton
        icon='trash'
        size={24}
        color='red'
        onPress={onPress.bind(this, place.id)}
      />
    </View>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    flex: 1,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
})
