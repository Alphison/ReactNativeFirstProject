import React from 'react'
import { Formik } from 'formik'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const Form = ({hanldeSetModal}) => {
  return (
    <View>
        <Formik initialValues={{name: '', description: '', img: require('../assets/foto2.png')}} onSubmit={(values, action) => {
            hanldeSetModal(values)
            action.resetForm
        }}>
            {(props) => (
                <View style={styles.form}>
                    <TextInput style={styles.input} value={props.values.name} placeholder='Введите название' onChangeText={props.handleChange('name')}/>
                    <TextInput style={styles.input} value={props.values.description} placeholder='Введите описание' multiline onChangeText={props.handleChange('description')}/>
                    <Button style={styles.button}  background='green' title='Добавить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>   
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        padding: 20
    },
    input: {
        backgroundColor: '#8888',
        color: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
    }
  });

export default Form