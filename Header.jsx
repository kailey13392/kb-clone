export default function Header() {
  return (
    <header className="w-full h-16 bg-yellow-500 flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold">KB국민은행</h1>
      <nav className="space-x-4 text-sm">
        <span>개인</span>
        <span>기업</span>
        <span>금융상품</span>
        <span>자산관리</span>
        <span>전체서비스</span>
        <span>검색 🔍</span>
      </nav>
    </header>
  );
}
