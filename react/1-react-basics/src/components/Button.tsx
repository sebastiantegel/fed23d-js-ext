export const Button = () => {
  const text = "Spara";
  const done = "done";
  const shouldShow = true;

  //   let mySpan = <span>Whohoo!</span>;
  //   if (!shouldShow) {
  //     mySpan = <span></span>;
  //   }

  const colors: string[] = ["Purple", "Red", "Green", "Turquoise"];

  //   const lis: JSX.Element[] = [];
  //   for (let i = 0; i < colors.length; i++) {
  //     lis.push(<li key={colors[i]}>{colors[i]}</li>);
  //   }

  const handleClick = () => {
    // alert("WOHOOOOO!");
  };

  const clickedColor = (color: string) => {
    console.log(color);
  };

  return (
    <>
      <button type="button" className={done} onClick={handleClick}>
        {text}
      </button>
      {/* {shouldShow ? <span>Whohoo!</span> : <span></span>} */}
      {shouldShow && <span>Whohooooooo!</span>}

      <ul>
        {colors.map((color, i) => (
          <li key={i} onClick={() => clickedColor(color)}>
            {color}
          </li>
        ))}
      </ul>
    </>
  );
};
