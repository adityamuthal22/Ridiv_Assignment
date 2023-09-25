import React, { useEffect, useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Content.module.css";

function Content() {
  const { theme } = useTheme();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={`${styles.content} ${theme}`}>
      <h1 className={styles.heading1}>This is the content</h1>
      <div className={styles.photo_list}>
        <div className={styles.grid_container}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.grid_item}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p className={styles.title}>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
