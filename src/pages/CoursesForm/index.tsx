import React, { useEffect, useState } from 'react';
import { 
  View, 
  Button, 
  Text 
} from 'react-native';
import ControlledInput from '../../components/ControlledInput';
import CourseCard from '../../components/CourseCard';
import { getCourses } from '../../services/courses';
import { ICourses } from '../../types/course';
import { useForm } from 'react-hook-form';

const CoursesForm: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const handleCoursesForm = (data) => {
    console.log(data)
  }

  return (
    <View>
      <Text>
        CoursesForm
      </Text>
      <ControlledInput control={control} name='name' />
      <Button title='Criar' onPress={handleSubmit(handleCoursesForm)} />
    </View>
  );
};

export default CoursesForm;