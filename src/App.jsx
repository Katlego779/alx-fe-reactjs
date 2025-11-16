import React from 'react';
import AddRecipeForm from './src/components/AddRecipeForm';
import RecipeList from './src/components/RecipeList';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
