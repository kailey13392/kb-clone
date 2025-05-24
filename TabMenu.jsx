export default function TabMenu() {
  const tabs = ["전체계좌조회", "계좌이체", "빠른조회"];
  return (
    <div className="flex justify-center space-x-4 bg-white p-4">
      {tabs.map((tab, index) => (
        <div key={index} className="bg-yellow-400 text-white px-4 py-2 rounded-md text-sm font-semibold">
          {tab}
        </div>
      ))}
    </div>
  );
}
