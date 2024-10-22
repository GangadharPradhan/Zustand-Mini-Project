import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import useHabitStore from "./store/store";
import { useEffect } from "react";

function App() {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* form */}
        <AddHabitForm />
        {/* list */}
        <HabitList />
        {/* stats */}
      </Box>
    </Container>
  );
}

export default App;
