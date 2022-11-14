import React, { useEffect, useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import CourseCard from '../../components/CourseCard';
import { getCourses } from '../../services/courses';
import { ICourses } from '../../types/course';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    listCourses();
  }, [])

  const listCourses = async () => {
    const { data } = await getCourses()
    setCourses(data)
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {courses.map((course: ICourses) => (
          <CourseCard key={course.id} name={course.name} description={course.description}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 0,
    marginHorizontal: 20,
    paddingVertical: 20,
    },
    button: {
      backgroundColor: '#415DED',
      padding: 10,
      borderRadius: 8,
      marginVertical: 10,
      elevation: 1,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    }
});

export default Courses;