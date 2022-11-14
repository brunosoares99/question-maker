import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  description: string;
}

const CourseCard: React.FC<Props> = ({ name, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxColor}>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    marginBottom: 10,
  },
  boxColor: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#415DED',
    borderRadius: 999,
  },
  containerDescription: {
    padding: 10,
    maxWidth: '80%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16
  }
});

export default CourseCard;