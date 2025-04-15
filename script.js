function loadWorkoutHistory() {
  const history = JSON.parse(localStorage.getItem('workoutLogs')) || [];
  const container = document.getElementById('workoutHistory');
  container.innerHTML = '';

  if (history.length === 0) {
    container.innerHTML = '<p>No past workouts logged yet.</p>';
    return;
  }

  history.forEach((log, index) => {
    const logItem = document.createElement('div');
    logItem.innerHTML = `<strong>Workout ${index + 1}:</strong><br>${log}`;
    logItem.style.marginBottom = '15px';
    container.appendChild(logItem);
  });
}

// Call this on page load
loadWorkoutHistory();

function saveWorkout(log) {
  const history = JSON.parse(localStorage.getItem('workoutLogs')) || [];
  history.push(log);
  localStorage.setItem('workoutLogs', JSON.stringify(history));
}

