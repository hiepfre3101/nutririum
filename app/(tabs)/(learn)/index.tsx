import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import ModalSample from "@/components/ModalSample";
type Props = {};

const LearnScreen = (props: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleTriggerModal = (value: boolean) => {
    setModalVisible(value);
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Learn</ThemedText>
      <Link href="/modal">
        <ThemedText type="link">OpenModal</ThemedText>
      </Link>
      <Pressable style={[styles.button, styles.buttonOpen]}>
        Open Modal 2
      </Pressable>
      <ModalSample
        title="Hello modal"
        animationType="fade"
        onHideModal={handleTriggerModal}
        modalVisible={modalVisible}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default LearnScreen;
