import React, { Component } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Picker
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  content: {
    padding: 20,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 0, height: -3 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 30
  },
  text: {
    borderBottomWidth: 1,
    padding: 5
  },
  closeIcon: {
    color: "#fff"
  },
  buttomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20
  },
  block: {
    margin: 10
  }
});

const initialState = {
  text: "",
  description: "",
  priority: 2
};

const priorities = ["Urgente", "Importante", "Normal", "No Importante"];

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };
  }

  addTodo = () => {
    const { onAddTodo, onCloseModal } = this.props;
    const { text, description, priority } = this.state;
    onAddTodo({ text, description, priority });

    this.setState(initialState);
    onCloseModal();
  };

  render() {
    const { visible, onCloseModal } = this.props;
    const { text, priority, description } = this.state;
    return (
      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.block}>
              <Text> Titulo </Text>
              <TextInput
                style={styles.text}
                value={text}
                onChangeText={text => this.setState({ text })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text>Descripcion</Text>
              <TextInput
                style={styles.text}
                value={description}
                onChangeText={description => this.setState({ description })}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text>Prioridad</Text>
              <Picker
                selectedValue={priority}
                onValueChange={priority => this.setState({ priority })}
              >
                {priorities.map((item, idx) => (
                  <Picker.Item label={item} value={idx} />
                ))}
              </Picker>
            </View>
            <View style={styles.buttomRow}>
              <Button title="Cerrar" onPress={onCloseModal} color="#ff0000" />
              <Button title="Añadir" onPress={this.addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
