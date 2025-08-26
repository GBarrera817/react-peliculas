import Parent from "./Parent";

export default function GranParent() {

  const text = 'Mi texto';

  return (
    <>
      <h3>Este es el componente abuelo</h3>
      <Parent/>
    </>
  );
}