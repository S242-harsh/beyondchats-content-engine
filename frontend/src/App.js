import React from "react";
import ArticleList from "./components/ArticleList";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>BeyondChats Content Engine</h1>
      <ArticleList />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#0f1a3c",
  },
};

export default App;
