import { useState } from "react";

const useFontStyles = () => {
  const [typeStyle, setTypeStyle] = useState({});
  const [fontStyle, setFontStyle] = useState({});

  const handleTypeStyle = (textType) => {
    switch (textType) {
      case "h1":
        setTypeStyle({
          fontSize: 48,
          lineHeight: 52.8,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "h2":
        setTypeStyle({
          fontSize: 40,
          lineHeight: 44,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "h3":
        setTypeStyle({
          fontSize: 32,
          lineHeight: 35.2,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "h4":
        setTypeStyle({
          fontSize: 24,
          lineHeight: 28.8,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "h5":
        setTypeStyle({
          fontSize: 20,
          lineHeight: 24,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "h6":
        setTypeStyle({
          fontSize: 18,
          lineHeight: 21.6,
          fontFamily: "Urbanist_700Bold",
        });
        break;

      case "body_xl":
        setTypeStyle({
          fontSize: 18,
          lineHeight: 25.2,
          fontFamily: "Urbanist_400Regular",
        });
        break;

      case "body_l":
        setTypeStyle({
          fontSize: 16,
          lineHeight: 22.4,
          fontFamily: "Urbanist_400Regular",
        });
        break;

      case "body_m":
        setTypeStyle({
          fontSize: 14,
          lineHeight: 19.6,
          fontFamily: "Urbanist_400Regular",
        });
        break;

      case "body_s":
        setTypeStyle({
          fontSize: 12,
          lineHeight: 14.4,
          fontFamily: "Urbanist_400Regular",
        });
        break;

      case "body_xs":
        setTypeStyle({
          fontSize: 10,
          lineHeight: 12,
          fontFamily: "Urbanist_400Regular",
        });
        break;

      default:
        setTypeStyle({});
        break;
    }
  };

  const handleFontStyle = (textFont) => {
    switch (textFont) {
      case "thin":
        setFontStyle({
          fontFamily: "Urbanist_100Thin",
        });
        break;
      case "extralight":
        setFontStyle({
          fontFamily: "Urbanist_200ExtraLight",
        });
        break;
      case "light":
        setFontStyle({
          fontFamily: "Urbanist_300Light",
        });
        break;
      case "regular":
        setFontStyle({
          fontFamily: "Urbanist_400Regular",
        });
        break;
      case "medium":
        setFontStyle({
          fontFamily: "Urbanist_500Medium",
        });
        break;
      case "semibold":
        setFontStyle({
          fontFamily: "Urbanist_600SemiBold",
        });
        break;
      case "bold":
        setFontStyle({
          fontFamily: "Urbanist_700Bold",
        });
        break;
      case "extrabold":
        setFontStyle({
          fontFamily: "Urbanist_800ExtraBold",
        });
        break;
      case "black":
        setFontStyle({
          fontFamily: "Urbanist_900Black",
        });
        break;
      case "thin_italic":
        setFontStyle({
          fontFamily: "Urbanist_100Thin_Italic",
        });
        break;
      case "extralight_italic":
        setFontStyle({
          fontFamily: "Urbanist_200ExtraLight_Italic",
        });
        break;
      case "light_italic":
        setFontStyle({
          fontFamily: "Urbanist_300Light_Italic",
        });
        break;
      case "regular_italic":
        setFontStyle({
          fontFamily: "Urbanist_400Regular_Italic",
        });
        break;
      case "medium_italic":
        setFontStyle({
          fontFamily: "Urbanist_500Medium_Italic",
        });
        break;
      case "semibold_italic":
        setFontStyle({
          fontFamily: "Urbanist_600SemiBold_Italic",
        });
        break;
      case "bold_italic":
        setFontStyle({
          fontFamily: "Urbanist_700Bold_Italic",
        });
        break;
      case "extrabold_italic":
        setFontStyle({
          fontFamily: "Urbanist_800ExtraBold_Italic",
        });
        break;
      case "black_italic":
        setFontStyle({
          fontFamily: "Urbanist_900Black_Italic",
        });
        break;
      default:
        setFontStyle({});
        break;
    }
  };

  return [typeStyle, fontStyle, handleTypeStyle, handleFontStyle];
};

export default useFontStyles;
