import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerInfo: {
    textAlign: "center",
    // marginHorizontal: 20,
    marginTop: "5%",
    marginBottom: "2%",
  },
  counterBox: {
    padding: 10,
    backgroundColor: "magenta",
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
    height: 5,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "3%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    height: 200,
    // width: (Dimensions.get('window').width > 500) ? 200 : 500,
  },
  quizContainer: {
    // flex: 1,
    // justifyContent: "space-between",
    marginTop: 10,
    //   backgroundColor: "#f0f8ff",
    backgroundColor: "lightgray",
    padding: 20,
    borderRadius: 16,
    height: '70%'
  },
  answersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    // marginHorizontal: 'auto',
    // backgroundColor: 'yellow',
    // width: '100%',
    padding: 5,
    height: '30%'
  },
  correctAnswer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    width: "48%",
    height: 100,
    borderRadius: 6,
    margin: "1%",
  },
  wrongAnswer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
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
    height: '100%',
    borderRadius: 6,
    margin: "1%",
  },
  // numberCircle: {
  //   borderColor: "#00ffff",
  //   textAlign: "center",
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   padding: 8,
  // },
  feedBackArea: {
    backgroundColor: "darkblue",
    paddingTop: 20,
    // borderRadius: 7,
    // height: 120,
  },
  nextQueButton: {
    backgroundColor: "green",
    padding: 10,
    marginHorizontal: "auto",
    marginVertical: 30,
    borderRadius: 6,
  },
});

export default styles;
