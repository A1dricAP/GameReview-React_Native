import React from 'react';
import { StyleSheet, Button, TextInput, View, ActionSheetIOS } from 'react-native';
import { Formik } from 'formik';

export default function ReviewForm({addReview}) {

  return (
    
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
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
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput 
              style={styles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric' //to open a numeric keyboard.
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
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
    }
})