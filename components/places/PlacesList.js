import { useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../../constants/colors'
import PlaceItem from './PlaceItem'
import { deletePlace } from '../../util/database'

function PlacesList({ places, setPlaces }) {
  const navigation = useNavigation()

  function selectPlaceHandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    })
  }

  async function handleDelete(id) {
    setPlaces((prevPlaces) => prevPlaces.filter((item) => item.id !== id))
    const item = await deletePlace(id)
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem
          place={item}
          onPress={handleDelete}
          onSelect={selectPlaceHandler}
        />
      )}
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
})
