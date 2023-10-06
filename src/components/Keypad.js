// Code Keypad Component Here

function Keypad() {
  const handleKeyPad = (e) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input type="password" onChange={handleKeyPad} placeholder="Password" />
    </div>
  );
}

export default Keypad;
