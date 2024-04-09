export default function KeywordsList({ activeCallType }) {
  return activeCallType.keywords.map((element) => {
    return (
      <span key={element.keyword}>
        {element.keyword}
        <button onClick={() => "deleteKeyword"}>x</button>
      </span>
    );
  });
}
