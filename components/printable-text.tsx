import Typewriter from "typewriter-effect";

export function PrintableText(props: { children: string }) {
  const { children: text } = props;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
    />
  );
}
