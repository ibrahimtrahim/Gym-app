import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';

function Home() {
  const [BodyPart, setBodyPart] = useState('all')
  const [Exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercices setExercises={setExercises} BodyPart={BodyPart} setBodyPart={setBodyPart}  />
      <Exercices setExercises={setExercises} BodyPart={BodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home