export default function NewsSection() {
  return (
    <section className="grid grid-cols-3 gap-4 p-4">
      <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg font-semibold">
        새소식
      </div>
      <div className="bg-gray-300 h-40 flex items-center justify-center rounded-lg font-semibold">
        이벤트
      </div>
      <div className="bg-gray-200 h-40 flex items-center justify-center rounded-lg font-semibold">
        추천상품
      </div>
    </section>
  );
}
