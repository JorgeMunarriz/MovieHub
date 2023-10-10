import ButtonGoUpStyles from "./buttonGoUp.styles";
import { useEffect } from "react";



export const ButtonGoUp = () => {
  const handleGoUpClick = () => {
    console.log("Botón 'Go Up' clicado");
    const mainContainer = document.getElementById("mainContainer");
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const goUpButton = document.getElementById("goUpButton") as HTMLButtonElement;
    const mainContainer = document.getElementById("mainContainer");

    if (!goUpButton || !mainContainer) {
      return;
    }

    const height = 200;

    const handleScroll = () => {
      console.log("Scroll detectado");
      if (mainContainer.scrollTop > height) {
        goUpButton.style.display = "block";
      } else {
        goUpButton.style.display = "none";
      }
    };

    mainContainer.addEventListener("scroll", handleScroll);

   

    return () => {
      mainContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ButtonGoUpStyles id="goUpButton" onClick={handleGoUpClick}>Go up</ButtonGoUpStyles>
  );
};
