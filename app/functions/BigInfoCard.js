import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const BigInfoCard = ({ items, onPress }) => {
  return (
      <View style={styles.container}>

        {items.map(
          ({ img, name, description, inside }, index) => {
            const imgSource = typeof img === 'string' ? { uri: img } : img;
            const insideImgSource = typeof inside.img === 'string' ? { uri: inside.img } : inside.img;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => onPress({ img, name, description, inside })}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      source={imgSource}
                      style={styles.cardImg} />

                    <View style={styles.cardTopPills}>
                      <View style={[styles.cardTopPill, { paddingLeft: 6 }]}>
                        <Image
                          alt=""
                          source={insideImgSource}
                          style={styles.cardTopPillImg} />

                        <Text style={styles.cardTopPillText}>
                          {inside.name}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardBody}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>{name}</Text>
                    </View>

                    <Text style={styles.cardDescription}>{description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    padding: 12,
    borderRadius: 24,
    marginBottom: 24,
    backgroundColor: '#87ceeb', //white
  },
  cardTop: {
    position: 'relative',
    borderRadius: 24,
  },
  cardImg: {
    width: '100%',
    height: 180,
    borderRadius: 24,
  },
  cardTopPills: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  cardTopPill: {
    height: 36,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTopPillImg: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    marginRight: 8,
  },
  cardTopPillText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  cardBody: {
    height: 100,
    paddingVertical: 16,
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },
  cardDescription: {
    fontSize: 15,
    letterSpacing: 0.25,
    lineHeight: 22,
    fontWeight: '500',
    color: '#545454',
  },
});

export default BigInfoCard;
