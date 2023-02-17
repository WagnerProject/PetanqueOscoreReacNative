import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

export default ({ children }) => (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
