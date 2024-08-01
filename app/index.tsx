import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

export default function Home() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');

  const handleChangeInput = (text: string) => {
    setInput(text);
    setOutput(text);
  };

  const jsxOutput = output && (
    <View className="gap-5 bg-gray-200 p-5">
      <Text className="min-h-24 text-xl">{output}</Text>
      <View className="flex-row items-center justify-between">
        <FontAwesome6 name="volume-high" size={18} color="dimgray" />
        <FontAwesome6 name="copy" size={18} color="dimgray" />
        <Text className="color-gray-500">{output.length} / 5,000</Text>
      </View>
    </View>
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Translate' }} />
      <ScrollView className="mx-auto w-full max-w-xl flex-1">
        <View className="flex flex-row justify-around p-5">
          <Text className="font-semibold color-blue-600">English</Text>
          <FontAwesome5 name="exchange-alt" size={16} color="gray" />
          <Text className="font-semibold color-blue-600">Spanish</Text>
        </View>
        <View className="gap-5 border-y border-gray-300 p-5">
          <View className="flex-row">
            <TextInput
              placeholder="Enter text"
              value={input}
              onChangeText={handleChangeInput}
              className="min-h-24 flex-1 text-xl"
              multiline
              maxLength={5000}
            />
            <FontAwesome6 name="circle-arrow-right" size={24} color="royalblue" />
          </View>
          <View className="flex-row items-center justify-between">
            <FontAwesome6 name="microphone" size={18} color="dimgray" />
            <Text className="color-gray-500">{input.length} / 5,000</Text>
          </View>
        </View>
        {jsxOutput}
      </ScrollView>
    </>
  );
}
