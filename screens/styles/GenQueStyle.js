import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerInfo: {
    textAlign: "center",
    // marginHorizontal: 20,
    marginTop: "8%",
    marginBottom: "2%",
  },
  levelBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  levelBox1: {
    // backgroundColor: 'darkblue',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  counterBox: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 20,
  },
  counterNumber: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  progressContainerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "8%",
  },
  progressBarBack: {
    backgroundColor: "white",
    // backgroundColor: "green",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    height: 8,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "3%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  quizContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "lightgray",
    // paddingHorizontal: 20,
    // paddingVertical: '10%',
    borderRadius: 16,
    shadowColor: "lightblue",
    shadowOffset: { width: 5, height: 8 },
    shadowRadius: 10,
  },
  quizContainer1: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "lightgray",
    // padding: 20,
    borderRadius: 16,
    shadowColor: "green",
    shadowOffset: { width: 5, height: 8 },
    shadowRadius: 10,
  },
  quizContainer2: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: "lightgray",
    // padding: 20,
    borderRadius: 16,
    shadowColor: "#dd0530",
    shadowOffset: { width: 5, height: 8 },
    // shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  //   image: {
  //     borderRadius: 10,
  //     marginVertical: 10,
  //     width: "100%",
  //     height: 200,
  //   },
  question: {
    position: "absolute",
    top: 100,
    left: 0,
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    paddingHorizontal: 40
  },
  answersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 270,
    paddingHorizontal: 15,
    paddingBottom: 15,
    // flex: 1,
    // width: '100%',
    // height: '40%'
  },
  correctAnswer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    width: "48%",
    // height: '40%',
    height: 100,
    borderRadius: 6,
    margin: "1%",
  },
  wrongAnswer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dd0530",
    width: "48%",
    height: 100,
    borderRadius: 6,
    margin: "1%",
  },
  borderAnswer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    width: "48%",
    height: 100,
    borderRadius: 6,
    margin: "1%",
  },
  feedBackArea: {
    // backgroundColor: "darkblue",
    paddingTop: 20,
  },
  nextQueButton: {
    backgroundColor: "magenta",
    padding: 10,
    alignItems: "center",
    width: 140,
    borderRadius: 6,
    marginHorizontal: "auto",
  },
  nextQueButton1: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    width: 140,
    borderRadius: 6,
    marginHorizontal: "auto",
  },
  nextQueButton2: {
    backgroundColor: "#dd0530",
    padding: 10,
    alignItems: "center",
    width: 140,
    borderRadius: 6,
    marginHorizontal: "auto",
  },
});

export default styles;