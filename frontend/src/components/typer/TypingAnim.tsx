import { TypeAnimation } from "react-type-animation";
import "../../index.css"

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat with your AI assistant",
        2000,
        "Built with OpenAI",
        2000,
        " GPT-3.5 Turbo",
        2500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      className="typing-animation"
      repeat={Infinity}
    />
  );
};

export default TypingAnim;