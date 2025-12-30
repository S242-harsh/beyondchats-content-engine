import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div style={styles.card}>
      {/* Badge */}
      <div style={{ marginBottom: "8px" }}>
        {article.references && article.references.length > 0 ? (
          <span style={styles.badgeEnhanced}>AI Enhanced</span>
        ) : (
          <span style={styles.badgeOriginal}>Original</span>
        )}
      </div>

      {/* Title */}
      <h2 style={styles.title}>{article.title}</h2>

      {/* Content */}
      <p style={styles.content}>{article.content}</p>

      {/* Original Article Link */}
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        style={styles.button}
      >
        View Original Article
      </a>

      {/* References */}
      {article.references && article.references.length > 0 && (
        <div style={styles.references}>
          <h4>References</h4>
          <ul>
            {article.references.map((ref, index) => (
              <li key={index}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    padding: "24px",
    marginBottom: "24px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
  },
  badgeEnhanced: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "5px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  badgeOriginal: {
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "5px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  title: {
    marginBottom: "12px",
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#0f1a3c",
  },
  content: {
    marginBottom: "16px",
    color: "#333",
    lineHeight: "1.6",
    maxHeight: "220px",
    overflowY: "auto",
    paddingRight: "6px",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#1a73e8",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "500",
    marginBottom: "12px",
  },
  references: {
    marginTop: "16px",
    fontSize: "0.9rem",
    color: "#444",
  },
};

export default ArticleCard;
