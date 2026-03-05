//  On React version older than 19 you would need to import forwardRef from react
//  Than wrap the function in a forwardRef function and use special "ref" prop to get adjusted version =>
//    const ResultModal = export default forwardRef(function ResultModal({ result, targetTime}, ref){...})
//    export default ResultModal

export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
