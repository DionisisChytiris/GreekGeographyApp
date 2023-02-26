import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/quizStyle";

const Cities = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);
  // index of the question
  const [index, setIndex] = useState(0);
  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);
  // answers
  const [answers, setAnswers] = useState([]);
  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  // counter
  const [counter, setCounter] = useState(15);
  // interval
  let interval = null;
  // Progress Bar
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  // useEffect(()=>{
  //   const myInterval = ()=>{
  //     if(counter >= 1){
  //       setCounter((counter)=> counter - 1)
  //     }
  //     if(counter === 0){
  //       setIndex(index + 1)
  //       setCounter(15)
  //     }

  //   }
  //   interval = setTimeout(myInterval, 1000)

  //   // clean up
  //   return ()=>{
  //     clearTimeout(interval)
  //   }
  // },[counter])

  useEffect(() => {
    if (index + 1 > data.length) {
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [currentQuestion]);

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
        <View style={{ height: 1000, backgroundColor: "darkblue" }}>
          <View style={styles.containerInfo}>
            <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
              Quiz Challenge
            </Text>
          </View>

          <View style={styles.progressContainerInfo}>
            <View>
              <Text style={{ color: "white" }}>
                Question {index} out of {totalQuestions}
              </Text>
            </View>
            <Pressable style={styles.counterBox}>
              <Text style={styles.counterNumber}>{counter}</Text>
            </Pressable>
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
                width: `${progressPercentage}%`,
              }}
            />
          </View>

          <View style={{ paddingVertical: 30, paddingHorizontal: 15 }}>
            <View style={styles.quizContainer}>
              {/* {currentQuestion.img.map((i) => ( */}
                <Image
                  source={require('../assets/meteora.jpg')}
                  resizeMode= "cover"
                  style={{
                    borderRadius: 10,
                    marginVertical: 10,
                    width: "100%",
                    height: 200,
                  }}
                />
              

              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {currentQuestion?.question}
              </Text>
              <View style={styles.answersContainer}>
                {currentQuestion?.options.map((item, index) => (
                  <Pressable
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

          {/* <View style={answerStatus === null ? null: styles.feedBackArea}> */}
          <View style={styles.feedBackArea}>
            {answerStatus === null ? null : (
              <Text
                style={
                  answerStatus === null
                    ? null
                    : {
                        fontSize: 17,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                      }
                }
              >
                {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
              </Text>
            )}

            {index + 1 >= questions.length ? (
              <Pressable
                onPress={() =>
                  navigation.navigate("Results", {
                    points: points,
                    answers: answers,
                  })
                }
                style={styles.nextQueButton}
              >
                <Text style={{ color: "white" }}>Done</Text>
              </Pressable>
            ) : answerStatus === null ? null : (
              <Pressable
                onPress={() => setIndex(index + 1)}
                style={styles.nextQueButton}
              >
                <Text style={{ color: "white" }}>Next Question</Text>
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cities;
