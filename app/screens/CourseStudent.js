import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1540173196447-4a4acda7007e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3732&q=80',
    name: 'Video 101',
    description:
      'Master the art of video production with our comprehensive Video 101 course. From camera basics to editing techniques, this course covers everything you need to know to create professional-quality videos.',
    duration: 22,
    price: 100,
    teacher: {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
      name: 'Gina L',
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Basic Video Editing',
    description:
      'Jumpstart your video editing journey with our Basic Video Editing course. Learn essential techniques, tools, and workflows to transform raw footage into polished masterpieces.',
    duration: 12,
    price: 120,
    teacher: {
      img: 'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Jake P',
    },
  },
  {
    img: 'https://images.unsplash.com/photo-1523251239923-9969d2b4f95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Basic Shooting',
    description:
      ' From mastering camera settings to framing your shots creatively, this course equips you with essential skills for producing captivating images.',
    duration: 37,
    price: 120,
    teacher: {
      img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'Amy S',
    },
  },
];

export default function Example() {
  return (
    <SafeAreaView style={{ backgroundColor: 'lightseagreen' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Courses MMU</Text>

        {items.map(
          ({ img, name, description, duration, price, teacher }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <Image
                      alt=""
                      resizeMode="cover"
                      source={{ uri: img }}
                      style={styles.cardImg} />

                    <View style={styles.cardTopPills}>
                      <View style={[styles.cardTopPill, { paddingLeft: 6 }]}>
                        <Image
                          alt=""
                          source={{ uri: teacher.img }}
                          style={styles.cardTopPillImg} />

                        <Text style={styles.cardTopPillText}>
                          {teacher.name}
                        </Text>
                      </View>

                     {/* <View style={styles.cardTopPill}>
                        <Text style={styles.cardTopPillText}>
                          ${price.toLocaleString('en-US')}
                        </Text>*/}
                      </View> 
                    </View>

                 <View style={styles.cardBody}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>{name}</Text>

                     {/*  <Text style={styles.cardDuration}>
                        {duration} minutes
                      </Text> */}
                    </View>

                    <Text style={styles.cardDescription}>{description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
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
    backgroundColor: '#fff', //white
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
    paddingVertical: 16,
    paddingHorizontal: 12,
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
  cardDuration: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6a6bff',
  },
  cardDescription: {
    fontSize: 15,
    letterSpacing: 0.25,
    lineHeight: 22,
    fontWeight: '500',
    color: '#545454',
  },
});