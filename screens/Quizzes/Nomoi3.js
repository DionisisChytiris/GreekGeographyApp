import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import questions3 from "../../data/questions3";
  import { useNavigation } from "@react-navigation/native";
  import styles from "../styles/testStyle";
  import { Entypo } from "@expo/vector-icons";
  
  const Nomoi3 = () => {
    const navigation = useNavigation();
    const data = questions3;
    const totalQuestions = data.length;
    const [points, setPoints] = useState(0);
    const [index, setIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [counter, setCounter] = useState(5);
    const [style, setStyle] = useState(styles.quizContainer);
    const [nextQueButton, setNextQueButton] = useState(styles.nextQueButton);
    let interval = null;
    let index1 = index + 1;
    // const progressPercentage = Math.floor((index / totalQuestions) * 100);
  
    useEffect(() => {
      if (selectedAnswerIndex !== null) {
        if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
          setPoints((points) => points + 1);
          setAnswerStatus(true);
          setStyle(styles.quizContainer1);
          setNextQueButton(styles.nextQueButton1);
          answers.push({ question: index + 1, answer: true });
        } else {
          setStyle(styles.quizContainer2);
          setNextQueButton(styles.nextQueButton2);
          answers.push({ question: index + 1, answer: false });
          setAnswerStatus(false);
        }
      }
    }, [selectedAnswerIndex]);
  
    useEffect(() => {
      setSelectedAnswerIndex(null);
      setStyle(styles.quizContainer);
      setNextQueButton(styles.nextQueButton);
      setAnswerStatus(null);
    }, [index]);
  
    // useEffect(() => {
    //   const myInterval = () => {
    //     if (counter >= 1) {
    //       setCounter((counter) => counter - 1);
    //     }
    //     if (counter === 0) {
    //       navigation.navigate("LoseScreen");
    //     }
    //   };
    //   interval = setTimeout(myInterval, 1000);
  
    // clean up
    //   return () => {
    //     clearTimeout(interval);
    //   };
    // }, [counter]);
  
    // if(counter === 0){
    //   setIndex(index + 1)
    //   setCounter(15)
    // }
  
    // useEffect(() => {
    //   if (index + 1 > data.length) {
    //     navigation.navigate("Results");
    //   }
    // }, [currentQuestion]);
  
    useEffect(() => {
      if (!interval) {
        setCounter(15);
      }
    }, [index]);
  
    const currentQuestion = data[index];
    // console.log(answerStatus);
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ height: "115vh", backgroundColor: "darkblue" }}>
            <View style={styles.containerInfo}>
              <View style={styles.levelBox}>
                <View style={{flexDirection: 'row'}}>
                  <Entypo name="star" size={16} color="gold" />
                  <Entypo name="star" size={16} color="gold" />
                  <Entypo name="star" size={16} color="gold" />
                </View>
                <Text style={{ color: "white" }}>Επίπεδο 3</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
                Νομοί / Πόλεις
              </Text>
            </View>
  
            <View style={styles.progressContainerInfo}>
              <View>
                <Text style={{ color: "white" }}>
                  {index + 1} / {totalQuestions}
                  {/* Questions 1 out of 10 */}
                </Text>
              </View>
              <View style={styles.counterBox}>
                <Text style={styles.counterNumber}>{counter}</Text>
              </View>
            </View>
  
            {/* Progress Bar */}
            <View style={styles.progressBarBack}>
              <Text
                style={{
                  // backgroundColor: "#ffc0cb",
                  backgroundColor: "green",
                  borderRadius: 12,
                  position: "absolute",
                  left: 0,
                  height: 10,
                  right: 0,
                  width: `${Math.floor((index1 / totalQuestions) * 100)}%`,
                }}
              />
            </View>
  
            <View style={{ paddingVertical: 30, paddingHorizontal: 15 }}>
              <View style={style}>
                <Image
                  source={currentQuestion?.img}
                  resizeMode="cover"
                  style={styles.image}
                />
  
                <Text style={styles.question}>{currentQuestion?.question}</Text>
                <View style={styles.answersContainer}>
                  {currentQuestion?.options.map((item, index) => (
                    <Pressable
                      key={index}
                      onPress={() =>
                        selectedAnswerIndex === null &&
                        setSelectedAnswerIndex(index)
                      }
                      style={
                        selectedAnswerIndex === index &&
                        index === currentQuestion.correctAnswerIndex
                          ? styles.correctAnswer
                          : selectedAnswerIndex !== null &&
                            selectedAnswerIndex === index
                          ? styles.wrongAnswer
                          : styles.borderAnswer
                      }
                    >
                      <Text
                        style={{
                          marginHorizontal: "auto",
                          fontWeight: 600,
                          color: "white",
                        }}
                      >
                        {item.answer}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            </View>
  
            <View style={styles.feedBackArea}>
              {index + 1 >= data.length ? (
                answerStatus === null ? null : (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("NomoiResult3", {
                        points: points,
                        data: data,
                      })
                    }
                    style={nextQueButton}
                  >
                    <Text style={{ color: "white" }}>Αποτελέσματα</Text>
                  </Pressable>
                )
              ) : answerStatus === null ? null : (
                <Pressable
                  onPress={() => setIndex(index + 1)}
                  style={nextQueButton}
                >
                  <Text style={{ color: "white" }}>Επόμενη Ερώτηση</Text>
                </Pressable>
              )}
  
              {answerStatus === null ? null : (
                <View
                  style={answerStatus === null ? null : { alignItems: "center" }}
                >
                  {!!answerStatus ? (
                    <View
                      style={{
                        margin: 40,
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                          marginTop: 30,
                          width: 250,
                          height: 180,
                        }}
                      >
                        <Text
                          style={{ color: "green", fontSize: 20, padding: 10 }}
                        >
                          Σωστή Απάντηση
                        </Text>
                        <Image
                          source={require("../../assets/thumbUp.jpg")}
                          resizeMode="cover"
                          style={{
                            marginVertical: 20,
                            width: 50,
                            height: 50,
                          }}
                        />
                        <Text>Συνέχισε έτσι</Text>
                      </View>
                      <Image
                        source={currentQuestion?.imgMap}
                        resizeMode="cover"
                        style={{
                          borderRadius: 10,
                          marginBottom: 10,
                          marginHorizontal: 3,
                          width: 300,
                          height: 250,
                        }}
                      />
                      <Text>Helo adfkjl </Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        margin: 40,
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                          marginTop: 30,
                          width: 250,
                          height: 200,
                        }}
                      >
                        <Text style={{ color: "red", fontSize: 20, padding: 10 }}>
                          Λάθος Απάντηση
                        </Text>
                        <Image
                          source={require("../../assets/sadFace.jpg")}
                          resizeMode="cover"
                          style={{
                            marginVertical: 20,
                            width: 50,
                            height: 50,
                          }}
                        />
                        <Text>Προσπάθησε περισσότερο</Text>
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Nomoi3;
  