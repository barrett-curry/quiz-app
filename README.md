# GeoQuiz

A React Native quiz app built with Expo and Expo Router for the UT Summer School mobile development course.

## About

GeoQuiz presents True/False geography questions with navigation between questions, alerts for correct and incorrect answers, and a cheat screen that reveals the answer via route params.

## Features

- 10 True/False geography questions
- Alerts on answer selection (correct advances, incorrect stays)
- Prev/Next buttons with icons that cycle through questions
- Cheat screen with a "Show Answer" button using Expo Router params
- Stack navigation with back button support

## Tech Stack

- React Native
- Expo SDK 55
- Expo Router (file-based routing)
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run on iOS Simulator:

```bash
npx expo run:ios
```

Run on Android Emulator:

```bash
npx expo run:android
```

## Project Structure

```
src/app/
  _layout.tsx   - Stack navigator with purple header
  index.tsx     - Main quiz screen (questions, buttons, navigation)
  cheat.tsx     - Cheat screen (show answer via route params)
```
