import styles from "./TypeWriter.module.css"
import { useState, useEffect } from "react";

interface TypeWriterProps {
  texts: { text: string, color: string }[];
}

function TypeWriter({ texts }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [indexText, setIndexText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        // Schreiben
        setDisplayed(texts[indexText].text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === texts[indexText].text.length) {
          setDeleting(true); // Umschalten auf Löschen
        }
      } else {
        // Löschen
        setDisplayed(texts[indexText].text.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) {
          setDeleting(false); // Wieder von vorne schreiben
          if(indexText + 1 === texts.length) {
            setIndexText(0);
          } else {
            setIndexText((prev) => prev + 1);
          }
        }
      }
    }, 200); // Geschwindigkeit

    return () => clearInterval(interval);
  }, [index, deleting]);

  return (<><div style={{ display: "flex", alignItems: "center", color: texts[indexText].color}}><h1>{displayed}</h1><h1 className={`${styles["typed-cursor"]} ${styles["typed-cursor--blink"]}`}>|</h1></div></>);
}

export default TypeWriter;