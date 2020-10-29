import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button'

//creating a schema for the validation of the form. Just like mongoose Schema.
const ReviewSchema=yup.object({
  title:yup.string().required().min(4), //using predefined methods from the yup package.
  body:yup.string().required().min(8),
  rating:yup.string().required().test('is_num_1-5', 'Rating must be between 1-5', (value)=>{ //this test() takes in a function.
    return parseInt(value)<6 && parseInt(value)>0
  })  
  //like so- test('name_of_the_test', 'feedback message', 'function()')
}) //sending this function as a validationSchema to formik.

export default function ReviewForm({addReview}) {

  return (
    
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm()
          addReview(values)
          // console.log(values);
        }}
      >
        {/* this works like binding. Formik needs this "props"- jsx defined, 
        that carries different functions w it, like-handleChange(), handleSubmit() to send input to the formik component
        declared above; which will in turn use the data where this entire component is defined.. */}
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errors}>{props.touched.title && props.errors.title}</Text> 
            {/* yup will add the error to the formik prop, which consists of an errors prop.*/}

            <TextInput
              style={styles.input}
              multiline minHeight={100}
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={styles.errors}>{props.touched.body && props.errors.body}</Text> 

            <TextInput 
              style={styles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              onBlur={props.handleBlur('rating')}
              keyboardType='numeric' //to open a numeric keyboard.
            />
            <Text style={styles.errors}>{props.touched.rating && props.errors.rating}</Text> 
            
            <FlatButton text='Submit' onPress={props.handleSubmit}/> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}

const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:"#ddd",
        padding:10,
        fontSize:18,
        borderRadius:6
    },
    errors:{
      color:'crimson',
      fontWeight:'bold',
      marginTop:6,
      marginBottom:10,
      textAlign:'center'
    }
})